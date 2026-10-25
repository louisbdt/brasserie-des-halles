function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
        active
          ? 'border-terracotta-500 bg-terracotta-500 text-white'
          : 'border-sage/30 bg-white text-sage hover:border-sage'
      }`}
    >
      {label}
    </button>
  )
}

export default FilterChip
