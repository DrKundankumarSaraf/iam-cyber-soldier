function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50 pt-24 text-slate-900 transition-colors duration-300 dark:bg-[#05070a] dark:text-white"
    >
      {/* Background Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Controlled Cyber Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px] dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-72 w-72 rounded-full bg-blue-600/5 blur-[120px] dark:bg-blue-600/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-20">
        {/* Left Column: Value Proposition & CTAs (7 cols) */}
        <div className="lg:col-span-7">
          {/* Eyebrow Badge */}
          <div className="animate-hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-xs dark:border-cyan-400/20 dark:bg-cyan-400/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-300">
              Cyber Security Industrial Training &amp; Internship
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-hero-heading text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Build Real-World{' '}
            <span className="relative inline-block text-cyan-600 dark:text-cyan-400">
              Cybersecurity
            </span>{' '}
            Defense &amp; Offensive Skills.
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="animate-hero-desc mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Industry-aligned training designed for students, freshers, career switchers, and IT professionals. 
            Master hands-on defensive operations, ethical hacking, SIEM, and AI-driven security—with{' '}
            <span className="font-semibold text-slate-900 dark:text-white">no prior coding required</span>.
          </p>

          {/* CTAs */}
          <div className="animate-hero-cta mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            {/* Primary CTA: Enquire Now */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-95"
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

            {/* Secondary CTA: Explore Programs */}
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:border-cyan-500/60 hover:bg-slate-50 hover:text-cyan-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.08] dark:hover:text-cyan-300"
            >
              <span>Explore Programs</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Core Trust Indicators / Quick Stats */}
          <div className="animate-hero-trust mt-12 grid grid-cols-3 gap-2 sm:gap-6 border-t border-slate-200 pt-7 dark:border-white/10">
            <div className="space-y-1">
              <div className="text-xl min-[400px]:text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                70%
              </div>
              <p className="text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Practical Labs
              </p>
              <p className="hidden text-[11px] text-slate-500 sm:block dark:text-slate-500">
                Hands-on vs 30% Theory
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xl min-[400px]:text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                RED + BLUE
              </div>
              <p className="text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Dual Operations
              </p>
              <p className="hidden text-[11px] text-slate-500 sm:block dark:text-slate-500">
                Offensive &amp; Defensive
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-xl min-[400px]:text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                AI-DRIVEN
              </div>
              <p className="text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-400">
                Next-Gen Security
              </p>
              <p className="hidden text-[11px] text-slate-500 sm:block dark:text-slate-500">
                Modern Threat Triage
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Security Operations Visual (5 cols) */}
        <div className="lg:col-span-5">
          <div className="animate-hero-console relative mx-auto w-full max-w-lg">
            {/* Ambient Card Backlight */}
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-cyan-500/20 via-blue-500/10 to-transparent opacity-70 blur-xl dark:opacity-40" />

            {/* Terminal / Dashboard Box */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-xl dark:border-cyan-500/20 dark:bg-[#070d14]/90 dark:shadow-[0_0_50px_rgba(34,211,238,0.06)]">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    SOC_CONSOLE // LIVE_TRIAGE
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Status Modules */}
              <div className="space-y-4 p-5">
                {/* 2-Column Status Tiles (stack on ultra-small <= 320px, 2-cols on 375px+) */}
                <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-3">
                  {/* Threat Status */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-black/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Threat Status
                      </span>
                      <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        SECURE
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          Monitoring Active
                        </p>
                        <p className="text-[10px] text-slate-500">0 Critical CVEs</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Detection Rate */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-black/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        AI Analysis
                      </span>
                      <span className="font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                        94% Accuracy
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        <span>Pattern Match</span>
                        <span className="font-mono text-cyan-600 dark:text-cyan-400">94%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <div className="h-full w-[94%] rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Operations Telemetry Stream */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-black/30">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      Live Industrial Security Logs
                    </span>
                    <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400">
                      INDEXED
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 font-mono text-[11px]">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span className="shrink-0 text-slate-400">[SOC:L1]</span>
                      <span className="truncate sm:whitespace-normal">SIEM Telemetry Pipeline synchronized</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span className="shrink-0 text-slate-400">[SPLUNK]</span>
                      <span className="truncate sm:whitespace-normal">Log parsing rule validated (MITRE ATT&amp;CK)</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span className="shrink-0 text-slate-400">[VAPT]</span>
                      <span className="truncate sm:whitespace-normal">Authorized perimeter scan in progress</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span className="shrink-0 text-slate-400">[DEFENSE]</span>
                      <span className="truncate sm:whitespace-normal">Incident response playbooks verified</span>
                    </div>
                  </div>
                </div>

                {/* Practical Ratio Pill */}
                <div className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-2.5 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">
                      70% Lab Exposure
                    </span>
                    <span className="text-slate-400">•</span>
                    <span>30% Conceptual Core</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-cyan-700 dark:text-cyan-400">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero