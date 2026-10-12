import { useState, useRef, useEffect } from 'react';

// Options data – mirroring the original select optgroups
const OPTIONS = [
  // Training Plans
  { label: 'Basic Plan (30 Hours — ₹10,000)', value: 'Basic Plan (30 Hours — ₹10,000)' },
  { label: 'Professional Plan (60 Hours — ₹20,000)', value: 'Professional Plan (60 Hours — ₹20,000)' },
  { label: 'Advanced Plan (90 Hours — ₹30,000)', value: 'Advanced Plan (90 Hours — ₹30,000)' },
  { label: 'Expert Plan (120 Hours — ₹40,000)', value: 'Expert Plan (120 Hours — ₹40,000)' },
  // Individual Courses
  { label: 'Cybersecurity Fundamentals – Basic (30 Hours)', value: 'Cybersecurity Fundamentals – Basic' },
  { label: 'Certified Ethical Hacking & AI – Professional (60 Hours)', value: 'Certified Ethical Hacking & AI – Professional' },
  { label: 'AI Cybersecurity Professional (60 Hours)', value: 'AI Cybersecurity Professional' },
  { label: 'Microsoft Security Operations & Defender Sentinel (60 Hours)', value: 'Microsoft Security Operations & Defender Sentinel Professional' },
  { label: 'Advanced Splunk Admin & Developer (90 Hours)', value: 'Advanced Splunk Admin & Developer' },
  { label: 'Advanced Splunk Enterprise Security (90 Hours)', value: 'Advanced Splunk Enterprise Security' },
  { label: 'Advanced Cyber Security & Defense (90 Hours)', value: 'Advanced Cyber Security & Defense Practitioner' },
  { label: 'Certified Ethical Hacking & AI – Expert (120 Hours)', value: 'Certified Ethical Hacking & AI – Expert' },
];

/**
 * Accessible custom dropdown component that works with the site's dark/light theme.
 * Props:
 *  - selected: currently selected value (string)
 *  - onSelect: callback invoked with the new value
 *  - placeholder: text shown when no value is selected
 */
export default function ProgramSelect({ selected, onSelect, placeholder }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Keyboard navigation – open with ArrowDown/Enter, close with Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (value) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-2 text-left rounded-xl border border-slate-300 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/15 dark:bg-[#070d14] dark:focus:border-cyan-400 dark:focus:bg-[#0a121d] dark:focus:ring-2 dark:focus:ring-cyan-400/20"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          className={`truncate ${
            selected
              ? 'font-medium text-slate-900 dark:text-white'
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          {selected || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            open
              ? 'rotate-180 text-cyan-600 dark:text-cyan-400'
              : 'text-slate-400 dark:text-slate-400'
          }`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1.5 w-full max-h-60 overflow-auto rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl dark:border-white/15 dark:bg-[#0a121d]"
        >
          {OPTIONS.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={selected === opt.value}
              className={`cursor-pointer px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm transition-colors ${
                selected === opt.value
                  ? 'bg-cyan-500/10 font-bold text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300'
                  : 'text-slate-800 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white'
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
