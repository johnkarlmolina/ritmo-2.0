import EmailIcon from '../assets/Email.png';
import { useEffect } from 'react';
import ChatIcon from '../assets/Chat.png';
import CallIcon from '../assets/Call.png';
import SendMessageIcon from '../assets/SendMessage.png';
import LocationIcon from '../assets/Location.png';
import ConnectIcon from '../assets/Connect.png';
import FacebookIcon from '../assets/Facebook.png';
import InstagramIcon from '../assets/Instagram.png';
import TwitterIcon from '../assets/Twitter.png';

export default function Contact() {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					const el = entry.target as HTMLElement
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'))
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))

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
			<section className="py-20 px-4" data-reveal style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
						Get In Touch
					</h1>
					<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
						We're here to help and answer any<br /> questions you might have
					</p>
				</div>
			</section>

			{/* Contact Methods Section */}
			<section className="py-20 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Email us */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B7A73' }}>
								<img 
									src={EmailIcon} 
									alt="Email Icon" 
									className="w-10 h-10"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B7A73' }}>
								Email us
							</h3>
							<p className="text-[#61CCB2] font-semibold text-lg mb-3">
								support@ritmoapp.com
							</p>
							<p className="text-gray-600 text-sm">
								Get a response within 24 hours
							</p>
						</div>

						{/* Live Chat */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B7A73' }}>
								<img 
									src={ChatIcon} 
									alt="Chat Icon" 
									className="w-10 h-10"
								/>
							</div>
							<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B7A73' }}>
								Live Chat
							</h3>
							<p className="text-[#61CCB2] font-semibold text-lg mb-3">
								Available 9 AM - 6 PM
							</p>
							<p className="text-gray-600 text-sm">
								Instant support during business hours
							</p>
						</div>

						{/* Call us */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl">
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
							<p className="text-gray-600 text-sm">
								Monday to Friday, 9 AM - 5 PM
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Send Us a Message Section */}
			<section className="py-20 px-4 bg-gray-100" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-5xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
							Send Us a Message
						</h2>
						<p className="text-gray-600 text-base">
							Fill out the form below and we'll get back to you as soon as possible
						</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="bg-white rounded-3xl p-12 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
							<form className="space-y-6">
								{/* Name and Email Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-semibold mb-2" style={{ color: '#2B8A7A' }}>
											Your Name <span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											placeholder="Enter your name"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61CCB2] text-gray-700"
										/>
									</div>
									<div>
										<label className="block text-sm font-semibold mb-2" style={{ color: '#2B8A7A' }}>
											Email Address <span className="text-red-500">*</span>
										</label>
										<input
											type="email"
											placeholder="Enter your email address"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61CCB2] text-gray-700"
										/>
									</div>
								</div>

								{/* Subject */}
								<div>
									<label className="block text-sm font-semibold mb-2" style={{ color: '#2B8A7A' }}>
										Subject <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="How can we help you?"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61CCB2] text-gray-700"
									/>
								</div>

								{/* Message */}
								<div>
									<label className="block text-sm font-semibold mb-2" style={{ color: '#2B8A7A' }}>
										Message <span className="text-red-500">*</span>
									</label>
									<textarea
										rows={6}
										placeholder="Tell us more about your question or concern..."
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61CCB2] text-gray-700 resize-none"
									></textarea>
								</div>

								{/* Submit Button */}
								<div className="text-center">
									<button
										type="submit"
										className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold text-base transition-colors"
										style={{ backgroundColor: '#61CCB2' }}
									>
										<img src={SendMessageIcon} alt="Send" className="w-5 h-5" />
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Our Location and Connect with us Section */}
			<section className="py-20 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
						{/* Our Location */}
						<div className="flex flex-col h-full">
							<div className="flex items-center gap-3 mb-6">
								<img 
									src={LocationIcon} 
									alt="Location Icon" 
									className="w-8 h-8"
									style={{ filter: 'invert(48%) sepia(79%) saturate(449%) hue-rotate(120deg) brightness(94%) contrast(86%)' }}
								/>
								<h3 className="text-2xl font-bold" style={{ color: '#2B8A7A' }}>
									Our Location
								</h3>
							</div>
							<div className="bg-[#C8E6DD] rounded-3xl p-8 border-2 border-[#5BBFA5] flex-1 transition transform hover:-translate-y-1 hover:shadow-xl">
								<h4 className="font-bold text-gray-800 mb-3">Ritmo Office</h4>
								<p className="text-gray-700 text-sm leading-relaxed">
									123 Technology Drive<br />
									Quezon City, Metro Manila<br />
									Philippines 1100
								</p>
							</div>
						</div>

						{/* Connect with us */}
						<div className="flex flex-col h-full">
							<div className="flex items-center gap-3 mb-6">
								<img 
									src={ConnectIcon} 
									alt="Connect Icon" 
									className="w-8 h-8"
									style={{ filter: 'invert(48%) sepia(79%) saturate(449%) hue-rotate(120deg) brightness(94%) contrast(86%)' }}
								/>
								<h3 className="text-2xl font-bold" style={{ color: '#2B8A7A' }}>
									Connect with us
								</h3>
							</div>
							<div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-sm flex-1 transition transform hover:-translate-y-1 hover:shadow-xl">
								<p className="text-gray-600 text-sm mb-6">
									Follow us on social media for updates, tips, and community stories
								</p>
								<div className="space-y-3">
									<a href="#" className="flex items-center gap-3 bg-[#E8F4F1] rounded-lg px-4 py-3 hover:bg-[#D5EDE7] transition-colors">
										<img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
										<span className="text-gray-800 font-medium">Facebook</span>
									</a>
									<a href="#" className="flex items-center gap-3 bg-[#E8F4F1] rounded-lg px-4 py-3 hover:bg-[#D5EDE7] transition-colors">
										<img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
										<span className="text-gray-800 font-medium">Instagram</span>
									</a>
									<a href="#" className="flex items-center gap-3 bg-[#E8F4F1] rounded-lg px-4 py-3 hover:bg-[#D5EDE7] transition-colors">
										<img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
										<span className="text-gray-800 font-medium">Twitter</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
