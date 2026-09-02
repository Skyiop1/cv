"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  FolderKanban,
  GraduationCap,
  Home,
  Languages,
  Mail,
  MapPin,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  experiences,
  impactStats,
  projects,
  profile,
  stackGroups,
  type Language,
  type LocalizedText,
} from "@/app/portfolio-data";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

type View = "home" | "projects";
type Theme = "dark" | "light";

const binaryStreams = Array.from({ length: 24 }, (_, column) =>
  Array.from({ length: 58 }, (_, row) =>
    ((row * 17 + column * 11 + row * column) % 7) % 2 === 0 ? "0" : "1",
  ).join(""),
);

const ambientBinaryStreams = Array.from({ length: 56 }, (_, column) =>
  Array.from({ length: 96 }, (_, row) =>
    ((row * 5 + column * 7 + row * column) % 11) % 2 === 0 ? "0" : "1",
  ).join(""),
);

const copy = {
  en: {
    home: "Home",
    projects: "Projects",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    experience: "Experience",
    education: "Education",
    featuredProjects: "Featured projects",
    viewAll: "View all",
    stack: "Stack & capabilities",
    impact: "Selected impact",
    projectEyebrow: "Academic & personal work",
    projectTitle: "Projects built while learning in public.",
    projectIntro:
      "A growing collection of Information Systems coursework and practical experiments across data, machine learning, mobile, and web development.",
    featuredSectionEyebrow: "Featured Projects",
    learningLabEyebrow: "Learning Lab",
    learningLabIntro:
      "Coursework, technical experiments, and smaller builds documenting the fundamentals behind my larger projects.",
    source: "GitHub",
    profileLink: "LinkedIn",
    contactEyebrow: "Inquiries & collaboration",
    contactTitle: "Let’s learn, build, and create meaningful impact.",
    contactBody:
      "Open to conversations about technology, leadership, collaborative projects, and early-career opportunities.",
    getInTouch: "Get in touch",
    downloadCv: "Download CV",
    contact: "Contact",
    index: "Index",
    timezone: "Asia/Jakarta · Indonesia",
    skip: "Skip to content",
  },
  id: {
    home: "Beranda",
    projects: "Proyek",
    settings: "Pengaturan",
    language: "Bahasa",
    theme: "Tema",
    experience: "Pengalaman",
    education: "Pendidikan",
    featuredProjects: "Proyek Pilihan",
    viewAll: "Lihat Semua",
    stack: "Keahlian & Kapabilitas",
    impact: "Dampak Terpilih",
    projectEyebrow: "Karya Akademik & Eksperimen",
    projectTitle: "Proyek yang dikembangkan melalui eksplorasi dan proses belajar terbuka.",
    projectIntro:
      "Koleksi tugas akademik Sistem Informasi dan proyek eksplorasi praktis di bidang analisis data, machine learning, pengembangan aplikasi mobile, dan web.",
    featuredSectionEyebrow: "Proyek Pilihan",
    learningLabEyebrow: "Learning Lab",
    learningLabIntro:
      "Tugas kuliah, eksperimen teknis, dan proyek fundamental yang mendasari pengembangan sistem yang lebih besar.",
    source: "GitHub",
    profileLink: "LinkedIn",
    contactEyebrow: "Kolaborasi & Hubungan Profesional",
    contactTitle: "Mari berkolaborasi, bertukar gagasan, dan menciptakan dampak nyata.",
    contactBody:
      "Terbuka untuk diskusi seputar teknologi, kepemimpinan, proyek kolaboratif, maupun peluang karier awal.",
    getInTouch: "Hubungi Saya",
    downloadCv: "Unduh CV",
    contact: "Kontak",
    index: "Navigasi",
    timezone: "Asia/Jakarta · Indonesia",
    skip: "Lewati ke konten utama",
  },
};

function localize(value: LocalizedText, language: Language) {
  return value[language];
}

