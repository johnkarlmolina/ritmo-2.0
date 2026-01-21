import NewFeatureImg from '../assets/new-feature-crop.png';
import NewFeatureCrop1 from '../assets/new-feature-crop1.png';
import NewFeatureCrop2 from '../assets/new-feature-crop2.png';
import NewFeatureCrop3 from '../assets/new-feature-crop3.png';
import NewFeatureCrop4Left from '../assets/new-feature-crop4-left.png';
import NewFeatureCrop4Right from '../assets/new-feature-crop4-right.png';
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
		<div className="scroll-smooth overflow-x-hidden">
			<style>{`
				@keyframes slideFromLeft {
					from {
						opacity: 0;
						transform: translateX(-100px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
				@keyframes slideFromRight {
					from {
						opacity: 0;
						transform: translateX(100px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
			{/* Hero Section */}
			<section className="mt-4 pt-20 pb-20 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('featuresPage')}</h1>
					<p className="max-w-3xl mx-auto text-xl md:text-2xl text-white leading-relaxed">
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
			<section className="py-12 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
					<div className="flex justify-center order-2 md:order-1">
						<img 
							src={NewFeatureCrop1} 
							alt="Autism Friendly Feature" 
							className="w-full max-w-xs md:w-2/3 h-auto object-contain transition-all duration-500 hover:scale-110"
						/>
					</div>
					<div className="space-y-4 order-1 md:order-2">
						<div className="flex items-center gap-3">
							<div className="bg-[#61CCB2] rounded-2xl p-3 shrink-0">
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#2D7778' }}>Autism Friendly</h3>
						</div>
						<p className="text-xl leading-relaxed" style={{ color: '#2B2B2B' }}>
							The ui design was integrated to suit people with Autism or <span className="underline">Autism Spectrum Disorder</span> (ASD)
						</p>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Big Ui components
							</li>
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Audio Visual Feedback
							</li>
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Animated Characters
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Entertainment Section */}
			<section className="py-12 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
					<div className="space-y-4 order-1 md:order-1">
						<div className="flex items-center gap-3">
							<div className="bg-[#61CCB2] rounded-2xl p-3 shrink-0">
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#2D7778' }}>Entertainment</h3>
						</div>
						<p className="text-xl leading-relaxed" style={{ color: '#2B2B2B' }}>
							The System has built in games, media and book guides to enhance interaction and fun.
						</p>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Fun and enjoying games
							</li>
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Audio visual book guides
							</li>
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Media page (Youtube)
							</li>
						</ul>
					</div>
					<div className="flex justify-center order-2 md:order-2">
						<img 
							src={NewFeatureCrop2} 
							alt="Entertainment Feature" 
							className="w-full max-w-sm md:w-3/4 h-auto object-contain transition-all duration-500 hover:scale-110"
						/>
					</div>
				</div>
			</section>

			{/* Progression Section */}
			<section className="py-12 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
					<div className="flex justify-center order-2 md:order-1">
						<img 
							src={NewFeatureCrop3} 
							alt="Progression Feature" 
							className="w-full max-w-sm md:w-3/4 h-auto object-contain transition-all duration-500 hover:scale-110"
						/>
					</div>
					<div className="space-y-4 order-1 md:order-2">
						<div className="flex items-center gap-3">
							<div className="bg-[#61CCB2] rounded-2xl p-3 shrink-0">
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#2D7778' }}>Progression</h3>
						</div>
						<p className="text-xl leading-relaxed" style={{ color: '#2B2B2B' }}>
							The app has a built in progress report that records your child routine weekly
						</p>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Downloadable PDF Report
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Organize Tasks & Parental Control Section */}
			<section className="py-12 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					{/* Organize Tasks */}
					<div className="flex flex-col md:flex-row gap-6 items-center">
						<div className="space-y-4 flex-1 order-1 md:order-1 md:-mt-16">
							<div className="flex items-center gap-3">
								<div className="bg-[#61CCB2] rounded-2xl p-3 shrink-0">
									<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#2B2B2B' }}>Organize Tasks</h3>
							</div>
						<p className="text-base md:text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
								Build the perfect day using expert presets or your own custom routines.
							</p>
							<ul className="space-y-2">
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Classic Alarm Feature
							</li>
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Autism Integrated Preset
							</li>
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
									<span className="w-2 h-2 bg-black rounded-full"></span>
									100% Customizability
								</li>
							</ul>
						</div>
						<div className="flex justify-center flex-shrink-0 order-2 md:order-2 md:-mt-16">
							<img 
								src={NewFeatureCrop4Left} 
								alt="Organize Tasks" 
							className="w-48 md:w-64 h-auto object-contain transition-all duration-500 hover:scale-110"
							/>
						</div>
					</div>

					{/* Parental Control */}
					<div className="flex flex-col md:flex-row gap-6 items-center">
						<div className="flex justify-center flex-shrink-0 order-2 md:order-1 md:mt-28">
							<img 
								src={NewFeatureCrop4Right} 
								alt="Parental Control" 
							className="w-48 md:w-64 h-auto object-contain transition-all duration-500 hover:scale-110"
						/>
					</div>
					<div className="space-y-4 flex-1 order-1 md:order-2 md:mt-16">
							<div className="flex items-center gap-3">
								<div className="bg-[#61CCB2] rounded-2xl p-3 shrink-0">
									<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#2B2B2B' }}>Parental Control</h3>
							</div>
							<p className="text-base md:text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
								The System has built in parental control to guide every childrens action
							</p>
							<ul className="space-y-2">
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Parental Lock
							</li>
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
								<span className="w-2 h-2 bg-black rounded-full"></span>
								Daily Routine Setup
							</li>
							<li className="flex items-center gap-2 text-base md:text-lg" style={{ color: '#2B2B2B' }}>
									<span className="w-2 h-2 bg-black rounded-full"></span>
									Limited media search
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* How Ritmo Works Section */}
	{/* How Ritmo Works header (align styling to News/Contact hero) */}
	<section id="how-ritmo-works" className="py-8 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
		<div className="max-w-7xl mx-auto text-center">
			<h2 className="text-4xl font-bold mb-1 text-white">How Ritmo Works</h2>
			<p className="text-lg text-white">Watch How Ritmo Works</p>
		</div>
	</section>

	{/* How Ritmo Works content (video) */}
	<section className="py-8 md:py-12 bg-white" data-reveal>
		<div className="w-full">
			<div className="relative bg-gray-400 video-container" style={{ paddingBottom: '56.25%' }}>
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
	<section className="py-4 bg-white" data-reveal>
		<div className="w-full" style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto text-center py-12 px-6">
				<h2 className="text-4xl font-extrabold mb-3 text-white">Experience All Features</h2>
				<p className="text-lg mb-6 text-white">
					Download Ritmo today and see how simple routines can bring calm, confidence, and independence.
				</p>
				<div className="flex justify-center">
					<Link
						to="/download"
						className="flex items-center justify-center gap-2 w-48 py-4 bg-white hover:bg-gray-50 text-[#2B8A7A] font-semibold rounded-full shadow-lg border-2 border-white transition-all focus:outline-none focus:ring-4 focus:ring-white/60"
					>
						<img src={DownloadIcon} alt="Download" className="w-5 h-5" />
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
