import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
// import MissionIcon from '../assets/Mission.png';
// import VisionIcon from '../assets/Vision.png';
import ChildrenIcon from '../assets/Children.png';
import ParentIcon from '../assets/Parent.png';
import EducatorsIcon from '../assets/Educators.png';
import DuhilingImg from '../asset-team-img/DUHILING-removebg-preview.png';
import HernandezImg from '../asset-team-img/Hernandez.png';
import IsorenaImg from '../asset-team-img/Isorena.png';
import ArcasImg from '../asset-team-img/Arcas.png';
import AwalImg from '../asset-team-img/Awal.png';
import DeatoImg from '../asset-team-img/Deato.png';
import MolinaImg from '../asset-team-img/Molina.png';
import ManzanoImg from '../asset-team-img/Manzano.png';
import AbucayImg from '../asset-team-img/Abucay.png';
import BroncanoImg from '../asset-team-img/Broncano.png';
import BertesImg from '../asset-team-img/Bertes.png';
import MendozaImg from '../asset-team-img/Mendoza.png';
import SambilayImg from '../asset-team-img/Sambilay.png';
import TeamMemberCard from '../components/TeamMemberCard';
import HImg from '../assets/H.png';
import DownloadIcon from '../assets/Download.png';
import WatchIcon from '../assets/Watch.png';

