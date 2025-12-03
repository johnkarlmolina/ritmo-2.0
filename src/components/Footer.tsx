import { Link } from 'react-router-dom'
import { useState } from 'react'
import TextLogo from '../assets/text-logo.png'
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
            <div className="bg-white rounded-full px-2 py-0 inline-block mb-4 mx-auto md:mx-0">
              <img src={TextLogo} alt="Ritmo Logo" className="h-15" />
            </div>
            <p className="text-white/90 text-base">
              Autism empowering
              One routine at a time
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
                <button type="button" onClick={() => setShowTerms(true)} className="text-white/90 hover:text-white text-base transition-colors">Terms and Conditions</button>
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
      <Modal open={showTerms} title="Terms and Conditions" onClose={() => setShowTerms(false)}>
        <h3 className="text-lg font-bold text-[#2D7778]">Last Updated: Nov. 2025</h3>
        <p className="mt-3">
          Welcome to Ritmo. These Terms and Conditions (“Terms”) govern your access to and use of the Ritmo mobile application (“App”), operated for the purpose of supporting children with Autism Spectrum Disorder (ASD) in completing daily routines with independence, structure, and consistency.
        </p>
        <p className="mt-2">By downloading, installing, or using Ritmo, you agree to be bound by these Terms. If you do not agree, please stop using the App immediately.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">1. Purpose of the App</h4>
        <p>Ritmo is designed to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Provide visual, auditory, and structured routine guides for children with Level 2 Autism.</li>
          <li>Support parents, teachers, and guardians in managing, customizing, and monitoring daily routines.</li>
          <li>Promote independence, reduce anxiety, and create predictable daily structures for children.</li>
        </ul>
        <p className="mt-2">Ritmo is an assistive tool, not a medical, therapeutic, or diagnostic service.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">2. User Eligibility</h4>
        <p>Ritmo is intended for:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Parents/Guardian who manage the child’s routines and monitor progress.</li>
          <li>Children who follow the visual and auditory guides provided in the App.</li>
        </ul>
        <p className="mt-2">Parents/Guardian are responsible for:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Creating and managing the child’s account and routine settings.</li>
          <li>Ensuring the accuracy and appropriateness of tasks added to the system.</li>
          <li>Supervising the child while using the App when necessary.</li>
        </ul>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">3. Account Registration</h4>
        <p>When creating an account:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>You agree to provide accurate and complete information.</li>
          <li>You are responsible for keeping your login details secure.</li>
          <li>You must notify Ritmo immediately if you suspect unauthorized access.</li>
        </ul>
        <p className="mt-2">Ritmo may suspend or terminate accounts that violate these Terms.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">4. App Features and Use</h4>
        <h5 className="mt-2 font-semibold text-[#2D7778]">4.1 Routine Creation & Management</h5>
        <p>Parents/Guardian can create personalized routines, tasks, and schedules based on the child’s needs. You are fully responsible for ensuring tasks are safe, age-appropriate, and supportive.</p>
        <h5 className="mt-2 font-semibold text-[#2D7778]">4.2 Visual and Auditory Guides</h5>
        <p>Ritmo provides icons, images, simple instructions, audio cues, and optional instructional videos. These guides are for educational and supportive purposes only.</p>
        <h5 className="mt-2 font-semibold text-[#2D7778]">4.3 Progress Tracking</h5>
        <p>The App may record task completion, routine history, and user activity for monitoring progress. This data is accessible only to the authorized Parents/Guardian.</p>
        <h5 className="mt-2 font-semibold text-[#2D7778]">4.4 Positive Reinforcement System</h5>
        <p>The App uses stars, badges, points, and other motivating elements to support routine completion. These rewards are digital and have no real-world monetary value.</p>
        <h5 className="mt-2 font-semibold text-[#2D7778]">4.5 Accessibility Design</h5>
        <p>Ritmo is designed with autism-friendly features including:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Low-stimulus colors</li>
          <li>Clear icons</li>
          <li>Minimal text</li>
          <li>Smooth, simple navigation</li>
        </ul>
        <p className="mt-2">However, Ritmo does not guarantee that all features will be suitable for every child.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">5. Acceptable Use of the App</h4>
        <p>By using Ritmo, you agree that you will NOT:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Misuse, reverse-engineer, or modify any App function.</li>
          <li>Use the App for purposes other than assisting routine management.</li>
          <li>Upload unlawful, harmful, or inappropriate content.</li>
          <li>Attempt to access data you are not authorized to view.</li>
        </ul>
        <p className="mt-2">Violations may result in account suspension or permanent removal.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">6. Data Privacy and Security</h4>
        <h5 className="mt-2 font-semibold text-[#2D7778]">6.1 Information We Collect</h5>
        <p>Ritmo may collect:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Parents/Guardian account information (name, email)</li>
          <li>Child routine data (tasks, progress, schedules)</li>
          <li>App usage analytics (for improvement purposes)</li>
        </ul>
        <p className="mt-2">Ritmo does not sell or share personal information with third parties for marketing.</p>
        <h5 className="mt-2 font-semibold text-[#2D7778]">6.2 How Data Is Used</h5>
        <p>Data is used to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Provide personalized routines and progress tracking</li>
          <li>Improve App performance and accessibility</li>
          <li>Ensure account security</li>
        </ul>
        <h5 className="mt-2 font-semibold text-[#2D7778]">6.3 Storage and Security</h5>
        <p>Ritmo uses secure systems to store routine and user information. However, no app can guarantee 100% security. Parents/Guardian must protect their own login information.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">7. No Medical or Therapeutic Claims</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>It is not a substitute for professional therapy, diagnosis, or medical intervention.</li>
          <li>Does not guarantee improvements in behavior, skills, or development.</li>
          <li>Should be used as a support tool alongside caregiver guidance and professional advice.</li>
        </ul>
        <p className="mt-2">Consult professionals for clinical or behavioral concerns.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">8. App Updates and Changes</h4>
        <p>Ritmo may update features, fix bugs, or change functionality at any time. Some updates may be required to continue using the App. Ritmo is not responsible for interruptions caused by updates or maintenance.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">9. Limitation of Liability</h4>
        <p>To the fullest extent allowed by law, Ritmo is not liable for:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Improper use of the App</li>
          <li>Errors caused by user-submitted tasks or routines</li>
          <li>Damages resulting from device malfunction or internet issues</li>
          <li>Behavioral outcomes that may arise from routine changes</li>
        </ul>
        <p className="mt-2">Parents/Guardian remain fully responsible for supervising the child and ensuring safety during real-life tasks.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">10. Termination of Use</h4>
        <p>Ritmo reserves the right to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Suspend or delete accounts that violate these Terms</li>
          <li>Discontinue certain features or the entire App</li>
          <li>Restrict access if misuse is suspected</li>
        </ul>
        <p className="mt-2">Users may stop using the App at any time by uninstalling it.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">11. Intellectual Property</h4>
        <p>All content in Ritmo including icons, visuals, text, videos, and system design is owned by the App developers. Users may not copy, reproduce, modify, or distribute content without permission.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">12. Contact Information</h4>
        <p>For questions, support, or feedback, you can reach us at:</p>
        <p className="mt-2">Email: <span className="text-gray-600">lagay email for contact</span><br/>Website: <span className="text-gray-600">(add website)</span></p>
      </Modal>

      {/* Privacy Modal */}
      <Modal open={showPrivacy} title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
        <p className="text-sm font-semibold text-[#2D7778]">Last Updated: November 2025</p>
        <p className="mt-3">
          Ritmo is designed to support children, parents, and caregivers in managing daily routines through visual schedules and guided activities. We value your trust and are committed to protecting your privacy. This Privacy Policy explains what information we collect, how it is used, and the choices you have regarding your data.
        </p>
        <hr className="my-4 border-[#2D7778]/20" />

        <h4 className="font-semibold text-[#2D7778]">1. Information We Collect</h4>
        <h5 className="mt-3 font-semibold text-[#2D7778]">1.1 Personal Information</h5>
        <p>
          Ritmo does not require users to create an account. However, the app may collect basic information provided by parents or caregivers, including:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Child’s nickname or first name</li>
          <li>Routine preferences (e.g., scheduled tasks)</li>
        </ul>
        <p className="mt-2">No sensitive personal data (e.g., exact location, medical history, contact details) is required.</p>

        <h5 className="mt-3 font-semibold text-[#2D7778]">1.2 Usage Data</h5>
        <p>To improve the app, we may collect anonymous usage information such as:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Features used</li>
          <li>Task completion frequency</li>
          <li>App performance and error reports</li>
        </ul>
        <p className="mt-2">This data does not identify the child or user.</p>

        <h5 className="mt-3 font-semibold text-[#2D7778]">1.3 Media Files (Optional)</h5>
        <p>If parents upload custom images or videos for routines, these remain stored locally on the device unless cloud backup is enabled by the user.</p>

        <h5 className="mt-3 font-semibold text-[#2D7778]">1.4 Device Information</h5>
        <p>The app may collect basic device data such as:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Device model</li>
          <li>Operating system version</li>
          <li>App version</li>
        </ul>
        <p className="mt-2">This helps us ensure compatibility and fix technical issues.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">2. How We Use Your Information</h4>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Customize tasks and routines for the child</li>
          <li>Improve the app’s functionality and performance</li>
          <li>Provide a personalized experience for learning and independence</li>
          <li>Ensure stability and security of the app</li>
        </ul>
        <p className="mt-2">We do not sell, rent, or share your information with advertisers.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">3. Data Storage and Security</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>All routine-related data is stored locally on the user’s device unless cloud services are enabled.</li>
          <li>We use standard security practices to protect information from unauthorized access.</li>
          <li>Parents maintain full control over the child’s information.</li>
        </ul>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">4. Data Sharing</h4>
        <p>We do not share your personal information with third parties except:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>When required by law</li>
          <li>When necessary to maintain the app (e.g., error or crash reporting tools)</li>
        </ul>
        <p className="mt-2">These tools collect anonymous diagnostic data only.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">5. Children’s Privacy</h4>
        <p>Ritmo is designed specifically for children, but all account setup and data entry are intended to be done by a parent or guardian.</p>
        <p className="mt-2">We comply with child protection best practices:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>No advertising</li>
          <li>No social media links</li>
          <li>No collection of sensitive identifying information</li>
        </ul>
        <p className="mt-2">Parents may delete the child’s data at any time.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">6. Your Rights and Choices</h4>
        <p>Parents and guardians may:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Edit or delete any information in the app</li>
          <li>Disable data collection features</li>
          <li>Request clarification about how information is handled</li>
        </ul>
        <p className="mt-2">If you want to delete all stored data, you may uninstall the app or request additional support.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">7. Changes to This Privacy Policy</h4>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted within the app. Continued use of the app means you accept the updated policy.</p>

        <hr className="my-4 border-[#2D7778]/20" />
        <h4 className="font-semibold text-[#2D7778]">8. Contact Us</h4>
        <p>If you have questions or concerns about this Privacy Policy, you may contact us at:</p>
        <p className="mt-2">Email: <span className="text-gray-600">(add email)</span><br/>Developer: <span className="text-gray-600">(add developer name)</span></p>
      </Modal>
    </footer>
  )
}
