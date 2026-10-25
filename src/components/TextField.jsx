function TextField({ id, label, error, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-ink/80">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-terracotta-700">
          {error}
        </p>
      )}
    </div>
  )
}

export default TextField
