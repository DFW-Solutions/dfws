'use client';

import {useEffect, useState} from 'react';
import Script from 'next/script';

type Props = { siteKey: string };

export default function Turnstile({ siteKey }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing on the server → avoids hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div
        className="cf-turnstile"
        data-sitekey={siteKey}
        // optional: auto theme
        data-theme="auto"
      />
    </>
  );
}
