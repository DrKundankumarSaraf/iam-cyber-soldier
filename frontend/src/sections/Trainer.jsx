import trainerImage from '../assets/trainer image.jpg'

function Trainer() {
  return (
    <section
      id="trainer"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 transition-colors duration-300 sm:py-24 dark:border-white/10 dark:bg-[#070a0e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Founder Profile Card */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Subtle back ambient glow */}
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-transparent blur-xl opacity-80 dark:opacity-40" />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 min-[380px]:p-5 sm:p-6 shadow-xl dark:border-cyan-500/20 dark:bg-[#0a0f16]">
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
              <p className="text-lg min-[380px]:text-xl font-extrabold text-slate-950 dark:text-white">
                Ankita Saraf
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="font-mono text-[10px] min-[380px]:text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  Founder — I AM CYBER SOLDIER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainer