import Link from 'next/link';
import {
  FlaskConical,
  Pill,
  Microscope,
  Video,
  Stethoscope,
  ScanLine,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Building2,
  BarChart3,
} from 'lucide-react';

const stats = [
  { value: '118', label: 'Sites Live', icon: Building2 },
  { value: '93%', label: 'Gross Margin', icon: TrendingUp },
  { value: '6', label: 'Provider Types', icon: Users },
  { value: '$1.5B', label: 'Y5 GMV Target', icon: BarChart3 },
];

const marketplaceSides = [
  {
    icon: FlaskConical,
    title: 'Collection Sites',
    description: 'Turn $10 collections into $100 clinical encounters',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Pill,
    title: 'Independent Pharmacies',
    description: 'New clinical revenue without the overhead',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Microscope,
    title: 'High-Complexity Labs',
    description: 'A demand channel you don\'t have to build',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Video,
    title: 'Telehealth Providers',
    description: 'Complete the care loop with integrated lab ordering',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Stethoscope,
    title: 'DPC Practices',
    description: 'Lab infrastructure built for your model',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: ScanLine,
    title: 'Imaging Centers',
    description: 'Fill your schedule with ecosystem referrals',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
];

const steps = [
  {
    number: '01',
    title: 'Join',
    description: 'Onboard your site or practice onto the MAPL platform in days, not months. We handle credentialing, compliance, and integration.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Access the full diagnostics ecosystem — labs, pharmacies, telehealth, imaging — all through a single marketplace.',
  },
  {
    number: '03',
    title: 'Grow',
    description: 'Expand your clinical menu, capture new revenue streams, and serve patients with consumer-grade ordering and results delivery.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#065f46_0%,_transparent_60%)] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-emerald-600/30">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              TSXV: ARC — Public Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Platform That Powers{' '}
              <span className="text-emerald-400">Independent Healthcare</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Connecting collection sites, pharmacies, labs, telehealth, imaging &amp; DPC
              through one diagnostics marketplace — unlocking clinical revenue for
              independent providers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                See How It Works <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon size={20} className="text-emerald-600 mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-mono)' }}>{stat.value}</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Three simple steps to unlock the full potential of your practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-200 transition-colors">
                <span className="text-4xl font-bold text-emerald-600/20" style={{ fontFamily: 'var(--font-mono)' }}>{step.number}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Sided Marketplace */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Six-Sided Marketplace</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              One platform connecting six types of independent healthcare providers into a unified diagnostics ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceSides.map((side) => (
              <Link
                href="/solutions"
                key={side.title}
                className="group rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${side.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <side.icon size={24} className={side.color} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {side.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{side.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              'TSXV: ARC Listed',
              'HIPAA Compliant',
              'ASC 606 Accounting',
              'SEC Reporting',
              'CLIA Certified',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Healthcare Marketplace?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you run a collection site, pharmacy, lab, or telehealth practice —
            MAPL Health gives you the tools and connections to grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-slate-700 hover:border-slate-500"
            >
              Investor Relations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
