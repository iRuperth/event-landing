'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    }
  })

  const onSubmit = async (data) => {
    try {
      setError('')
      console.log('Form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-theme text-theme py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">✍️ Register for Event</h1>
        <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
          Secure your spot and join us for an amazing day of learning and networking.
        </p>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-2xl font-bold mb-2">✅ Registration Successful!</h3>
              <p className="mb-4">
                Thank you for registering. A confirmation email has been sent to your inbox.
              </p>
              <p className="text-sm">
                Check your email for your ticket and event details.
              </p>
            </div>
          ) : null}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <p className="font-bold text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-panel p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2">First Name *</label>
                <input
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full px-4 py-2 border border-theme rounded-lg bg-panel text-theme focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Last Name *</label>
                <input
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full px-4 py-2 border border-theme rounded-lg bg-panel text-theme focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Email *</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2 border border-theme rounded-lg bg-panel text-theme focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border border-theme rounded-lg bg-panel text-theme focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Company</label>
              <input
                type="text"
                {...register('company')}
                className="w-full px-4 py-2 border border-theme rounded-lg bg-panel text-theme focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Company"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register('terms', { required: 'You must agree to the terms' })}
                  className="w-4 h-4 text-primary"
                />
                <span className="ml-3">
                  I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and privacy policy
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg"
            >
              Register Now 🎉
            </button>

            <p className="text-center text-muted text-sm mt-4">
              * Required fields
            </p>
          </form>

          <div className="mt-12 bg-panel p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">📋 What happens next?</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-[30px]">1.</span>
                <span>Complete the registration form above</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-[30px]">2.</span>
                <span>Receive a confirmation email with your ticket</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-[30px]">3.</span>
                <span>Get access to event materials and schedule</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-[30px]">4.</span>
                <span>Attend the event and earn your certificate</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
