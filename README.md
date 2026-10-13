# Marynett Bolivar website

Three-page site for Marynett Bolivar, RN, an independent insurance agent in Edinburg, Texas.

- `/` home, with two paths
- `/coverage` for families (book a 15-minute check)
- `/work-with-me` for people curious about getting licensed
- `/privacy`

## Run it

```bash
npm run dev
```

Then open http://localhost:3000.

## Blocking launch

After a visitor sends the form, the page says "Check your email for next steps and to pick a time." No email is sent until all three of these are done, so the site must not launch without them.

- [x] **Calendly link.** `booking.url` in `lib/site.ts` is set to the 15-minute phone call. It goes in the thank-you email. It is on Enrique's account for now; see Pending decisions.
- [ ] **Her domain, verified in Resend.** Resend only sends to visitors from a domain it has verified.
- [ ] **Resend settings on the host.** Set `RESEND_API_KEY` and `LEAD_FROM_EMAIL`. The from address must be on that domain.

Already done: leads are stored in Formspree. The form address is `formspree.endpoint` in `lib/site.ts`.

## Pending decisions

- **Whose Calendly account.** For now the booking link comes from Enrique's Calendly account, so bookings arrive in his inbox and calendar and he passes them on. Still to decide: move it to an account under Marynett's email, which needs one confirmation tap from her, so bookings reach her directly.
- **The domain.** Which name, and whether Marynett or we own it.

## Before launch

- In `lib/site.ts`, confirm every fact with Marynett, then set `showConfirmMarks` to `false`. Unconfirmed facts are wrapped in `<Confirm>` and show with dotted underlines.
- Replace or hide the four "Soon" video cards on the home page.
- Optional: set `LEAD_TO_EMAIL` on the host so Marynett is emailed a backup copy whenever Formspree does not accept a lead.
- Remove the `robots` block in `app/layout.tsx` when the site is ready to be found by search engines.
