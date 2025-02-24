import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to UrgentHai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we collect, use, and protect your information when you use our screen testing tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage Data (e.g., how you interact with our tools)</li>
              <li>Device Information (e.g., browser type, screen resolution)</li>
              <li>Cookies and Similar Technologies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our screen testing tools</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Maintain the security of our services</li>
              <li>Send important updates about our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">4. Cookies</h2>
            <p>
              We use cookies to enhance your experience. You can control cookies through your browser settings.
              By using our service, you consent to our use of cookies in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">5. Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics and Google AdSense. These services have their own privacy policies
              and may collect information about your online activities across different websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:{' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contact Page
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 