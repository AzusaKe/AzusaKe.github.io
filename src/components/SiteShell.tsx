import type { PropsWithChildren } from "react";
import { profile, socialLinks } from "../content/site";
import type { IconName } from "../types/content";
import { Icon } from "./Icon";

export type SitePage = "home" | "projects" | "lab";

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
            <span className="brand-mark" aria-hidden="true">AK</span>
            <span className="brand-name">Azusa_Ke</span>
          </a>
          <nav className="site-nav" aria-label="主导航">
            {navItems.map((item) => (
              <a
                className={`site-nav__link ${item.page === page ? "is-active" : ""}`.trim()}
                href={item.href}
                aria-current={item.page === page ? "page" : undefined}
                key={item.label}
                {...externalProps(item.href)}
              >
                {item.label}
              </a>
            ))}
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
          </div>
        </div>
      </footer>
    </div>
  );
}
