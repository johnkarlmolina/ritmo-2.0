import { useRef, useEffect } from 'react';
import MissionIcon from '../assets/Mission.png';
import VisionIcon from '../assets/Vision.png';
import ChildrenIcon from '../assets/Children.png';
import ParentIcon from '../assets/Parent.png';
import EducatorsIcon from '../assets/Educators.png';
import DuhilingImg from '../asset-team-img/Duhiling.png';
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

export default function About() {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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
							const delay = Math.min(idx * 90, 450);
							node.style.transition = `transform 850ms cubic-bezier(.16,.68,.44,1.02) ${delay}ms, opacity 850ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translate(0,0) scale(1) rotate(0deg)';
						});
						texts.forEach((node, idx) => {
							const delay = Math.min(idx * 70, 420);
							node.style.transition = `transform 780ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 780ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						buttons.forEach((node, idx) => {
							const delay = Math.min(idx * 80, 480);
							node.style.transition = `transform 720ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 720ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						cards.forEach((node, idx) => {
							const delay = Math.min(idx * 85, 510);
							node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 900ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1) rotate(0deg)';
						});
					} else {
						headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-40px,-20px) scale(.92) rotate(-3deg)'; });
						texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(32px) scale(.94)'; });
						buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
						cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88) rotate(2deg)'; });
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

			headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-40px,-20px) scale(.92) rotate(-3deg)'; node.style.willChange = 'transform, opacity'; });
			texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(32px) scale(.94)'; node.style.willChange = 'transform, opacity'; });
			buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; node.style.willChange = 'transform, opacity'; });
			cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88) rotate(2deg)'; node.style.willChange = 'transform, opacity'; });

			observer.observe(section);

			const rect = section.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			if (rect.top < vh && rect.bottom > 0) {
				// Immediately reveal sections already in view on mount
				headings.forEach((node) => { node.style.opacity = '1'; node.style.transform = 'translate(0,0) scale(1) rotate(0deg)'; });
				texts.forEach((node) => { node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1)'; });
				buttons.forEach((node) => { node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1)'; });
				cards.forEach((node) => { node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1) rotate(0deg)'; });
			}
		});
	}, []);

	// Animate Mission & Vision on mount regardless of scroll
	useEffect(() => {
		const mv = document.getElementById('mission-vision');
		if (!mv) return;
		const headings = Array.from(mv.querySelectorAll<HTMLElement>('h3'));
		const texts = Array.from(mv.querySelectorAll<HTMLElement>('p'));
		const cards = Array.from(mv.querySelectorAll<HTMLElement>('.rounded-2xl'));

		headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-32px,-16px) scale(.94)'; });
		texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.94)'; });
		cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(40px) scale(.9)'; });

		requestAnimationFrame(() => {
			headings.forEach((node, idx) => {
				const d = Math.min(idx * 80, 420);
				node.style.transition = `transform 820ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 660ms ease-out ${d}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translate(0,0) scale(1)';
			});
			texts.forEach((node, idx) => {
				const d = Math.min(idx * 70, 390);
				node.style.transition = `transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 640ms ease-out ${d}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0) scale(1)';
			});
			cards.forEach((node, idx) => {
				const d = Math.min(idx * 75, 480);
				node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 700ms ease-out ${d}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0) scale(1)';
			});
		});
	}, []);

	// Ensure hero animates immediately on navigation without requiring scroll
	useEffect(() => {
		const hero = document.querySelector<HTMLElement>('section[data-reveal]');
		if (!hero) return;
		const headings = Array.from(hero.querySelectorAll<HTMLElement>('h1,h2,h3'));
		const texts = Array.from(hero.querySelectorAll<HTMLElement>('p,li'));
		const buttons = Array.from(hero.querySelectorAll<HTMLElement>('a,button'));
		const cards = Array.from(hero.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'));

		// Set initial hidden state for a clean mount animation
		headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-40px,-20px) scale(.92) rotate(-3deg)'; });
		texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(32px) scale(.94)'; });
		buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
		cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88) rotate(2deg)'; });

		// Animate into view on the next frame to avoid layout thrash
		requestAnimationFrame(() => {
			headings.forEach((node, idx) => {
				const delay = Math.min(idx * 90, 450);
				node.style.transition = `transform 850ms cubic-bezier(.16,.68,.44,1.02) ${delay}ms, opacity 850ms ease-out ${delay}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translate(0,0) scale(1) rotate(0deg)';
			});
			texts.forEach((node, idx) => {
				const delay = Math.min(idx * 70, 420);
				node.style.transition = `transform 780ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 780ms ease-out ${delay}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0) scale(1)';
			});
			buttons.forEach((node, idx) => {
				const delay = Math.min(idx * 80, 480);
				node.style.transition = `transform 720ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 720ms ease-out ${delay}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0) scale(1)';
			});
			cards.forEach((node, idx) => {
				const delay = Math.min(idx * 85, 510);
				node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 900ms ease-out ${delay}ms`;
				node.style.opacity = '1';
				node.style.transform = 'translateY(0) scale(1) rotate(0deg)';
			});
		});
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<section className="mt-4 pt-20 pb-20 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
						About Ritmo
					</h1>
					<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
						Transforming daily routines with simple, supportive guidance for children with autism.
					</p>
				</div>
			</section>

			{/* Mission & Vision Cards */}
			<section id="mission-vision" className="px-4 py-16 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-[#E9FBF7] border border-gray-300 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1">
						<div className="w-10 h-10 mb-4 flex items-center justify-center text-[#2B8A7A]">
							<img src={MissionIcon} alt="Mission Icon" className="w-8 h-8" />
						</div>
						<h3 className="font-bold text-lg mb-3" style={{ color: '#2B8A7A' }}>Our Mission</h3>
						<p className="text-sm text-gray-600 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					<div className="bg-[#E9FBF7] border border-gray-300 rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1">
						<div className="w-10 h-10 mb-4 flex items-center justify-center text-[#2B8A7A]">
							<img src={VisionIcon} alt="Vision Icon" className="w-8 h-8" />
						</div>
						<h3 className="font-bold text-lg mb-3" style={{ color: '#2B8A7A' }}>Our Vision</h3>
						<p className="text-sm text-gray-600 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-20 px-4 bg-gray-100" data-reveal>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-5xl font-bold text-center mb-12" style={{ color: '#2B8A7A' }}>
						Our Story
					</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-3xl p-12 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
							<p className="text-gray-700 text-base leading-relaxed mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p className="text-gray-700 text-base leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Who We Serve Section */}
			<section className="py-20 px-4 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-5xl font-bold text-center mb-4" style={{ color: '#2B8A7A' }}>
						Who We Serve
					</h2>
					<p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
						Ritmo is designed for everyone who plays a role in a child's communication journey
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={ChildrenIcon} alt="Children Icon" className="w-12 h-12" />
							</div>
							<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
								Children with Autism
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Who benefit from structured routines, visual guidance, and predictable daily activities.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={ParentIcon} alt="Parents Icon" className="w-12 h-12" />
							</div>
							<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
								Parents & Caregivers
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Families looking for an easier way to support daily habits, transitions, and independence at home.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img src={EducatorsIcon} alt="Educators Icon" className="w-12 h-12" />
							</div>
							<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
								Educators & Therapists
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Special education teachers and professionals helping children follow routines, stay organized, and build essential life skills.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Team Section with Flip Cards */}
			<section className="py-20 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-5xl font-bold text-center mb-4" style={{ color: '#2B8A7A' }}>
						Our Team
					</h2>
					<p className="text-center text-base max-w-2xl mx-auto mb-16" style={{ color: '#2B8A7A' }}>
						Tap / click a card to flip and learn more.
					</p>
				</div>
				<div className="relative">
					<div ref={scrollContainerRef} className="infinite-carousel px-4">
						<div className="team-track infinite-carousel-track flex gap-10 pb-6" style={{ width: 'max-content' }}>
							{[
								{ name: 'Myra Leah S. Duhiling', role: 'Project Manager', img: DuhilingImg },
								{ name: 'Fletcher Peter M. Hernandez', role: 'Lead UI/UX Designer', img: HernandezImg },
								{ name: 'Jerald B. Isorena', role: 'Lead Programmer', img: IsorenaImg },
								{ name: 'John Pritch L. Arcas', role: 'Back-End Developer', img: ArcasImg },
								{ name: 'Alrashim M. Awal', role: 'Front-End Developer', img: AwalImg },
								{ name: 'John Carlo A. Deato', role: 'Back-End Developer', img: DeatoImg },
								{ name: 'John Karl P. Molina', role: 'Front-End Developer', img: MolinaImg },
								{ name: 'Kurt Lee B. Manzano', role: 'UI/UX Designer', img: ManzanoImg },
								{ name: 'Ashley D. Abucay', role: 'System Analyst', img: AbucayImg },
								{ name: 'Ma. Daniella A. Broncano', role: 'System Analyst', img: BroncanoImg },
								{ name: 'Nikki Anne R. Bertes', role: 'System Analyst', img: BertesImg },
								{ name: 'Mary Joy N. Mendoza', role: 'System Analyst', img: MendozaImg },
								{ name: 'Joemar A. Sambilay', role: 'System Analyst', img: SambilayImg }
							].map(m => (
								<TeamMemberCard key={m.name} name={m.name} role={m.role} img={m.img} />
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Join Our Mission Section */}
			<section className="py-16 px-4" data-reveal style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-5xl font-bold text-white mb-4">
						Join Our Mission
					</h2>
					<p className="text-lg text-white">
						Together, we can build smoother, more structured days for every child.
					</p>
				</div>
			</section>

			<section className="py-8 bg-white" data-reveal></section>
		</div>
	);
}
