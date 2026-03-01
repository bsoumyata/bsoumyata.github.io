import { trackGalleryOpen } from "../analytics";

interface GalleryProps {
  onImageClick: (src: string) => void;
}

const photos = [
  {
    src: "/images/website/img1.jpg",
    title: "Nine Arches Bridge, Sri Lanka",
    portrait: true,
  },
  {
    src: "/images/website/img2.jpg",
    title: "Aurora Borealis",
    portrait: false,
  },
  {
    src: "/images/website/img3.jpg",
    title: "The Bean, Chicago",
    portrait: true,
  },
  {
    src: "/images/website/img5.jpg",
    title: "The Great Smoky Mountains, TN",
    portrait: false,
  },
  {
    src: "/images/website/img4.jpg",
    title: "Gies College of Business, UIUC",
    portrait: true,
  },
  {
    src: "/images/website/img6.jpg",
    title: "Jewel, Singapore",
    portrait: true,
  },
  {
    src: "/images/website/img8.jpg",
    title: "Nashville, TN",
    portrait: false,
  },
  {
    src: "/images/website/img7.jpg",
    title: "Shinku La Pass, India",
    portrait: true,
  },
  {
    src: "/images/website/img9.jpg",
    title: "Kashmir, India",
    portrait: false,
  },
  {
    src: "/images/website/img10.jpg",
    title: "Colombo, Sri Lanka",
    portrait: false,
  },
];

export default function Gallery({ onImageClick }: GalleryProps) {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h3 className="text-md uppercase tracking-[6px] text-gray-500 mb-3 font-medium">Gallery</h3>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            Some of my favorite photographs
          </h1>
        </div>

        <div className="masonry">
          {photos.map((photo, i) => (
            <div key={i} className="masonry__brick">
              <div
                className="relative group cursor-pointer overflow-hidden rounded"
                onClick={() => {
                  trackGalleryOpen(photo.title);
                  onImageClick(photo.src);
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full block transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-sm uppercase tracking-widest font-semibold">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
