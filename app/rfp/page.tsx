"use client";
import Link from "next/link";
import { useState } from "react";

export default function RfpPage() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <main style={{ padding:"2rem", maxWidth:720, margin:"0 auto" }}>
        <h1>Thanks!</h1>
        <p>We received your request.</p>
        <Link href="/" style={{ textDecoration:"underline" }}>Back to home</Link>
      </main>
    );
  }

  return (
    <main style={{ padding:"2rem", maxWidth:720, margin:"0 auto" }}>
      <h1>Request a Proposal</h1>
      <p><b>Do not include PHI/PII.</b></p>

      <form onSubmit={(e)=>{ e.preventDefault(); setSent(true); }}>
        {/* form fields */}
        <button type="submit" style={{ background:"#123524", color:"#fff", padding:"0.75rem 1.25rem", borderRadius:8 }}>
          Submit
        </button>
      </form>
    </main>
  );
}