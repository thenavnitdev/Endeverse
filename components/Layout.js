import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(250, 250, 250, 0.75)',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(240, 240, 240, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(240, 240, 240, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)
          `
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
