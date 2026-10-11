const audiences = [
  {
    number: '01',
    title: 'Students & Freshers',
    role: 'New to Cybersecurity',
    description:
      'Build practical cybersecurity knowledge from scratch and understand the real-world operational workflows behind modern security roles.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Working Professionals',
    role: 'Skill Upskilling',
    description:
      'Strengthen your cybersecurity skill set and master offensive assessments, SOC triage, SIEM engineering, and defensive tooling.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Career Switchers',
    role: 'Structured Transition',
    description:
      'Create a clear, structured pathway into high-demand cybersecurity domains with mentor-guided, hands-on lab learning.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'IT Professionals',
    role: 'Domain Specialization',
    description:
      'Expand existing networking, systems, or sysadmin knowledge into SOC operations, Splunk SIEM, threat hunting, and security governance.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
]

function WhoCanJoin() {
  return (
    <section
      id="who-can-join"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 shadow-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400">
              Eligibility &amp; Audience
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Built for Those Ready to{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Level Up.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-relaxed text-slate-600 lg:col-span-5 sm:text-lg dark:text-slate-300">
            Whether you are beginning your technical journey or expanding your IT career into specialized security defense, our programs provide a clear step-by-step learning progression.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
            >
              <div>
                {/* Header: Number and Role Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    /{audience.number}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-400">
                    {audience.role}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                  {audience.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950 transition-colors dark:text-white">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Requirements Banner: Basic Knowledge vs Programming Not Mandatory */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Requirement 1: Basic Computer Knowledge */}
          <div className="flex items-start gap-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-5 dark:border-cyan-500/20 dark:bg-cyan-950/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                Basic Computer Knowledge Required
              </h4>
              <p className="mt-1 text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                Familiarity with general computer usage, operating systems, and internet fundamentals is all you need to get started.
              </p>
            </div>
          </div>

          {/* Requirement 2: Programming Not Mandatory */}
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-white/10 dark:bg-[#0a0f16]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                Programming is Not Mandatory
              </h4>
              <p className="mt-1 text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                You do not need prior software engineering or deep coding background. Cybersecurity operations focus on concepts, configurations, and analytical tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoCanJoin