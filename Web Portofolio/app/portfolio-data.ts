export type Language = "en" | "id";

export type LocalizedText = {
  en: string;
  id: string;
};

export const profile = {
  name: "Muhammad Naufal Zaki",
  handle: "@naufallzakki",
  title: {
    en: "Information Systems Student · Technology & Leadership",
    id: "Mahasiswa Sistem Informasi · Teknologi & Kepemimpinan",
  },
  bio: {
    en: "Information Systems undergraduate at Universitas Airlangga and BSI Scholarship awardee with experience leading cross-functional initiatives, coordinating stakeholders, and managing community, marketing, and operational programs. Currently building toward a career in Financial Infrastructure Engineering through focused learning in Java backend development, digital payment systems, institutional blockchain architecture, and reliable financial technology infrastructure.",
    id: "Mahasiswa Sistem Informasi Universitas Airlangga dan penerima BSI Scholarship dengan pengalaman memimpin inisiatif lintas fungsi, mengoordinasikan pemangku kepentingan, serta mengelola program komunitas, pemasaran, dan operasional. Saat ini berfokus mendalami Financial Infrastructure Engineering melalui pengembangan backend Java, sistem pembayaran digital, arsitektur blockchain institusional, dan infrastruktur fintech yang andal.",
  },
  location: "Surabaya, Indonesia",
  email: "naufalz562@gmail.com",
  github: "https://github.com/Skyiop1",
  linkedin: "https://www.linkedin.com/in/naufalz/",
  cv: "/muhammad-naufal-zaki-cv.pdf",
};

