import Link from "next/link";

const companyLinks = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const resourceLinks = [
  {
    name: "Documentation",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Help Center",
    href: "#",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "#",
  },
  {
    name: "Terms of Service",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-emerald-400">
              LectureMind AI
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              AI-powered note taking platform helping students learn faster,
              smarter and more efficiently.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold">Resources</h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h3 className="font-semibold">Legal</h3>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 LectureMind AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}