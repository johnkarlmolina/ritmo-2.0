import NewFeatureImg from '../assets/new-feature-crop.png';
import Feature3Img from '../assets/Feature-3.png';
import Book1Img from '../assets/Book1.png';
import AutismFriendlyHomeImg from '../assets/Home.png';
import ProgressImg from '../assets/Progress.png';
import SetupRoutineImg from '../assets/Setup Routine.png';
import ParentalLockImg from '../assets/Parental Lock.png';
import DownloadIcon from '../assets/Download.png';
import RitmoAdVideo from '../assets/Ritmo Ad(22sec).mp4';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Features() {
	const { language } = useLanguage()
	const location = useLocation()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		// Scroll to how-ritmo-works section - check both hash and navigation state
		const shouldScroll = window.location.hash === '#how-ritmo-works' || (location.state as any)?.scrollToSection === 'how-ritmo-works'
		if (shouldScroll) {
			setTimeout(() => {
				document.getElementById('how-ritmo-works')?.scrollIntoView({ behavior: 'smooth' })
				// Clean up hash if present
				if (window.location.hash) {
					window.history.replaceState(null, '', window.location.pathname)
				}
			}, 100)
		}

		// Video autoplay on scroll into view
		const videoObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && videoRef.current) {
						videoRef.current.play()
					} else if (videoRef.current) {
						videoRef.current.pause()
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (videoRef.current) {
			videoObserver.observe(videoRef.current)
		}

		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'));
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'));
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'));
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl,.rounded-4xl'));
					const images = Array.from(el.querySelectorAll<HTMLElement>('img'));

					if (entry.isIntersecting) {
						headings.forEach((node, idx) => {
						const delay = Math.min(idx * 85, 425);
						node.style.transition = `transform 820ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 620ms ease-out ${delay}ms`;
						node.style.opacity = '1';
						node.style.transform = 'translateY(0) scale(1)';
						});
						texts.forEach((node, idx) => {
						const delay = Math.min(idx * 60, 360);
						node.style.transition = `transform 700ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 580ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						buttons.forEach((node, idx) => {
						const delay = Math.min(idx * 75, 450);
						node.style.transition = `transform 680ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 600ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						cards.forEach((node, idx) => {
						const delay = Math.min(idx * 70, 490);
						node.style.transition = `transform 820ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 640ms ease-out ${delay}ms`;
						node.style.opacity = '1';
						node.style.transform = 'translateY(0) scale(1)';
						});
						images.forEach((node) => {
							node.style.transition = 'transform 800ms cubic-bezier(.19,1,.22,1), opacity 600ms ease-out';
							node.style.opacity = '1';
							node.style.transform = 'translateY(0)';
						});
					} else {
						headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
					texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
					buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
					cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(36px) scale(.88)'; });
					images.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(40px)'; });
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
		);

		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'));
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'));
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'));
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl,.rounded-4xl'));
			const images = Array.from(section.querySelectorAll<HTMLElement>('img'));

			headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(36px) scale(.88)'; });
			images.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(40px)'; });

			observer.observe(section);

			const rect = section.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			if (rect.top < vh && rect.bottom > 0) {
				headings.forEach((node, idx) => {
					const delay = Math.min(idx * 85, 425);
					node.style.transition = `transform 820ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 620ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1)';
				});
				texts.forEach((node, idx) => {
					const delay = Math.min(idx * 60, 360);
					node.style.transition = `transform 700ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 580ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1)';
				});
				buttons.forEach((node, idx) => {
					const delay = Math.min(idx * 75, 450);
					node.style.transition = `transform 680ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 600ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1)';
				});
				cards.forEach((node, idx) => {
					const delay = Math.min(idx * 70, 490);
					node.style.transition = `transform 820ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 640ms ease-out ${delay}ms`;
					node.style.opacity = '1';
				images.forEach((node) => {
					node.style.transition = 'transform 800ms cubic-bezier(.19,1,.22,1), opacity 600ms ease-out';
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
				});
					node.style.transform = 'translateY(0) scale(1)';
				});
			}
		});

		return () => {
			observer.disconnect()
			videoObserver.disconnect()
		}
	}, []);
	return (
		<div className="scroll-smooth overflow-x-hidden bg-white">
			{/* Hero Section */}
			<section className="pt-24 pb-16 px-4 relative" data-reveal>
				<div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-teal-50/20 pointer-events-none" />
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2B8A7A] font-semibold text-sm mb-4 tracking-wider uppercase">Capabilities</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">{t('featuresPage')}</h2>
					<p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
						{t('featuresPageDesc')}
					</p>
				</div>
			</section>

			{/* New Features Section */}
			<section className="py-12 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<img 
						src={NewFeatureImg} 
						alt="Ritmo Features" 
						className="w-full md:w-3/4 h-auto object-contain mx-auto"
					/>
				</div>
			</section>

			{/* Autism Friendly Section */}
			<section className="py-20 px-4 bg-slate-50/50" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="flex justify-center order-2 md:order-1 relative group">
						<div className="absolute inset-0 bg-[#61CCB2] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
						<img 
							src={AutismFriendlyHomeImg} 
							alt="Autism Friendly Feature" 
							className="w-56 md:w-72 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4 drop-shadow-2xl relative z-10"
						/>
					</div>
					<div className="space-y-6 order-1 md:order-2">
						<div className="flex items-center gap-4">
							<div className="bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-2xl p-4 shrink-0 shadow-lg shadow-[#61CCB2]/30">
								<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
							<h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2D7778] to-[#61CCB2]">Autism Friendly</h3>
						</div>
						<p className="text-xl leading-relaxed text-gray-700">
							The ui design was integrated to suit people with Autism or <span className="underline decoration-2 decoration-[#61CCB2]/50 underline-offset-4 font-semibold text-[#2D7778]">Autism Spectrum Disorder</span> (ASD)
						</p>
						<ul className="space-y-4 pt-2">
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all">
								<span className="w-3 h-3 bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-full shadow-sm"></span>
								Big UI components
							</li>
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all">
								<span className="w-3 h-3 bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-full shadow-sm"></span>
								Audio Visual Feedback
							</li>
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all">
								<span className="w-3 h-3 bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-full shadow-sm"></span>
								Animated Characters
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Entertainment Section */}
			<section className="py-20 px-4 bg-white relative overflow-hidden" data-reveal>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,204,178,0.05),transparent_50%)]"></div>
				<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#61CCB2] rounded-full blur-[100px] opacity-10"></div>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
					<div className="space-y-6 order-1 md:order-1">
						<div className="flex items-center gap-4">
							<div className="bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-2xl p-4 shrink-0 shadow-lg shadow-[#61CCB2]/30">
								<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
							<h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2D7778] to-[#61CCB2]">Entertainment</h3>
						</div>
						<p className="text-xl leading-relaxed text-gray-700 font-medium">
							The System has built in games, media and book guides to enhance interaction and fun.
						</p>
						<ul className="space-y-4 pt-2">
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
								<span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#61CCB2] group-hover:bg-[#61CCB2] group-hover:text-white transition-colors duration-300 shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								</span>
								Fun and enjoying games
							</li>
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
								<span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#61CCB2] group-hover:bg-[#61CCB2] group-hover:text-white transition-colors duration-300 shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
								</span>
								Audio visual book guides
							</li>
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
								<span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#61CCB2] group-hover:bg-[#61CCB2] group-hover:text-white transition-colors duration-300 shrink-0">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
								</span>
								Media page (Youtube)
							</li>
						</ul>
					</div>
					<div className="flex justify-center items-center gap-3 md:gap-5 order-2 md:order-2 relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-[80px] group-hover:opacity-100 opacity-60 transition-opacity duration-700"></div>
						<img
							src={Feature3Img}
							alt="Entertainment Feature"
							className="w-44 md:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-2xl relative z-10"
						/>
						<img
							src={Book1Img}
							alt="Entertainment Book Guide"
							className="w-44 md:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-2 drop-shadow-2xl relative z-10"
						/>
					</div>
				</div>
			</section>

			{/* Progression Section */}
			<section className="py-20 px-4 bg-slate-50/50" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="flex justify-center order-2 md:order-1 relative group">
						<div className="absolute inset-0 bg-[#61CCB2] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
						<img 
							src={ProgressImg} 
							alt="Progression Feature" 
							className="w-56 md:w-72 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4 drop-shadow-2xl relative z-10"
						/>
					</div>
					<div className="space-y-6 order-1 md:order-2">
						<div className="flex items-center gap-4">
							<div className="bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-2xl p-4 shrink-0 shadow-lg shadow-[#61CCB2]/30">
								<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
									<path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2D7778] to-[#61CCB2]">Progression</h3>
						</div>
						<p className="text-xl leading-relaxed text-gray-700">
							The app has a built in progress report that records your child routine weekly
						</p>
						<ul className="space-y-4 pt-2">
							<li className="flex items-center gap-4 text-lg text-gray-700 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all">
								<span className="w-3 h-3 bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-full shadow-sm"></span>
								Downloadable PDF Report
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Organize Tasks & Parental Control Section */}
			<section className="py-20 px-4 bg-white relative overflow-hidden" data-reveal>
				<div className="absolute inset-0 bg-[#61CCB2]/5 skew-y-3 transform origin-bottom-left"></div>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
					{/* Organize Tasks */}
					<div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(23,163,126,0.1)] transition-all duration-500">
						<div className="space-y-6 flex-1 order-1 md:order-1">
							<div className="flex items-center gap-4">
								<div className="bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-2xl p-4 shrink-0 shadow-lg shadow-[#61CCB2]/30">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
									</svg>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800">Organize Tasks</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-600">
								Build the perfect day using expert presets or your own custom routines.
							</p>
							<ul className="space-y-3 pt-2">
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									Classic Alarm Feature
								</li>
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									Autism Integrated Preset
								</li>
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									100% Customizability
								</li>
							</ul>
						</div>
						<div className="flex justify-center flex-shrink-0 order-2 md:order-2 group w-full md:w-auto">
							<img 
								src={SetupRoutineImg} 
								alt="Organize Tasks" 
								className="w-48 md:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl"
							/>
						</div>
					</div>

					{/* Parental Control */}
					<div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(23,163,126,0.1)] transition-all duration-500">
						<div className="flex justify-center flex-shrink-0 order-2 md:order-1 group w-full md:w-auto">
							<img 
								src={ParentalLockImg} 
								alt="Parental Control" 
								className="w-48 md:w-56 h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl"
							/>
						</div>
						<div className="space-y-6 flex-1 order-1 md:order-2">
							<div className="flex items-center gap-4">
								<div className="bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-2xl p-4 shrink-0 shadow-lg shadow-[#61CCB2]/30">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800">Parental Control</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-600">
								The System has built in parental control to guide every childrens action
							</p>
							<ul className="space-y-3 pt-2">
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									Parental Lock
								</li>
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									Daily Routine Setup
								</li>
								<li className="flex items-center gap-3 text-lg text-gray-700">
									<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#61CCB2] shrink-0">✓</div>
									Limited media search
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* How Ritmo Works Section */}
{/* How Ritmo Works header */}
			<section id="how-ritmo-works" className="pt-24 pb-12 px-4 relative bg-white" data-reveal>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(97,204,178,0.1),transparent_70%)] pointer-events-none"></div>
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">How Ritmo Works</h2>
					<p className="text-lg md:text-xl text-gray-600 font-medium">Watch How Ritmo Works in action</p>
				</div>
			</section>

			{/* How Ritmo Works content (video) */}
			<section className="pb-24 px-4 bg-white" data-reveal>
				<div className="max-w-6xl mx-auto">
					<div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/50 video-container group" style={{ paddingBottom: '56.25%' }}>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
						<style>{`
							@media (min-width: 768px) {
								.video-container { padding-bottom: 42% !important; }
							}
						`}</style>
						<video
							ref={videoRef}
							className="absolute inset-0 w-full h-full object-cover"
							controls
							loop
							playsInline
							src={RitmoAdVideo}
							aria-label="How Ritmo Works sample video"
						/>
					</div>
				</div>
			</section>

			{/* Experience All Features Section */}
			<section className="py-20 px-4 bg-slate-50/50" data-reveal>
				<div className="max-w-5xl mx-auto relative">
					<div className="absolute inset-0 bg-gradient-to-r from-[#61CCB2] to-[#2B8A7A] rounded-[3rem] transform -rotate-1 opacity-20 blur-lg"></div>
					<div className="relative bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] rounded-[3rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden">
						<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-[30px]"></div>
						<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-[30px]"></div>
						
						<h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight drop-shadow-md">Experience All Features</h2>
						<p className="text-xl mb-10 text-emerald-50 max-w-2xl mx-auto leading-relaxed">
							Download Ritmo today and see how simple routines can bring calm, confidence, and independence.
						</p>
						<div className="flex justify-center">
							<Link
								to="/download"
								className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#2B8A7A] text-lg font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
							>
								<div className="bg-emerald-50 p-2 rounded-full group-hover:bg-[#61CCB2] group-hover:text-white transition-colors">
									<img src={DownloadIcon} alt="Download" className="w-5 h-5 group-hover:invert transition-all" />
								</div>
								Download Now
							</Link>
						</div>
					</div>
				</div>
			</section>

	<section className="py-6 bg-white"></section>
	</div>
	);
}
