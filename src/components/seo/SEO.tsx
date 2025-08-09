import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  useEffect(() => {
    // Title
    const previousTitle = document.title;
    document.title = title;

    // Meta description
    let descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag?.getAttribute("content") ?? null;
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    // Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const computedCanonical = canonical || window.location.href;
    const prevCanonical = canonicalTag?.href ?? null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = computedCanonical;

    // JSON-LD
    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.text = JSON.stringify(jsonLd);
    document.head.appendChild(scriptEl);

    // Cleanup on unmount
    return () => {
      document.title = previousTitle;
      if (descTag && prevDesc !== null) descTag.setAttribute("content", prevDesc);
      if (canonicalTag && prevCanonical) canonicalTag.href = prevCanonical;
      if (scriptEl && scriptEl.parentNode) scriptEl.parentNode.removeChild(scriptEl);
    };
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default SEO;
