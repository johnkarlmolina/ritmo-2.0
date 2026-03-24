//import EmailIcon from '../assets/Email.png';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
// import CallIcon from '../assets/Call.png';
import SendMessageIcon from '../assets/SendMessage.png';
// import LocationIcon from '../assets/Location.png';
import ConnectIcon from '../assets/Connect.png';
import FacebookIcon from '../assets/Facebook.png';
import InstagramIcon from '../assets/Instagram.png';
import YoutubeIcon from '../assets/Youtube.png';
import emailjs from '@emailjs/browser';
// Replaced Twitter with YouTube (inline SVG icon)

// Initialize EmailJS (replace with your public key from emailjs.com)
emailjs.init('WbvSMH42FWCXVHL3g')

export default function Contact() {
	const { language } = useLanguage()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
	const [loading, setLoading] = useState(false)
	const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setMessageStatus(null)

		try {
			// Validate form
			if (!formData.name || !formData.email || !formData.subject || !formData.message) {
				setMessageStatus({ type: 'error', text: 'Please fill in all required fields' })
				setLoading(false)
				return
			}

			// Send inquiry email to Ritmokids1123@gmail.com
			await emailjs.send(
				'service_62ccr0d',
				'template_pqr9pd7',
				{
					name: formData.name,
					email: formData.email,
					title: formData.subject,
					message: formData.message
				}
			)

			setMessageStatus({ type: 'success', text: 'Thank you for reaching out to us! we\'ll do our best to answer it within 24 hours.' })
			setFormData({ name: '', email: '', subject: '', message: '' })
		} catch (error: any) {
			console.error('Email send failed:', error)
			console.error('Error details:', error?.message || error?.text || error)
			console.error('Full error object:', JSON.stringify(error, null, 2))
			setMessageStatus({ type: 'error', text: 'Failed to send message. Please try again.' })
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'))
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))

					if (entry.isIntersecting) {
						headings.forEach((node, idx) => {
							const d = Math.min(idx * 85, 425)
							node.style.transition = `transform 820ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 620ms ease-out ${d}ms, filter 620ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.filter = 'blur(0px)'
							node.style.transform = 'translateY(0) scale(1)'
						})
						texts.forEach((node, idx) => {
							const d = Math.min(idx * 60, 360)
							node.style.transition = `transform 700ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 580ms ease-out ${d}ms, filter 580ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.filter = 'blur(0px)'
							node.style.transform = 'translateY(0) scale(1)'
						})
						buttons.forEach((node, idx) => {
							const d = Math.min(idx * 75, 450)
							node.style.transition = `transform 680ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 600ms ease-out ${d}ms, filter 600ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.filter = 'blur(0px)'
							node.style.transform = 'translateY(0) scale(1)'
						})
						cards.forEach((node, idx) => {
							const d = Math.min(idx * 70, 490)
							node.style.transition = `transform 820ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 640ms ease-out ${d}ms, filter 640ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.filter = 'blur(0px)'
							node.style.transform = 'translateY(0) scale(1)'
						})
					} else {
						// Reset for replay on scroll up
						headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(8px)' })
						texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(10px)' })
						buttons.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(10px)' })
						cards.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(36px) scale(.88)'; node.style.filter='blur(12px)' })
					}
				})
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
		)
		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'))
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))
			headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(8px)'; node.style.willChange='transform, opacity, filter' })
			texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(10px)'; node.style.willChange='transform, opacity, filter' })
			buttons.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(28px) scale(.9)'; node.style.filter='blur(10px)'; node.style.willChange='transform, opacity, filter' })
			cards.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(36px) scale(.88)'; node.style.filter='blur(12px)'; node.style.willChange='transform, opacity, filter' })
			observer.observe(section)
			const rect = section.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight
			if (rect.top < vh && rect.bottom > 0) {
				requestAnimationFrame(() => {
					headings.forEach((node, idx) => { const d=Math.min(idx*85,425); node.style.transition=`transform 820ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 620ms ease-out ${d}ms, filter 620ms ease-out ${d}ms`; node.style.opacity='1'; node.style.filter='blur(0px)'; node.style.transform='translateY(0) scale(1)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*60,360); node.style.transition=`transform 700ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 580ms ease-out ${d}ms, filter 580ms ease-out ${d}ms`; node.style.opacity='1'; node.style.filter='blur(0px)'; node.style.transform='translateY(0) scale(1)' })
					buttons.forEach((node, idx) => { const d=Math.min(idx*75,450); node.style.transition=`transform 680ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 600ms ease-out ${d}ms, filter 600ms ease-out ${d}ms`; node.style.opacity='1'; node.style.filter='blur(0px)'; node.style.transform='translateY(0) scale(1)' })
					cards.forEach((node, idx) => { const d=Math.min(idx*70,490); node.style.transition=`transform 820ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 640ms ease-out ${d}ms, filter 640ms ease-out ${d}ms`; node.style.opacity='1'; node.style.filter='blur(0px)'; node.style.transform='translateY(0) scale(1)' })
				})
			}
		})
		return () => observer.disconnect()
	}, [])
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="pt-24 pb-12 px-4 relative" data-reveal>
				<div className="absolute inset-0 bg-gradient-to-t from-emerald-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2B8A7A] font-semibold text-sm mb-4 tracking-wider uppercase">Contact Us</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">
						{t('getInTouch')}
					</h2>
					<p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
						{t('hereToHelp')}
					</p>
				</div>
			</section>

			{/* Contact Methods Section */}
			{/* <section className="py-20 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Email us */}
						{/* <button
							onClick={() => {
								const messageSection = document.getElementById('message-section')
								messageSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
							}}
							className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer w-full"
						>
							<div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B7A73' }}>
								<img 
									src={EmailIcon} 
									alt="Email Icon" 
									className="w-10 h-10"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B7A73' }}>
								{t('emailUs')}
							</h3>
							<p className="text-[#61CCB2] font-semibold text-lg mb-3">
								Ritmokids1123@gmail.com
							</p>
							<p className="text-gray-600 text-sm">
								Get a response within 24 hours
							</p>
						</button> */}

						{/* Our Location (replacing Live Chat) */}
						{/* <div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B7A73' }}>
								<img 
									src={LocationIcon} 
									alt="Location Icon" 
									className="w-10 h-10"
									style={{ filter: 'brightness(0) invert(1)' }}
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B7A73' }}>
								Our Location
							</h3>
							<p className="text-[#61CCB2] font-semibold text-lg mb-3">
								123 Ritmo St., Quezon City
							</p>
							<p className="text-gray-600 text-sm">
								Open Mon–Fri, 9 AM – 5 PM
							</p>
						</div> */}

						{/* Call us */}
						{/* <div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B7A73' }}>
								<img 
									src={CallIcon} 
									alt="Call Icon" 
									className="w-10 h-10"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B7A73' }}>
								Call us
							</h3>
							<p className="text-[#61CCB2] font-semibold text-lg mb-3">
								+63 2 1234 5678
							</p>
			 className="text-gray-600 text-sm">
				Monday to Friday, 9 AM - 5 PM
							</p>
						</div> */}
					{/* </div>
				</div>
			</section> */}

			{/* Send Us a Message Section */}
			<section className="py-24 px-4 bg-slate-50/50 scroll-mt-20 relative overflow-hidden" data-reveal id="message-section">
				<div className="absolute top-0 right-0 w-96 h-96 bg-[#61CCB2] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B8A7A] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
				
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">
							Send Us a Message
						</h2>
						<p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
							Fill out the form below and we'll get back to you as soon as possible
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white">
							<form className="space-y-8" onSubmit={handleSubmit}>
								{/* Status Message */}
								{messageStatus && (
									<div className={`p-4 rounded-2xl text-center text-sm font-semibold transition-all duration-300 ${messageStatus.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
										{messageStatus.text}
									</div>
								)}

								{/* Name and Email Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div className="space-y-2">
										<label className="block text-sm font-bold text-gray-700 ml-1">
											Your Name <span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Enter your name"
											className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#61CCB2] focus:border-transparent focus:bg-white text-gray-800 transition-all placeholder-gray-400"
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-gray-700 ml-1">
											Email Address <span className="text-red-500">*</span>
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Enter your email"
											className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#61CCB2] focus:border-transparent focus:bg-white text-gray-800 transition-all placeholder-gray-400"
										/>
									</div>
								</div>

								{/* Subject */}
								<div className="space-y-2">
									<label className="block text-sm font-bold text-gray-700 ml-1">
										Subject <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										placeholder="How can we help you?"
										className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#61CCB2] focus:border-transparent focus:bg-white text-gray-800 transition-all placeholder-gray-400"
									/>
								</div>

								{/* Message */}
								<div className="space-y-2">
									<label className="block text-sm font-bold text-gray-700 ml-1">
										Message <span className="text-red-500">*</span>
									</label>
									<textarea
										name="message"
										rows={6}
										value={formData.message}
										onChange={handleInputChange}
										placeholder="Tell us more about your question or concern..."
										className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#61CCB2] focus:border-transparent focus:bg-white text-gray-800 transition-all resize-none placeholder-gray-400"
									></textarea>
								</div>

								{/* Submit Button */}
								<div className="text-center pt-4">
									<button
										type="submit"
										disabled={loading}
										className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2] hover:from-[#237064] hover:to-[#4DB89E] text-white font-bold text-lg rounded-2xl shadow-[0_10px_20px_rgba(97,204,178,0.3)] hover:shadow-[0_15px_30px_rgba(97,204,178,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group w-full md:w-auto"
									>
										<span>{loading ? 'Sending...' : 'Send Message'}</span>
										{!loading && <img src={SendMessageIcon} alt="Send" className="w-5 h-5 group-hover:translate-x-1 transition-transform invert" />}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Connect with us Section */}
			<section className="py-20 px-4 bg-white relative" data-reveal>
				<div className="absolute left-0 bottom-0 w-64 h-64 bg-[#61CCB2] rounded-full blur-[100px] opacity-5 pointer-events-none"></div>
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="max-w-4xl mx-auto">
						<div className="bg-emerald-50/50 rounded-[2.5rem] p-10 md:p-14 border border-emerald-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-center transition-all hover:shadow-[0_15px_50px_rgba(97,204,178,0.1)]">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
								<img 
									src={ConnectIcon} 
									alt="Connect Icon" 
									className="w-8 h-8"
									style={{ filter: 'invert(48%) sepia(79%) saturate(449%) hue-rotate(120deg) brightness(94%) contrast(86%)' }}
								/>
							</div>
							<h3 className="text-3xl font-extrabold mb-4 text-gray-800">
								Connect with us
							</h3>
							<p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
								Follow us on social media for updates, tips, and community stories.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<a href="#" className="flex items-center gap-3 bg-white w-full sm:w-auto px-8 py-4 rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all group">
									<img src={FacebookIcon} alt="Facebook" className="w-6 h-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
									<span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">Facebook</span>
								</a>
								<a href="#" className="flex items-center gap-3 bg-white w-full sm:w-auto px-8 py-4 rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all group">
									<img src={InstagramIcon} alt="Instagram" className="w-6 h-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
									<span className="text-gray-700 font-semibold group-hover:text-pink-600 transition-colors">Instagram</span>
								</a>
								<a href="#" className="flex items-center gap-3 bg-white w-full sm:w-auto px-8 py-4 rounded-xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all group">
									<img src={YoutubeIcon} alt="YouTube" className="w-6 h-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
									<span className="text-gray-700 font-semibold group-hover:text-red-600 transition-colors">YouTube</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
