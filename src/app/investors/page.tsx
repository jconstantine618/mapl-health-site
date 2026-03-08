import Link from 'next/link';
import {
  FileText,
  Download,
  TrendingUp,
  DollarSign,
  BarChart3,
  Building2,
  Calendar,
  ExternalLink,
  ArrowRight,
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Relations | MAPL Health',
  description: 'Investment highlights, documents, and press releases for MAPL Health (ARCpoint Inc., TSXV: ARC).',
};

const highlights = [
  { icon: TrendingUp, label: 'Y5 Revenue Target', value: '$165.7M', note: '93% gross margin' },
  { icon: DollarSign, label: 'Y5 EBITDA', value: '$116.6M', note: '70.3% margin' },
  { icon: Building2, label: 'Sites Live', value: '118', note: '6 provider types' },
  { icon: BarChart3, label: 'Y5 GMV Target', value: '$1.5B', note: 'Marketplace volume' },
];

const thesisPoints = [
  'Six-sided healthcare marketplace with strong network effects — each new provider type increases value for all others',
  'Asset-light model: 93% gross margin with AI-assisted operations enabling lean G&A (Rev/Employee: $987K at Y5)',
  'Direct-to-consumer testing is a $20B+ market with regulatory tailwinds (FDA LDT rule, CLIA waivers, direct access testing laws)',
  'Capital-efficient growth: 118 sites live, platform infrastructure in place, ready to scale',
  'Public company structure (TSXV: ARC) provides listing and investor access from Day 1',
];

const documents = [
  {
    title: 'Investor One-Pager',
    description: 'Single-page overview of the MAPL Health opportunity, key metrics, and financial projections.',
    filename: 'MAPL_Health_Investor_OnePager.pdf',
    date: 'March 2026',
    size: '75 KB',
  },
  {
    title: 'DTC Industry Factsheet',
    description: 'Market landscape, regulatory environment, and competitive positioning for direct-to-consumer diagnostics.',
    filename: 'MAPL_DTC_Factsheet.pdf',
    date: 'March 2026',
    size: '120 KB',
  },
  {
    title: 'Company Whitepaper',
    description: 'Deep dive into the six-sided marketplace model, technology platform, and growth strategy.',
    filename: 'MAPL_Health_Whitepaper.pdf',
    date: 'March 2026',
    size: '250 KB',
  },
];

const pressReleases = [
  {
    date: 'March 7, 2026',
    title: 'ARCpoint Inc. Announces MAPL Health Platform Launch',
    summary: 'ARCpoint Inc. (TSXV: ARC) announced the launch of MAPL Health, a six-sided diagnostics marketplace connecting collection sites, pharmacies, labs, telehealth providers, DPC practices, and imaging centers.',
  },
  {
    date: 'February 15, 2026',
    title: 'MAPL Health Reaches 118 Collection Sites Milestone',
    summary: 'The MAPL Health platform has onboarded 118 active collection sites across the United States, accelerating its marketplace network effects.',
  },
  {
    date: 'January 20, 2026',
    title: 'ARCpoint Inc. Completes Corporate Restructuring',
    summary: 'ARCpoint Inc. completes its transition from franchise model to a technology-enabled healthcare marketplace under the MAPL Health brand.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              ARCpoint Inc. | TSXV: ARC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investor Relations
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              MAPL Health is a subsidiary of ARCpoint Inc. (TSXV: ARC), a publicly traded
              healthcare marketplace company. Access investment highlights, company documents,
              and press releases below.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="text-center p-4">
                <h.icon size={24} className="text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-mono)' }}>
                  {h.value}
                </div>
                <p className="text-sm font-medium text-slate-600 mt-1">{h.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Investment Thesis</h2>
          <div className="space-y-4">
            {thesisPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-5 border border-slate-200">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600">{i + 1}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors">
                  <FileText size={24} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{doc.date} · {doc.size}</span>
                  <a
                    href={`/docs/${doc.filename}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((pr) => (
              <div key={pr.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                  <Calendar size={14} />
                  {pr.date}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{pr.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pr.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Company Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Public Company Information</h2>
                <div className="space-y-3 text-slate-300">
                  <p><span className="text-white font-medium">Company:</span> ARCpoint Inc.</p>
                  <p><span className="text-white font-medium">Exchange:</span> TSX Venture Exchange (TSXV)</p>
                  <p><span className="text-white font-medium">Ticker:</span> ARC</p>
                  <p><span className="text-white font-medium">Operating Subsidiary:</span> MAPL Health, Inc.</p>
                  <p><span className="text-white font-medium">Accounting Standard:</span> ASC 606 / SEC Reporting</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Shield size={20} />
                  <span className="font-semibold">HIPAA Compliant</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Investor Inquiries <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
