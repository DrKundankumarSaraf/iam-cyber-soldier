function PracticalTraining() {
  const steps = [
    {
      number: '01',
      title: 'Learn',
      phase: 'Foundation',
      description:
        'Understand foundational security architectures, networking concepts, protocols, attack vectors, and operational workflows.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      phase: 'Hands-On Labs',
      title: 'Practice',
      description:
        'Execute controlled security simulations, run toolsets (Splunk, Linux, security utilities), and configure security environments.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      number: '03',
      phase: 'Investigation',
      title: 'Analyze',
      description:
        'Dissect real-world log trails, parse SIEM events, trace exploit payloads, and map attack patterns against MITRE ATT&CK.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: '04',
      phase: 'Mitigation',
      title: 'Defend',
      description:
        'Formulate incident containment actions, defensive hardening, rule creation, and proactive posture defense.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="practical"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header & 70/30 Metric Callout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Left Column: Heading (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
              Training Methodology
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Learn Less by Watching.{' '}
              <span className="block text-cyan-600 dark:text-cyan-400">
                Learn More by Doing.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Theory alone doesn&apos;t stop cyber attacks. Our curriculum is grounded in practical lab environments so you gain the muscle memory needed for live security operations.
            </p>
          </div>

          {/* Right Column: 70% Practical / 30% Theory Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 dark:border-cyan-500/20 dark:bg-[#0c121b]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Instruction Distribution
                </span>
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-cyan-700 dark:text-cyan-400">
                  70:30 MODEL
                </span>
              </div>

              {/* Numbers */}
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <span className="text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
                    70%
                  </span>
                  <span className="ml-2 text-sm font-bold text-cyan-700 dark:text-cyan-400">
                    Practical Hands-on
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-slate-500 dark:text-slate-400">
                    30%
                  </span>
                  <span className="ml-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Theory
                  </span>
                </div>
              </div>

              {/* Progress Visual Bar */}
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                  style={{ width: '70%' }}
                />
              </div>

              {/* Micro Details */}
              <div className="mt-4 flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
                <span>Controlled Lab Workflows</span>
                <span>Foundational Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process: Learn -> Practice -> Analyze -> Defend */}
        <div className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400">
                      STEP {step.number}
                    </span>

                    <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-400">
                      {step.phase}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 transition-colors dark:text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector indicator on desktop for steps 1-3 */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout & Direct Link */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-cyan-500/15 dark:bg-cyan-950/10">
          <div>
            <h4 className="font-bold text-slate-950 dark:text-white">
              Ready for real industrial cybersecurity training?
            </h4>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
              Select the duration and plan that fits your career trajectory.
            </p>
          </div>

          <a
            href="#plans"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 active:scale-95"
          >
            <span>View Training Plans</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
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
      </div>
    </section>
  )
}

export default PracticalTraining