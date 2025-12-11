import content from '@/data/content.json';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-12 px-6">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-handwritten">{content.footer.text}</p>
        <div className="mt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {content.site.nameEn}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

