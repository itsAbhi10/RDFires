import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

/**
 * Main App Component
 * Layout wrapper with Header and Footer
 * Outlet for page content rendering
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
