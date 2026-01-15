import Script from "next/script";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* Replace with actual Plausible domain later */}
      <Script
        defer
        data-domain="NohanBaloch.vercel.app"
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
