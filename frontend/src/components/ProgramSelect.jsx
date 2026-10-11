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
        className="w-full text-left rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#070d14] dark:text-white dark:focus:border-cyan-400"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected || placeholder}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-xl border border-slate-300 bg-white py-1 shadow-lg dark:bg-[#111827]"
        >
          {OPTIONS.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={selected === opt.value}
              className={`cursor-pointer px-4 py-2 text-sm hover:bg-slate-200 dark:hover:bg-[#1f2937] ${selected === opt.value ? 'bg-slate-200 dark:bg-[#1f2937]' : ''} text-slate-900 dark:text-[#F9FAFB]`}
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
