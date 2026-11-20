interface SkipLinkProps {
  label: string
}

export function SkipLink({ label }: SkipLinkProps) {
  return (
    <button
      type="button"
      onClick={() => {
        const main = document.getElementById('main')
        main?.focus()
        main?.scrollIntoView({ block: 'start' })
      }}
      className="label sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:bg-bone focus:px-4 focus:py-3 focus:text-[0.65rem] focus:text-ink"
    >
      {label}
    </button>
  )
}
