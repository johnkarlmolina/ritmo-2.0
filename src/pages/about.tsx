import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import MissionIcon from '../assets/Mission.png';
import VisionIcon from '../assets/Vision.png';
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
import HandPhoneImg from '../assets/hand-phone.png';
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
		<div>
			{/* Hero */}
			<section className="mt-4 pt-20 pb-20 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('aboutRitmo')}</h1>
					<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">{t('transformingDaily')}</p>
				</div>
			</section>

		{/* Team */}
		<section className="py-20 bg-white" data-reveal>
			<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-5xl font-bold text-center mb-4" style={{ color: '#2B8A7A' }}>{t('ourTeam')}</h2>
				
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
			<section className="py-20 px-4 bg-gray-100" data-reveal>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-5xl font-bold text-center mb-12" style={{ color: '#2B8A7A' }}>{t('ourStory')}</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-3xl p-12 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
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
			<section className="py-20 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#2B8A7A' }}>{t('whoWeServe')}</h2>
					<p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">{t('ritmoIsDesignedFor')}</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={ChildrenIcon} alt="Children Icon" className="w-12 h-12" />
							</div>
								<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('childrenWithAutism')}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{t('childrenBenefit')}</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={ParentIcon} alt="Parents Icon" className="w-12 h-12" />
							</div>
								<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('parentsAndCaregivers')}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{t('parentsBenefit')}</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={EducatorsIcon} alt="Educators Icon" className="w-12 h-12" />
							</div>
								<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>{t('educatorsAndTherapists')}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{t('educatorsBenefit')}</p>
						</div>
					</div>
				</div>
			</section>

			{/* Availability Promo */}
			<section className="py-16 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
						<div className="w-full md:w-1/3">
							<div className="rounded-2xl shadow-md border border-gray-200 overflow-hidden bg-white max-w-xs mx-auto">
								<img src={HandPhoneImg} alt="Hand holding phone with Ritmo app" className="w-full h-auto object-cover" />
							</div>
						</div>
						<div className="w-full md:w-2/3">
						<h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#2B8A7A' }}>{t('ritmoAppAvailable')}</h3>
						<p className="font-semibold mb-2" style={{ color: '#2B8A7A' }}>{t('whatDoesRitmoDo')}</p>
						<ul className="text-gray-600 space-y-2 mb-6 list-disc pl-5">
							<li>{t('visualRoutines')}</li>
							<li>{t('positiveFeedback')}</li>
						</ul>
						<div className="flex flex-wrap gap-3">
						<Link to="/download" state={{ scrollToSection: 'phone-mockup' }} className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-6 py-3 shadow-sm hover:bg-gray-200 transition whitespace-nowrap">
							<img src={DownloadIcon} alt="Download" className="w-5 h-5" />
							{t('downloadNow')}
						</Link>
						<Link to="/features" state={{ scrollToSection: 'how-ritmo-works' }} className="inline-flex items-center gap-2 rounded-full text-white font-semibold px-6 py-3 shadow-md hover:opacity-90 transition-all whitespace-nowrap" style={{ backgroundColor: '#61CCB2' }}>
								<img src={WatchIcon} alt="Watch" className="w-5 h-5" />
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

