import { navLinks, site } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{site.title}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm text-teal-600 transition hover:text-teal-500"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition hover:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs font-medium text-zinc-500 transition hover:text-teal-600"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