export const experiences = [
  {
    organization: "BSI Scholarship UNAIR",
    role: {
      en: "Coordinator of BSI Scholarship Inspirasi UNAIR",
      id: "Koordinator BSI Scholarship Inspirasi UNAIR",
    },
    period: "Nov 2025 — Present",
    location: "Surabaya",
    tags: ["Leadership", "Stakeholder Coordination", "Operations"],
    bullets: [
      {
        en: "Initiated and led the BSI Scholarship UNAIR Iftar Gathering, bringing together 32 awardees across scholarship categories and creating an inclusive space to strengthen trust, connection, and a shared sense of belonging.",
        id: "Menginisiasi dan memimpin BSI Scholarship UNAIR Iftar Gathering, mempertemukan 32 penerima beasiswa lintas kategori serta menciptakan ruang inklusif untuk mempererat kepercayaan, relasi, dan rasa kebersamaan.",
      },
      {
        en: "Structured team responsibilities, delegated tasks, and directed the overall execution of the event, including venue selection, reservations, operational planning, and coordination of event requirements.",
        id: "Menyusun struktur tanggung jawab tim, mendelegasikan tugas, dan mengarahkan eksekusi acara secara menyeluruh, termasuk pemilihan lokasi, reservasi, perencanaan operasional, serta koordinasi kebutuhan acara.",
      },
      {
        en: "Led the coordination and ongoing support of BSI Scholarship Inspirasi awardees across scholarship disbursement, blazer distribution, training, mentoring, development sessions, and program responsibilities, while ensuring clear communication and accessible support.",
        id: "Memimpin koordinasi dan pendampingan berkelanjutan bagi penerima beasiswa BSI Scholarship Inspirasi terkait pencairan beasiswa, distribusi jas/blazer, pelatihan, mentoring, sesi pengembangan, hingga kewajiban program, dengan memastikan komunikasi yang transparan dan dukungan yang mudah diakses.",
      },
      {
        en: "Initiated and led the production of the BSI Scholarship UNAIR Company Profile by coordinating availability voting from approximately 72 awardees and managing 30 participants throughout the photoshoot process.",
        id: "Menginisiasi dan memimpin produksi Company Profile BSI Scholarship UNAIR dengan mengoordinasikan voting ketersediaan sekitar 72 penerima beasiswa dan mengelola 30 peserta selama proses sesi pemotretan (*photoshoot*).",
      },
      {
        en: "Collaborated with scholarship coordinators, the design team, vendors, and participants to align communication, schedules, budgets, and execution quality, while building familiarity and improving the quality of relationships.",
        id: "Berkolaborasi dengan koordinator beasiswa, tim desain, vendor, dan peserta untuk menyelaraskan komunikasi, jadwal, anggaran, serta kualitas eksekusi, sekaligus mempererat keakraban dan meningkatkan kualitas hubungan.",
      },
    ],
  },
  {
    organization: "Loka Coffee",
    role: {
      en: "Marketing & Partnerships Associate",
      id: "Marketing & Partnerships Associate",
    },
    period: "Jun 2025 — Mar 2026",
    location: "Surabaya",
    tags: ["Partnerships", "Marketing", "Community"],
    bullets: [
      {
        en: "Initiated and managed partnership discussions with 5 external organizations, aligning collaboration objectives, deliverables, timelines, and operational requirements.",
        id: "Menginisiasi dan mengelola diskusi kemitraan dengan 5 organisasi eksternal, menyelaraskan tujuan kolaborasi, deliverables, linimasa kerja, dan kebutuhan operasional.",
      },
      {
        en: "Coordinated the end-to-end execution of 3 partner and community events hosted at Loka Coffee, from initial planning to on-site implementation.",
        id: "Mengoordinasikan eksekusi end-to-end 3 acara mitra dan komunitas yang diselenggarakan di Loka Coffee, mulai dari perencanaan awal hingga implementasi langsung di lokasi.",
      },
      {
        en: "Balanced the needs and interests of Loka Coffee and external partners to develop mutually beneficial collaboration arrangements.",
        id: "Menyeimbangkan kebutuhan dan kepentingan Loka Coffee serta mitra eksternal guna merumuskan skema kerja sama yang saling menguntungkan (*win-win collaboration*).",
      },
      {
        en: "Monitored monthly Instagram performance and refined content strategies, contributing to an increase in monthly views from 9.5K to 40K and a peak account reach of 8,787.",
        id: "Memantau performa bulanan Instagram dan menyempurnakan strategi konten, berkontribusi pada peningkatan tayangan bulanan dari 9,5 ribu menjadi 40 ribu serta jangkauan akun puncak mencapai 8.787.",
      },
    ],
  },
  {
    organization: "American Corner",
    role: { en: "Media Production", id: "Produksi Media" },
    period: "Dec 2024 — Present",
    location: "Surabaya",
    tags: ["Media", "Technical Operations", "Problem Solving"],
    bullets: [
      {
        en: "Served as the primary technical lead for video content, translating creative concepts into polished final outputs that aligned with AMCOR’s digital strategy.",
        id: "Berperan sebagai penanggung jawab teknis utama untuk konten video, menerjemahkan konsep kreatif menjadi hasil akhir berkualitas yang selaras dengan strategi digital AMCOR.",
      },
      {
        en: "Executed detailed manual editing for approximately 3 high-quality videos per month, prioritizing visual precision and narrative depth.",
        id: "Melakukan penyuntingan manual terperinci untuk sekitar 3 video berkualitas tinggi per bulan, mengutamakan presisi visual dan kedalaman narasi cerita.",
      },
      {
        en: "Managed technical visual operations for approximately 4 routine programs per month, ensuring high-quality broadcast/recording standards.",
        id: "Mengelola operasional visual teknis untuk sekitar 4 program rutin per bulan, memastikan standar penyiaran dan rekaman berkualitas tinggi.",
      },
      {
        en: "Managed the technical setup for programs, overseeing audio mixing, camera feeds, and studio lighting configurations to maintain professional broadcast standards.",
        id: "Mengelola pengaturan teknis program, mengawasi audio mixing, camera feeds, dan konfigurasi pencahayaan studio guna mempertahankan standar broadcast profesional.",
      },
      {
        en: "Performed real-time troubleshooting during live events to resolve technical glitches instantly, maintaining a seamless viewing experience.",
        id: "Melakukan troubleshooting langsung (*real-time*) selama acara siaran langsung untuk mengatasi kendala teknis secara instan demi menjaga pengalaman menonton yang lancar.",
      },
    ],
  },
  {
    organization: "Organizing Committee, Class of 2024 SMA 1 Tawangsari",
    role: { en: "Treasurer", id: "Bendahara" },
    period: "Nov 2023 — May 2024",
    location: "Sukoharjo",
    tags: ["Budgeting", "Accountability", "Event Operations"],
    bullets: [
      {
        en: "Managed a budget of IDR 60 million for batch activities over 7 months, ensuring 100% accuracy in financial records and transaction tracking.",
        id: "Mengelola anggaran kegiatan angkatan sebesar Rp60 juta selama 7 bulan, memastikan akurasi 100% pada pencatatan keuangan dan pelacakan transaksi.",
      },
      {
        en: "Designed and supervised budget allocation strategies for various events, achieving cost savings of approximately 12% while maintaining quality.",
        id: "Merancang dan mengawasi strategi alokasi anggaran untuk berbagai kegiatan, mencapai penghematan biaya sekitar 12% tanpa menurunkan kualitas acara.",
      },
      {
        en: "Prepared detailed financial reports periodically, enhancing transparency and accountability within the committee.",
        id: "Menyusun laporan keuangan terperinci secara berkala, meningkatkan transparansi dan akuntabilitas di dalam kepanitiaan.",
      },
      {
        en: "Coordinated with the management team to organize successful event prom attended by 345 participants, receiving positive feedback for smooth execution and memorable experiences.",
        id: "Berkoordinasi dengan tim manajemen untuk menyelenggarakan acara prom kelulusan yang dihadiri 345 peserta, memperoleh feedback positif atas kelancaran acara dan pengalaman berkesan.",
      },
    ],
  },
  {
    organization: "Organizing Committee, Class of 2024 SMA 1 Tawangsari",
    role: {
      en: "Screenwriter & Story Development",
      id: "Penulis Skenario & Pengembangan Cerita",
    },
    period: "Dec 2023 — Jul 2024",
    location: "Sukoharjo",
    tags: ["Storytelling", "Production", "Team Coordination"],
    bullets: [
      {
        en: "Conceptualized and developed storyline for high school graduation film, creating meaningful memories for 300+ graduating students.",
        id: "Mengonsep dan mengembangkan alur cerita untuk film kelulusan SMA, menciptakan kenangan bermakna bagi 300+ siswa yang lulus.",
      },
      {
        en: "Authored the majority of the screenplay, ensuring cohesive narrative structure and authentic dialogue that effectively reflected the student experience.",
        id: "Menulis sebagian besar naskah film, memastikan struktur narasi yang kohesif serta dialog autentik yang mencerminkan pengalaman masa sekolah secara nyata.",
      },
      {
        en: "Supervised the entire production process from pre-production through completion, ensuring 100% adherence to storyboard specifications and script requirements.",
        id: "Mengawasi seluruh proses produksi dari praproduksi hingga selesai, memastikan kepatuhan 100% terhadap spesifikasi storyboard dan kebutuhan skrip.",
      },
      {
        en: "Coordinated with the production team to manage a rigorous filming schedule, guaranteeing all scenes were completed on time while maintaining fidelity to the original creative vision.",
        id: "Berkoordinasi dengan tim produksi untuk mengelola jadwal syuting yang padat, menjamin seluruh adegan selesai tepat waktu dengan tetap mempertahankan visi kreatif orisinal.",
      },
    ],
  },
  {
    organization: "Rohani Islam · SMA 1 Tawangsari",
    role: { en: "Public Relations", id: "Hubungan Masyarakat" },
    period: "Apr 2023 — Nov 2023",
    location: "Sukoharjo",
    tags: ["Public Relations", "Social Media", "Communication"],
    bullets: [
      {
        en: "Developed and executed communication strategies that successfully promoted three major organizational events, increasing student participation by up to 93%.",
        id: "Merancang dan mengeksekusi strategi komunikasi yang berhasil mempromosikan 3 acara besar organisasi, meningkatkan partisipasi siswa hingga 93%.",
      },
      {
        en: "Managed the social media platforms of Rohis, boosting follower engagement by 40% through consistent content updates and interactive posts.",
        id: "Mengelola platform media sosial Rohis, meningkatkan keterlibatan pengikut sebesar 40% melalui konten yang konsisten dan interaktif.",
      },
      {
        en: "Facilitated collaboration between Rohis and the school to ensure smooth activity implementation, resulting in improved partnerships and event success.",
        id: "Memfasilitasi kolaborasi antara Rohis dan pihak sekolah untuk memastikan kelancaran kegiatan, memperkuat kemitraan dan keberhasilan acara.",
      },
      {
        en: "Created promotional materials (brochures, posters, social media content) that significantly enhanced awareness and participation in Rohis activities.",
        id: "Membuat materi promosi (brosur, poster, konten media sosial) yang secara signifikan meningkatkan kesadaran dan partisipasi dalam kegiatan Rohis.",
      },
      {
        en: "Coordinated public relations efforts, increasing the organization's visibility within the school community and boosting event attendance by 25%.",
        id: "Mengoordinasikan publikasi dan hubungan masyarakat, memperluas visibilitas organisasi di lingkungan sekolah dan meningkatkan kehadiran acara sebesar 25%.",
      },
    ],
  },
];

