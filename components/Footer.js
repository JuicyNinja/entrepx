import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="row">
          <img src="/entrepx-logo-white.webp" alt="EntrepX, We build owners" width="78" height="40" />
          <nav aria-label="Footer">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/what-you-get">What you get</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/build-value">Build value</Link>
            <Link href="/entrepx-vs-franchise">Vs. franchise</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/survey">Readiness survey</Link>
            <Link href="/book">Book a session</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
        </div>
        <p className="fine">
          EntrepX is not a franchise. Members build and own their own brand and pay no royalties. Figures on this site are fee
          comparisons and illustrative examples, not projections or promises of earnings. Results depend on the owner, the
          market and the business. Some photos are illustrative.
        </p>
        <p className="fine">© {new Date().getFullYear()} EntrepX. We build owners, who build empires.</p>
      </div>
    </footer>
  );
}
