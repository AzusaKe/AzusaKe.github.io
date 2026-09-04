import { useEffect, useState } from "react";

const clockFormatter = new Intl.DateTimeFormat("zh-CN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Shanghai",
});

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <time className="live-clock" dateTime={now.toISOString()} aria-label={`当前时间 ${clockFormatter.format(now)}`}>
      {clockFormatter.format(now)}
    </time>
  );
}
