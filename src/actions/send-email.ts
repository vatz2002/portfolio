'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export type ContactFormState = {
  success: boolean
  message: string
}

export async function sendContactEmail(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const message = formData.get('message')?.toString() || ''

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['vatsalmakwana02@gmail.com'], // replace with your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, message: 'Failed to send message. Please try again later.' }
  }
}
