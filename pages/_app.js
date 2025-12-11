import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isHomeLanding = router.pathname === '/home-landing';

  // Don't show header/footer on home page
  if (isHomePage) {
    return <Component {...pageProps} />;
  }

  // Show header/footer for all other pages including home-landing
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
