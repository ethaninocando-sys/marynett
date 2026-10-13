// Facts used across the site. Anything wrapped in <Confirm> on a page
// still needs Marynett's sign-off before launch.
export const site = {
  name: "Marynett Bolivar",
  // Name as filed with each state. California requires it on the home page.
  legalName: "Marynett Hijosa Bolivar",
  credentials: "RN",
  city: "Edinburg, Texas",
  phoneDisplay: "(956) 289-6297",
  phoneHref: "tel:+19562896297",
  email: "marynettbolivar@gmail.com",
  nurseYears: "Thirty-two",
  // 32 years nursing in 2026, less the 11 since the 2015 Texas license.
  nurseYearsBeforeLicense: "21",
  licensedSince: "2015",
  // National Producer Number, the same on every state license.
  npn: "17672044",
};

// Taken from the license certificates Marynett supplied in October 2026.
// Update a row when that state renews.
export const licenses = [
  {
    state: "Texas",
    abbr: "TX",
    type: "General Lines Agent",
    lines: "Life, Accident, Health & HMO",
    number: "2020634",
    issued: "2015-07-20",
    expires: "2027-12-31",
  },
  {
    state: "Nevada",
    abbr: "NV",
    type: "Non-Resident Producer",
    lines: "Life",
    number: "4242277",
    issued: "2026-07-23",
    expires: "2029-07-31",
  },
  {
    state: "California",
    abbr: "CA",
    type: "Insurance Producer",
    lines: "Life",
    number: "4573579",
    issued: "2026-08-18",
    expires: "2028-08-31",
  },
];

// Where form submissions are kept: the address Formspree gives the form, for
// example "https://formspree.io/f/abcdwxyz". While this is empty, leads are
// not stored anywhere.
export const formspree = {
  endpoint: "https://formspree.io/f/mljgwvjn",
};

// BLOCKS LAUNCH while empty. See LAUNCH.md.
// Calendly link for the 15-minute call, for example
// "https://calendly.com/marynett/15min". It goes in the thank-you email that
// a visitor gets after sending the form. No email is sent while it is empty.
export const booking = {
  url: "https://calendly.com/quiquemax34530/15-minute-call",
};

// Prototype switches. Set both to false at launch.
export const showConfirmMarks = true;
export const isPrototype = false;
