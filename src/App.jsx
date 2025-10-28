import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServicesPricing from './components/ServicesPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
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
