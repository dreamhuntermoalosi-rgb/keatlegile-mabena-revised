import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageSquare, Calendar, CheckCircle2, ShieldCheck, ArrowRight, User, Building, Mail, Phone, MapPin, Users, Send, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FIRM_DETAILS } from '../data/firmData';
import { IMAGES } from '../data/images';
import { submitToWeb3Forms } from '../utils/web3forms';

const WHATSAPP_NUMBER = FIRM_DETAILS.contact.whatsappNumber;

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  organisation: z.string().optional(),
  email: z.string().email('Valid Email Address is required'),
  phone: z.string().min(10, 'Valid Phone / WhatsApp Number is required'),
  serviceRequired: z.string().min(1, 'Please select a booking category'),
  engagementFormat: z.enum([
    'In-Person Keynote',
    'Online / Virtual Keynote',
    'Executive Mentorship (1-on-1)',
    'Interactive Workshop / Masterclass',
    'Panel / Guest Speaking',
    'Books & Bulk Order Request'
  ]),
  preferredDate: z.string().optional(),
  eventLocation: z.string().optional(),
  estimatedAudience: z.string().optional(),
  message: z.string().min(15, 'Please share event details or message (at least 15 characters)'),
  popiaConsent: z.boolean().refine(val => val === true, {
    message: 'You must consent to POPIA data processing to submit'
  })
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookKeatlegile: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceRequired: 'Keynote Address & Guest Speaker',
      engagementFormat: 'In-Person Keynote',
      popiaConsent: true
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmittedData(data);

    // Direct client-side submission to Web3Forms API
    await submitToWeb3Forms({
      subject: `New Booking Request: ${data.fullName} - ${data.serviceRequired}`,
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      organization: data.organisation || 'Independent / Individual',
      service: data.serviceRequired,
      format: data.engagementFormat,
      preferredDate: data.preferredDate || 'Flexible / To be confirmed',
      eventLocation: data.eventLocation || 'To be specified',
      estimatedAudience: data.estimatedAudience || 'N/A',
      message: data.message
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 250, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Book Keatlegile Mabena | Keynotes, Mentorship & Advisory"
        description="Submit a booking request for Keatlegile Mabena for keynote addresses, executive mentorship, youth leadership development, or strategic advisory."
        keywords={[
          'Book Keatlegile Mabena',
          'Keynote Speaker Booking South Africa',
          'Executive Mentorship Request',
          'Youth Development Workshop Speaker',
          'Direct Booking Portal'
        ]}
        breadcrumbs={[{ label: 'Book Keatlegile', path: '/book-keatlegile' }]}
      />

      <Breadcrumbs items={[{ label: 'Book Keatlegile' }]} />

      {/* Hero Header */}
      <section className="relative bg-[#7e2e19] text-white py-16 sm:py-20 border-b-2 border-[#D4AF37] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.pageTitleBg}
            alt="Book Keatlegile Background"
            className="w-full h-full object-cover opacity-70 filter brightness-105 contrast-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a1f10]/90 via-[#7e2e19]/70 to-[#5a1f10]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7e2e19]/80 via-transparent to-[#7e2e19]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_50%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#E2C45C] uppercase border-b-2 border-[#D4AF37] pb-1">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Direct Submission Portal
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold">
            Book Keatlegile Mabena
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl font-light leading-relaxed">
            Submit your event, speaking engagement, mentorship, or advisory requirements. All submissions are processed directly and securely.
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16 sm:py-20 bg-gray-50 text-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white p-6 sm:p-12 rounded-lg border-2 border-[#D4AF37] shadow-2xl space-y-8">

            {isSubmitted ? (
              /* Success Confirmation Card */
              <div className="py-8 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#7e2e19] shadow-inner">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
                </div>

                <div className="space-y-2 max-w-xl mx-auto">
                  <span className="text-xs font-bold text-[#9a3820] uppercase tracking-widest">
                    Submission Received
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7e2e19]">
                    Booking Request Submitted!
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-2">
                    Thank you, <strong className="text-[#7e2e19]">{submittedData?.fullName}</strong>! Your booking details for <strong className="text-[#7e2e19]">{submittedData?.serviceRequired}</strong> have been submitted successfully.
                  </p>
                  <p className="text-xs text-gray-600">
                    Keatlegile Mabena&apos;s management team will review your requirements and respond shortly at <span className="font-semibold text-gray-800">{submittedData?.email}</span>.
                  </p>
                </div>

                {/* Secondary Actions */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <a
                    href={`tel:${FIRM_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] hover:bg-[#A88616] text-[#1C1C1C] text-xs font-bold uppercase tracking-wider rounded border border-[#E2C45C] shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Office ({FIRM_DETAILS.contact.phone})</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedData(null);
                      reset();
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold uppercase tracking-wider rounded border border-gray-300 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <>
                <div className="border-b-2 border-gray-100 pb-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#9a3820] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Direct Booking Form
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7e2e19]">
                    Booking &amp; Engagement Form
                  </h2>
                  <p className="text-xs text-[#1C1C1C]/70">
                    Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                  {/* Step 1: Contact Details */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9a3820] border-b border-gray-200 pb-1 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#D4AF37]" /> 1. Contact &amp; Organization Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="e.g. Lerato Molefe"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600 font-medium mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Organisation / Institution
                        </label>
                        <input
                          type="text"
                          {...register('organisation')}
                          placeholder="e.g. University / Enterprise / Government"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="lerato@example.com"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-medium mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Telephone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+27 82 000 0000"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 font-medium mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Booking Category */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9a3820] border-b border-gray-200 pb-1 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-[#D4AF37]" /> 2. Booking Category &amp; Engagement Format
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Booking Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register('serviceRequired')}
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        >
                          <option value="Keynote Address & Guest Speaker">Keynote Address &amp; Guest Speaker</option>
                          <option value="Youth & Student Mentorship">Youth &amp; Student Mentorship</option>
                          <option value="Empowerment Workshop & Masterclass">Empowerment Workshop &amp; Masterclass</option>
                          <option value="Books & Authorship Orders">Books &amp; Authorship Orders</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Engagement Format <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register('engagementFormat')}
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        >
                          <option value="In-Person Keynote">In-Person Keynote</option>
                          <option value="Online / Virtual Keynote">Online / Virtual Keynote</option>
                          <option value="Mentorship Session (1-on-1 or Group)">Mentorship Session (1-on-1 or Group)</option>
                          <option value="Interactive Workshop / Masterclass">Interactive Workshop / Masterclass</option>
                          <option value="Panel / Guest Speaking">Panel / Guest Speaking</option>
                          <option value="Books & Bulk Order Request">Books &amp; Bulk Order Request</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Event & Schedule Details */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9a3820] border-b border-gray-200 pb-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" /> 3. Schedule &amp; Venue Details (Optional)
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          {...register('preferredDate')}
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Location / Venue
                        </label>
                        <input
                          type="text"
                          {...register('eventLocation')}
                          placeholder="e.g. Sandton, Virtual, Cape Town"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                          Estimated Attendees
                        </label>
                        <input
                          type="text"
                          {...register('estimatedAudience')}
                          placeholder="e.g. 150 participants"
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Message & Requirements */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#9a3820] border-b border-gray-200 pb-1 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-[#D4AF37]" /> 4. Event Requirements &amp; Message
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-[#1C1C1C] mb-1">
                        Detailed Event / Request Notes <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Please share theme, audience profile, key objectives, or specific topics you would like Keatlegile Mabena to address..."
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#7e2e19] focus:bg-white transition-colors"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 font-medium mt-1">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  {/* POPIA Privacy Checkbox */}
                  <div className="p-3.5 bg-gray-50 rounded border border-gray-200 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="bookPopiaConsent"
                        {...register('popiaConsent')}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#7e2e19] focus:ring-[#D4AF37]"
                      />
                      <label htmlFor="bookPopiaConsent" className="text-xs text-gray-700 leading-snug cursor-pointer">
                        I consent to the collection and processing of my personal details strictly for handling this booking enquiry in accordance with POPIA standards.
                      </label>
                    </div>
                    {errors.popiaConsent && (
                      <p className="text-[11px] text-red-600 font-medium">{errors.popiaConsent.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#A88616] active:bg-[#8f700f] text-[#1C1C1C] font-bold text-xs sm:text-sm uppercase tracking-wider rounded border border-[#E2C45C] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#1C1C1C]" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#1C1C1C]" />
                          <span>Submit Booking Request</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1C1C1C]" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  );
};
