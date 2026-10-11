import logo from '../assets/Logo.png'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ankita-saraf1000',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4.5 w-4.5"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/CyberSecurity.AI.Training/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4.5 w-4.5"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cybersecurity_with_ai_training',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4.5 w-4.5"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-[#030508]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#060c14] p-1 shadow-xs">
                <img
                  src={logo}
                  alt="I AM CYBER SOLDIER Shield"
                  className="h-full w-full object-contain"
                  width="40"
                  height="40"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold tracking-wider text-slate-950 dark:text-white">
                  I AM CYBER
                </span>
                <span className="text-[11px] font-bold tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
                  SOLDIER
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-400">
              Cyber Security Industrial Training &amp; Internship. Empowering students, freshers, and professionals with 70% practical, hands-on offensive and defensive cybersecurity competencies.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>70% Practical + 30% Theory</span>
            </div>

            {/* Official Social Media Channels */}
            <div className="mt-5">
              <span className="mb-2.5 block font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-700 hover:shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Column (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Programs
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Certified Ethical Hacker
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Splunk Admin &amp; Developer
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  SOC Analyst 1
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  SOC Analyst 2
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  CompTIA Security+
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  AI-Driven Cyber Security
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#red-blue"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Red &amp; Blue Team
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Training Plans
                </a>
              </li>
              <li>
                <a
                  href="#trainer"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Trainer Profile
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (2 cols) */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:+919588699836"
                className="block font-semibold text-slate-800 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
              >
                +91 95886 99836
              </a>

              <a
                href="mailto:training.support@iamcybersoldier.com"
                className="block break-all text-xs text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                training.support@iamcybersoldier.com
              </a>

              <p className="pt-2 text-xs text-slate-500">
                Trainer: Ankita Saraf (Ph.D. Cyber Security)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-500">
          <p>© {currentYear} I AM CYBER SOLDIER. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Cyber Security Industrial Training &amp; Internship</span>
            <span>•</span>
            <a href="#home" className="transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer