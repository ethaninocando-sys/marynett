# Launch checklist

Status as of October 12, 2026. The work is on the `launch-prep` branch. The live site still runs `main`.

## Blocking launch

- [ ] **Her domain.** Choose the name, buy it, add it to Resend and verify it. Steps are below.
- [ ] **Email settings for Production.** `RESEND_API_KEY` and `LEAD_FROM_EMAIL` on the Vercel project, using her domain. Without them the visitor gets no thank-you email, even though the form says "Check your email for next steps and to pick a time."
- [ ] **Marynett's sign-off.** Five facts and the home page story:
  - 32 years as a nurse
  - 21 years of nursing before her license
  - "Night shift"
  - "I came to this from nursing, not finance"
  - That she trains new agents today
  - The home page story, which is written in her voice and signed with her name
- [ ] **Written approval from her agency's compliance team.** Marynett sends the site in herself. Include the thank-you email.
- [ ] **Merge `launch-prep` into `main`** and push.

## When the domain is bought

Do these in order.

1. **Resend, Domains.** Add the domain. Resend lists a few DNS records. Enter them wherever the domain is managed, then click Verify and wait for it to show as verified.
2. **Resend, API Keys.** Create a key that is allowed to send from her domain. The key made for testing only covers e2technologies.net.
3. **Vercel, Environment Variables, Production.** Set `RESEND_API_KEY` to the new key and `LEAD_FROM_EMAIL` to `Marynett Bolivar <hello@HER-DOMAIN>`.
4. **Vercel, Domains.** Add her domain to the project so the site lives there.
5. **Redeploy.** Settings only apply to a new deployment.
6. **Test on the live site.** Send the form with your own email. Two emails should arrive: the Formspree alert and the thank-you.

The sending domain must not contain her agency's name or anything close to it.

## Testing the thank-you email before the domain exists

This uses e2technologies.net, which is already verified in Resend. Keep it on Preview only so it never reaches the live site.

1. In Vercel, Environment Variables, add `RESEND_API_KEY` and `LEAD_FROM_EMAIL` with only **Preview** ticked. Use `Marynett Bolivar <hello@e2technologies.net>` as the from address.
2. Redeploy the `launch-prep` preview.
3. Send the form on the preview with your own email.
4. If the thank-you does not arrive, check the Emails log in Resend.

## Small fixes before launch

- [ ] **Calendly profile name.** The booking page shows Enrique's name until it is changed in Calendly. This goes away once the booking moves to Marynett's own account.
- [ ] **Confirmation marks.** After Marynett's sign-off, set `showConfirmMarks` to `false` in `lib/site.ts`.
- [ ] **Search engines.** The site currently tells Google and other search engines not to list it, which was right while it was a prototype. Remove the `robots` block in `app/layout.tsx` at launch so people can find it by searching.
- [ ] **Calendly text reminders stay off.** Email reminders only.

Staying as they are for now, by choice:

- The four "Soon" video cards on the home page.

## Pending decisions

- **Whose Calendly account.** For now the booking link comes from Enrique's account, so bookings arrive in his inbox and calendar and he passes them on. The plan is to move it to an account under Marynett's email, which needs one confirmation tap from her. The link in `lib/site.ts` changes when that happens.
- **The domain.** Which name, and whether Marynett or we own it.
- **Formspree alerts to Marynett.** Add her address in Formspree. She clicks one confirmation link.

## Already done

- Leads are stored in Formspree. The form address is `formspree.endpoint` in `lib/site.ts`.
- The Calendly link for the 15-minute phone call is `booking.url` in `lib/site.ts`.
- All three licenses, the corrected license year and the new portrait are in.
- The thank-you email is built, in a designed version and a plain-text version.
- The privacy page describes the current form and names Formspree, Resend and Calendly.
- The template reference page is removed.
- Optional: set `LEAD_TO_EMAIL` on the host so Marynett is emailed a backup copy whenever Formspree does not accept a lead.
