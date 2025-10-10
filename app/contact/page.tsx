import Turnstile from '@/components/Turnstile';

export default function ContactPage() {
  return (
    <main style={{padding: "2rem 1rem", maxWidth: 720, margin: "0 auto"}}>
      <h1>Contact</h1>
      <p>Tell us a bit about your project. We’ll reply by email.</p>

      <form
        method="POST"
        action="/.netlify/functions/lead"
        autoComplete="off"
        style={{display: "grid", gap: "0.75rem", marginTop: "1rem"}}
      >
        {/* time trap */}
        <input type="hidden" name="t" id="t" />

        {/* honeypot */}
        <div aria-hidden="true" style={{position:"absolute", left:"-9999px", height:0, overflow:"hidden"}}>
          <label>Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label>
          Name
          <input name="name" type="text" required maxLength={80} />
        </label>

        <label>
          Email
          <input name="email" type="email" required maxLength={120} />
        </label>

        <label>
          Phone (optional)
          <input name="phone" type="tel" inputMode="tel" maxLength={32} />
        </label>

        <label>
          Notes (optional)
          <textarea name="notes" rows={4} maxLength={1000}></textarea>
        </label>

        {/* Turnstile (client-only) */}
        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />

        <button type="submit">Send</button>
      </form>

      {/* time-trap init: client-only to avoid SSR mismatch */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded',function(){var i=document.getElementById('t'); if(i){i.value=Date.now().toString();}});`
        }}
      />
    </main>
  );
}
