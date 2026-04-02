import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Vision } from './pages/Vision';
import { Technology } from './pages/Technology';
import { Ethics } from './pages/Ethics';
import { Careers } from './pages/Careers';
import { Pricing } from './pages/Pricing';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { PaymentFail } from './pages/PaymentFail';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const initialPage = queryParams.get('page') || 'home';
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Refined image selection for better cohesion (Warm Tech + High End)
  // 1. Story: Clean, modern workspace with warm lighting.
  // 2. Philosophy: Abstract light/sand concept for "Time".
  // 3. Simplicity: Minimalist device interaction.
  // 4. Warmth: Authentic human connection.
  const [images] = useState({
    story: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    philosophy: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop",
    simplicity: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1600&auto=format&fit=crop",
    warmth: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1600&auto=format&fit=crop"
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'vision':
        return <Vision />;
      case 'technology':
        return <Technology />;
      case 'pricing':
        return <Pricing />;
      case 'ethics':
        return <Ethics />;
      case 'careers':
        return <Careers />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      case 'success':
        return <PaymentSuccess onNavigate={setCurrentPage} />;
      case 'fail':
        return <PaymentFail onNavigate={setCurrentPage} />;

      case 'home':
      default:
        return <Home images={images} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-900 selection:bg-stone-200 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;