function SectionHeading({
  title,
  count,
  action,
}: {
  title: string;
  count?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <h2 className="hand-label">
        {title}
        {count ? <sup>({count})</sup> : null}
      </h2>
      {action}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
  download,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  return (
    <a
      className="social-link"
      href={href}
      aria-label={label}
      title={label}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
    >
      {children}
    </a>
  );
}

function SettingsMenu({
  language,
  onLanguage,
  theme,
  onTheme,
}: {
  language: Language;
  onLanguage: (value: Language) => void;
  theme: Theme;
  onTheme: (value: Theme) => void;
}) {
  const t = copy[language];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="nav-tab nav-settings" aria-label={t.settings}>
          <Settings aria-hidden="true" />
          <span>{t.settings}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={12} className="settings-popover">
        <div className="settings-row">
          <span className="settings-label">
            <Languages aria-hidden="true" /> {t.language}
          </span>
          <div className="segmented-control" aria-label={t.language}>
            {(["en", "id"] as const).map((item) => (
              <button
                key={item}
                className={language === item ? "is-selected" : ""}
                onClick={() => onLanguage(item)}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="settings-row">
          <span className="settings-label">
            {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            {t.theme}
          </span>
          <div className="segmented-control" aria-label={t.theme}>
            <button
              className={theme === "light" ? "is-selected" : ""}
              onClick={() => onTheme("light")}
              aria-pressed={theme === "light"}
              aria-label="Light theme"
            >
              <Sun aria-hidden="true" />
            </button>
            <button
              className={theme === "dark" ? "is-selected" : ""}
              onClick={() => onTheme("dark")}
              aria-pressed={theme === "dark"}
              aria-label="Dark theme"
            >
              <Moon aria-hidden="true" />
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Header({
  view,
  language,
  setLanguage,
  theme,
  setTheme,
}: {
  view: View;
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) {
  const t = copy[language];

  return (
    <>
      <header className="profile-header">
        <div className="profile-banner" aria-hidden="true">
          <div className="binary-video">
            <div className="binary-streams">
              {binaryStreams.map((stream, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * -0.31}s` }}
                >
                  {stream}
                </span>
              ))}
            </div>
            <div className="binary-scanline" />
            <div className="binary-noise" />
          </div>
          <div className="banner-signal banner-signal-one" />
          <div className="banner-signal banner-signal-two" />
        </div>
        <div className="profile-content">
          <div className="profile-photo-wrap">
            <Image
              src="/profile.jpg"
              alt="Portrait of Muhammad Naufal Zaki"
              className="profile-photo"
              width={256}
              height={256}
              priority
            />
          </div>
          <div className="profile-title-row">
            <div>
              <h1>{profile.name}</h1>
              <p className="handle">{profile.handle}</p>
            </div>
            <span className="open-badge" title="Open to learning and collaboration">
              <Check aria-hidden="true" />
            </span>
          </div>
          <p className="profile-bio">{localize(profile.bio, language)}</p>
          <div className="profile-meta">
            <span>
              <BriefcaseBusiness aria-hidden="true" />
              {localize(profile.title, language)}
            </span>
            <span>
              <MapPin aria-hidden="true" />
              {profile.location}
            </span>
          </div>
          <div className="social-row">
            <div className="social-links-left">
              <SocialLink href={profile.github} label="GitHub">
                <GithubIcon aria-hidden="true" />
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon aria-hidden="true" />
              </SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <Mail aria-hidden="true" />
              </SocialLink>
            </div>
            <Button asChild variant="outline">
              <a href={profile.cv} download>
                <Download aria-hidden="true" />
                {t.downloadCv}
              </a>
            </Button>
          </div>
        </div>
      </header>
      <nav className="main-nav" aria-label="Primary navigation">
        <Link className={`nav-tab ${view === "home" ? "is-active" : ""}`} href="/">
          <Home aria-hidden="true" />
          <span>{t.home}</span>
        </Link>
        <Link
          className={`nav-tab ${view === "projects" ? "is-active" : ""}`}
          href="/projects"
        >
          <FolderKanban aria-hidden="true" />
          <span>{t.projects}</span>
        </Link>
        <SettingsMenu
          language={language}
          onLanguage={setLanguage}
          theme={theme}
          onTheme={setTheme}
        />
      </nav>
    </>
  );
}

function HomeContent({ language }: { language: Language }) {
  const t = copy[language];
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content">
      <section className="content-section first-section">
        <SectionHeading
          title={t.experience}
          count={String(experiences.length).padStart(2, "0")}
        />
        <div className="experience-list">
          {experiences.map((item) => (
            <details
              className="experience-item"
              key={`${item.organization}-${item.period}`}
            >
              <summary>
                <span className="experience-mark">
                  <BriefcaseBusiness aria-hidden="true" />
                </span>
                <span className="experience-main">
                  <strong>{item.organization}</strong>
                  <span>
                    {localize(item.role, language)}
                    {item.type && (
                      <>
                        {" "}·{" "}
                        <span className="experience-type">
                          {localize(item.type, language)}
                        </span>
                      </>
                    )}
                  </span>
                </span>
                <span className="experience-period">
                  {item.location} · {item.period}
                </span>
                <span className="experience-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="experience-details">
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet.en}>{localize(bullet, language)}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="content-section compact-section">
        <SectionHeading title={t.education} count="01" />
        <article className="education-row">
          <span className="education-icon"><GraduationCap aria-hidden="true" /></span>
          <div>
            <h3>Universitas Airlangga</h3>
            <p>{language === "en" ? "Undergraduate · Information Systems" : "Sarjana (S1) · Sistem Informasi"}</p>
          </div>
          <span>Jul 2024 — Jul 2028 <small>({language === "en" ? "Expected" : "Estimasi Lulus"})</small></span>
        </article>
      </section>

      <div className="stripe-divider" />

      <section className="content-section compact-section">
        <SectionHeading
          title={t.featuredProjects}
          count={String(featuredProjects.length).padStart(2, "0")}
          action={
            <Link className="section-action" href="/projects">
              {t.viewAll} <ArrowUpRight aria-hidden="true" />
            </Link>
          }
        />
        <div className="featured-project-list">
          {featuredProjects.map((project, index) => (
            <Link className="featured-project-row" href={`/projects#${project.slug}`} key={project.slug}>
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="featured-project-copy">
                <strong>{project.title}</strong>
                <small>{localize(project.description, language)}</small>
              </span>
              <span className="project-year">{project.year}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="content-section compact-section">
        <SectionHeading title={t.stack} count="03" />
        <div className="stack-list">
          {stackGroups.map((group) => (
            <div className="stack-row" key={group.number}>
              <span className="stack-number">{group.number}</span>
              <h3>{localize(group.title, language)}</h3>
              <div className="tag-row">
                {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="content-section compact-section">
        <SectionHeading title={t.impact} count="04" />
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <article className="impact-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{localize(stat.label, language)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectsContent({ language }: { language: Language }) {
  const t = copy[language];
  const featuredProjects = projects.filter((project) => project.featured);
  const learningLabProjects = projects.filter((project) => !project.featured);

  return (
    <main id="main-content">
      <section className="projects-intro">
        <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> {t.home}</Link>
        <p className="eyebrow">{"// "}{t.projectEyebrow}</p>
        <h2>{t.projectTitle}</h2>
        <p>{t.projectIntro}</p>
      </section>

      <div className="stripe-divider" />

      {/* FEATURED PROJECTS SECTION */}
      <section className="project-catalog" aria-label={t.featuredSectionEyebrow}>
        <div className="project-section-header">
          <p className="eyebrow">{"// "}{t.featuredSectionEyebrow}</p>
        </div>
        {featuredProjects.map((project, index) => (
          <article className="project-card" id={project.slug} key={project.slug}>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-card-main">
              <div className="project-card-header">
                <div>
                  <p className="project-category">{project.category} · {project.year}</p>
                  <h3>{project.title}</h3>
                </div>
                <Code2 aria-hidden="true" />
              </div>
              <p className="project-description">{localize(project.description, language)}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="project-links">
              <Button asChild size="sm" variant="outline">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon aria-hidden="true" /> {t.source} <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon aria-hidden="true" /> {t.profileLink}
                </a>
              </Button>
            </div>
          </article>
        ))}
      </section>

      {/* LEARNING LAB SECTION */}
      <section className="project-catalog learning-lab-section" aria-label={t.learningLabEyebrow}>
        <div className="project-section-header learning-lab-header">
          <p className="eyebrow">{"// "}{t.learningLabEyebrow}</p>
          <p className="learning-lab-intro">{t.learningLabIntro}</p>
        </div>
        {learningLabProjects.map((project, index) => (
          <article className="project-card learning-lab-card" id={project.slug} key={project.slug}>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-card-main">
              <div className="project-card-header">
                <div>
                  <p className="project-category">{project.category} · {project.year}</p>
                  <h3 className="learning-lab-title">{project.title}</h3>
                </div>
                <Code2 aria-hidden="true" />
              </div>
              <p className="project-description learning-lab-desc">{localize(project.description, language)}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="project-links">
              <Button asChild size="sm" variant="outline">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon aria-hidden="true" /> {t.source} <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function ContactFooter({
  language,
  view,
}: {
  language: Language;
  view?: View;
}) {
  const t = copy[language];
  const [time, setTime] = useState("");

  const handleScrollTop = (targetView: View) => {
    if (view === targetView) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };
    updateTime();
    const timer = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(timer);
  }, [language]);

  return (
    <>
      <section className="contact-banner">
        <p className="eyebrow">{"// "}{t.contactEyebrow}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <div className="contact-actions">
          <Button asChild variant="outline">
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /> {t.getInTouch}</a>
          </Button>
          <Button asChild variant="outline">
            <a href={profile.cv} download><Download aria-hidden="true" /> {t.downloadCv}</a>
          </Button>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-signature">
          <p>© 2026 {profile.name}</p>
          <span className="braille" aria-hidden="true">⠝⠁⠥⠋⠁⠇</span>
          <div className="footer-location">
            <span>{time || "—:—"} · UTC+7</span>
            <span>{t.timezone}</span>
          </div>
        </div>
        <div>
          <h3>{t.contact}</h3>
          <ul>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a href={`mailto:${profile.email}`}>Email ↗</a></li>
          </ul>
        </div>
        <div>
          <h3>{t.index}</h3>
          <ul>
            <li>
              <Link href="/" onClick={() => handleScrollTop("home")}>
                {t.home}
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => handleScrollTop("projects")}>
                {t.projects}
              </Link>
            </li>
            <li><a href={profile.cv} download>{t.downloadCv}</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export function PortfolioPage({ view }: { view: View }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedLanguage === "en" || savedLanguage === "id") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    window.localStorage.setItem("portfolio-language", value);
    document.documentElement.lang = value;
  };

  const setTheme = (value: Theme) => {
    setThemeState(value);
    document.documentElement.dataset.theme = value;
    window.localStorage.setItem("portfolio-theme", value);
  };

  const t = useMemo(() => copy[language], [language]);

  return (
    <div className="site-page">
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <div className="ambient-dots" aria-hidden="true">
        <div className="ambient-binary">
          {ambientBinaryStreams.map((stream, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * -0.22}s` }}
            >
              {stream}
            </span>
          ))}
        </div>
      </div>
      <div className="site-frame">
        <Header
          view={view}
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
        />
        {view === "home" ? <HomeContent language={language} /> : <ProjectsContent language={language} />}
        <div className="stripe-divider" />
        <ContactFooter language={language} view={view} />
      </div>
    </div>
  );
}
