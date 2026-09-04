import type { PropsWithChildren } from "react";
import { profile, socialLinks } from "../content/site";
import type { IconName } from "../types/content";
import { Icon } from "./Icon";

export type SitePage = "home" | "projects" | "lab" | "glass";

interface SiteShellProps extends PropsWithChildren {
  page: SitePage;
}

const navItems: Array<{ label: string; href: string; page?: SitePage }> = [
  { label: "首页", href: "/", page: "home" },
  { label: "作品集", href: "/projects/", page: "projects" },
  { label: "实验室", href: "/lab/", page: "lab" },
  { label: "博客", href: "https://blog.azusake.network/" },
];

function externalProps(url: string, newWindow?: boolean) {
  const shouldOpenInNewWindow = newWindow ?? url.startsWith("http");
  return shouldOpenInNewWindow
    ? { target: "_blank" as const, rel: "noreferrer" }
    : undefined;
}

export function SiteShell({ page, children }: SiteShellProps) {
  return (
    <div className="page-shell">
      <div className="background-layer" aria-hidden="true" />
      <a className="skip-link" href="#main-content">跳转到主要内容</a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="/" aria-label="返回 Azusa_Ke 首页">
            <img className="brand-favicon" src="/icon.ico" alt="" width="32" height="32" />
            <span className="brand-name">Azusa_Ke</span>
          </a>
          <nav className="site-nav" aria-label="主导航">
            {navItems.map((item) => {
              const isActive = item.page === page || (item.page === "lab" && page === "glass");

              return (
                <a
                  className={`site-nav__link ${isActive ? "is-active" : ""}`.trim()}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  key={item.label}
                  {...externalProps(item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
      <main id="main-content" className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="footer-links" aria-label="联系入口">
            {socialLinks.map((link) => (
              <a href={link.url} key={link.name} {...externalProps(link.url, link.newWindow)}>
                <Icon name={link.icon as IconName} size={15} />
                <span>{link.name}</span>
              </a>
            ))}
            <a href="/THIRD-PARTY-NOTICES.md">
              <Icon name="info" size={15} />
              <span>许可</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
