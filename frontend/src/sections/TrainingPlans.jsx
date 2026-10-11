function TrainingPlans({ onSelectPlan }) {
  const plans = [
    {
      name: 'Basic',
      price: '₹10,000',
      duration: '30 Hours',
      badge: 'Foundation Track',
      description:
        'Start your cybersecurity journey with essential fundamentals, network security concepts, and hands-on laboratory exercises.',
      features: [
        'Cybersecurity Fundamentals & Architecture',
        'Networking & Network Security Basics',
        'CIA Triad, Threats & Attack Vectors',
        'Vulnerability Assessment Fundamentals',
        'Password & Authentication Security',
        'Access Control & Identity Concepts',
        'Web Application Security Basics',
        'Cryptography & Data Protection',
        'Basic Linux & Security Tools Setup',
        'Basic Splunk & Sentinel Overview',
        'Real-World Security Scenarios & Triage',
        'Guided Practical Lab Exercises',
        'Capstone Cybersecurity Starter Project',
      ],
    },
    {
      name: 'Professional',
      price: '₹20,000',
      duration: '60 Hours',
      badge: 'Practitioner Track',
      featured: true,
      featuredLabel: 'Featured • Most Popular',
      description:
        'Hands-on practitioner training covering Ethical Hacking, AI-assisted security, and Microsoft Defender / Sentinel SOC operations.',
      features: [
        'Ethical Hacking Methodology & Reconnaissance',
        'Footprinting, OSINT & Surface Mapping',
        'Network Scanning & Vulnerability Enumeration',
        'Linux Security Lab & Tool Mastery',
        'Web Application Security & OWASP Top 10',
        'AI & Cybersecurity Foundations',
        'Local AI Security Lab with Ollama',
        'AI-Assisted Security Operations & Analysis',
        'Microsoft Defender Security Architecture',
        'Microsoft Sentinel Cloud SIEM Triage',
        'KQL Telemetry Querying & Alert Analysis',
        'Incident Handling & Response Procedures',
        'Real-World Case Studies & Guided Labs',
        'Capstone Multi-Phase Security Project',
      ],
    },
    {
      name: 'Advanced',
      price: '₹30,000',
      duration: '90 Hours',
      badge: 'Job-Ready Track',
      description:
        'Deep-dive industrial training in enterprise defense, Splunk administration & development, and Splunk Enterprise Security (SIEM).',
      features: [
        'Advanced Enterprise Defense Architecture',
        'Splunk Platform Architecture & Deployment',
        'Data Onboarding, Indexing & Parsing',
        'Search Processing Language (SPL) Mastery',
        'Knowledge Objects, Reports & Dashboards',
        'Splunk Enterprise Security (ES) SIEM',
        'Mission Control & Notable Event Investigation',
        'Threat Intelligence & MITRE ATT&CK Mapping',
        'Detection Engineering & Correlation Searches',
        'System & Endpoint Hardening Techniques',
        'Incident Response & Investigation Playbooks',
        'Troubleshooting, Automation & API Workflows',
        'Production SIEM Case Studies & Labs',
        'Enterprise Capstone Security Projects',
      ],
    },
    {
      name: 'Expert',
      price: '₹40,000',
      duration: '120 Hours',
      badge: 'Masterclass Track',
      description:
        'Masterclass industrial track combining advanced offensive security, enterprise SOC engineering, SOAR, and autonomous AI-driven defense.',
      features: [
        'Advanced Offensive Security & Attack Strategy',
        'Advanced Reconnaissance & Attack Surface Mapping',
        'Advanced Network Exploitation & Evasion',
        'Advanced Vulnerability Analysis & Research',
        'Advanced Web App Security & SQL Injection',
        'Malware Analysis & Endpoint Threat Defense',
        'Advanced SOC Operations Center Engineering',
        'Dual SIEM: Splunk ES + Microsoft Sentinel',
        'SIEM-Based Complex Threat Detection',
        'Detection Engineering & Custom Rules',
        'SOAR Concepts & Automated Response Playbooks',
        'AI Security Agents & GenAI / LLM Defense',
        'AI-Driven Threat Detection & Investigation',
        'Red vs. Blue Cyber Warfare Simulations',
        'Comprehensive Industrial Capstone Defense Lab',
      ],
    },
  ]

  return (
    <section
      id="plans"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#05070a]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-700 shadow-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-400">
            Training Plans &amp; Pricing
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Choose Your{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Learning Path.
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Structured industrial cybersecurity training plans designed for varying career stages, durations, and specialization goals.
          </p>
        </div>

        {/* Pricing Cards Grid - 4 Columns Responsive */}
        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-6 lg:p-5 xl:p-6 ${
                plan.featured
                  ? 'border-2 border-cyan-400 bg-white shadow-xl hover:shadow-2xl dark:border-cyan-400/80 dark:bg-[#09121a] dark:shadow-[0_0_50px_rgba(34,211,238,0.12)] dark:hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]'
                  : 'border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-lg dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-950 shadow-md">
                  {plan.featuredLabel}
                </div>
              )}

              <div>
                {/* Header: Track Badge, Plan Name & Duration */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {plan.badge}
                    </span>
                    <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                    {plan.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    / total fee
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3.5 min-h-[56px] text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>

                {/* Enrollment / Enquiry Button */}
                <a
                  href="#contact"
                  onClick={() => onSelectPlan?.(`${plan.name} Plan (${plan.duration} — ${plan.price})`)}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                    plan.featured
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                      : 'border border-slate-300 bg-slate-50 text-slate-900 hover:border-cyan-500 hover:bg-cyan-500/5 hover:text-cyan-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300'
                  }`}
                >
                  <span>Enquire / Enroll</span>
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

                {/* Features Divider */}
                <div className="my-5 border-t border-slate-200 dark:border-white/10" />

                {/* Features List */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      What's Included
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-cyan-700 dark:text-cyan-400">
                      {plan.features.length} Highlights
                    </span>
                  </div>

                  <ul className="mt-3.5 space-y-2 text-xs">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-2 w-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-[11px] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Unsure which training plan aligns best with your career trajectory?
          </p>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <span>Speak with a training advisor for personalized guidance</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrainingPlans
