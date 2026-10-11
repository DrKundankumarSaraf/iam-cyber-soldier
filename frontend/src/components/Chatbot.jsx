import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../ThemeContext'

function Chatbot() {
  const { darkMode } = useTheme()

  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const quickQuestions = [
    'What programs do you offer?',
    'What are the training fees?',
    'Is coding required?',
    'How can I enquire?',
  ]

  const getBotReply = (question) => {
    const text = question.toLowerCase()

    if (
      text.includes('program') ||
      text.includes('course')
    ) {
      return 'We offer 8 industrial cybersecurity programs: Cybersecurity Fundamentals (30h), Certified Ethical Hacking & AI Professional (60h), AI Cybersecurity (60h), Microsoft Defender & Sentinel (60h), Advanced Splunk Admin & Developer (90h), Advanced Splunk Enterprise Security (90h), Advanced Cyber Security & Defense (90h), and Certified Ethical Hacking & AI Expert (120h).'
    }

    if (
      text.includes('syllabus') ||
      text.includes('curriculum')
    ) {
      return 'You can download the official PDF and DOCX syllabi for all 8 courses directly in the Training Programs section, or submit an enquiry to receive detailed module outlines.'
    }

    if (
      text.includes('price') ||
      text.includes('fee') ||
      text.includes('cost') ||
      text.includes('plan')
    ) {
      return 'Our 4 training plans are: Basic (30 Hours) at ₹10,000, Professional (60 Hours) at ₹20,000, Advanced (90 Hours) at ₹30,000, and Expert (120 Hours) at ₹40,000. You can choose your path in the Training Plans section or enquire directly.'
    }

    if (
      text.includes('coding') ||
      text.includes('programming')
    ) {
      return 'Programming or coding is not mandatory. Basic computer knowledge is required to begin the training.'
    }

    if (
      text.includes('practical') ||
      text.includes('70')
    ) {
      return 'Our training model is structured around 70% practical learning and 30% theory.'
    }

    if (
      text.includes('certificate') ||
      text.includes('certification')
    ) {
      return 'An Industrial Training and Internship Certificate is provided after completion of the training.'
    }

    if (
      text.includes('contact') ||
      text.includes('enquire') ||
      text.includes('enquiry')
    ) {
      return 'You can enquire through the enquiry form on this website, call +91 95886 99836, or email training.support@iamcybersoldier.com.'
    }

    if (text.includes('trainer')) {
      return 'Our trainer is Ankita Saraf, a Cyber Security Trainer with focus areas including SOC, SIEM, VAPT, threat detection, incident response, and AI-driven cybersecurity.'
    }

    return 'I can help you with training programs, fees, eligibility, practical training, certificates, trainer information, and enquiries. What would you like to know?'
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const sendQuestion = (question) => {
    if (!question.trim() || isTyping) return

    const userMessage = question.trim()

    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        text: userMessage,
      },
    ])

    setMessage('')
    setIsTyping(true)

    setTimeout(() => {
      const botReply = getBotReply(userMessage)

      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: botReply,
        },
      ])

      setIsTyping(false)
    }, 700)
  }

  const handleSend = () => {
    sendQuestion(message)
  }

  const handleQuickQuestion = (question) => {
    sendQuestion(question)
  }

  return (
    <>
      {/* Chat Window */}
      <div
        aria-hidden={!isOpen}
        className={`fixed bottom-24 right-4 z-[100] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right transition-all duration-300 ease-out sm:right-6 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
      >
        <div
          className={`flex max-h-[min(600px,calc(100vh-8rem))] flex-col overflow-hidden rounded-2xl border shadow-2xl ${
            darkMode
              ? 'border-white/10 bg-[#081016]'
              : 'border-gray-200 bg-white'
          }`}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-gray-200 p-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-cyan-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 18.5a9 9 0 1 1 3.2 2.1L6 22l1-3.5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 10.5h7M8.5 13.5h4.5"
                  />
                </svg>

                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#081016] bg-green-400" />
              </div>

              <div>
                <p
                  className={`text-sm font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Cyber Soldier AI
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-xs text-gray-500">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI chatbot"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            {/* Welcome Message */}
            <div className="flex gap-2">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-800 dark:bg-white/5 dark:text-slate-200">
                <p>
                  👋 Hi! I'm Cyber Soldier AI.
                </p>

                <p className="mt-1.5">
                  I can help you with our cybersecurity programs,
                  course curricula, fees, eligibility and enquiries.
                </p>
              </div>
            </div>

            {/* Conversation Messages */}
            {messages.map((msg, index) => (
              <div
                key={`${msg.type}-${index}`}
                className={`mt-3 flex ${
                  msg.type === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.type === 'user'
                      ? 'rounded-br-sm bg-cyan-400 font-medium text-slate-950'
                      : 'rounded-bl-sm bg-slate-100 text-slate-800 dark:bg-white/5 dark:text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="mt-3 flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3 dark:bg-white/5">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Quick Questions */}
            {messages.length === 0 && !isTyping && (
              <div className="mt-5 space-y-2">
                <p
                  className={`mb-2 text-[11px] font-medium uppercase tracking-wider ${
                    darkMode
                      ? 'text-gray-500'
                      : 'text-gray-400'
                  }`}
                >
                  Quick questions
                </p>

                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isTyping}
                    className="block w-full rounded-xl border border-cyan-500/30 px-3 py-2.5 text-left text-xs font-semibold text-cyan-800 transition hover:border-cyan-500 hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-50 dark:border-cyan-400/20 dark:text-cyan-400 dark:hover:bg-cyan-400/5"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-gray-200 p-3 dark:border-white/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend()
                  }
                }}
                placeholder="Ask something..."
                disabled={isTyping}
                aria-label="Ask Cyber Soldier AI"
                className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-600"
              />

              <button
                type="button"
                onClick={handleSend}
                disabled={!message.trim() || isTyping}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 12 14-7-3 14-4-6-7-1Z"
                  />
                </svg>
              </button>
            </div>

            <p
              className={`mt-2 text-center text-[10px] ${
                darkMode
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}
            >
              Cyber Security Training Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen
            ? 'Close AI chatbot'
            : 'Open AI chatbot'
        }
        aria-expanded={isOpen}
        className={`fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 sm:right-6 ${
          isOpen
            ? 'border-cyan-300 bg-cyan-400 text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)]'
            : 'border-cyan-300/30 bg-cyan-400 text-black shadow-[0_8px_35px_rgba(34,211,238,0.35)] hover:scale-110 hover:bg-cyan-300'
        }`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 18.5a9 9 0 1 1 3.2 2.1L6 22l1-3.5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.5 10.5h7M8.5 13.5h4.5"
            />
          </svg>
        )}
      </button>
    </>
  )
}

export default Chatbot