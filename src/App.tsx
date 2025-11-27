import './App.css'
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router-dom'
import Index from './Index.tsx'
import About from './pages/about.tsx'
import Features from './pages/feature.tsx'
import HowItWorks from './pages/howitworks.tsx'
import News from './pages/news.tsx'
import Contact from './pages/contact.tsx'
import Download from './pages/download.tsx'

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  ) 
}

export default App
