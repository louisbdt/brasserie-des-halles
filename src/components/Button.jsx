const VARIANTS = {
  primary:
    'bg-terracotta-600 text-white hover:bg-terracotta-700 focus-visible:outline-terracotta-700',
  secondary:
    'bg-transparent text-sage border border-sage hover:bg-sage hover:text-white focus-visible:outline-sage',
}

function Button({ variant = 'primary', type = 'button', disabled = false, onClick, children }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`min-h-11 min-w-11 rounded-lg px-5 py-2.5 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
