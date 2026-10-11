import trainerImage from '../assets/trainer image.jpg'

function Trainer() {
  return (
    <section
      id="trainer"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">

              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-transparent blur-xl opacity-80 dark:opacity-40" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-cyan-500/20 dark:bg-[#0a0f16]">

                {/* Founder Photo */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-white/10 dark:bg-[#05070a]">
                  <img
                    src={trainerImage}
                    alt="Ankita Saraf, Founder of I AM CYBER SOLDIER"
                    className="aspect-4/3 w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Founder Name and Title */}
                <div className="mt-5 flex flex-col items-center text-center">
                  <p className="text-xl font-extrabold text-slate-950 dark:text-white">
                    Ankita Saraf
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      Founder — I AM CYBER SOLDIER
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Founder Introduction */}
          <div className="lg:col-span-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
              Meet Our Founder
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Ankita{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                Saraf
              </span>
            </h2>

            <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
              Founder of I AM CYBER SOLDIER
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Welcome to I AM CYBER SOLDIER. We are committed to helping
              individuals build their knowledge and explore opportunities
              in cybersecurity through our training programs.
            </p>

            {/* Contact Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 0 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="tel:+919588699836"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                +91 95886 99836
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainer