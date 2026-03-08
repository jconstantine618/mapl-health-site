import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold">MAPL Health</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The platform that powers independent healthcare through one connected diagnostics marketplace.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Solutions</h4>
            <ul className="space-y-2">
              {['Collection Sites', 'Independent Pharmacies', 'High-Complexity Labs', 'Telehealth Providers', 'DPC Practices', 'Imaging Centers'].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Investors', href: '/investors' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Contact</h4>
            <p className="text-slate-400 text-sm mb-2">
              <a href="mailto:jconstantine@maplhealth.com" className="hover:text-white transition-colors">
                jconstantine@maplhealth.com
              </a>
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-slate-400 text-xs">TSXV: ARC</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MAPL Health, Inc. | A subsidiary of ARCpoint Inc. | TSXV: ARC
          </p>
          <p className="text-slate-600 text-xs">
            HIPAA Compliant · ASC 606 Accounting · SEC Reporting
          </p>
        </div>
      </div>
    </footer>
  );
}
