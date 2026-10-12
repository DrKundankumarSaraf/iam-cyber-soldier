import { useState } from 'react'

const faqs = [
  {
    question: 'Who can join the cybersecurity training?',
    answer:
      'The training is designed for both freshers and experienced professionals. Basic computer knowledge is required to begin the training.',
  },
  {
    question: 'Do I need programming or coding experience?',
    answer:
      'Programming or coding is not mandatory for joining the training.',
  },
  {
    question: 'Is the training practical?',
    answer:
      'Yes. The training model is structured around 70% practical learning and 30% theory.',
  },
  {
    question: 'What cybersecurity programs are available?',
    answer:
      'Programs include Certified Ethical Hacker, Splunk Admin & Developer, SOC Analyst 1, SOC Analyst 2, CompTIA Security+, and AI-Driven Cyber Security.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'The supplied business information states that an Industrial Training and Internship Certificate is provided after completion of the training.',
  },
  {
    question: 'How can I enquire about course fees, syllabus, or enrollment?',
    answer:
      'Use the enquiry form below or contact our training team directly via phone (+91 95886 99836) or email (training.support@iamcybersoldier.com). We will provide comprehensive course syllabi, fee structures, and batch timings.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // open the first by default for immediate engagement

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
            Frequently Asked Questions
          </div>

          <h2 className="mt-4 text-2xl min-[380px]:text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Questions,{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Answered.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Everything you need to know about our industrial training structure, eligibility, prerequisites, and certifications.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-q-${index}`
            const answerId = `faq-a-${index}`

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-cyan-500/40 bg-slate-50/90 shadow-sm dark:border-cyan-500/30 dark:bg-[#0c131c]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl"
                >
                  <span className="text-sm min-[380px]:text-base font-bold tracking-tight text-slate-900 transition-colors sm:text-lg dark:text-white">
                    {faq.question}
                  </span>

                  {/* Clean SVG Expand/Collapse Icon */}
                  <span
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-700 rotate-180 dark:text-cyan-400'
                        : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200/80 px-4 sm:px-6 py-3.5 sm:py-4.5 dark:border-white/10">
                      <p className="text-xs min-[380px]:text-sm font-normal leading-relaxed text-slate-700 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact note below FAQ */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Have a different question?{' '}
            <a
              href="#contact"
              className="font-bold text-cyan-700 hover:underline dark:text-cyan-400"
            >
              Contact our training advisors directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