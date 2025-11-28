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

export default function About() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const pausedRef = useRef<boolean>(false);
	const contentClonedRef = useRef<boolean>(false);
	const trackWidthRef = useRef<number>(0);

	// Auto-scrolling carousel for the Team section with pause-on-hover
	useEffect(() => {
		const el = scrollContainerRef.current;
		if (!el) return;

		let rafId: number;
		const speed = 1; // pixels per frame

		// Duplicate the inner items into the same track to avoid creating a second row
		if (!contentClonedRef.current) {
			const track = el.querySelector<HTMLDivElement>('.team-track');
			if (track) {
				// Measure original track width before cloning
				trackWidthRef.current = track.offsetWidth;
				const children = Array.from(track.children);
				children.forEach((child) => {
					const childClone = child.cloneNode(true) as HTMLElement;
					track.appendChild(childClone);
				});
				contentClonedRef.current = true;
			}
		}

		const step = () => {
			if (!pausedRef.current) {
				el.scrollLeft += speed;
				const singleWidth = trackWidthRef.current || el.scrollWidth / 2;
				// Wrap back by the width of the original track for seamless loop
				if (el.scrollLeft >= singleWidth) {
					el.scrollLeft -= singleWidth;
				}
				// Handle negative scroll (user drag left) to keep loop seamless
				if (el.scrollLeft < 0) {
					el.scrollLeft += singleWidth;
				}
			}
			rafId = requestAnimationFrame(step);
		};

		rafId = requestAnimationFrame(step);

		const onEnter = () => { pausedRef.current = true; };
		const onLeave = () => { pausedRef.current = false; };
		el.addEventListener('mouseenter', onEnter);
		el.addEventListener('mouseleave', onLeave);

		return () => {
			cancelAnimationFrame(rafId);
			el.removeEventListener('mouseenter', onEnter);
			el.removeEventListener('mouseleave', onLeave);
		};
	}, []);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const handleWheel = (e: WheelEvent) => {
			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			const currentScroll = container.scrollLeft;
			const tolerance = 1; 
			const canScrollRight = currentScroll < (maxScrollLeft - tolerance) && e.deltaY > 0;
			const canScrollLeft = currentScroll > tolerance && e.deltaY < 0;
			
			if (canScrollRight || canScrollLeft) {
				e.preventDefault();
				container.scrollLeft += e.deltaY * 2;
			}
		};

		let isDown = false;
		let startX: number;

		const handleMouseDown = (e: MouseEvent) => {
			isDown = true;
			container.style.cursor = 'grabbing';
			container.style.userSelect = 'none';
			startX = e.pageX + container.scrollLeft;
			e.preventDefault();
		};

		const handleMouseLeave = () => {
			isDown = false;
			container.style.cursor = 'grab';
			container.style.userSelect = 'auto';
		};

		const handleMouseUp = () => {
			isDown = false;
			container.style.cursor = 'grab';
			container.style.userSelect = 'auto';
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDown) return;
			e.preventDefault();
			container.scrollLeft = startX - e.pageX;
		};

		container.style.cursor = 'grab';
		container.style.userSelect = 'none';
		container.addEventListener('wheel', handleWheel, { passive: false });
		container.addEventListener('mousedown', handleMouseDown);
		container.addEventListener('mouseleave', handleMouseLeave);
		container.addEventListener('mouseup', handleMouseUp);
		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('dragstart', (e) => e.preventDefault());

		return () => {
			container.removeEventListener('wheel', handleWheel);
			container.removeEventListener('mousedown', handleMouseDown);
			container.removeEventListener('mouseleave', handleMouseLeave);
			container.removeEventListener('mouseup', handleMouseUp);
			container.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="py-20 px-4" data-reveal style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
						About Ritmo
					</h1>
					<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
						Transforming daily routines with simple, supportive<br />
						guidance for children with autism.
					</p>
				</div>
			</section>

			{/* Mission and Vision Cards Section */}
			<section className="py-20 px-4" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Our Mission Card */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="mb-6">
								<img 
									src={MissionIcon} 
									alt="Mission Icon" 
									className="w-12 h-12"
								/>
							</div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Mission
							</h2>
							<p className="text-gray-700 text-base leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>

						{/* Our Vision Card */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5] transition transform hover:-translate-y-1 hover:shadow-xl">
							<div className="mb-6">
								<img 
									src={VisionIcon} 
									alt="Vision Icon" 
									className="w-12 h-12"
								/>
							</div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Vision
							</h2>
							<p className="text-gray-700 text-base leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<p className="text-gray-700 text-base leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
						{/* Children with Autism */}
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img 
									src={ChildrenIcon} 
									alt="Children Icon" 
									className="w-12 h-12"
								/>
							</div>
							<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
								Children with Autism
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Who benefit from structured routines, visual guidance, and predictable daily activities.
							</p>
						</div>

						{/* Parents & Caregivers */}
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img 
									src={ParentIcon} 
									alt="Parents Icon" 
									className="w-12 h-12"
								/>
							</div>
							<h3 className="text-xl font-bold mb-4" style={{ color: '#2B8A7A' }}>
								Parents & Caregivers
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Families looking for an easier way to support daily habits, transitions, and independence at home.
							</p>
						</div>

						{/* Educators & Therapists */}
						<div className="flex flex-col items-center text-center">
							<div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#2B8A7A' }}>
								<img 
									src={EducatorsIcon} 
									alt="Educators Icon" 
									className="w-12 h-12"
								/>
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

			{/* Our Values Section */}
			<section className="py-20 px-4 bg-[#E8F4F1]" data-reveal>
				<div className="max-w-7xl mx-auto px-8">
					<h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2B8A7A' }}>
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Value Card 1 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px] transition transform hover:-translate-y-1 hover:shadow-xl">
						</div>

						{/* Value Card 2 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px] transition transform hover:-translate-y-1 hover:shadow-xl">
						</div>

						{/* Value Card 3 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px] transition transform hover:-translate-y-1 hover:shadow-xl">
						</div>
					</div>
			</div>
		</section>

		{/* Our Team Section */}
		<section className="py-20 bg-white" data-reveal>
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-5xl font-bold text-center mb-4" style={{ color: '#2B8A7A' }}>
					Our Team
				</h2>
				<p className="text-center text-base max-w-2xl mx-auto mb-16" style={{ color: '#2B8A7A' }}>
					Join our mission together, we can build smoother, more structured days for every child.
				</p>
			</div>
			{/* Scrollable Team Container */}
			<div className="relative">
				<div ref={scrollContainerRef} className="overflow-x-auto overflow-y-hidden scroll-smooth px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
					<style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
					<div className="team-track flex gap-10 pb-6" style={{ width: 'max-content' }}>
						{/* Team Member 1 - Myra Leah Duhiling */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Myra Leah S. Duhiling
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Project Manager
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={DuhilingImg} 
											alt="Myra Leah Duhiling" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							{/* Team Member 2 - Fletcher Peter M. Hernandez */}
							<div className="shrink-0 w-64">
								<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
									<div className="text-center mb-2 px-4 z-10">
										<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
											Fletcher Peter M. Hernandez
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD', fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
											Lead UI/UX Designer
										</p>
									</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={HernandezImg} 
											alt="Fletcher Peter M. Hernandez" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 3 - Jerald B. Isorena */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Jerald B. Isorena
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Lead Programmer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={IsorenaImg} 
											alt="Jerald B. Isorena" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 4 - John Pritch L. Arcas */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										John Pritch L. Arcas
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Back-End Developer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={ArcasImg} 
											alt="John Pritch L. Arcas" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 5 - Alrashim M. Awal */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Alrashim M. Awal
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Front-End Developer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={AwalImg} 
											alt="Alrashim M. Awal" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 6 - John Carlo A. Deato */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										John Carlo A. Deato
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Back-End Developer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={DeatoImg} 
											alt="John Carlo A. Deato" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 7 - John Karl P. Molina */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										John Karl P. Molina
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										Front-End Developer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={MolinaImg} 
											alt="John Karl P. Molina" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 8 - Kurt Lee B. Manzano */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Kurt Lee B. Manzano
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										UI/UX Designer
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={ManzanoImg} 
											alt="Kurt Lee B. Manzano" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 9 - Ashley D. Abucay */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Ashley D. Abucay
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										System Analyst
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={AbucayImg} 
											alt="Ashley D. Abucay" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 10 - Ma. Daniella A. Broncano */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16 transition transform hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Ma. Daniella A. Broncano
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										System Analyst
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={BroncanoImg} 
											alt="Ma. Daniella A. Broncano" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 11 - Nikki Anne R. Bertes */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Nikki Anne R. Bertes
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										System Analyst
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={BertesImg} 
											alt="Nikki Anne R. Bertes" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 12 - Mary Joy N. Mendoza */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Mary Joy N. Mendoza
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										System Analyst
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={MendozaImg} 
											alt="Mary Joy N. Mendoza" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						{/* Team Member 13 - Joemar A. Sambilay */}
						<div className="shrink-0 w-64">
							<div className="relative w-64 h-[400px] rounded-[200px] overflow-hidden flex flex-col items-center pt-16" style={{ backgroundColor: '#2B8A7A' }}>
								<div className="text-center mb-2 px-4 z-10">
									<h3 className="text-sm font-bold text-white leading-tight" style={{ fontSize: '0.875rem' }}>
										Joemar A. Sambilay
									</h3>
									<p className="text-sm leading-tight" style={{ color: '#C8E6DD', fontSize: '0.875rem' }}>
										System Analyst
									</p>
								</div>
									<div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
										<img 
											src={SambilayImg} 
											alt="Joemar A. Sambilay" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
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

			{/* White Space */}
			<section className="py-8 bg-white" data-reveal></section>

		</div>
	)
}
