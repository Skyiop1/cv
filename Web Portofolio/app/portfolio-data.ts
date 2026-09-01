export type Language = "en" | "id";

export type LocalizedText = {
  en: string;
  id: string;
};

export const profile = {
  name: "Muhammad Naufal Zaki",
  handle: "@naufallzakki",
  title: {
    en: "Information Systems Student",
    id: "Mahasiswa Sistem Informasi",
  },
  bio: {
    en: "Information Systems undergraduate at Airlangga University and BSI Scholarship awardee with experience in leadership, stakeholder coordination, partnerships, and operational project management. Developing a career at the intersection of technology, business, and organizational transformation, with interests in enterprise systems, technology risk, financial technology, and emerging technologies. Strong in communication, analytical thinking, cross-functional collaboration, and structured problem-solving.",
    id: "Mahasiswa Sistem Informasi Universitas Airlangga sekaligus penerima beasiswa BSI Scholarship dengan pengalaman dalam kepemimpinan, koordinasi pemangku kepentingan, kemitraan strategis, dan manajemen proyek operasional. Berfokus mengembangkan karier di persimpangan teknologi, bisnis, dan transformasi organisasi, dengan minat mendalam pada sistem enterprise, manajemen risiko teknologi, financial technology, dan emerging technologies. Memiliki kemampuan yang kuat dalam komunikasi, berpikir analitis, kolaborasi lintas fungsi, serta pemecahan masalah secara terstruktur.",
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
        id: "Menginisiasi dan memimpin agenda BSI Scholarship UNAIR Iftar Gathering yang mempertemukan 32 penerima beasiswa lintas kategori guna mempererat relasi, rasa kebersamaan, dan sinergi antaranggota.",
      },
      {
        en: "Structured team responsibilities, delegated tasks, and directed the overall execution of the event, including venue selection, reservations, operational planning, and coordination of event requirements.",
        id: "Menyusun pembagian tanggung jawab tim, mendelegasikan tugas, dan mengarahkan keseluruhan eksekusi acara mulai dari pemilihan lokasi, manajemen reservasi, perencanaan operasional, hingga koordinasi logistik.",
      },
      {
        en: "Led the coordination and ongoing support of BSI Scholarship Inspirasi awardees across scholarship disbursement, blazer distribution, training, mentoring, development sessions, and program responsibilities, while ensuring clear communication and accessible support.",
        id: "Mengoordinasikan dan mendampingi penerima BSI Scholarship Inspirasi secara berkelanjutan dalam proses pencairan dana, distribusi jas almamater/blazer, pelatihan, mentoring, sesi pengembangan diri, hingga pemenuhan tanggung jawab program dengan komunikasi yang jelas dan responsif.",
      },
      {
        en: "Initiated and led the production of the BSI Scholarship UNAIR Company Profile by coordinating availability voting from approximately 72 awardees and managing 30 participants throughout the photoshoot process.",
        id: "Menginisiasi dan memimpin produksi Company Profile BSI Scholarship UNAIR dengan mengoordinasikan jadwal ketersediaan ~72 penerima beasiswa serta memandu 30 partisipan selama rangkaian sesi pemotretan (*photoshoot*).",
      },
      {
        en: "Collaborated with scholarship coordinators, the design team, vendors, and participants to align communication, schedules, budgets, and execution quality, while building familiarity and improving the quality of relationships.",
        id: "Berkolaborasi aktif dengan koordinator beasiswa, tim desain, vendor, dan partisipan untuk menyelaraskan komunikasi, jadwal kerja, alokasi anggaran, serta mutu eksekusi demi menjaga kelancaran program dan memperkuat relasi antarpemangku kepentingan.",
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
        id: "Menginisiasi dan mengelola negosiasi kemitraan strategis dengan 5 organisasi eksternal, menyelaraskan tujuan kolaborasi, deliverables, linimasa kerja, dan kebutuhan operasional.",
      },
      {
        en: "Coordinated the end-to-end execution of 3 partner and community events hosted at Loka Coffee, from initial planning to on-site implementation.",
        id: "Mengoordinasikan pelaksanaan 3 acara mitra dan komunitas di Loka Coffee secara menyeluruh (*end-to-end*), mulai dari perancangan konsep awal hingga eksekusi teknis di lokasi.",
      },
      {
        en: "Balanced the needs and interests of Loka Coffee and external partners to develop mutually beneficial collaboration arrangements.",
        id: "Menjembatani kepentingan Loka Coffee dan mitra eksternal guna merumuskan bentuk kerja sama yang saling menguntungkan (*mutual collaboration*).",
      },
      {
        en: "Monitored monthly Instagram performance and refined content strategies, contributing to an increase in monthly views from 9.5K to 40K and a peak account reach of 8,787.",
        id: "Menganalisis performa bulanan Instagram dan mengoptimalkan strategi konten, berhasil meningkatkan tayangan bulanan dari 9,5 ribu menjadi 40 ribu serta mencapai jangkauan puncak (*peak reach*) sebanyak 8.787 akun.",
      },
    ],
  },
  {
    organization: "American Corner",
    role: { en: "Media Production", id: "Produksi Media" },
    period: "Dec 2024 — Dec 2025",
    location: "Surabaya",
    tags: ["Media", "Technical Operations", "Problem Solving"],
    bullets: [
      {
        en: "Served as the primary technical lead for video content, translating creative concepts into polished final outputs that aligned with AMCOR’s digital strategy.",
        id: "Bertindak sebagai penanggung jawab teknis utama produksi konten video, menerjemahkan konsep kreatif menjadi karya visual berkualitas tinggi yang selaras dengan strategi digital AMCOR.",
      },
      {
        en: "Executed detailed manual editing for approximately 3 high-quality videos per month, prioritizing visual precision and narrative depth.",
        id: "Melakukan penyuntingan video secara presisi untuk ~3 konten video utama per bulan dengan mengutamakan kualitas visual dan kekuatan narasi.",
      },
      {
        en: "Managed technical visual operations for approximately 4 routine programs per month, ensuring high-quality broadcast/recording standards.",
        id: "Mengelola operasional teknis visual untuk ~4 program rutin per bulan guna menjamin standar penyiaran dan perekaman yang optimal.",
      },
      {
        en: "Managed the technical setup for programs, overseeing audio mixing, camera feeds, and studio lighting configurations to maintain professional broadcast standards.",
        id: "Menangani tata teknis studio siaran, meliputi *audio mixing*, integrasi *camera feed*, dan konfigurasi pencahayaan studio sesuai standar penyiaran profesional.",
      },
      {
        en: "Performed real-time troubleshooting during live events to resolve technical glitches instantly, maintaining a seamless viewing experience.",
        id: "Melakukan penanganan kendala teknis secara langsung (*real-time troubleshooting*) selama siaran berlangsung guna menjaga kelancaran acara dan kenyamanan penonton.",
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
        id: "Mengelola anggaran kegiatan angkatan sebesar Rp60 juta selama 7 bulan dengan akurasi pencatatan dan pelacakan transaksi 100%.",
      },
      {
        en: "Designed and supervised budget allocation strategies for various events, achieving cost savings of approximately 12% while maintaining quality.",
        id: "Merancang dan mengawasi alokasi anggaran berbagai program kerja, berhasil mencapai efisiensi biaya sekitar 12% tanpa menurunkan mutu kegiatan.",
      },
      {
        en: "Prepared detailed financial reports periodically, enhancing transparency and accountability within the committee.",
        id: "Menyusun laporan pertanggungjawaban keuangan berkala secara terperinci guna menjaga transparansi dan akuntabilitas kepanitiaan.",
      },
      {
        en: "Coordinated with the management team to organize successful event prom attended by 345 participants, receiving positive feedback for smooth execution and memorable experiences.",
        id: "Berkoordinasi dengan tim inti untuk menyelenggarakan acara *prom* kelulusan yang dihadiri 345 peserta dengan ulasan positif atas kelancaran dan kesan acara.",
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
        id: "Merancang dan mengembangkan konsep cerita untuk film kelulusan angkatan, mempersembahkan karya kenangan bermakna bagi 300+ siswa.",
      },
      {
        en: "Authored the majority of the screenplay, ensuring cohesive narrative structure and authentic dialogue that effectively reflected the student experience.",
        id: "Menulis naskah skenario utama dengan struktur narasi yang kohesif serta dialog autentik yang merefleksikan dinamika kehidupan sekolah.",
      },
      {
        en: "Supervised the entire production process from pre-production through completion, ensuring 100% adherence to storyboard specifications and script requirements.",
        id: "Mengawasi alur produksi secara menyeluruh dari praproduksi hingga pascaproduksi, memastikan kesesuaian 100% terhadap storyboard dan naskah.",
      },
      {
        en: "Coordinated with the production team to manage a rigorous filming schedule, guaranteeing all scenes were completed on time while maintaining fidelity to the original creative vision.",
        id: "Mengatur jadwal pengambilan gambar yang padat bersama kru produksi, memastikan seluruh adegan tuntas tepat waktu sesuai visi kreatif yang ditargetkan.",
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
        id: "Merancang dan mengeksekusi strategi komunikasi publik untuk 3 agenda besar organisasi, mendorong peningkatan partisipasi siswa hingga 93%.",
      },
      {
        en: "Managed the social media platforms of Rohis, boosting follower engagement by 40% through consistent content updates and interactive posts.",
        id: "Mengelola media sosial organisasi dan meningkatkan interaksi pengikut (*engagement*) sebesar 40% melalui konten edukatif dan interaktif yang konsisten.",
      },
      {
        en: "Facilitated collaboration between Rohis and the school to ensure smooth activity implementation, resulting in improved partnerships and event success.",
        id: "Menjembatani koordinasi antara organisasi dan pihak sekolah guna memastikan kelancaran perizinan serta keberhasilan pelaksanaan kegiatan.",
      },
      {
        en: "Created promotional materials (brochures, posters, social media content) that significantly enhanced awareness and participation in Rohis activities.",
        id: "Memproduksi materi publikasi kreatif (brosur, poster, konten digital) yang efektif meningkatkan atensi dan partisipasi peserta.",
      },
      {
        en: "Coordinated public relations efforts, increasing the organization's visibility within the school community and boosting event attendance by 25%.",
        id: "Mengoordinasikan publikasi organisasi, memperluas jangkauan informasi di lingkungan sekolah, dan meningkatkan angka kehadiran acara hingga 25%.",
      },
    ],
  },
];

