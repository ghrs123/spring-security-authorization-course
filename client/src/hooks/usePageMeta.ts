import { useEffect } from "react";

const SITE_ORIGIN =
  typeof window !== "undefined" ? window.location.origin : "";

export interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

/**
 * Sets document title, meta description, and canonical URL for SEO.
 * Restores previous values on unmount.
 */
export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes("Spring Security") ? title : `${title} | Spring Security Authorization Course`;
    const prevTitle = document.title;
    document.title = fullTitle;

    let metaEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevContent = metaEl?.getAttribute("content") ?? null;
    if (!metaEl) {
      metaEl = document.createElement("meta");
      metaEl.setAttribute("name", "description");
      document.head.appendChild(metaEl);
    }
    metaEl.setAttribute("content", description);

    let linkEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevHref = linkEl?.getAttribute("href") ?? null;
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.setAttribute("rel", "canonical");
      document.head.appendChild(linkEl);
    }
    linkEl.setAttribute("href", `${SITE_ORIGIN}${path}`);

    return () => {
      document.title = prevTitle;
      if (metaEl) metaEl.setAttribute("content", prevContent ?? "");
      if (linkEl) linkEl.setAttribute("href", prevHref ?? "");
    };
  }, [title, description, path]);
}
