export function StaticFatalError() {
  return (
    <div
      role="alert"
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: '#050506',
        color: '#f4f1ec',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: '32rem' }}>
        <p
          style={{
            margin: 0,
            color: '#d21f3c',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          HIV — The Ultimate Interactive Experience
        </p>
        <h1 style={{ margin: '1rem 0 0', fontSize: '2rem', lineHeight: 1.1 }}>
          The experience could not start.
        </h1>
        <p style={{ margin: '1rem 0 0', color: '#a09d99', lineHeight: 1.6 }}>
          A required part of the application failed to load. Reload the page to try
          again.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            marginTop: '1.5rem',
            padding: '0.9rem 1.4rem',
            border: 0,
            background: '#f4f1ec',
            color: '#050506',
            cursor: 'pointer',
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Reload the experience
        </button>
      </div>
    </div>
  )
}
