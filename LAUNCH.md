# Launch checklist

The site is live at https://www.marynettbolivar.com and hidden from search engines until launch. This file lists only what is still open.

## Blocking launch

- [ ] **Marynett's sign-off.** Five facts and the home page story:
  - 32 years as a nurse
  - 21 years of nursing before her license
  - "Night shift"
  - "I came to this from nursing, not finance"
  - That she trains new agents today
  - The home page story, which is written in her voice and signed with her name
- [ ] **Written approval from her agency's compliance team.** Marynett sends the site in herself. Include the thank-you email.

## At launch

- [ ] **Confirmation marks.** After Marynett's sign-off, set `showConfirmMarks` to `false` in `lib/site.ts`.
- [ ] **Search engines.** Remove the `robots` block in `app/layout.tsx` so people can find the site by searching.

## Moving things to Marynett

- [ ] **Her own Calendly.** The booking link in the thank-you email still comes from Enrique's account, so the booking page shows his name and bookings land in his calendar.
  1. Marynett signs up at calendly.com with her own email and connects her calendar.
  2. She creates one event: a 15-minute phone call where she calls the person who booked. Email reminders only, no text reminders.
  3. She sets the hours she wants to take calls.
  4. She sends us the event link.
  5. Replace `booking.url` in `lib/site.ts` with her link and push.
- [ ] **Lead sheet for Marynett.** Formspree now adds every lead to the "Website Leads" sheet in Enrique's Google Drive. Share it with her Gmail.
- [ ] **Backup copy of leads.** Optional. Set `LEAD_TO_EMAIL` on Vercel so she is emailed whenever Formspree does not accept a lead.
- [ ] **Who owns the domain long term.** It is registered in our Cloudflare account for now.

## Keep it working

- The domain's records in Cloudflare must stay on "DNS only".
- The thank-you email needs `RESEND_API_KEY` and `LEAD_FROM_EMAIL` on Vercel, under Production.
- A changed setting on Vercel only applies after a new deployment.
- In the lead sheet, leave the header names as they are. The `received` column is Edinburg time and `_date` is UTC.
