import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight:"100vh", background:"#123524", color:"#fff", padding:"4rem 2rem" }}>
      <h1 style={{ fontSize:"3rem", color:"#D4AF37" }}>Ark Intelligence</h1>
      <p>Safeguarding Innovation with Wisdom.</p>
      <div style={{ marginTop:"2rem" }}>
        <Link href="/rfp" style={{ background:"#D4AF37", color:"#123524", padding:"1rem 1.5rem", borderRadius:10, textDecoration:"none", fontWeight:700 }}>
          Request a Proposal
        </Link>
      </div>
    </main>
  );
}