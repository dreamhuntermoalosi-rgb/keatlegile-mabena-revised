/**
 * WordPress form submission utility.
 * Replaces Web3Forms — sends form data to WordPress REST API endpoints
 * at order.keatlegilemabena.co.za which handles email sending.
 *
 * The Vite site stays static (no server) — WordPress handles the backend.
 */

const WORDPRESS_API_URL =
  import.meta.env.VITE_WORDPRESS_API_URL ||
  'https://order.keatlegilemabena.co.za/wp-json/keatlegile/v1';

export type FormType =
  | 'speaking'
  | 'mentorship'
  | 'media'
  | 'testimonial'
  | 'book-order';

export interface FormPayload {
  form_type?: FormType;
  name: string;
  email?: string;
  phone?: string;
  organisation?: string;
  service?: string;
  format?: string;
  date?: string;
  location?: string;
  audience?: string;
  message?: string;
  category?: string;
  subject?: string;
  /** Honeypot — leave empty (bots fill it) */
  website?: string;
  [key: string]: unknown;
}

export interface FormResult {
  success: boolean;
  message?: string;
}

/**
 * Submit form data to a WordPress REST endpoint.
 * Each form type (speaking, mentorship, media, testimonial, book-order)
 * has its own endpoint that sends a tailored email to
 * info@keatlegilemabena.co.za + a confirmation email to the submitter.
 */
export async function submitToWordPress(
  formType: FormType,
  payload: FormPayload
): Promise<FormResult> {
  const url = `${WORDPRESS_API_URL}/${formType}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        form_type: formType,
      }),
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      const text = await response.text();
      data = JSON.parse(text);
    } catch {
      data = { success: false, message: 'Received non-JSON response from server.' };
    }

    if (response.ok && data.success) {
      return { success: true, message: data.message || 'Submission received.' };
    }

    return {
      success: false,
      message: data.message || 'Submission could not be processed.',
    };
  } catch (error) {
    console.error('WordPress form submission error:', error);
    return {
      success: false,
      message: 'Network error — please check your connection and try again.',
    };
  }
}
