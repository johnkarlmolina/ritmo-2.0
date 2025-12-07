import { useLanguage } from '../context/LanguageContext'
import { translations } from '../utils/translations'

export default function HowItWorks() {
	const { language } = useLanguage()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

	return (
		<section className="py-20 px-4" style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('howRitmoWorksSection')}</h1>
				<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
					{t('buildCalmStructured')}<br />
				</p>
			</div>
		</section>
	)
}
