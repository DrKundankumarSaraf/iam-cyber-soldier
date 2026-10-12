import { useState } from 'react'
import ProgramSelect from '../components/ProgramSelect'

function Contact({ selectedProgram }) {
  const [prevSelectedProgram, setPrevSelectedProgram] = useState(selectedProgram)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgram?.name || '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  if (selectedProgram !== prevSelectedProgram) {
    setPrevSelectedProgram(selectedProgram)
    if (selectedProgram?.name) {
      setFormData((prev) => ({
        ...prev,
        program: selectedProgram.name,
      }))
      setSubmitted(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errorMsg) setErrorMsg('')
  }

  const handleProgramSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      program: value,
    }))

    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedPhone = formData.phone.trim()
    const trimmedEmail = formData.email.trim()

    if (!trimmedName || !trimmedPhone || !trimmedEmail) {
      setErrorMsg(
        'Please provide your name, phone number, and email address.'
      )
      return
    }

    const cleanPhone = trimmedPhone.replace(/[\s\-()]/g, '')
    const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/

    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg(
        'Please enter a valid 10-digit mobile number (e.g., 98765 43210 or +91 98765 43210).'
      )
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg(
        'Please enter a valid email address (e.g., user@example.com).'
      )
      return
    }

    setErrorMsg('')
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrorMsg('')

    setFormData({
      name: '',
      phone: '',
      email: '',
      program: '',
      message: '',
    })
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#05070a]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
              Get in Touch
            </div>

            <h2 className="mt-4 text-2xl min-[380px]:text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Ready to Build{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Real Skills?
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Have questions about program schedules, fees, or industrial
              curriculum? Reach out directly or submit your enquiry.
            </p>

            {/* Phone and Email */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+919588699836"
                className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-md dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-700 transition group-hover:bg-cyan-400 group-hover:text-slate-950 dark:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] min-[380px]:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Direct Call / WhatsApp
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-extrabold text-slate-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    +91 95886 99836
                  </p>
                </div>
              </a>

              <a
                href="mailto:training.support@iamcybersoldier.com"
                className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-md dark:border-white/10 dark:bg-[#0a0f16] dark:hover:border-cyan-400/30 dark:hover:bg-[#0c141d]"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-700 transition group-hover:bg-cyan-400 group-hover:text-slate-950 dark:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] min-[380px]:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Training Support Email
                  </p>
                  <p className="mt-0.5 break-all text-xs min-[360px]:text-sm font-extrabold text-slate-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    training.support@iamcybersoldier.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                  Admissions &amp; Consultation Active
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Batches forming regularly for all 8 industrial cybersecurity
                tracks.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 min-[380px]:p-6 sm:p-8 shadow-xl dark:border-white/10 dark:bg-[#0a0f16]">
              {submitted ? (
                /* Success Confirmation State */
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">
                    Enquiry Prepared!
                  </h3>

                  <p className="mx-auto mt-2.5 max-w-md text-sm text-slate-600 dark:text-slate-300">
                    Thank you,{' '}
                    <span className="font-bold text-slate-900 dark:text-white">
                      {formData.name}
                    </span>
                    . For immediate counseling, call{' '}
                    <a
                      href="tel:+919588699836"
                      className="font-bold text-cyan-600 hover:underline dark:text-cyan-400"
                    >
                      +91 95886 99836
                    </a>{' '}
                    or email us anytime.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 rounded-xl border border-slate-300 bg-slate-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                /* Main Form */
                <>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                      Send an Enquiry
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Fill out your details to receive course curriculum and
                      enrollment guidance.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-6 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-[#070d14] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-cyan-400 dark:focus:bg-[#0a121d] dark:focus:ring-2 dark:focus:ring-cyan-400/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-[#070d14] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-cyan-400 dark:focus:bg-[#0a121d] dark:focus:ring-2 dark:focus:ring-cyan-400/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-[#070d14] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-cyan-400 dark:focus:bg-[#0a121d] dark:focus:ring-2 dark:focus:ring-cyan-400/20"
                      />
                    </div>

                    {/* Program of Interest */}
                    <div>
                      <label
                        htmlFor="program"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                      >
                        Program of Interest
                      </label>

                      <ProgramSelect
                        selected={formData.program}
                        onSelect={handleProgramSelect}
                        placeholder="Select a Cybersecurity Program or Plan (Optional)"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                      >
                        Message / Enquiry Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ask about course fees, syllabus details, batch schedules, or enrollment..."
                        className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-[#070d14] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-cyan-400 dark:focus:bg-[#0a121d] dark:focus:ring-2 dark:focus:ring-cyan-400/20"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      <span>Send Enquiry</span>
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
                    </button>

                    <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                      Your privacy is protected. Direct training consultation
                      only.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact