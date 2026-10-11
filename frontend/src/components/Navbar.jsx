import { useState, useEffect } from 'react'
import logo from '../assets/Logo.png'
import { useTheme } from '../ThemeContext'

function Navbar() {
  const { darkMode, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Training Plans', href: '#plans' },
    { name: 'Trainer', href: '#trainer' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          role="presentation"
          aria-hidden="true"
          onClick={closeMobileMenu}
          className="animate-fade-in fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs transition-opacity md:hidden dark:bg-black/60"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#05070a]/90 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-[#05070a]/80'
        }`}
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3 transition-transform duration-200 hover:opacity-95"
          aria-label="I AM CYBER SOLDIER Home"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#060c14] p-1 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <img
              src={logo}
              alt="I AM CYBER SOLDIER Shield Logo"
              className="h-full w-full object-contain"
              width="44"
              height="44"
            />
          </div>

          <div className="flex flex-col justify-center leading-tight">
            <span className="text-sm font-extrabold tracking-wider text-slate-900 transition-colors dark:text-white">
              I AM CYBER
            </span>
            <span className="text-[11px] font-bold tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
              SOLDIER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-100/60 p-1.5 backdrop-blur-md md:flex dark:border-white/10 dark:bg-white/[0.03]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:bg-slate-200/60 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
          >
            {darkMode ? (
              /* Sun Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5 text-amber-400 transition-transform duration-300 hover:rotate-45"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              /* Moon Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5 text-slate-700 transition-transform duration-300 hover:-rotate-12"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Enquire CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span>Enquire Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5 text-amber-400"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5 text-slate-700"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors active:scale-95 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="animate-drawer-down border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl md:hidden dark:border-white/10 dark:bg-[#060a12]"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-98"
              >
                <span>Enquire Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <p className="mt-3 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
                Call: <a href="tel:+919588699836" className="text-cyan-600 dark:text-cyan-400 font-semibold">+91 95886 99836</a>
              </p>
            </div>
          </nav>
        </div>
      )}
      </header>
    </>
  )
}

export default Navbar