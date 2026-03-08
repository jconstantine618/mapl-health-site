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
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Users,
  Zap,
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | MAPL Health',
  description: 'Discover how MAPL Health serves collection sites, pharmacies, labs, telehealth providers, DPC practices, and imaging centers.',
};

const solutions = [
  {
    id: 'collection-sites',
    icon: FlaskConical,
    title: 'Collection Sites',
    headline: 'Turn $10 Collections into $100 Clinical Encounters',
    description: 'MAPL Health transforms your collection site from a basic specimen draw location into a full clinical testing destination. Activate your clinical menu, enable online ordering, and let consumers discover your services — all through one platform.',
    color: 'border-emerald-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    benefits: [
      { icon: DollarSign, text: '10x revenue uplift per encounter — move from $10 draws to $100+ clinical panels' },
      { icon: ShoppingCart, text: 'Consumer-direct ordering — patients find and order tests online' },
      { icon: Zap, text: 'Activate your full clinical testing menu without new infrastructure' },
      { icon: TrendingUp, text: 'Online discovery and consumer marketing built into the platform' },
    ],
    painPoints: [
      'Revenue limited to basic specimen collection fees',
      'No way to market clinical services directly to consumers',
      'Dependent on physician referrals for all volume',
      'Clinical menu underutilized — capabilities exceed demand',
    ],
  },
  {
    id: 'pharmacies',
    icon: Pill,
    title: 'Independent Pharmacies',
    headline: 'MinuteClinic Economics Without the Overhead',
    description: 'PBM compression is squeezing pharmacy margins. MAPL Health opens new clinical service lines that generate real revenue — diagnostics, wellness testing, and point-of-care screening — using your existing staff, space, and patient relationships.',
    color: 'border-teal-500',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    benefits: [
      { icon: DollarSign, text: 'New clinical revenue streams that combat PBM margin compression' },
      { icon: Users, text: 'Hub-and-spoke model — your pharmacy becomes the neighborhood health hub' },
      { icon: Shield, text: 'No capital outlay — leverage your existing space, staff, and relationships' },
      { icon: Zap, text: 'Point-of-care testing, wellness panels, and clinical screening services' },
    ],
    painPoints: [
      'PBM reimbursement rates declining year over year',
      'Limited revenue diversification beyond dispensing',
      'Can\'t compete with MinuteClinic / retail health without massive investment',
      'Patient relationships undermonetized despite high trust and foot traffic',
    ],
  },
  {
    id: 'labs',
    icon: Microscope,
    title: 'High-Complexity Labs',
    headline: 'A Demand Channel You Don\'t Have to Build',
    description: 'Your lab has capacity, capabilities, and quality. What it doesn\'t have is a consumer demand channel. MAPL Health routes consumer-initiated test orders directly to your lab — think of it as being listed on Amazon, but for diagnostics.',
    color: 'border-cyan-500',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
    benefits: [
      { icon: ShoppingCart, text: 'Consumer orders routed directly to your lab — no sales team required' },
      { icon: TrendingUp, text: 'Volume aggregation from 118+ collection sites and growing' },
      { icon: Users, text: 'Like being listed on Amazon — demand finds you through the marketplace' },
      { icon: DollarSign, text: 'Fill excess capacity with cash-pay and consumer-direct volume' },
    ],
    painPoints: [
      'Building direct-to-consumer demand channels is expensive',
      'Dependent on a small number of large health system contracts',
      'Excess capacity sitting idle during off-peak periods',
      'No visibility to consumers who want to order tests directly',
    ],
  },
  {
    id: 'telehealth',
    icon: Video,
    title: 'Telehealth Providers',
    headline: 'Complete the Care Loop',
    description: 'Telehealth encounters often end with "go get labs done." MAPL Health closes that loop — integrated lab ordering, specimen collection, results delivery, and Rx management all within your virtual care workflow.',
    color: 'border-emerald-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    benefits: [
      { icon: Zap, text: 'Integrated lab ordering within your telehealth workflow' },
      { icon: CheckCircle2, text: 'Results flow back to the ordering provider automatically' },
      { icon: ShoppingCart, text: 'Pre-consult ordering — patients arrive with labs already completed' },
      { icon: Shield, text: 'Rx management support integrated with diagnostic results' },
    ],
    painPoints: [
      'No way to order and track labs from within virtual visit',
      'Patients lost in the lab-ordering gap between visit and follow-up',
      'Can\'t offer pre-visit labs to improve consultation quality',
      'Fragmented results delivery across multiple systems',
    ],
  },
  {
    id: 'dpc',
    icon: Stethoscope,
    title: 'DPC Practices',
    headline: 'Lab Ordering Infrastructure Built for Your Model',
    description: 'Direct Primary Care practices need lab ordering that works with their membership model — not against it. MAPL Health provides consumer marketing, online ordering, routing, and results delivery so you can focus on patient care, not platform building.',
    color: 'border-teal-500',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    benefits: [
      { icon: ShoppingCart, text: 'Direct-to-consumer marketing and ordering — patients self-serve' },
      { icon: Zap, text: 'Routing and logistics handled by the platform' },
      { icon: Shield, text: 'No platform build required — plug into existing infrastructure' },
      { icon: DollarSign, text: 'Transparent pricing that aligns with your membership model' },
    ],
    painPoints: [
      'Building lab ordering infrastructure is expensive and distracting',
      'No consumer-facing ordering portal for your patients',
      'Can\'t offer competitive lab pricing without volume leverage',
      'Administrative burden of lab logistics detracts from patient care',
    ],
  },
  {
    id: 'imaging',
    icon: ScanLine,
    title: 'Imaging Centers',
    headline: 'Fill Your Schedule with Cash-Pay Referrals',
    description: 'MAPL Health\'s ecosystem generates imaging referrals from telehealth providers, DPC practices, and clinical sites. Your MRI, CT, and X-Ray capacity is routed to patients who need it — with cash-pay pricing that works for everyone.',
    color: 'border-cyan-500',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
    benefits: [
      { icon: Users, text: 'Ecosystem routing from telehealth, DPC, and collection sites' },
      { icon: DollarSign, text: 'Cash-pay referrals for MRI, CT, X-Ray, and ultrasound' },
      { icon: TrendingUp, text: 'Fill schedule gaps with consumer-direct volume' },
      { icon: Zap, text: 'Integrated ordering from telehealth visits — seamless referral pathway' },
    ],
    painPoints: [
      'Schedule gaps during off-peak hours and days',
      'Limited referral sources beyond local physician networks',
      'No direct-to-consumer ordering or discovery channel',
      'Cash-pay patients can\'t easily find and book imaging services',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for Every Side of Healthcare
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              MAPL Health connects six types of independent healthcare providers into one marketplace.
              Find out how we solve the unique challenges your practice faces every day.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 -mx-4 px-4 scrollbar-hide">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-600 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors"
              >
                <s.icon size={14} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div>
                <div className={`w-14 h-14 ${solution.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <solution.icon size={28} className={solution.iconColor} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {solution.headline}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <benefit.icon size={16} className="text-emerald-600" />
                      </div>
                      <p className="text-slate-700 leading-relaxed">{benefit.text}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>

              {/* Right: Pain Points */}
              <div className={`bg-white rounded-xl border ${solution.color} border-l-4 p-8`}>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  The Problem We Solve
                </h3>
                <div className="space-y-4">
                  {solution.painPoints.map((pain, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-slate-400">{i + 1}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{pain}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Practice Type?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            The MAPL Health marketplace is expanding. Reach out and we&apos;ll explore how your
            practice fits into the ecosystem.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
