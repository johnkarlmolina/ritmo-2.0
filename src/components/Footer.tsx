import { Link } from 'react-router-dom'
import { useState } from 'react'
import RitmoLogo from '../assets/ritmo-lgo.png'
import Modal from './Modal'

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <footer className="py-10 px-4" style={{ backgroundColor: '#2B7A73' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8 place-items-center md:place-items-start text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <div className="bg-white rounded-2xl px-4 py-2 inline-block mb-4 mx-auto md:mx-0">
              <img src={RitmoLogo} alt="Ritmo Logo" className="h-7" />
            </div>
            <p className="text-white/90 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-white/90 hover:text-white text-base transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-white/90 hover:text-white text-base transition-colors">Features</Link></li>
              <li><Link to="/news" className="text-white/90 hover:text-white text-base transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Support</h3>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-white/90 hover:text-white text-base transition-colors">Contact Us</Link></li>
              <li><Link to="/download" className="text-white/90 hover:text-white text-base transition-colors">Download</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => setShowTerms(true)} className="text-white/90 hover:text-white text-base transition-colors">Terms of Use</button>
              </li>
              <li>
                <button type="button" onClick={() => setShowPrivacy(true)} className="text-white/90 hover:text-white text-base transition-colors">Privacy Policy</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/80 text-base">
            © {new Date().getFullYear()} Ritmo. All rights reserved. Made with <span className="text-white">♥</span> for children with autism.
          </p>
        </div>
      </div>

      {/* Terms Modal */}
      <Modal open={showTerms} title="Terms of Use" onClose={() => setShowTerms(false)}>
        <p>
          Welcome to Ritmo. By accessing or using our app and website, you agree to these Terms of Use. Please read them carefully.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">Use of Service</h4>
        <p>
          Ritmo is designed to support daily routines. Do not misuse the service. You may not copy, reverse engineer, or attempt to disrupt the platform.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">Accounts & Content</h4>
        <p>
          You are responsible for the accuracy of information you provide. Content you upload must comply with applicable laws.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">Limitation of Liability</h4>
        <p>
          Ritmo is provided "as is" without warranties. To the extent permitted by law, we are not liable for indirect or consequential damages.
        </p>
        <p className="mt-4 text-sm text-gray-500">This is a summary. Provide your full legal terms here.</p>
      </Modal>

      {/* Privacy Modal */}
      <Modal open={showPrivacy} title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
        <p>
          Your privacy matters. This policy explains what data we collect, how we use it, and your rights.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">Data We Collect</h4>
        <p>
          We may collect basic usage data and preferences to improve the experience. We do not sell personal data.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">How We Use Data</h4>
        <p>
          Data helps personalize routines and enhance features. You can request deletion of your data at any time.
        </p>
        <h4 className="mt-4 font-semibold text-[#2D7778]">Security</h4>
        <p>
          We use industry-standard measures to protect information, but no method is 100% secure.
        </p>
        <p className="mt-4 text-sm text-gray-500">Replace this with your complete, formal privacy policy text.</p>
      </Modal>
    </footer>
  )
}
