import { navLinks, site, socialLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black/30 px-6 py-12 lg:px-8 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left Column: Comprehensive Details about Junaid Aziz */}
          <div className="space-y-4 md:col-span-7 lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  {site.name}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  {site.availability}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-purple-400">
                Full Stack Engineer · AI Engineer · Mobile Developer
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Full Stack Developer @ <span className="font-medium text-zinc-200">{site.company}</span> · 2+ Years Shipping Production Software
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-1 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{site.location}</span>
              </div>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 transition hover:text-purple-300"
              >
                <svg className="h-3.5 w-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition hover:text-purple-300"
              >
                <svg className="h-3.5 w-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{site.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-zinc-400 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Navigation */}
          <div className="md:col-span-5 lg:col-span-6 md:flex md:justify-end">
            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Navigation</p>
              <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs font-medium text-zinc-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {year} {site.name}. Built with Next.js, React & Tailwind CSS. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs font-medium text-zinc-500 transition hover:text-purple-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
