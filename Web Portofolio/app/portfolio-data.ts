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
    en: "I'm an Information Systems undergraduate student from Universitas Airlangga, based in Surabaya. I enjoy working at the intersection of technology, leadership, and practical execution—learning continuously, coordinating people, and turning ideas into projects that create real value.",
    id: "Saya adalah mahasiswa Sistem Informasi Universitas Airlangga yang berdomisili di Surabaya. Saya menikmati proses di persimpangan teknologi, kepemimpinan, dan eksekusi nyata—terus belajar, mengoordinasikan orang, serta mengubah ide menjadi proyek yang memberikan nilai.",
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
      en: "Coordinator, BSI Scholarship Inspirasi UNAIR",
      id: "Koordinator BSI Scholarship Inspirasi UNAIR",
    },
    period: "Nov 2025 — Present",
    location: "Surabaya",
    tags: ["Leadership", "Stakeholder Coordination", "Operations"],
    bullets: [
      {
        en: "Initiated and led an iftar gathering that brought together 32 awardees across scholarship categories.",
        id: "Menginisiasi dan memimpin kegiatan buka puasa yang mempertemukan 32 penerima dari berbagai kategori beasiswa.",
      },
      {
        en: "Coordinates ongoing support for awardees across disbursement, training, mentoring, development sessions, and program responsibilities.",
        id: "Mengoordinasikan dukungan berkelanjutan bagi penerima beasiswa, mulai dari pencairan, pelatihan, mentoring, sesi pengembangan, hingga tanggung jawab program.",
      },
      {
        en: "Led the scholarship company-profile production by coordinating availability from approximately 72 awardees and managing 30 participants.",
        id: "Memimpin produksi company profile beasiswa dengan mengoordinasikan ketersediaan sekitar 72 penerima dan mengelola 30 peserta.",
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
        en: "Acts as the primary technical lead for video content, translating creative concepts into polished outputs.",
        id: "Berperan sebagai penanggung jawab teknis utama konten video dan menerjemahkan konsep kreatif menjadi hasil akhir yang matang.",
      },
      {
        en: "Handles audio mixing, camera feeds, studio lighting, and real-time troubleshooting for recurring programs.",
        id: "Menangani audio mixing, camera feed, pencahayaan studio, dan troubleshooting langsung untuk program rutin.",
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
        en: "Initiated partnership discussions with five external organizations and coordinated three partner and community events end to end.",
        id: "Menginisiasi diskusi kemitraan dengan lima organisasi eksternal serta mengoordinasikan tiga acara mitra dan komunitas dari awal hingga selesai.",
      },
      {
        en: "Refined Instagram content strategy, contributing to monthly views growing from 9.5K to 40K.",
        id: "Menyempurnakan strategi konten Instagram hingga berkontribusi pada pertumbuhan tayangan bulanan dari 9,5 ribu menjadi 40 ribu.",
      },
    ],
  },
  {
    organization: "Class of 2024 · SMA 1 Tawangsari",
    role: { en: "Treasurer", id: "Bendahara" },
    period: "Nov 2023 — May 2024",
    location: "Sukoharjo",
    tags: ["Budgeting", "Accountability", "Event Operations"],
    bullets: [
      {
        en: "Managed an IDR 60 million activity budget for seven months with accurate financial records and transaction tracking.",
        id: "Mengelola anggaran kegiatan sebesar Rp60 juta selama tujuh bulan dengan pencatatan keuangan dan transaksi yang akurat.",
      },
      {
        en: "Supervised budget allocation that achieved approximately 12% cost savings while maintaining event quality.",
        id: "Mengawasi alokasi anggaran yang menghasilkan penghematan sekitar 12% tanpa menurunkan kualitas acara.",
      },
    ],
  },
  {
    organization: "Class of 2024 · SMA 1 Tawangsari",
    role: {
      en: "Screenwriter & Story Development",
      id: "Penulis Skenario & Pengembangan Cerita",
    },
    period: "Dec 2023 — Jul 2024",
    location: "Sukoharjo",
    tags: ["Storytelling", "Production", "Team Coordination"],
    bullets: [
      {
        en: "Developed a graduation-film story for more than 300 students and authored the majority of its screenplay.",
        id: "Mengembangkan cerita film kelulusan untuk lebih dari 300 siswa serta menulis sebagian besar skenarionya.",
      },
      {
        en: "Supervised production from pre-production to completion while coordinating a demanding filming schedule.",
        id: "Mengawasi proses produksi sejak praproduksi hingga selesai sambil mengoordinasikan jadwal pengambilan gambar yang padat.",
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
        en: "Developed communication strategies for three major events, increasing student participation by up to 93%.",
        id: "Mengembangkan strategi komunikasi untuk tiga acara besar dan meningkatkan partisipasi siswa hingga 93%.",
      },
      {
        en: "Managed social media and increased follower engagement by 40% through consistent, interactive content.",
        id: "Mengelola media sosial dan meningkatkan keterlibatan pengikut sebesar 40% melalui konten yang konsisten dan interaktif.",
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
