import { SiteShell, type SitePage } from "./components/SiteShell";
import { GlassSettingsProvider } from "./components/GlassSettings";
import { HomePage } from "./pages/HomePage";
import { LabPage } from "./pages/LabPage";
import { GlassPlaygroundPage } from "./pages/GlassPlaygroundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

interface AppProps {
  page: string;
}

function pageContent(page: SitePage) {
  if (page === "projects") return <ProjectsPage />;
  if (page === "lab") return <LabPage />;
  if (page === "glass") return <GlassPlaygroundPage />;
  return <HomePage />;
}

export function App({ page }: AppProps) {
  const currentPage: SitePage = page === "projects" || page === "lab" || page === "glass" ? page : "home";

  return (
    <GlassSettingsProvider>
      <SiteShell page={currentPage}>{pageContent(currentPage)}</SiteShell>
    </GlassSettingsProvider>
  );
}
