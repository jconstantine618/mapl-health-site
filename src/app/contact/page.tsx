'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Building2 } from 'lucide-react';

const roleOptions = [
  'Collection Site',
  'Independent Pharmacy',
  'High-Complexity Lab',
  'Telehealth Provider',
  'DPC Practice',
  'Imaging Center',
  'Investor',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you&apos;re a healthcare provider interested in joining the marketplace or an
              investor exploring the opportunity — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h2>
                  <p className="text-slate-600 mb-4">
                    Thank you for reaching out. We&apos;ll respond within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        I am a... *
                      </label>
                      <select
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 bg-white"
                      >
                        <option value="">Select your type</option>
                        {roleOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none"
                      placeholder="Tell us about your practice or investment interest..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle size={18} />
                      <span className="text-sm">Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>Sending...</>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={20} className="text-emerald-600" />
                  <h3 className="font-semibold text-slate-900">Email Directly</h3>
                </div>
                <a
                  href="mailto:jconstantine@maplhealth.com"
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  jconstantine@maplhealth.com
                </a>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 size={20} className="text-emerald-600" />
                  <h3 className="font-semibold text-slate-900">Public Company</h3>
                </div>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>ARCpoint Inc.</p>
                  <p>TSXV: ARC</p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                <p className="text-sm text-slate-600">
                  We typically respond within 1–2 business days. For urgent investor inquiries,
                  please indicate so in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