const repositoryBase =
  "https://github.com/Skyiop1/CS-Fundamentals-UNAIR/tree/main";

export const projects = [
  {
    slug: "credit-default-risk-ai",
    title: "Credit Default Risk AI",
    description: {
      en: "A machine-learning project exploring credit default risk through structured data and model-driven analysis.",
      id: "Proyek machine learning untuk mengeksplorasi risiko gagal bayar kredit melalui data terstruktur dan analisis berbasis model.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Machine Learning", "Streamlit"],
    github: `${repositoryBase}/CreditDefaultRiskAI`,
    featured: true,
  },
  {
    slug: "nusa-carbon-mobile",
    title: "Nusa Carbon Mobile",
    description: {
      en: "Mobile application work for the Nusa Carbon project, developed as part of an Information Systems project portfolio.",
      id: "Pengembangan aplikasi mobile untuk proyek Nusa Carbon sebagai bagian dari portofolio proyek Sistem Informasi.",
    },
    category: "Mobile",
    year: "2026",
    tags: ["Flutter", "Dart", "Mobile App"],
    github: `${repositoryBase}/Nusa%20Carbon%20Mobile`,
    featured: true,
  },
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction (GA + RF)",
    description: {
      en: "An academic prediction workflow combining Genetic Algorithm techniques with Random Forest modeling.",
      id: "Alur prediksi akademik yang menggabungkan teknik Genetic Algorithm dengan pemodelan Random Forest.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Genetic Algorithm", "Random Forest"],
    github: `${repositoryBase}/Stock%20Price%20Prediction%20(GA%20%2B%20RF)`,
    featured: true,
  },
  {
    slug: "customer-segmentation",
    title: "Clustering & Customer Segmentation",
    description: {
      en: "An unsupervised-learning exercise focused on identifying meaningful customer groups from data.",
      id: "Latihan unsupervised learning yang berfokus pada identifikasi kelompok pelanggan bermakna dari data.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Clustering", "Data Analysis"],
    github: `${repositoryBase}/Clustering%20%26%20Customer%20Segmentation`,
    featured: true,
  },
  {
    slug: "car-price-prediction",
    title: "Car Price Prediction",
    description: {
      en: "A regression project for estimating vehicle prices and evaluating prediction performance.",
      id: "Proyek regresi untuk memperkirakan harga kendaraan dan mengevaluasi performa prediksi.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Regression", "Model Evaluation"],
    github: `${repositoryBase}/Car%20Price%20Prediction`,
    featured: true,
  },
  {
    slug: "nusa-carbon-web",
    title: "Nusa Carbon Web",
    description: {
      en: "Web application work for the Nusa Carbon project and its digital user experience.",
      id: "Pengembangan aplikasi web untuk proyek Nusa Carbon dan pengalaman pengguna digitalnya.",
    },
    category: "Web",
    year: "2026",
    tags: ["Web App", "Information Systems"],
    github: `${repositoryBase}/NusaCarbonWEB`,
    featured: false,
  },
  {
    slug: "wine-quality-classification",
    title: "Wine Quality Classification",
    description: {
      en: "A classification exercise exploring data preparation, model training, and performance interpretation.",
      id: "Latihan klasifikasi yang mengeksplorasi persiapan data, pelatihan model, dan interpretasi performa.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Classification", "Data Preparation"],
    github: `${repositoryBase}/Wine%20Quality%20Classification`,
    featured: false,
  },
  {
    slug: "decision-tree-classification",
    title: "Decision Tree Classification",
    description: {
      en: "A focused implementation of a decision-tree classification workflow.",
      id: "Implementasi terfokus dari alur klasifikasi menggunakan decision tree.",
    },
    category: "Fundamentals",
    year: "2026",
    tags: ["Python", "Decision Tree", "Classification"],
    github: `${repositoryBase}/Decision%20Tree%20Classification`,
    featured: false,
  },
  {
    slug: "imbalanced-data-handling",
    title: "Imbalanced Data Handling",
    description: {
      en: "An academic exploration of techniques for preparing and learning from imbalanced datasets.",
      id: "Eksplorasi akademik berbagai teknik untuk mempersiapkan dan mempelajari dataset yang tidak seimbang.",
    },
    category: "Fundamentals",
    year: "2026",
    tags: ["Python", "Data Preparation", "Machine Learning"],
    github: `${repositoryBase}/Imbalanced%20Data%20Handling`,
    featured: false,
  },
  {
    slug: "feature-extraction-selection",
    title: "Feature Extraction & Selection",
    description: {
      en: "A practical study of reducing, extracting, and selecting useful features for modeling.",
      id: "Studi praktis untuk mereduksi, mengekstraksi, dan memilih fitur yang berguna dalam pemodelan.",
    },
    category: "Fundamentals",
    year: "2026",
    tags: ["Python", "Feature Engineering", "Data Preparation"],
    github: `${repositoryBase}/Feature%20Extraction%20%26%20Selection`,
    featured: false,
  },
  {
    slug: "data-normalization",
    title: "Data Normalization",
    description: {
      en: "A fundamentals exercise focused on normalization techniques and their role in data preparation.",
      id: "Latihan fundamental mengenai teknik normalisasi dan perannya dalam persiapan data.",
    },
    category: "Fundamentals",
    year: "2026",
    tags: ["Python", "Normalization", "Data Preparation"],
    github: `${repositoryBase}/Data%20Normalization`,
    featured: false,
  },
];

