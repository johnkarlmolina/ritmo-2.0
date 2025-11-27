import MissionIcon from '../assets/Mission.png';
import VisionIcon from '../assets/Vision.png';
import ChildrenIcon from '../assets/Children.png';
import ParentIcon from '../assets/Parent.png';
import EducatorsIcon from '../assets/Educators.png';
import RitmoLogo from '../assets/ritmo-lgo.png';

// Team member images
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
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="py-20 px-4" style={{ backgroundColor: '#61CCB2' }}>
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
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{/* Our Mission Card */}
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5]">
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
						<div className="bg-[#C8E6DD] rounded-3xl p-10 border-2 border-[#5BBFA5]">
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
			<section className="py-20 px-4 bg-gray-100">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-5xl font-bold text-center mb-12" style={{ color: '#2B8A7A' }}>
						Our Story
					</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-3xl p-12 shadow-md">
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
			<section className="py-20 px-4 bg-white">
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
			<section className="py-20 px-4 bg-[#E8F4F1]">
				<div className="max-w-7xl mx-auto px-8">
					<h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2B8A7A' }}>
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Value Card 1 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px]">
						</div>

						{/* Value Card 2 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px]">
						</div>

						{/* Value Card 3 */}
						<div className="bg-white rounded-3xl p-12 shadow-sm min-h-[280px]">
						</div>
					</div>
			</div>
		</section>

		{/* Our Team Section */}
		<section className="py-20 px-4" style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto">
				<h2 className="text-5xl font-bold text-center mb-4 text-white">
					Our Team
				</h2>
				<p className="text-center text-white text-base max-w-2xl mx-auto mb-16">
					Join our mission together, we can build smoother, more structured days for every child.
				</p>				{/* Scrollable Team Container */}
				<div className="relative">
					<div className="overflow-x-auto overflow-y-hidden scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
						<div className="flex gap-10 pb-6" style={{ width: 'max-content' }}>
							{/* Team Member 1 - Myra Leah S. Duhiling */}
							<div className="shrink-0 w-64">
								<div className="relative">
									<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
										<div className="text-center mb-6 px-4">
											<h3 className="text-xl font-bold mb-1 text-white">
												Myra Leah Duhiling
											</h3>
											<p className="text-sm" style={{ color: '#C8E6DD' }}>
												Project Manager
											</p>
										</div>
										<div className="w-56 h-56 rounded-full overflow-hidden">
											<img 
												src={DuhilingImg} 
												alt="Myra Leah S. Duhiling" 
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
								</div>
							</div>

					{/* Team Member 2 - Fletcher Peter M. Hernandez */}
					<div className="shrink-0 w-64">
							<div className="relative">
									<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Fletcher Peter Hernandez
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Lead UI/UX Designer
										</p>
									</div>
										<div className="w-56 h-56 rounded-full overflow-hidden">
											<img 
												src={HernandezImg} 
												alt="Fletcher Peter M. Hernandez" 
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
							</div>
						</div>					{/* Team Member 3 - Jerald B. Isorena */}
					<div className="shrink-0 w-64">
							<div className="relative">
									<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Jerald B. Isorena
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Lead Programmer
										</p>
									</div>
										<div className="w-56 h-56 rounded-full overflow-hidden">
											<img 
												src={IsorenaImg} 
												alt="Jerald B. Isorena" 
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
							</div>
						</div>					{/* Team Member 4 - John Pritch L. Arcas */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											John Pritch L. Arcas
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Back-End Developer
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={ArcasImg} 
											alt="John Pritch L. Arcas" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 5 - Alrashim M. Awal */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Alrashim M. Awal
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Front-End Developer
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={AwalImg} 
											alt="Alrashim M. Awal" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 6 - John Carlo A. Deato */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											John Carlo A. Deato
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Back-End Developer
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={DeatoImg} 
											alt="John Carlo A. Deato" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 7 - John Karl P. Molina */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											John Karl P. Molina
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											Front-End Developer
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={MolinaImg} 
											alt="John Karl P. Molina" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 8 - Kurt Lee B. Manzano */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Kurt Lee B. Manzano
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											UI/UX Designer
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={ManzanoImg} 
											alt="Kurt Lee B. Manzano" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 9 - Ashley D. Abucay */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Ashley D. Abucay
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											System Analyst
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={AbucayImg} 
											alt="Ashley D. Abucay" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 10 - Ma. Daniella A. Broncano */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Ma. Daniella A. Broncano
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											System Analyst
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={BroncanoImg} 
											alt="Ma. Daniella A. Broncano" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 11 - Nikki Anne R. Bertes */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Nikki Anne Bertes
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											System Analyst
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={BertesImg} 
											alt="Nikki Anne R. Bertes" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>					{/* Team Member 12 - Mary Joy N. Mendoza */}
					<div className="shrink-0 w-64">
							<div className="relative">
								<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
									<div className="text-center mb-6 px-4">
										<h3 className="text-xl font-bold mb-1 text-white">
											Mary Joy N. Mendoza
										</h3>
										<p className="text-sm" style={{ color: '#C8E6DD' }}>
											System Analyst
										</p>
									</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
										<img 
											src={MendozaImg} 
											alt="Mary Joy N. Mendoza" 
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>						{/* Team Member 13 - Joemar A. Sambilay */}
						<div className="shrink-0 w-64">
								<div className="relative">
									<div className="w-64 h-80 rounded-[56px] overflow-visible flex flex-col items-center justify-start pt-12 shadow-[0_16px_40px_rgba(43,138,122,0.35)] border-2" style={{ backgroundColor: '#2B8A7A', borderColor: '#2B8A7A' }}>
										<div className="text-center mb-6 px-4">
											<h3 className="text-xl font-bold mb-1 text-white">
												Joemar A. Sambilay
											</h3>
											<p className="text-sm" style={{ color: '#C8E6DD' }}>
												Documentation Specialist
											</p>
										</div>
									<div className="w-56 h-56 rounded-full overflow-hidden">
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
				</div>
			</div>
		</section>			{/* Join Our Mission Section */}
			<section className="py-16 px-4" style={{ backgroundColor: '#61CCB2' }}>
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
			<section className="py-8 bg-white"></section>

			{/* Footer */}
			<footer className="py-10 px-4" style={{ backgroundColor: '#2B7A73' }}>
				<div className="max-w-7xl mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8">
						{/* Logo and Description */}
						<div>
							<div className="bg-white rounded-2xl px-4 py-2 inline-block mb-4">
								<img 
									src={RitmoLogo} 
									alt="Ritmo Logo" 
									className="h-7"
								/>
							</div>
							<p className="text-white/90 text-base">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-white font-bold text-xl mb-5">Quick Links</h3>
							<ul className="space-y-2.5">
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										How it Works
									</a>
								</li>
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										News
									</a>
								</li>
							</ul>
						</div>

						{/* Support */}
						<div>
							<h3 className="text-white font-bold text-xl mb-5">Support</h3>
							<ul className="space-y-2.5">
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										Contact Us
									</a>
								</li>
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										Download
									</a>
								</li>
							</ul>
						</div>

						{/* Legal */}
						<div>
							<h3 className="text-white font-bold text-xl mb-5">Legal</h3>
							<ul className="space-y-2.5">
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										Terms of Use
									</a>
								</li>
								<li>
									<a href="#" className="text-white/90 hover:text-white text-base transition-colors">
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Divider */}
					<div className="border-t border-white/20 pt-8">
						<p className="text-center text-white/80 text-base">
							© 2025 Ritmo. All rights reserved. Made with <span className="text-white">♥</span> for children with autism.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
