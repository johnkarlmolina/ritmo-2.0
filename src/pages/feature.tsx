import PhoneImg from '../assets/1.png';
import StarIcon from '../assets/Star.png';
import DownloadIcon from '../assets/Download.png';
import { Link } from 'react-router-dom';

export default function Features() {
	return (
		<div className="scroll-smooth overflow-x-hidden">
			{/* Hero Section */}
			<section>
				{/* Hero Content */}
				<div className="mt-4 pt-20 pb-20 flex items-center" style={{ backgroundColor: '#61CCB2' }}>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Features</h1>
						<p className="max-w-3xl mx-auto text-xl md:text-2xl text-white leading-relaxed">
							Everything you need to create structured, stress-free daily routines, all in one simple app.
						</p>
					</div>
				</div>
			</section>
				
	{/* Features Overview Section */}
	<section className="py-4 px-4 bg-white min-h-screen flex items-center">
		<div className="w-full max-w-7xl mx-auto relative">
		<div className="hidden lg:grid lg:grid-cols-3 gap-x-0 items-center">
			{/* Left Column - Cards */}
			<div className="col-span-1 flex flex-col justify-end space-y-5">
				<div className="relative ml-auto">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden">
							<div className="flex items-center gap-3 mb-4">
								<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
									<img src={StarIcon} alt="Star" className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
									Autism Friendly
								</h3>
								</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The ui design was integrated to suit people with Autism or <span className="underline">Autism Spectrum Disorder (ASD)</span>
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Big Ui components</span>
									</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Audio Visual Feedback</span>
									</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Animated Characters</span>
									</li>
								</ul>
							</div>
				</div>
				<div className="relative ml-auto">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								Parental Control
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The System has built in parental control to guide every childrens action
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Parental Lock</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Daily Routine Setup</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Limited media search</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

			{/* Center Column - Phone Image */}
				<div className="col-span-1 flex justify-center">
							<img 
								src={PhoneImg} 
								alt="Ritmo App Phone" 
								className="w-full max-w-xs h-auto object-contain"
								style={{ filter: 'drop-shadow(-6px 6px 0px rgba(128, 128, 128, 0.5))' }}
							/>
				</div>

			{/* Right Column - Cards */}
			<div className="col-span-1 flex flex-col space-y-5">
				<div className="relative">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								Entertainment
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The System has built in games, media and book guides to enhance interaction and fun.
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Fun and enjoying games</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Audio visual book guides</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Media page (Youtube)</span>
								</li>
						</ul>
					</div>
				</div>
				<div className="relative">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
							Progression
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The app has a built in progress report that records your child routine weekly
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Downloadable PDF Report</span>
								</li>
							</ul>
						</div>
				</div>
			</div>
							</div>
		
		{/* Mobile & Tablet Layout */}
		<div className="lg:hidden flex flex-col items-center gap-6 py-8">
			{/* All cards in vertical stack on mobile/tablet */}
			<div className="relative w-72">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
						</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Autism Friendly</h3>
					</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The ui design was integrated to suit people with Autism or <span className="underline">Autism Spectrum Disorder (ASD)</span></p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Big Ui components</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Audio Visual Feedback</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Animated Characters</span></li>
					</ul>
				</div>
			</div>
			
		
		<div className="relative w-72">
			<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72"></div>
			<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden">
				<div className="flex items-center gap-3 mb-4">
					<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
						<img src={StarIcon} alt="Star" className="w-6 h-6" />
					</div>
					<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Entertainment</h3>
				</div>
				<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The System has built in games, media and book guides to enhance interaction and fun.</p>
				<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
					<li className="flex items-start"><span className="mr-3">●</span><span>Fun and enjoying games</span></li>
					<li className="flex items-start"><span className="mr-3">●</span><span>Audio visual book guides</span></li>
					<li className="flex items-start"><span className="mr-3">●</span><span>Media page (Youtube)</span></li>
				</ul>
			</div>
		</div>			<img 
				src={PhoneImg} 
				alt="Ritmo App Phone" 
				className="w-64 h-auto object-contain"
				style={{ filter: 'drop-shadow(-6px 6px 0px rgba(128, 128, 128, 0.5))' }}
			/>
			
			<div className="relative w-72">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
						</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Parental Control</h3>
					</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The System has built in parental control to guide every childrens action</p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Parental Lock</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Daily Routine Setup</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Limited media search</span></li>
					</ul>
								</div>
							</div>

			<div className="relative w-72">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
								</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Progression</h3>
								</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The app has a built in progress report that records your child routine weekly</p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Downloadable PDF Report</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
	</section>

	{/* How Ritmo Works Section */}
	<section id="how-ritmo-works" className="py-12 px-4 bg-white">
		<div className="max-w-7xl mx-auto">
			{/* Header */}
			<div className="bg-[#61CCB2] rounded-3xl py-4 px-6 mb-6 text-center">
				<h2 className="text-4xl font-bold mb-1" style={{ color: '#2B2B2B' }}>How Ritmo Works</h2>
				<p className="text-lg" style={{ color: '#2B2B2B' }}>Watch How Ritmo Works</p>
			</div>

			{/* Video Player (wider, shorter, with sample) */}
			<div className="relative bg-gray-400 rounded-3xl overflow-hidden" style={{ paddingBottom: '42%' }}>
				{/* Playable sample video */}
				<video
					className="absolute inset-0 w-full h-full object-cover"
					controls
					src="https://www.w3schools.com/html/mov_bbb.mp4"
					aria-label="How Ritmo Works sample video"
				/>
			</div>
		</div>
	</section>

	{/* Experience All Features Section */}
	<section className="py-4 bg-white">
		<div className="w-full" style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto text-center py-12 px-6">
				<h2 className="text-4xl font-extrabold mb-3" style={{ color: '#2B2B2B' }}>Experience All Features</h2>
				<p className="text-lg mb-6" style={{ color: '#2B2B2B' }}>
							Download Ritmo today and see how simple routines can bring calm, confidence, and independence.
						</p>
				<div className="flex justify-center">
					<Link
						to="/download"
						className="flex items-center justify-center gap-2 w-48 py-4 bg-gray-200 hover:bg-gray-300 font-semibold rounded-full shadow-md border border-gray-300 transition-all"
						style={{ color: '#2B8A7A' }}
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