export default function About() {
	const { language } = useLanguage()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'));
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'));
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'));
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'));

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
					} else {
						headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
					texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
						buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
						cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(36px) scale(.88)'; });
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
		);

		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'));
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'));
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'));
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'));

			headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(36px) scale(.88)'; });

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
					node.style.transform = 'translateY(0) scale(1)';
				});
			}
		});
	}, []);

	return (
		<div className="bg-slate-50/50">
			{/* Hero / Section Header */}
			<section className="pt-24 pb-16 px-4 relative overflow-hidden" data-reveal>
				<div className="absolute inset-0 bg-gradient-to-br from-[#61CCB2]/20 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2B8A7A] font-semibold text-sm mb-4 tracking-wider uppercase">Our Mission</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">{t('aboutRitmo')}</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('transformingDaily')}</p>
				</div>
			</section>

		{/* Team */}
		<section className="py-24 bg-white relative" data-reveal>
			<div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
			<div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
			<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">{t('ourTeam')}</h2>
				
				{/* Grid layout: responsive columns */}
				<div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 justify-center">
					{(() => {
						const members = [
							{ name: 'Myra Leah S. Duhiling', role: 'Project Manager', img: DuhilingImg, details: 'Leads cross-functional efforts and keeps the team aligned to goals.' },
							{ name: 'Fletcher Peter M. Hernandez', role: 'Lead UI/UX Designer', img: HernandezImg, details: 'Designs human-centered interfaces and ensures accessible experiences.' },
							{ name: 'Jerald B. Isorena', role: 'Lead Programmer', img: IsorenaImg, details: 'Architects core features and maintains code quality and performance.' },
							{ name: 'John Pritch L. Arcas', role: 'Back-End Developer', img: ArcasImg, details: 'Builds reliable APIs and data flows powering Ritmo routines.' },
							{ name: 'Alrashim M. Awal', role: 'Front-End Developer', img: AwalImg, details: 'Implements responsive UI and smooth interactions for daily use.' },
							{ name: 'John Carlo A. Deato', role: 'Back-End Developer', img: DeatoImg, details: 'Focuses on server logic and secure data handling.' },
							{ name: 'John Karl P. Molina', role: 'Front-End Developer', img: MolinaImg, details: 'Delivers features with attention to clarity and performance.' },
							{ name: 'Kurt Lee B. Manzano', role: 'UI/UX Designer', img: ManzanoImg, details: 'Shapes visual identity and consistent design systems.' },
							{ name: 'Ashley D. Abucay', role: 'System Analyst', img: AbucayImg, details: 'Analyzes requirements and streamlines workflows for families.' },
							{ name: 'Ma. Daniella A. Broncano', role: 'System Analyst', img: BroncanoImg, details: 'Translates user needs into actionable technical specs.' },
							{ name: 'Nikki Anne R. Bertes', role: 'System Analyst', img: BertesImg, details: 'Improves processes and ensures reliable routine tracking.' },
							{ name: 'Mary Joy N. Mendoza', role: 'System Analyst', img: MendozaImg, details: 'Helps validate features that support daily independence.' },
							{ name: 'Joemar A. Sambilay', role: 'System Analyst', img: SambilayImg, details: 'Focuses on usability and real-world routine scenarios.' }
						];
						return members.map((m) => (
							<TeamMemberCard key={m.name} name={m.name} role={m.role} img={m.img} details={m.details} />
						));
					})()}
				</div>
			</div>
		</section>			{/* Story */}
			<section className="py-24 px-4 bg-slate-50/50 relative overflow-hidden" data-reveal>
				<div className="absolute top-0 right-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
				<div className="max-w-7xl mx-auto relative z-10">
					<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">{t('ourStory')}</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)]">
						<p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">{t('storyP1')}</p>
					<p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">{t('storyP2')}</p>
						<p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">{t('thatVisionBecameRitmo')}</p>
						<p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">{t('storyP4')}</p>
						<p className="text-gray-700 text-base leading-relaxed text-justify">{t('storyP5')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Who We Serve */}
			<section className="py-24 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">{t('whoWeServe')}</h2>
					<p className="text-center text-gray-600 text-lg md:text-xl mb-20 max-w-3xl mx-auto">{t('ritmoIsDesignedFor')}</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
						{/* Card 1 */}
						<div className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2">
							<div className="w-24 h-24 rounded-3xl mb-8 flex items-center justify-center bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] shadow-lg shadow-[#61CCB2]/30 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
								<img src={ChildrenIcon} alt="Children Icon" className="w-12 h-12 brightness-0 invert" />
							</div>
								<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('childrenWithAutism')}</h3>
								<p className="text-gray-600 text-base leading-relaxed">{t('childrenBenefit')}</p>
						</div>
						{/* Card 2 */}
						<div className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2">
							<div className="w-24 h-24 rounded-3xl mb-8 flex items-center justify-center bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] shadow-lg shadow-[#61CCB2]/30 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
								<img src={ParentIcon} alt="Parents Icon" className="w-12 h-12 brightness-0 invert" />
							</div>
								<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('parentsAndCaregivers')}</h3>
								<p className="text-gray-600 text-base leading-relaxed">{t('parentsBenefit')}</p>
						</div>
						{/* Card 3 */}
						<div className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2">
							<div className="w-24 h-24 rounded-3xl mb-8 flex items-center justify-center bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] shadow-lg shadow-[#61CCB2]/30 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
								<img src={EducatorsIcon} alt="Educators Icon" className="w-12 h-12 brightness-0 invert" />
							</div>
								<h3 className="text-2xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('educatorsAndTherapists')}</h3>
								<p className="text-gray-600 text-base leading-relaxed">{t('educatorsBenefit')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Availability Promo */}
			<section className="py-24 px-4 bg-slate-50/50" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="bg-gradient-to-r from-emerald-50 to-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-100 flex flex-col md:flex-row items-center gap-12 md:gap-16">
						<div className="w-full md:w-5/12 flex justify-center">
							<div className="relative group">
								<div className="absolute inset-0 bg-[#61CCB2] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
								<img src={HImg} alt="Hand holding phone with Ritmo app" className="w-full max-w-[280px] h-auto object-cover relative z-10 drop-shadow-2xl transition-transform duration-700 hover:-translate-y-4" />
							</div>
						</div>
						<div className="w-full md:w-7/12">
						<h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#2B8A7A' }}>{t('ritmoAppAvailable')}</h3>
						<p className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('whatDoesRitmoDo')}</p>
						<ul className="text-gray-600 space-y-4 mb-10 text-lg">
							<li className="flex items-center gap-3">
								<div className="w-2.5 h-2.5 rounded-full bg-[#61CCB2]"></div>
								{t('visualRoutines')}
							</li>
							<li className="flex items-center gap-3">
								<div className="w-2.5 h-2.5 rounded-full bg-[#61CCB2]"></div>
								{t('positiveFeedback')}
							</li>
						</ul>
						<div className="flex flex-wrap gap-4">
						<Link to="/download" state={{ scrollToSection: 'phone-mockup' }} className="inline-flex items-center gap-3 rounded-full bg-white text-gray-800 px-8 py-4 shadow-[0_4px_15px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all whitespace-nowrap font-bold text-lg border border-gray-100">
							<img src={DownloadIcon} alt="Download" className="w-6 h-6" />
							{t('downloadNow')}
						</Link>
						<Link to="/features" state={{ scrollToSection: 'how-ritmo-works' }} className="inline-flex items-center gap-3 rounded-full text-white font-bold text-lg px-8 py-4 shadow-[0_4px_15px_rgba(97,204,178,0.3)] hover:shadow-[0_8px_25px_rgba(97,204,178,0.4)] hover:-translate-y-1 transition-all whitespace-nowrap bg-gradient-to-r from-[#2D7778] to-[#61CCB2]">
								<img src={WatchIcon} alt="Watch" className="w-6 h-6 brightness-0 invert" />
								{t('watchDemo')}
							</Link>
						</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-4 bg-white" data-reveal></section>
			</div>
		);
	}

