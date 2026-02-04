"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                PandaGenCode LLC ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site"), use our services, and interact with us.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site or Services. By accessing and using PandaGenCode, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, website URL, and business details when you fill out forms or contact us.</li>
                <li><strong>Project Information:</strong> Details about your project requirements, budget, timeline, and current technology stack.</li>
                <li><strong>Communication Data:</strong> Messages, files, and documents you send us through email, contact forms, or meetings.</li>
                <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors (we do not store credit card data).</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/80 mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, and browser information.</li>
                <li><strong>Device Information:</strong> Device type, operating system, IP address, and browser type.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to improve your experience and understand site performance.</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To process contracts and deliver web development services.</li>
                <li>To send you project updates, proposals, and service-related communications.</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To send marketing communications (with your consent).</li>
                <li>To comply with legal obligations and protect our legal rights.</li>
                <li>To detect and prevent fraud or security breaches.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us (hosting, payment processing, email services).</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets.</li>
                <li><strong>With Your Consent:</strong> We will share information only with your explicit permission.</li>
              </ul>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data, including SSL encryption, firewalls, and secure password policies. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we maintain reasonable safeguards to protect against unauthorized access.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Access:</strong> You can request a copy of your personal data.</li>
                <li><strong>Correction:</strong> You can request that we update or correct inaccurate information.</li>
                <li><strong>Deletion:</strong> You can request deletion of your data (subject to legal obligations).</li>
                <li><strong>Opt-Out:</strong> You can unsubscribe from marketing emails at any time.</li>
                <li><strong>Data Portability:</strong> You can request your data in a portable format.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:info@pandacodegen.com" className="text-neon hover:underline">info@pandacodegen.com</a>.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect site functionality.
              </p>
              <p className="mt-4">
                We use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for improved user experience.</li>
                <li><strong>Analytics Tools:</strong> Google Analytics to understand site traffic and user behavior.</li>
              </ul>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide services and fulfill the purposes outlined in this policy. You can request deletion of your data at any time, subject to legal and contractual obligations.
              </p>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p>
                PandaGenCode operates globally. Your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have different data protection laws. By providing information, you consent to such transfers.
              </p>
            </motion.section>

            {/* Section 11 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </motion.section>

            {/* Section 12 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of material changes via email or by posting the updated policy on our website. Your continued use of our services constitutes acceptance of the revised policy.
              </p>
            </motion.section>

            {/* Section 13 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-neon/30 pl-6 mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white font-semibold">PandaGenCode LLC</p>
                <p>Missouri, USA</p>
                <p>Email: <a href="mailto:info@pandacodegen.com" className="text-neon hover:underline">info@pandacodegen.com</a></p>
                <p>Response Time: Within 48 hours during business days</p>
              </div>
            </motion.section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
