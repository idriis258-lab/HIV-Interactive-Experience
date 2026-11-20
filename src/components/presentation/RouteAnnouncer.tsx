interface RouteAnnouncerProps {
  message: string
}

export function RouteAnnouncer({ message }: RouteAnnouncerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  )
}
