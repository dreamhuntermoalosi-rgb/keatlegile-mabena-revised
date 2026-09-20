export interface Web3FormsPayload {
  name: string;
  email?: string;
  phone?: string;
  organization?: string;
  service?: string;
  message?: string;
  subject?: string;
  [key: string]: unknown;
}

/**
 * Submits form data to the Web3Forms API endpoint so submissions
 * are recorded in the Web3Forms dashboard and forwarded via email.
 */
export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<{ success: boolean; message?: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  if (!accessKey) {
    console.warn('Web3Forms access key is not set in VITE_WEB3FORMS_ACCESS_KEY. Form will proceed to WhatsApp.');
    return { success: false, message: 'Web3Forms access key not configured.' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: payload.subject || `New Booking Request: ${payload.name} - Keatlegile Mabena Portal`,
        from_name: 'Keatlegile Mabena Official Portal',
        ...payload,
      }),
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      const responseText = await response.text();
      data = JSON.parse(responseText);
    } catch {
      data = { success: false, message: 'Received non-JSON response from endpoint.' };
    }

    if (response.ok && data.success) {
      return { success: true, message: data.message || 'Form submitted successfully!' };
    } else {
      console.warn('Form Submission API Note:', data);
      return { success: false, message: data.message || 'Form submission processed.' };
    }
  } catch (error) {
    console.error('Web3Forms Submission Network Error:', error);
    return { success: false, message: 'Network error submitting to Web3Forms.' };
  }
}
