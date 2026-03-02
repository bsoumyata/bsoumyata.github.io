import React from "react";
import { trackProjectClick } from "../analytics";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Keyboard, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-1.5 opacity-50 group-hover:opacity-100 transition-opacity -translate-y-px"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [
  {
    date: "Sept 2025",
    title: "Onboarding Buddy",
    url: "https://github.com/bsoumyata/Onboarding-Buddy",
    bullets: [
      "New hires drown in setup tasks during week 1 while HR repeatedly answers the same FAQs. So, I built a solution to address both sides of the problem.",
      'Took it end-to-end: PRD, Figma wireframes, and a working prototype using Lovable, n8n, and OpenAI with Notion as the knowledge base.',
      "Targeted ≥90% checklist completion in week 1, ≥80% FAQ resolution without HR escalation, and a 4/5 first-week satisfaction score.",
    ],
    tags: "AI/LLM, Figma, AI Prototyping, n8n, Workflow Automation",
  },
  {
    date: "May 2025",
    title: "Booking.com Redesign",
    url: "https://github.com/bsoumyata/booking.com-redesign",
    bullets: [
      "Redesigned the Booking.com interface to improve transparency around hidden fees and unclear policies.",
      'Design Challenge: "How might we empower users to make confident decisions through clearer cost communication?"',
      "The outcome was a toggle-based price breakdown, prototyped in Figma, enabling users to see total costs upfront and book with confidence.",
    ],
    tags: "UI/UX Design, User Interviews, Prototyping, Journey Mapping",
  },
  {
    date: "April 2025",
    title: "Reliabl: AI-Powered Marketplace",
    url: "https://fresh-ai-connect.lovable.app/",
    bullets: [
      "Reliabl is an AI-powered B2B marketplace that lets small retailers vet and connect with trustworthy suppliers.",
      "The platform uses AI to generate credibility scores for both suppliers and retailers, helping both sides make informed decisions and reduce risk.",
      "Led product vision, user flow definition, and AI-driven scoring logic, while collaborating on rapid UX design and pitch materials.",
    ],
    tags: "Product Thinking, Feature Prioritization, Storytelling, User Empathy, Lovable",
  },
  {
    date: "Feb 2025",
    title: "Auto-Sleep Mode for Streaming",
    url: "https://mercury-cover-6e9.notion.site/Case-Study-Auto-Sleep-Mode-for-Streaming-Platforms-1a44d62c6c6a803ba53ef1954e19b996",
    bullets: [
      "This case study explores the Auto-Sleep Mode feature designed to enhance user experience by detecting sleep through smartwatches and automatically pausing content on streaming platforms. It tackles challenges like false positives, integration, latency, and privacy.",
      "It demonstrates a real-world product development approach, focusing on problem-solving, technical execution, and business impact.",
    ],
    tags: "Product Management, Success Metrics, Competitive Analysis, Figma",
  },
  {
    date: "Oct 2023",
    title: "Cranking the Voltage on Spark",
    url: "https://engineering.blackrock.com/cranking-the-voltage-on-spark-achieve-peak-performance-with-optimization-24da87c44ae3",
    bullets: [
      "In this blog, we share insights on optimizing Apache Spark to enhance performance, specifically in the context of risk analytics for millions of portfolios, focusing on fine-tuning drivers, executors, and memory to boost performance.",
      "It covers practical Spark optimization techniques like data partitioning, reducing shuffling, and caching frequently accessed data to boost efficiency and scalability.",
    ],
    tags: "Big Data Processing, Distributed Computing, Performance Tuning, Cloud",
  },
  {
    date: "Jun 2020",
    title: "Face Mask Detector using OpenCV",
    url: null,
    bullets: [
      "Trained a ML model during Covid-19 outbreak to detect correct face mask usage. Designed and trained the model using Python and TensorFlow, achieving 95% accuracy.",
      "Scraped data from the web and existing Kaggle dataset to develop a model which categorizes inputs into three output values: with_mask, without_mask, mask_worn_incorrect, ensuring accurate detection for real-world applications.",
    ],
    tags: "Python, Tensorflow, OpenCV, BeautifulSoup",
  },
  {
    date: "April 2019",
    title: "ISLify-ASLify",
    url: "https://github.com/bsoumyata/ISLify",
    bullets: [
      "Developed a real-time speech-to-sign language converter, translating spoken language into Indian Sign Language (ISL) and American Sign Language (ASL) gestures using an intuitive graphical interface.",
      "Implemented robust fallback mechanisms to display alphabet images for unrecognized words, ensuring comprehensive communication support.",
    ],
    tags: "Python, Tkinter, speech-recognition",
  },
];

function ProjectCard({ project, index, total }: { project: (typeof projects)[number]; index: number; total: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative rounded-2xl p-6 h-full flex flex-col"
    >
      {/* Glowing yellow accent border on top */}
      <div className="absolute top-0 left-6 right-6 h-0.75 rounded-b-full bg-linear-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Number badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
          {project.date}
        </span>
        <span className="text-[11px] font-mono text-gray-300 select-none">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      <h2 className="text-lg font-bold mb-3 leading-snug" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackProjectClick(project.title)}
            className="group text-gray-900 hover:text-amber-600 transition-colors duration-300"
          >
            {project.title}
            <ExternalLinkIcon />
          </a>
        ) : (
          project.title
        )}
      </h2>

      <ul className="space-y-2 text-gray-500 text-[13px] leading-relaxed mb-5 flex-1">
        {project.bullets.map((bullet, j) => (
          <li key={j} className="flex gap-2">
            <span className="text-amber-400 mt-1 shrink-0">&#8226;</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tags as pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.split(", ").map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-medium text-amber-700/70 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-amber-200/50 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-16 text-center">
          <h3 className="text-md uppercase tracking-[6px] text-amber-600 mb-3 font-medium">Projects</h3>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            What I've Been Up To
          </h1>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the range of projects, blogs and case studies I have worked on independently. Click through to dive
            deeper into each piece.
            </p>
          {/* Yellow accent line */}
          <div className="mt-5 w-16 h-1 rounded-full bg-linear-to-r from-amber-400 to-yellow-300 mx-auto" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          slidesOffsetBefore={40}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          onInit={(swiper: SwiperType) => {
            swiper.el.classList.toggle("fade-left", !swiper.isBeginning);
            swiper.el.classList.toggle("fade-right", !swiper.isEnd);
          }}
          onSlideChange={(swiper: SwiperType) => {
            swiper.el.classList.toggle("fade-left", !swiper.isBeginning);
            swiper.el.classList.toggle("fade-right", !swiper.isEnd);
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <ProjectCard project={project} index={i} total={projects.length} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
