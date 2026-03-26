/** POST body shape for Supabase edge function `waitlist-register`. */
export const WAITLIST_REGISTER_URL =
  import.meta.env.VITE_WAITLIST_REGISTER_URL ??
  'https://sgprtevyhqrkpnafkytm.supabase.co/functions/v1/waitlist-register'

export function buildWaitlistPayload(formData, objectiveOptions, heardAboutOptions) {
  const body = {
    email: formData.email.trim(),
    full_name: formData.fullName.trim(),
    company_name: formData.company.trim(),
  }
  if (formData.companySize) body.company_size = formData.companySize
  const job = formData.jobTitle.trim()
  if (job) body.job_title = job
  if (formData.objective) {
    const opt = objectiveOptions.find((o) => o.value === formData.objective)
    body.primary_objective = opt ? opt.label : formData.objective
  }
  // Localized display label only (not the internal value slug). Omit key if unset.
  if (formData.heardAbout && heardAboutOptions?.length) {
    const opt = heardAboutOptions.find((o) => o.value === formData.heardAbout)
    if (opt?.label) body.heard_about = opt.label
  }
  return body
}
