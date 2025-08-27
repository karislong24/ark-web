export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#123524',  // Ark green
      color: 'white',
      padding: '4rem 2rem',
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'start'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '0.5rem' }}>
        Ark Intelligence
      </h1>
      <p style={{ maxWidth: 720, fontSize: '1.25rem', lineHeight: 1.6 }}>
        Safeguarding Innovation with Wisdom. 
        We help Heads of Operations in
        <b> Healthcare</b>, <b> Law Enforcement</b>, and <b> Oil &amp; Gas</b>
        deliver trustworthy AI that improves efficiency and outcomes.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/rfp" style={{
          background: '#D4AF37', color: '#123524',
          padding: '1rem 1.5rem', borderRadius: 10,
          fontWeight: 700, textDecoration: 'none'
        }}>
          Request a Proposal
        </a>
      </div>
    </main>
  )
}
