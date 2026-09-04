import { useEffect, useState } from "react";

const clockFormatter = new Intl.DateTimeFormat("zh-CN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Shanghai",
});

function formatClock(date: Date) {
  const parts = clockFormatter.formatToParts(date);
  const values = new Map(parts.map((part) => [part.type, part.value]));
  const hour = (values.get("hour") ?? "00").padStart(2, "0");
  const minute = (values.get("minute") ?? "00").padStart(2, "0");
  const second = (values.get("second") ?? "00").padStart(2, "0");
  return `${hour}:${minute}:${second}`;
}

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  const formattedTime = formatClock(now);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <time className="live-clock" dateTime={now.toISOString()} aria-label={`当前时间 ${formattedTime}`}>
      {formattedTime}
    </time>
  );
}
