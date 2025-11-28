import { Link } from 'react-router-dom'
import RitmoLogo from '../assets/ritmo-lgo.png'

export default function Footer() {
  return (
    <footer className="py-10 px-4" style={{ backgroundColor: '#2B7A73' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="bg-white rounded-2xl px-4 py-2 inline-block mb-4">
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
              <li><Link to="/how-it-works" className="text-white/90 hover:text-white text-base transition-colors">How it Works</Link></li>
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
              <li><a href="#" className="text-white/90 hover:text-white text-base transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-white/90 hover:text-white text-base transition-colors">Privacy Policy</a></li>
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
    </footer>
  )
}
