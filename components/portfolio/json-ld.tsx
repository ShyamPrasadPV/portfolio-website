import { site } from "@/lib/content";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Full Stack Development",
      "Headless CMS",
      "Payload CMS",
      "Strapi",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: site.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
