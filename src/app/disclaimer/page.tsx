export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Disclaimer</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">General Disclaimer</h2>
            <p>
              The information provided by UrgentHai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on urgenthai.com (the &quot;Site&quot;) is for general
              informational purposes only. All information on the Site is provided in good faith, however, we make no
              representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
              reliability, availability, or completeness of any information on the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">No Professional Advice</h2>
            <p>
              The Site cannot and does not contain professional advice. The screen testing information is provided for
              general informational and educational purposes only and is not a substitute for professional advice.
              Accordingly, before taking any actions based upon such information, we encourage you to consult with the
              appropriate professionals.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Test Results Disclaimer</h2>
            <p>
              The screen tests provided on our Site are designed to help users identify potential display issues.
              However, test results may vary depending on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your display hardware and specifications</li>
              <li>Browser settings and compatibility</li>
              <li>Operating system settings</li>
              <li>Environmental conditions (lighting, viewing angle, etc.)</li>
              <li>Individual perception of colors and patterns</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">No Warranty</h2>
            <p>
              The Site is provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim
              and negate all other warranties, including without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Accuracy of Materials</h2>
            <p>
              While we strive to keep our testing tools up-to-date and accurate, we cannot guarantee that all
              information and test results are completely current. The materials appearing on our Site could include
              technical, typographical, or photographic errors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Links to Third-Party Content</h2>
            <p>
              Our Site may contain links to third-party websites or services that are not owned or controlled by
              UrgentHai. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p>
              In no event shall UrgentHai, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Site</li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>Any content obtained from the Site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Changes and Updates</h2>
            <p>
              We reserve the right to modify this disclaimer at any time without notice. By using our Site, you agree
              to be bound by the current version of this disclaimer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us through our Contact page.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 