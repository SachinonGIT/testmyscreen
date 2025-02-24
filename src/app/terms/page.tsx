export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using UrgentHai&apos;s screen testing tools, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">2. Description of Service</h2>
            <p>
              UrgentHai provides free online screen testing tools including dead pixel detection, color accuracy testing,
              backlight bleed testing, viewing angle testing, and response time testing. These tools are provided &quot;as is&quot;
              and may be updated or modified at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">3. User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the services in compliance with all applicable laws</li>
              <li>Not attempt to circumvent any service features or limitations</li>
              <li>Not use the services for any unlawful purpose</li>
              <li>Not interfere with the proper operation of the services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by UrgentHai and are protected by
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">5. Disclaimer of Warranties</h2>
            <p>
              Our services are provided &quot;as is&quot; without any warranty of any kind. We do not guarantee that our services
              will be uninterrupted, secure, or error-free. Your use of our services is at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
            <p>
              UrgentHai shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">7. Third-Party Services</h2>
            <p>
              Our services may contain links to third-party websites or services. We are not responsible for the content
              or practices of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">8. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue our services at any time without notice. We shall not be
              liable to you or any third party for any modification, suspension, or discontinuance of the services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">10. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time without prior notice. Your continued use
              of our services following any changes indicates your acceptance of such changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">11. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us through our Contact page.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 