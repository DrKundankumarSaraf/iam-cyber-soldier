/**
 * Resolves a public path against Vite's BASE_URL for reliable subpath deployment.
 */
const getPublicUrl = (path) => {
  if (!path) return ''
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${cleanBase}${cleanPath}`
}

const courses = [
  {
    number: '01',
    title: 'Cybersecurity Fundamentals – Basic',
    duration: '30 Hours',
    tag: 'FOUNDATION',
    tagColor: 'cyan',
    pdfFile: 'cybersecurity-fundamentals-basic-30-hours.pdf',
    docxFile: 'cybersecurity-fundamentals-basic-30-hours.docx',
    description:
      'Build core foundations across cybersecurity architecture, networking fundamentals, the CIA triad, vulnerability scanning, and essential security tooling.',
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Certified Ethical Hacking & AI – Professional',
    duration: '60 Hours',
    tag: 'RED TEAM',
    tagColor: 'red',
    pdfFile: 'certified-ethical-hacking-ai-professional-60-hours.pdf',
    docxFile: 'certified-ethical-hacking-ai-professional-60-hours.docx',
    description:
      'Master ethical hacking methodologies, OSINT surface mapping, network scanning, OWASP Top 10 web exploits, and AI-assisted security reconnaissance.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-red-500 dark:text-red-400"
        aria-hidden="true"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Cybersecurity Professional',
    duration: '60 Hours',
    tag: 'AI + SECURITY',
    tagColor: 'cyan',
    pdfFile: 'ai-cybersecurity-professional-60-hours.pdf',
    docxFile: 'ai-cybersecurity-professional-60-hours.docx',
    description:
      'Harness cutting-edge artificial intelligence in cybersecurity operations, local Ollama environments, automated behavioral threat detection, and AI defense.',
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Microsoft Security Operations & Defender Sentinel Professional',
    duration: '60 Hours',
    tag: 'BLUE TEAM',
    tagColor: 'blue',
    pdfFile: 'microsoft-security-operations-defender-sentinel-professional-60-hours.pdf',
    docxFile: 'microsoft-security-operations-defender-sentinel-professional-60-hours.docx',
    description:
      'Train in enterprise Microsoft Defender endpoint protection, Microsoft Sentinel cloud SIEM triage, KQL telemetry queries, and active alert response.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Advanced Splunk Admin & Developer',
    duration: '90 Hours',
    tag: 'SIEM',
    tagColor: 'cyan',
    pdfFile: 'advanced-splunk-admin-and-developer-90-hours.pdf',
    docxFile: 'advanced-splunk-admin-and-developer-90-hours.docx',
    description:
      'Deep dive into enterprise Splunk platform architecture, data onboarding, indexes, SPL search language mastery, reports, dashboards, and custom integrations.',
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
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
        <circle cx="18" cy="9" r="1" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Advanced Splunk Enterprise Security',
    duration: '90 Hours',
    tag: 'SIEM / ES',
    tagColor: 'cyan',
    pdfFile: 'advanced-splunk-enterprise-security-90-hours.pdf',
    docxFile: 'advanced-splunk-enterprise-security-90-hours.docx',
    description:
      'Deploy industrial Splunk Enterprise Security (ES), manage Incident Review Mission Control, build correlation searches, and map MITRE ATT&CK vectors.',
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
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Advanced Cyber Security & Defense Practitioner',
    duration: '90 Hours',
    tag: 'BLUE TEAM',
    tagColor: 'blue',
    pdfFile: 'advanced-cyber-security-and-defense-practitioner-90-hours.pdf',
    docxFile: 'advanced-cyber-security-and-defense-practitioner-90-hours.docx',
    description:
      'Engineer robust enterprise defense postures with system hardening, threat intelligence feeds, detection engineering, and incident response playbooks.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Certified Ethical Hacking & AI – Expert',
    duration: '120 Hours',
    tag: 'MASTERCLASS',
    tagColor: 'red',
    pdfFile: 'certified-ethical-hacking-ai-expert-120-hours.pdf',
    docxFile: 'certified-ethical-hacking-ai-expert-120-hours.docx',
    description:
      'Capstone industrial masterclass combining advanced offensive exploitation, dual-SIEM operations (Splunk ES + Sentinel), SOAR automation, and AI defense agents.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-red-500 dark:text-red-400"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

function Programs({ onSelectProgram }) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      {/* Anchor for direct Course Details navigation */}
      <div id="course-details" className="scroll-mt-24" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
            Training Programs &amp; Course Curricula
          </div>

          <h2 className="mt-4 text-2xl min-[380px]:text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Explore All 8{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Cybersecurity Programs.
            </span>
          </h2>

          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Structured industrial curricula spanning offensive security, defensive SOC operations, enterprise SIEM, and AI-powered defense. Download complete syllabi or enquire to get started.
          </p>
        </div>

        {/* Programs Grid: Responsive 1, 2, or 4 columns for all 8 courses */}
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => {
            const isRed = course.tagColor === 'red'
            const isBlue = course.tagColor === 'blue'
            const pdfUrl = getPublicUrl(`/syllabi/${course.pdfFile}`)
            const docxUrl = getPublicUrl(`/syllabi/${course.docxFile}`)

            const badgeClasses = isRed
              ? 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400'
              : isBlue
                ? 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400'
                : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'

            const iconBorderClasses = isRed
              ? 'border-red-500/20 bg-red-500/5 group-hover:scale-105 group-hover:border-red-500/40 group-hover:bg-red-500/10'
              : isBlue
                ? 'border-blue-500/20 bg-blue-500/5 group-hover:scale-105 group-hover:border-blue-500/40 group-hover:bg-blue-500/10'
                : 'border-cyan-500/20 bg-cyan-500/5 group-hover:scale-105 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10'

            return (
              <article
                key={course.number}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-4 min-[380px]:p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
              >
                <div>
                  {/* Top Bar: Number + Track Tag + Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                    <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                      /{course.number}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded-md border border-slate-300/80 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                        {course.duration}
                      </span>
                      <span
                        className={`rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider ${badgeClasses}`}
                      >
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mt-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${iconBorderClasses}`}
                  >
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold tracking-tight text-slate-950 transition-colors dark:text-white break-words">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                    {course.description}
                  </p>
                </div>

                {/* Footer Actions: Syllabus Access & Enquiry */}
                <div className="mt-6 border-t border-slate-200/80 pt-4 dark:border-white/10">
                  {/* Syllabus Links: PDF (Primary) and DOCX (Download) */}
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open official ${course.title} syllabus PDF`}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                        aria-hidden="true"
                      >
                        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                      </svg>
                      <span>Syllabus PDF</span>
                    </a>

                    <a
                      href={docxUrl}
                      download
                      title={`Download original ${course.title} syllabus DOCX`}
                      aria-label={`Download original DOCX syllabus for ${course.title}`}
                      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                    >
                      DOCX
                    </a>
                  </div>

                  {/* Direct Contact / Enquiry Button */}
                  <a
                    href="#contact"
                    onClick={() => onSelectProgram?.(course.title)}
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-cyan-400/10 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-cyan-700 transition-colors hover:bg-cyan-400 hover:text-slate-950 dark:bg-cyan-400/15 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
                  >
                    <span>Enquire Course</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs