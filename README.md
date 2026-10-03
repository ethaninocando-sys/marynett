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

## Before launch

- In `lib/site.ts`, confirm every fact and set `showConfirmMarks` and `isPrototype` to `false`.
- Replace the placeholder blocks with real photos, videos and the Cal.com booking embed.
- Set `RESEND_API_KEY` and `LEAD_TO_EMAIL` on the server so form leads are emailed.
- Get written approval from FEG compliance (compliance@fegcorp.com), then remove the `robots` block in `app/layout.tsx`.
