function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sage-light/15 px-2.5 py-1 text-sm font-medium text-sage">
      {children}
    </span>
  )
}

export default Badge
