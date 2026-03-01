export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white/50 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm">
        <span>© Copyright Soumyata Binani {currentYear}</span>
      </div>
    </footer>
  );
}
