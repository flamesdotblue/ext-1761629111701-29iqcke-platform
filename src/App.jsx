import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServicesPricing from './components/ServicesPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <NavBar />
      <main>
        <Hero />
        <ServicesPricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