const repositoryBase =
  "https://github.com/Skyiop1/CS-Fundamentals-UNAIR/tree/main";

export const projects = [
  {
    slug: "nusacarbon-blockchain-platform",
    title: "NusaCarbon : A Blockchain-Based Carbon Credit Marketplace Platform for MRV Verification and Prevention of Double Offset Claims",
    description: {
      en: "A comprehensive web and mobile prototype for a blockchain-based carbon credit marketplace, engineered for transparent MRV (Measurement, Reporting, and Verification) workflows and the prevention of double offset claims.",
      id: "Prototipe platform web dan aplikasi mobile marketplace kredit karbon berbasis blockchain untuk verifikasi MRV (Measurement, Reporting, and Verification) yang transparan serta pencegahan klaim ganda (*double offset claims*) dalam perdagangan karbon.",
    },
    category: "Web & Mobile",
    year: "2026",
    tags: ["Java", "Dart", "Flutter", "Prototype", "Web App"],
    github: `${repositoryBase}/NusaCarbonWEB`,
    featured: true,
  },
  {
    slug: "credit-default-risk-ai",
    title: "Credit Default Risk AI",
    description: {
      en: "A machine-learning project exploring credit default risk through structured data and model-driven analysis.",
      id: "Pengembangan model machine learning untuk memprediksi dan menganalisis risiko gagal bayar kredit berdasarkan data terstruktur.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Machine Learning", "Streamlit"],
    github: `${repositoryBase}/CreditDefaultRiskAI`,
    featured: true,
  },
  {
    slug: "stock-price-prediction-ga-rf",
    title: "Genetic Algorithm-Based Feature Selection for Random Forest Stock Trend Classification: Case Study on Indonesian Stock (BBCA.JK)",
    description: {
      en: "An empirical machine-learning study leveraging Genetic Algorithms for optimal feature selection in Random Forest models to classify daily price movement trends on Bank Central Asia (BBCA.JK) equities.",
      id: "Studi komparasi machine learning yang memanfaatkan Genetic Algorithm untuk seleksi fitur optimal pada model Random Forest dalam mengklasifikasikan tren pergerakan saham Bank Central Asia (BBCA.JK).",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Genetic Algorithm", "Random Forest", "Finance"],
    github: `${repositoryBase}/Stock%20Price%20Prediction%20(GA%20%2B%20RF)`,
    featured: true,
  },
  {
    slug: "customer-segmentation",
    title: "Clustering & Customer Segmentation",
    description: {
      en: "An unsupervised-learning exercise focused on identifying meaningful customer groups from data.",
      id: "Implementasi unsupervised learning untuk segmentasi pelanggan dan identifikasi pola perilaku data.",
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
      id: "Penerapan model regresi untuk estimasi valuasi harga kendaraan dan evaluasi performa prediksi metrik data.",
    },
    category: "Data & ML",
    year: "2026",
    tags: ["Python", "Regression", "Model Evaluation"],
    github: `${repositoryBase}/Car%20Price%20Prediction`,
    featured: true,
  },
  {
    slug: "wine-quality-classification",
    title: "Wine Quality Classification",
    description: {
      en: "A classification exercise exploring data preparation, model training, and performance interpretation.",
      id: "Studi klasifikasi kualitas berbasis data yang berfokus pada persiapan data, pelatihan model, dan interpretasi akurasi.",
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
      id: "Implementasi terfokus dari alur klasifikasi menggunakan algoritma decision tree.",
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
      id: "Eksplorasi teknik penanganan ketidakseimbangan data (*class imbalance*) dalam pemodelan machine learning.",
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
      id: "Studi rekayasa fitur (*feature engineering*) untuk reduksi dimensi dan pemilihan fitur optimal dalam pemodelan data.",
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
      id: "Implementasi berbagai teknik normalisasi data sebagai tahapan penting dalam pra-pemrosesan data (*data preprocessing*).",
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
    title: { en: "Technical foundations", id: "Fondasi Teknis & Data" },
    items: [
      "Python",
      "Tableau",
      "Machine Learning",
      "Data Preparation",
      "Git & GitHub",
    ],
  },
  {
    number: "02",
    title: { en: "Application & delivery", id: "Aplikasi & Pengembangan Produk" },
    items: [
      "Java",
      "Flutter",
      "Dart",
      "Docker",
      "Streamlit",
      "Web Development",
    ],
  },
  {
    number: "03",
    title: { en: "Leadership & operations", id: "Kepemimpinan & Operasional" },
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
    value: "50+",
    label: {
      en: "awardees involved in a cross-track initiative",
      id: "penerima beasiswa terlibat dalam inisiatif lintas kategori",
    },
  },
  {
    value: "IDR 60M",
    label: {
      en: "activity budget managed with accountable records",
      id: "anggaran kegiatan angkatan dikelola secara akuntabel dan transparan",
    },
  },
  {
    value: "5",
    label: {
      en: "external partnership discussions initiated",
      id: "diskusi kemitraan strategis dengan organisasi eksternal diinisiasi",
    },
  },
  {
    value: "+321%",
    label: {
      en: "monthly Instagram views growth from 9.5K to 40K",
      id: "pertumbuhan tayangan bulanan Instagram dari 9,5 ribu ke 40 ribu",
    },
  },
];
