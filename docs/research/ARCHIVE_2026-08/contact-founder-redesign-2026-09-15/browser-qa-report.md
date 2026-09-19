# Browser verification

Checked on 15 September 2026 against `http://localhost:3000` using headless Chromium. This is local browser verification, not a production traffic or Core Web Vitals measurement.

## Results

- **30 page and viewport combinations passed:** contact, Hassan, Imran, homepage and editorial policy at 320, 390, 768, 1024, 1279 and 1440px. All returned HTTP 200 with no horizontal page overflow, browser runtime errors or broken in-page anchors.
- **Founder portraits load:** both contact thumbnails and the two biography portraits had a positive natural image width in 18 separate page and viewport checks. Their desktop and mobile appearance was visually reviewed.
- **Contact form passed at all six widths:** additional project details start closed; Enter opens them, Tab enters the phone field, Space closes them, and Tab skips the closed fields. Empty name/email and malformed email produce field errors without submitting. A mocked server error preserves the message and enables retry; mocked success displays the confirmation and allows a clean new message.
- **Enquiry modal passed at all six widths:** header, hero and footer buttons open the form. The dialog fits the viewport, focus remains inside, optional phone details work by keyboard, and validation blocks invalid submissions. Mocked failure and retry work. Done and Escape restore focus to the opening button, including at 1279px.
- **Pending request handling passed at 390 and 1279px:** closing and reopening while a delayed mocked request is pending leaves a fresh, enabled form; the old response does not introduce a success message. Confirmation remains visible after 3.5 seconds until explicitly dismissed, and reopening clears the previous submission.

Every `/api/submit-quote` request was intercepted in the browser. No real enquiry or email was sent. These checks verify the interface and its response handling, not mail delivery.

## Homepage CTA reservation

The final “Talk to the founders” label still fits the existing reserved heights. The primary and secondary buttons wrap at the narrow desktop widths; the reservation matches their actual group height.

| Viewport | Primary button height | Button group / reserved slot |
| --- | ---: | ---: |
| 320px | 56px | 132px / 132px |
| 390px | 56px | 132px / 132px |
| 768px | 56px | 60px / 60px |
| 1024px | 80px | 84px / 84px |
| 1279px | 80px | 84px / 84px |
| 1440px | 56px | 60px / 60px |

No numeric reservation change was needed. The source comment and loading fallback were updated by the implementation agent.

## Review artifacts

| Surface | Desktop | Mobile |
| --- | --- | --- |
| Contact | [1440px](contact-1440-top.png) | [390px](contact-390-top.png) |
| Hassan | [1440px](about-hassan-1440-top.png) | [390px](about-hassan-390-top.png) |
| Imran | [1440px](about-imran-1440-top.png) | [390px](about-imran-390-top.png) |
| Editorial policy | [1440px](editorial-policy-1440-top.png) | [390px](editorial-policy-390-top.png) |
| Enquiry modal | [1440px](modal-1440-initial.png) | [390px](modal-390-initial.png) |

[Detailed browser results](browser-qa.json), [portrait loading checks](founder-images.json), and [repeatable browser script](browser-qa.cjs) are preserved alongside the screenshots. The original encoded-image selector was corrected and the separately verified image results merged into the main report.

The initial run caught corrupted punctuation in the contact page and an outdated hero loading label; the implementation agent corrected both. An initial instantaneous focus check failed once at 1279px; the final modal implementation and explicit-close retest pass at every requested width. Final contact and editorial screenshots were refreshed after the shared CTA changes.
