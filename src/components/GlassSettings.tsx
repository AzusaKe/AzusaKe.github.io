import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export type GlassMode = "standard" | "polar" | "prominent" | "shader";

export interface GlassSettings {
  mode: GlassMode;
  displacementScale: number;
  blurAmount: number;
  saturation: number;
  aberrationIntensity: number;
  elasticity: number;
  cornerRadius: number;
  overLight: boolean;
}

export const defaultGlassSettings: GlassSettings = {
  mode: "standard",
  displacementScale: 100,
  blurAmount: 0.5,
  saturation: 140,
  aberrationIntensity: 2,
  elasticity: 0,
  cornerRadius: 32,
  overLight: false,
};

const storageKey = "azusake-liquid-glass-settings";

interface GlassSettingsContextValue {
  settings: GlassSettings;
  updateSettings: (next: Partial<GlassSettings>) => void;
  resetSettings: () => void;
}

const GlassSettingsContext = createContext<GlassSettingsContextValue | null>(null);

function isGlassMode(value: unknown): value is GlassMode {
  return value === "standard" || value === "polar" || value === "prominent" || value === "shader";
}

function finiteNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function sanitizeSettings(value: Partial<GlassSettings>): GlassSettings {
  return {
    mode: isGlassMode(value.mode) ? value.mode : defaultGlassSettings.mode,
    displacementScale: clamp(finiteNumber(value.displacementScale, defaultGlassSettings.displacementScale), 0, 200),
    blurAmount: clamp(finiteNumber(value.blurAmount, defaultGlassSettings.blurAmount), 0, 1),
    saturation: clamp(finiteNumber(value.saturation, defaultGlassSettings.saturation), 100, 300),
    aberrationIntensity: clamp(finiteNumber(value.aberrationIntensity, defaultGlassSettings.aberrationIntensity), 0, 20),
    elasticity: clamp(finiteNumber(value.elasticity, defaultGlassSettings.elasticity), 0, 1),
    cornerRadius: clamp(finiteNumber(value.cornerRadius, defaultGlassSettings.cornerRadius), 0, 100),
    overLight: typeof value.overLight === "boolean" ? value.overLight : defaultGlassSettings.overLight,
  };
}

function readStoredSettings() {
  if (typeof window === "undefined") {
    return defaultGlassSettings;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored ? sanitizeSettings(JSON.parse(stored) as Partial<GlassSettings>) : defaultGlassSettings;
  } catch {
    return defaultGlassSettings;
  }
}

export function GlassSettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState<GlassSettings>(() => readStoredSettings());

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        setSettings(readStoredSettings());
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(settings));
    } catch {
      // Private browsing modes can deny localStorage; the in-page controls still work.
    }
  }, [settings]);

  const value = useMemo<GlassSettingsContextValue>(
    () => ({
      settings,
      updateSettings: (next) => {
        setSettings((current) => sanitizeSettings({ ...current, ...next }));
      },
      resetSettings: () => setSettings(defaultGlassSettings),
    }),
    [settings],
  );

  return <GlassSettingsContext.Provider value={value}>{children}</GlassSettingsContext.Provider>;
}

export function useGlassSettings() {
  const context = useContext(GlassSettingsContext);

  if (!context) {
    throw new Error("useGlassSettings must be used within GlassSettingsProvider");
  }

  return context;
}
