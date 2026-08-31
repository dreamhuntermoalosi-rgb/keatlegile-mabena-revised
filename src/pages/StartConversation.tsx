import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FIRM_DETAILS } from '../data/firmData';

export const StartConversation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Speaking / Keynotes',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Start a Conversation | Keatlegile Mabena"
        description="Reach out to Keatlegile Mabena for keynote speaking invitations, mentorship, career coaching, book enquiries, or MBN Empire services."
        canonicalUrl="https://keatlegilemabena.com/start-a-conversation"
      />

      <Breadcrumbs items={[{ label: 'Start a Conversation' }]} />

      <section className="bg-[#004C4C] text-white py-16 sm:py-20 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006666] border border-[#D4AF37]/40 rounded-sm text-xs font-semibold text-[#E2C45C] uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT WITH KEATLEGILE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Start a Conversation
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            You don't have to know every step. You just need to be willing to take the next one.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-[#1C1C1C]">
                  How We Can Collaborate
                </h2>
                <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
                  Whether you are booking Keatlegile for a keynote presentation, seeking mentorship, asking about books, or engaging MBN Empire for professional services, we look forward to connecting.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 bg-[#F8F5EF] rounded-sm border-l-4 border-[#006666] flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#006666] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#004C4C]">Phone / WhatsApp</div>
                    <a href={`tel:${FIRM_DETAILS.contact.phone.replace(/\s+/g, '')}`} className="text-xs text-[#1C1C1C]/80 hover:underline">
                      {FIRM_DETAILS.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F5EF] rounded-sm border-l-4 border-[#D4AF37] flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#004C4C]">Direct Email</div>
                    <a href={`mailto:${FIRM_DETAILS.contact.email}`} className="text-xs text-[#1C1C1C]/80 hover:underline">
                      {FIRM_DETAILS.contact.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F5EF] rounded-sm border-l-4 border-[#006666] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#006666] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#004C4C]">Location</div>
                    <p className="text-xs text-[#1C1C1C]/80">
                      Gauteng &amp; Nationwide, South Africa (Available for international keynotes)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-[#F8F5EF] p-8 sm:p-10 rounded-sm border border-[#D4AF37]/30 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-[#004C4C]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#1C1C1C]/80">
                    Your message has been received. Keatlegile or a representative will respond to your enquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#004C4C]">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
                        placeholder="e.g. Thabo Mokoena"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
                        placeholder="e.g. thabo@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
                        placeholder="+27 72 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                        Topic of Enquiry
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option>Speaking / Keynotes</option>
                        <option>Mentorship Programme</option>
                        <option>Career Guidance</option>
                        <option>Books &amp; Authorship</option>
                        <option>MBN Empire Services</option>
                        <option>Media / Interview</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37]"
                      placeholder="Share a brief overview of your request or event details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#004C4C] hover:bg-[#006666] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#E2C45C]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
