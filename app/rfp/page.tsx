'use client'

import { useState } from 'react'

export default function RfpPage() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <main style={{ padding: '2rem', maxWidth: 720, margin: '0 auto' }}>
        <h1>Thanks!</h1>
        <p>We received your request. We’ll follow up shortly.</p>
        <a href="/" style={{ textDecoration: 'underline' }}>Back to home</a>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', maxWidth: 720, margin: '0 auto' }}>
      <h1>Request a Proposal</h1>
      <p><b>Do not include PHI/PII.</b> Describe the operational problem only.</p>

      <form onSubmit={(e)=>{ e.preventDefault(); setSent(true) }}>
        <label>Industry<br/>
          <select name="industry" required>
            <option value="healthcare">Healthcare</option>
            <option value="law_enforcement">Law Enforcement</option>
            <option value="oil_gas">Oil &amp; Gas</option>
          </select>
        </label><br/><br/>

        <label>Use case<br/>
          <textarea name="use_case" rows={6} required placeholder="Describe the ops problem..." style={{width:'100%'}}/>
        </label><br/><br/>

        <div style={{ display:'grid', gap:'1rem', gridTemplateColumns:'1fr 1fr' }}>
          <label>Timeline<br/><input name="timeline"/></label>
          <label>Budget Range<br/><input name="budget_range"/></label>
        </div><br/>

        <div>
          <label><input type="checkbox" required/> I confirm I have not included PHI/PII.</label>
        </div><br/>

        <div style={{ display:'grid', gap:'1rem', gridTemplateColumns:'1fr 1fr 1fr' }}>
          <label>Company<br/><input name="contact_company" required/></label>
          <label>Role<br/><input name="contact_role" required/></label>
          <label>Work Email<br/><input type="email" name="contact_email" required/></label>
        </div><br/>

        <button type="submit" style={{
          background:'#123524', color:'white', padding:'0.75rem 1.25rem',
          borderRadius:8, border:'1px solid #123524'
        }}>
          Submit
        </button>
      </form>
    </main>
  )
}