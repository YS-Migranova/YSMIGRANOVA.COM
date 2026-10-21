import { useState, type FormEvent } from 'react'

export type FormState = 'idle' | 'pending' | 'success' | 'error'

/**
 * Submits a form to Netlify Forms. Posts to the static registration file in
 * /public (not "/", which the SSR handler intercepts).
 */
export function useNetlifyForm() {
  const [state, setState] = useState<FormState>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Form handling unavailable')
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  return { state, onSubmit, reset: () => state !== 'pending' && setState('idle') }
}
