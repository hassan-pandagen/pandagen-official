"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CookiesPage() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-400">Last updated: January 26, 2026</p>
          </motion.div>

          {/* Content */}
          <div className="space-y-8 text-gray-400 leading-relaxed">
            
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit our website. They help us remember your preferences, understand how you use our site, and improve your browsing experience.
              </p>
              <p className="mt-4">
                Cookies contain information that can uniquely identify your browser or device, but they do not store personal information like passwords or payment details.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.1 Session Cookies</h3>
              <p>
                <strong>Duration:</strong> Expire when you close your browser<br/>
                <strong>Purpose:</strong> Maintain your login session, preserve form data, and track navigation within the site during your visit.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.2 Persistent Cookies</h3>
              <p>
                <strong>Duration:</strong> Remain on your device for weeks or months<br/>
                <strong>Purpose:</strong> Remember your preferences, language settings, and login credentials for future visits. Help us recognize returning users.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.3 Analytics Cookies</h3>
              <p>
                <strong>Duration:</strong> Vary (typically 2 years)<br/>
                <strong>Purpose:</strong> Track page views, user interactions, and behavior patterns. Help us understand which pages are most popular and identify technical issues.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.4 Marketing Cookies</h3>
              <p>
                <strong>Duration:</strong> Vary based on partner policies<br/>
                <strong>Purpose:</strong> Enable targeted advertising, track conversion rates, and understand marketing campaign effectiveness. Allow retargeting on third-party platforms.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.5 Functional Cookies</h3>
              <p>
                <strong>Duration:</strong> Session or persistent<br/>
                <strong>Purpose:</strong> Enable advanced features like live chat, contact forms, and calendar scheduling. Essential for providing core functionality.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p>
                Our website includes content from third-party services that may set their own cookies:
              </p>
              
              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">3.1 Google Analytics</h3>
              <p>
                Tracks website traffic, user behavior, and conversion metrics. Uses persistent cookies to identify returning visitors. Does not store personal information.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">3.2 Cal.com (Calendar Integration)</h3>
              <p>
                Enables appointment scheduling. Sets cookies to maintain your booking session and preferences. You can review their cookie policy at cal.com/privacy.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">3.3 Social Media Pixels</h3>
              <p>
                Facebook, LinkedIn, and Twitter may set cookies to track visits and enable retargeting. These are set by third-party platforms, not directly by us.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">3.4 Payment Processors</h3>
              <p>
                Stripe and other payment providers set cookies for secure transactions. We do not control these; review their cookie policies for details.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Cookie Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Improve website performance and load times.</li>
                <li>Understand user preferences and behavior patterns.</li>
                <li>Deliver personalized content and recommendations.</li>
                <li>Measure the effectiveness of marketing campaigns.</li>
                <li>Prevent fraud and enhance security.</li>
                <li>Maintain your login session and form progress.</li>
                <li>Enable advanced features like chat and scheduling.</li>
              </ul>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Consent and Control</h2>
              
              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">5.1 Your Consent</h3>
              <p>
                When you first visit our website, we display a cookie consent banner. By clicking "Accept," you consent to all cookie types. You can adjust preferences anytime through the cookie settings.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">5.2 Browser Controls</h3>
              <p>
                You can manage cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Privacy → Cookies and Site Permissions</li>
              </ul>
              <p className="mt-4">
                Note: Disabling cookies may affect site functionality and your ability to access certain features.
              </p>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">5.3 Opt-Out Options</h3>
              <p>
                You can opt out of specific cookie types:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-2 ml-4">
                <li><strong>Google Analytics:</strong> Install Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Marketing Cookies:</strong> Visit youradchoices.com or networkadvertising.org</li>
                <li><strong>Email Marketing:</strong> Click "Unsubscribe" in any marketing email</li>
              </ul>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookie List</h2>
              <p className="mb-4">
                Here is a detailed list of cookies used on our website:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                  <thead className="bg-white/5">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 text-left text-white">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-white">Type</th>
                      <th className="px-4 py-3 text-left text-white">Duration</th>
                      <th className="px-4 py-3 text-left text-white">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3">_ga</td>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">2 years</td>
                      <td className="px-4 py-3">Google Analytics tracking</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">_ga_*</td>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">2 years</td>
                      <td className="px-4 py-3">GA session management</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">__Secure-ENID</td>
                      <td className="px-4 py-3">Marketing</td>
                      <td className="px-4 py-3">13 months</td>
                      <td className="px-4 py-3">Google ad personalization</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">cal-auth</td>
                      <td className="px-4 py-3">Functional</td>
                      <td className="px-4 py-3">Session</td>
                      <td className="px-4 py-3">Calendar booking session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">_fbp</td>
                      <td className="px-4 py-3">Marketing</td>
                      <td className="px-4 py-3">3 months</td>
                      <td className="px-4 py-3">Facebook pixel tracking</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">li_buid</td>
                      <td className="px-4 py-3">Marketing</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">LinkedIn tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">7. Do Not Track</h2>
              <p>
                Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for recognizing DNT signals, so we do not respond to DNT browser headers. However, you can disable cookies through your browser settings.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data Security</h2>
              <p>
                We use cookies in compliance with applicable privacy laws, including GDPR and CCPA. Your data is processed securely, and we do not sell cookie data to third parties.
              </p>
              <p className="mt-4">
                For more information about how we handle your data, please review our <a href="/privacy" className="text-neon hover:underline">Privacy Policy</a>.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">9. International Users</h2>
              <p>
                If you are located in the European Union, UK, or other jurisdictions with strict cookie laws:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
                <li>Non-essential cookies require your explicit consent before being set.</li>
                <li>You can withdraw consent at any time through cookie settings.</li>
                <li>We comply with GDPR and similar regulations.</li>
              </ul>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy to reflect changes in technology, legal requirements, or our cookie practices. Updates will be posted on this page with a new "Last updated" date. Your continued use of the website signifies acceptance of changes.
              </p>
            </motion.section>

            {/* Section 11 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6 mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have questions about our cookie practices or need to update your preferences, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white font-semibold">PandaGenCode LLC</p>
                <p>Missouri, USA</p>
                <p>Email: <a href="mailto:info@pandacodegen.com" className="text-neon hover:underline">info@pandacodegen.com</a></p>
                <p className="mt-4 text-sm">
                  <strong>Cookie Preference Center:</strong> Use the cookie settings on our website to manage your preferences at any time.
                </p>
              </div>
            </motion.section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
