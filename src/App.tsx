import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Index from './Index.tsx'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <ScrollToTop />
      <main className="pt-16">
        <Index />
      </main>
      <Footer />
    </LanguageProvider>
  ) 
}

export default App
