import { AlertCircle, CheckCircle2 } from 'lucide-react'
import type { FormState } from '@/lib/netlifyForm'

export function FormStatus({ state, success, error }: { state: FormState; success: string; error: string }) {
  if (state === 'success')
    return (
      <p role="status" className="flex items-start gap-3 rounded-lg border border-emerald-600/30 bg-emerald-50 p-4 text-sm text-emerald-900">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" /> {success}
      </p>
    )
  if (state === 'error')
    return (
      <p role="alert" className="flex items-start gap-3 rounded-lg border border-red-600/30 bg-red-50 p-4 text-sm text-red-900">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" /> {error}
      </p>
    )
  return null
}

export function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  )
}
