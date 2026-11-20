export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="ambient-base absolute inset-0" />
      <div className="ambient-crimson absolute inset-0" />
      <div className="ambient-cyan absolute inset-0" />
      <div className="vignette-overlay absolute inset-0" />
      <div className="grain-overlay absolute inset-0" />
    </div>
  )
}
