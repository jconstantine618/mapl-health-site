import Link from 'next/link';
import {
  FlaskConical,
  Pill,
  Microscope,
  Video,
  Stethoscope,
  ScanLine,
  ArrowRight,
  Target,
  Lightbulb,
  Scale,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | MAPL Health',
  description: 'Learn about MAPL Health, our mission to empower independent healthcare providers, and the team behind the platform.',
};

const team = [
  {
    name: 'John Constantine',
    title: 'Chief Executive Officer',
    description: 'Seasoned operator with deep experience in healthcare services, franchise operations, and marketplace strategy. Leading the transformation from franchise model to technology-enabled healthcare marketplace.',
  },
  {
    name: 'Chief Information Officer',
    title: 'CIO',
    description: 'Technology leader driving platform architecture, data infrastructure, and AI-assisted operations. Building the technology stack that powers the six-sided marketplace.',
  },
  {
    name: 'Clinical Program Manager',
    title: 'Clinical PM',
    description: 'Healthcare professional overseeing clinical compliance, CLIA certifications, and provider onboarding. Ensuring every site meets the highest standards of care.',
  },
];

const tailwinds = [
  {
    icon: Scale,
    title: 'FDA LDT Rule',
    description: 'The FDA\'s Laboratory Developed Test rule is reshaping the diagnostics landscape, creating opportunities for validated, marketplace-distributed testing.',
  },
  {
    icon: Target,
    title: 'CLIA Waivers Expanding',
    description: 'Expanding CLIA waiver categories allow more point-of-care testing at collection sites and pharmacies — exactly where MAPL Health operates.',
  },
  {
    icon: Lightbulb,
    title: 'Direct Access Testing',
    description: 'More states are passing direct access testing laws, allowing consumers to order their own lab tests. MAPL Health is built for this shift.',
  },
  {
    icon: TrendingUp,
    title: 'Consumer Health Spending',
    description: 'Consumer healthcare spending is growing as patients take more control of their health decisions, diagnostics, and wellness testing.',
  },
];

const marketplaceSides = [
  { icon: FlaskConical, label: 'Collection Sites', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Pill, label: 'Pharmacies', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Microscope, label: 'Labs', color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { icon: Video, label: 'Telehealth', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Stethoscope, label: 'DPC', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: ScanLine, label: 'Imaging', color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Independent Healthcare
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              MAPL Health exists because independent healthcare providers deserve the same
              tools, technology, and market access that large health systems take for granted.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem We Solve</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Independent healthcare providers — collection sites, pharmacies, labs, telehealth
                  companies, DPC practices, and imaging centers — are operating in silos. Each has
                  capabilities that others need, but there&apos;s no unified platform connecting them.
                </p>
                <p>
                  A collection site can draw blood but can&apos;t market testing directly to consumers.
                  A lab has excess capacity but no demand channel. A telehealth provider can diagnose
                  but can&apos;t close the loop on lab orders. A pharmacy has foot traffic and patient trust
                  but limited clinical revenue.
                </p>
                <p>
                  MAPL Health is the connective tissue. We built a six-sided marketplace that gives
                  every provider type access to the full diagnostics ecosystem — from consumer ordering
                  to specimen collection, lab processing, results delivery, and follow-up care.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">The Marketplace</h3>
              <div className="grid grid-cols-3 gap-4">
                {marketplaceSides.map((side) => (
                  <div key={side.label} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 ${side.bg} rounded-xl flex items-center justify-center`}>
                      <side.icon size={24} className={side.color} />
                    </div>
                    <span className="text-xs font-medium text-slate-600 text-center">{side.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Users size={14} />
                  Connected through MAPL Health
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-slate-400">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium text-emerald-600 mb-3">{member.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Tailwinds */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Regulatory Tailwinds</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              The regulatory environment is shifting in favor of direct-to-consumer diagnostics and independent healthcare providers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tailwinds.map((tw) => (
              <div key={tw.title} className="rounded-xl border border-slate-200 p-6 hover:border-emerald-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tw.icon size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{tw.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{tw.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Whether you&apos;re a provider looking to grow or an investor looking for the next
            healthcare platform play — we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
