// The email a visitor gets right after sending the form. It is sent in two
// versions: a designed one, and a plain-text one for mail apps that prefer it.
// This file imports nothing, so it can be read and tested on its own.

type Details = {
  firstName: string;
  bookingUrl: string;
  // "Marynett Bolivar" and "RN · Independent Agent", as in the site header.
  brandName: string;
  brandLine: string;
  // "Marynett Bolivar, RN", then her title, then one line of license numbers.
  signature: string;
  title: string;
  licenseLine: string;
  // Small print at the very bottom: her filed name and home city.
  footer: string;
  photoUrl: string;
};

// Makes text safe to place inside the designed version.
function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const sans = "-apple-system,'Segoe UI',Helvetica,Arial,sans-serif";
const serif = "Georgia,'Times New Roman',serif";

export function thankYouEmail(details: Details) {
  // One short line with no hidden characters, so it is safe in a subject.
  const name = details.firstName
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);

  const thanks =
    "Thank you for reaching out. Pick a time that works and then we'll connect";

  // California requires a life agent's license number next to or on the line
  // below their name or title, and no smaller than any phone number or
  // address shown. So the license line comes straight after her title, in
  // the same size as the body text.
  const text = [
    `Hi ${name},`,
    "",
    `${thanks}: ${details.bookingUrl}`,
    "",
    details.signature,
    details.title,
    details.licenseLine,
  ].join("\n");

  const body = `font-family:${sans};font-size:16px;line-height:26px;color:#44454c;`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>Thank you, ${escape(name)}</title>
</head>
<body style="margin:0;padding:0;background:#f7f7f8;">
<div style="display:none;max-height:0;overflow:hidden;">${escape(thanks)}.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f7f8;">
  <tr>
    <td align="center" style="padding:32px 16px 40px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;">
        <tr>
          <td style="padding:0 6px 20px;">
            <div style="font-family:${sans};font-size:18px;line-height:24px;font-weight:600;letter-spacing:-0.02em;color:#121218;">${escape(details.brandName)}</div>
            <div style="font-family:${sans};font-size:14px;line-height:18px;color:#44454c;">${escape(details.brandLine)}</div>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;border:1px solid #edeef1;border-radius:16px;padding:36px 32px 32px;">
            <h1 style="margin:0 0 18px;font-family:${serif};font-size:30px;line-height:38px;font-weight:500;letter-spacing:-0.02em;color:#121218;">Hi ${escape(name)},</h1>
            <p style="margin:0 0 28px;${body}">${escape(thanks)}.</p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius:8px;background:#1d4059;">
                  <a href="${escape(details.bookingUrl)}" style="display:inline-block;padding:14px 30px;font-family:${sans};font-size:16px;line-height:24px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">Pick a time</a>
                </td>
              </tr>
            </table>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;border-top:1px solid #edeef1;">
              <tr>
                <td width="56" style="padding-top:24px;vertical-align:middle;">
                  <img src="${escape(details.photoUrl)}" width="56" height="56" alt="${escape(details.brandName)}" style="display:block;border-radius:28px;">
                </td>
                <td style="padding:24px 0 0 14px;vertical-align:middle;">
                  <div style="font-family:${sans};font-size:16px;line-height:24px;font-weight:600;color:#121218;">${escape(details.signature)}</div>
                  <div style="font-family:${sans};font-size:16px;line-height:24px;color:#61646b;">${escape(details.title)}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:12px;font-family:${sans};font-size:16px;line-height:24px;color:#61646b;">${escape(details.licenseLine)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 6px 0;font-family:${sans};font-size:12px;line-height:18px;color:#94979e;">${escape(details.footer)}</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  return { subject: `Thank you, ${name}`, text, html };
}
