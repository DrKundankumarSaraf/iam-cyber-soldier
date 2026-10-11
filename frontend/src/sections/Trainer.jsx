import trainerImage from '../assets/trainer image.jpg'

function Trainer() {
  const expertise = [
    'SOC & SIEM Operations',
    'Network & Web VAPT',
    'Threat Detection & Triage',
    'Incident Response',
    'Offensive & Defensive Security',
    'AI-Driven Cyber Security',
  ]

  const certifications = [
    { name: 'CISM', authority: 'Information Security Management' },
    { name: 'ISC2 Certified in Cybersecurity', authority: 'ISC2 CC Standard' },
    { name: 'Microsoft AZ-900', authority: 'Cloud Security Fundamentals' },
  ]

  return (
    <section
      id="trainer"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Authoritative Trainer Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-transparent blur-xl opacity-80 dark:opacity-40" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-cyan-500/20 dark:bg-[#0a0f16]">
                {/* Trainer Photo & Verified Status */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-white/10 dark:bg-[#05070a]">
                  <img
                    src={trainerImage}
                    alt="Ankita Saraf - Cybersecurity Trainer"
                    className="aspect-4/3 w-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Verified badge */}
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-2 ring-white dark:ring-[#05070a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                {/* Name & Title below the photo */}
                <div className="mt-4 flex flex-col items-center text-center">
                  <p className="text-base font-extrabold text-slate-950 dark:text-white">
                    Ankita Saraf
                  </p>

                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      Cyber Security Trainer
                    </span>
                  </div>
                </div>

                {/* Academic Qualification & Domain Focus Tiles */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs dark:border-white/5 dark:bg-white/[0.03]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Qualification
                    </span>
                    <p className="mt-1 font-mono text-sm font-black text-slate-950 dark:text-white">
                      Ph.D. Cyber Security
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs dark:border-white/5 dark:bg-white/[0.03]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Specialization
                    </span>
                    <p className="mt-1 font-mono text-sm font-black text-cyan-700 dark:text-cyan-400">
                      SOC / SIEM SME
                    </p>
                  </div>
                </div>

                {/* Trust Assurance */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2 text-xs">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Industrial Training Leader
                  </span>
                  <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                    AUTHORIZED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Expertise & Credentials (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
              Meet Your Trainer
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Ankita{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Saraf
              </span>
            </h2>

            <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-200">
              Cyber Security Trainer &amp; Industrial Mentor
            </p>

            <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              Cyber Security International Corporate Trainer and SOC &amp; SIEM Subject Matter Expert with extensive hands-on experience across offensive security, defensive security, and real-time security operations.
            </p>

            {/* Expertise Badges */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Domains of Instruction
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-100/80 px-3 py-1.5 text-xs font-semibold text-slate-800 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications and Focus Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Professional Focus */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-[#0a0f16]">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Professional Focus
                </p>
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                  SOC, SIEM, VAPT, threat detection, incident response, and cybersecurity industrial training.
                </p>
              </div>

              {/* Official Certifications */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-[#0a0f16]">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Industry Certifications
                </p>
                <div className="mt-2.5 space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Talk to the Trainer CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95"
              >
                <span>Talk to the Trainer</span>
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

              <a
                href="tel:+919588699836"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <span>+91 95886 99836</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainer