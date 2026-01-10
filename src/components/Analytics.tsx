import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Replace with actual Plausible domain later */}
      <Script
        defer
        data-domain="antigravity-portfolio.vercel.app"
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
