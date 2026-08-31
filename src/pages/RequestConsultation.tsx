import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageSquare, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, User, Building } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES, FIRM_DETAILS } from '../data/firmData';
import { IMAGES } from '../data/images';

const WHATSAPP_NUMBER = "27621726790";

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  organisation: z.string().optional(),
  email: z.string().email('Valid Email Address is required'),
  phone: z.string().min(10, 'Valid South African Phone Number is required'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  serviceRequired: z.string().min(1, 'Please select a legal service'),
  clientType: z.enum([
    'Individual',
    'Business',
    'Municipality',
    'Government Institution',
    'Property Developer',
    'Other'
  ]),
  preferredContact: z.enum(['WhatsApp', 'Phone Call', 'Email']),
  description: z.string().min(15, 'Please provide a brief description (at least 15 characters)')
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const RequestConsultation: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const [step, setStep] = useState<'form' | 'review'>('form');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      clientType: 'Government Institution',
      serviceRequired: 'Municipal Law & Compliance',
      preferredContact: 'WhatsApp'
    }
  });

  const onFormSubmit = (data: BookingFormData) => {
    setFormData(data);
    setStep('review');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleConfirmAndSendWhatsApp = () => {
    if (!formData) return;

    const formattedMessage = `LEGAL CONSULTATION REQUEST

Name: ${formData.fullName}
Organisation: ${formData.organisation || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}
Service Required: ${formData.serviceRequired}
Client Type: ${formData.clientType}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Preferred Time: ${formData.preferredTime || 'Flexible'}
Preferred Contact: ${formData.preferredContact}
Matter Summary: ${formData.description}

Please contact me regarding a legal consultation.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp deep link
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <SEO
        title="Request Legal Consultation | Matlala M&M Attorneys Inc. Polokwane"
        description="Book a confidential legal consultation with senior attorneys at Matlala M&M Attorneys Inc. Expert advisory for government, municipal, corporate, and private clients."
        keywords={[
          'Book Lawyer Consultation Polokwane',
          'Legal Consultation Request Limpopo',
          'Matlala M&M Consultation',
          'Attorney Appointment Polokwane'
        ]}
        breadcrumbs={[{ label: 'Request Consultation', path: '/request-consultation' }]}
      />

      <Breadcrumbs items={[{ label: 'Request Consultation' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#004C4C] text-white py-16 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Request Consultation Background"
            className="w-full h-full object-cover opacity-70 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003333]/85 via-[#004C4C]/60 to-[#003333]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004C4C]/75 via-transparent to-[#004C4C]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-[#E2C45C] uppercase border-b border-[#D4AF37] pb-1">
            WhatsApp Booking Portal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Request a Consultation
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl font-light">
            Tell us briefly about your requirements and our team will assist you with the next steps.
          </p>
        </div>
      </section>

      {/* Main Consultation Section */}
      <section className="py-20 bg-white text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-sm border-2 border-[#D4AF37] shadow-2xl space-y-8">
            {step === 'form' ? (
              <>
                <div className="border-b border-gray-100 pb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#006666] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Confidential Consultation Request
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004C4C]">
                    Consultation Requirements
                  </h2>
                  <p className="text-xs text-[#1C1C1C]/70">
                    Fields marked with an asterisk (*) are required to process your request.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                  {/* Step 1: Personal / Institutional Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#006666] border-b border-gray-100 pb-1">
                      1. Client Identity &amp; Contact Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="e.g. Dr. Lerato Molefe"
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Organisation / Company
                        </label>
                        <input
                          type="text"
                          {...register('organisation')}
                          placeholder="e.g. Capricorn District Municipality"
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="name@institution.gov.za"
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+27 72 900 3698"
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Service & Client Classification */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#006666] border-b border-gray-100 pb-1">
                      2. Matter Classification
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Type of Service *
                        </label>
                        <select
                          {...register('serviceRequired')}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Governance & Compliance Audit">Governance & Compliance Advisory</option>
                          <option value="General Representation">General Advisory</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Client Type *
                        </label>
                        <select
                          {...register('clientType')}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        >
                          <option value="Government Institution">Government Institution</option>
                          <option value="Municipality">Municipality</option>
                          <option value="Property Developer">Property Developer</option>
                          <option value="Business">Business / Corporation</option>
                          <option value="Individual">Individual</option>
                          <option value="Other">Other Entity</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Scheduling & Preferences */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#006666] border-b border-gray-100 pb-1">
                      3. Preferred Schedule &amp; Contact Channel
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          {...register('preferredDate')}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Preferred Time
                        </label>
                        <input
                          type="time"
                          {...register('preferredTime')}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                          Preferred Contact Method *
                        </label>
                        <select
                          {...register('preferredContact')}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                        >
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Phone Call">Phone Call</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-[#1C1C1C]/80">
                        Brief Description *
                      </label>
                      <textarea
                        rows={4}
                        {...register('description')}
                        placeholder="Please provide a concise overview of your requirements or request..."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#006666]"
                      />
                      {errors.description && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.description.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#006666] hover:bg-[#004C4C] text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-colors border border-[#D4AF37]/40 flex items-center justify-center gap-2"
                    >
                      <span>Review &amp; Proceed to WhatsApp</span>
                      <ArrowRight className="w-4 h-4 text-[#E2C45C]" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Review & Confirmation Step */
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 space-y-1">
                  <span className="text-xs font-bold text-[#006666] uppercase tracking-wider">
                    Step 2 of 2: Review Consultation Request
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-[#004C4C]">
                    Verify Your Consultation Details
                  </h2>
                  <p className="text-xs text-[#1C1C1C]/70">
                    Review your details below before launching WhatsApp to send your request directly to Keatlegile Mabena.
                  </p>
                </div>

                {/* Preformatted Message Preview Box */}
                <div className="p-6 bg-[#1C1C1C] text-white rounded-sm border-2 border-[#D4AF37] space-y-4 shadow-lg font-mono text-xs leading-relaxed">
                  <div className="text-[10px] text-[#E2C45C] font-bold uppercase tracking-widest border-b border-white/20 pb-2 flex items-center justify-between">
                    <span>Generated WhatsApp Message Payload</span>
                    <span className="text-white/60">Business No: +27 62 172 6790</span>
                  </div>

                  <pre className="whitespace-pre-wrap font-mono text-white/90">
                    {`CONSULTATION REQUEST

Name: ${formData?.fullName}
Organisation: ${formData?.organisation || 'N/A'}
Email: ${formData?.email}
Phone: ${formData?.phone}
Service Required: ${formData?.serviceRequired}
Client Type: ${formData?.clientType}
Preferred Date: ${formData?.preferredDate || 'Flexible'}
Preferred Time: ${formData?.preferredTime || 'Flexible'}
Preferred Contact: ${formData?.preferredContact}
Summary: ${formData?.description}

Please contact me regarding a consultation.`}
                  </pre>
                </div>

                {/* Explicit Notice as mandated by prompt */}
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-xs text-amber-900 rounded-r-sm space-y-1">
                  <strong>Important Notice:</strong> Submitting this request initiates an inquiry via WhatsApp Business and does not guarantee a scheduled appointment until explicitly confirmed.
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    onClick={handleConfirmAndSendWhatsApp}
                    className="w-full sm:flex-1 py-4 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-xl transition-all border border-emerald-400 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5 fill-current stroke-none" />
                    <span>Open WhatsApp &amp; Send Request</span>
                  </button>

                  <button
                    onClick={() => setStep('form')}
                    className="w-full sm:w-auto px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
