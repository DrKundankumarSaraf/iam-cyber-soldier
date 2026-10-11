function RedBlue() {
  const redTeamSkills = [
    'Security assessment concepts',
    'Reconnaissance & footprinting',
    'Vulnerability assessment',
    'Web application security',
    'Authorized penetration testing',
  ]

  const blueTeamSkills = [
    'SOC operations & workflows',
    'SIEM & real-time security monitoring',
    'Threat detection & alert triage',
    'Incident response concepts',
    'Security event & log analysis',
  ]

  return (
    <section
      id="red-blue"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 shadow-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400">
            Offensive + Defensive Security
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Think Like an Attacker.{' '}
            <span className="block text-cyan-600 dark:text-cyan-400">
              Defend Like a Security Professional.
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            True cyber resilience requires understanding both perspectives. Master how attacks are formulated and how enterprises detect and eliminate threats in real time.
          </p>
        </div>

        {/* Red Team vs Blue Team Dual Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* RED TEAM: Offensive Security */}
          <div className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-linear-to-b from-red-500/5 to-transparent p-5 sm:p-9 shadow-xs transition-all duration-300 hover:border-red-500/35 hover:-translate-y-0.5 hover:shadow-lg dark:border-red-500/20 dark:from-red-950/20 dark:to-[#080b10] dark:hover:border-red-500/30">
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 transition-transform duration-300 group-hover:scale-105 dark:text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="22" y1="12" x2="18" y2="12" />
                  <line x1="6" y1="12" x2="2" y2="12" />
                  <line x1="12" y1="6" x2="12" y2="2" />
                  <line x1="12" y1="22" x2="12" y2="18" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="font-mono text-xs font-bold tracking-wider text-red-600 dark:text-red-400">
                  RED_TEAM // OFFENSIVE
                </span>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-slate-950 sm:text-3xl dark:text-white">
              Red Team Operations
            </h3>

            <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              Learn how ethical hackers and authorized security assessors simulate adversaries, find vulnerabilities, and evaluate an organization&apos;s real-world security boundaries.
            </p>

            {/* Core Modules List */}
            <div className="mt-6 space-y-3 border-t border-red-500/15 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Core Offensive Curriculum
              </p>
              <ul className="space-y-2.5">
                {redTeamSkills.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600 dark:text-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BLUE TEAM: Defensive Operations */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-linear-to-b from-cyan-500/5 to-transparent p-5 sm:p-9 shadow-xs transition-all duration-300 hover:border-cyan-500/35 hover:-translate-y-0.5 hover:shadow-lg dark:border-cyan-500/20 dark:from-cyan-950/20 dark:to-[#080b10] dark:hover:border-cyan-500/30">
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 transition-transform duration-300 group-hover:scale-105 dark:text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="font-mono text-xs font-bold tracking-wider text-cyan-700 dark:text-cyan-400">
                  BLUE_TEAM // DEFENSIVE
                </span>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-slate-950 sm:text-3xl dark:text-white">
              Blue Team Operations
            </h3>

            <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              Build defensive security skills centered on continuous SOC monitoring, threat hunting, SIEM analytics, telemetry ingestion, and rapid incident response protocols.
            </p>

            {/* Core Modules List */}
            <div className="mt-6 space-y-3 border-t border-cyan-500/15 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Core Defensive Curriculum
              </p>
              <ul className="space-y-2.5">
                {blueTeamSkills.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Dual-Perspective Callout Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs transition-colors dark:border-white/10 dark:bg-white/[0.02]">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Comprehensive Training Balance — Learn to conduct{' '}
            <span className="font-bold text-slate-950 dark:text-white">
              authorized attack simulations
            </span>{' '}
            while mastering{' '}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              enterprise defensive security operations
            </span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RedBlue