export const stackGroups = [
  {
    number: "01",
    title: { en: "Technical foundations", id: "Fondasi teknis" },
    items: [
      "Python",
      "Jupyter Notebook",
      "Machine Learning",
      "Data Preparation",
      "Git & GitHub",
    ],
  },
  {
    number: "02",
    title: { en: "Application & delivery", id: "Aplikasi & delivery" },
    items: ["Flutter", "Dart", "Streamlit", "Docker", "Web Development"],
  },
  {
    number: "03",
    title: { en: "Leadership & operations", id: "Kepemimpinan & operasional" },
    items: [
      "Stakeholder Coordination",
      "Partnerships",
      "Event Operations",
      "Budgeting",
      "Media Production",
    ],
  },
];

export const impactStats = [
  {
    value: "72",
    label: {
      en: "awardees coordinated for a company-profile initiative",
      id: "penerima dikoordinasikan untuk inisiatif company profile",
    },
  },
  {
    value: "IDR 60M",
    label: {
      en: "activity budget managed with accountable records",
      id: "anggaran kegiatan dikelola dengan pencatatan akuntabel",
    },
  },
  {
    value: "5",
    label: {
      en: "external partnership discussions initiated",
      id: "diskusi kemitraan eksternal diinisiasi",
    },
  },
  {
    value: "40K",
    label: {
      en: "monthly Instagram views reached through content refinement",
      id: "tayangan Instagram bulanan dicapai lewat penyempurnaan konten",
    },
  },
];
