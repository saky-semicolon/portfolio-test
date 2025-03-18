const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "S M Asiful Islam Saky | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Saky Portfolio",
    type: "website",
    url: "http://saky-semicolon.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi!",
  sub: "S M Asiful Islam Saky",
  logo_name: "S M Asiful Islam Saky",
  resumeLink:
    "https://drive.google.com/file/d/1G91UsSoigPL4FvlizoVZj82N1TIcZMUI/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/saky-semicolon",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/smasifulislamsaky",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/saky-semicolon/",
    },
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#4285F4",
      },
      profileLink:
        "https://scholar.google.com/citations?user=1mo3UhMAAAAJ&hl=en",
    },
  ],
};

// About Me
const aboutMe = {
  title: "About Me",
  description: `
    I'm S M Asiful Islam Saky, a passionate AI Researcher, Machine Learning Engineer, and Tech Mentor. 
    With expertise in Data Science, IoT, and Software Engineering, I develop innovative AI-driven 
    solutions and mentor aspiring technologists. My work spans AI research, software development, 
    and hands-on workshops in cutting-edge technologies. I thrive on solving real-world problems 
    through AI, cloud computing, and embedded systems.
  `,
  highlights: [
    "🔹 AI & Machine Learning Enthusiast",
    "🔹 Experienced in Deep Learning & NLP",
    "🔹 IoT & Embedded Systems Innovator",
    "🔹 Full-Stack Web & Cloud Developer",
    "🔹 Technical Educator & Mentor",
    "🔹 Open-Source Contributor & Researcher",
  ],
  profileImage: "images/profile.jpg", // Replace with your actual profile image path
};

export default aboutMe;

//what i do?
const skills = {
  data: [
    {
      title: "ML & AI Development",
      fileName: "MLOpsImg",
      skills: [
        "🚀 Building scalable ML models for real-world applications",
        "🖼️ CV: Object Detection, Image Classification, & Face Recognition",
        "🗣️ NLP & LLMs: Transformer models like BERT, T5, & GPT",
        "⚙️ MLOps & Model Deployment with Docker, Kubernetes, & MLflow",
        "🔗 AI Workflow Automation with Apache Airflow & FastAPI",
        "🛠️ Building AI-driven web applications with Streamlit & Flask",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C", // PyTorch official orange color
          },
        },
        {
          skillName: "MLOps",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            backgroundColor: "transparent",
            color: "#0194E2",
          },
        },
        {
          skillName: "LLMOps",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#FFCC00",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#2496ED",
          },
        },

        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            backgroundColor: "transparent",
            color: "#623CE4",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: {
            backgroundColor: "transparent",
            color: "#017CEE",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#009688",
          },
        },
      ],
    },
    {
      title: "Data Science & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "📊 Developing data-driven solutions with statistical modeling",
        "📈 Performing EDA using Pandas, NumPy, & Seaborn",
        "🔍 Data Cleaning, Preprocessing & Feature Engineering for high-quality datasets",
        "📉 Building predictive models with Scikit-Learn & SQL for business insights",
        "⚙️ Deploying data visualization dashboards using Tableau & Power BI",
        "📡 Automating data workflows & ETL pipelines using Apache Airflow",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { backgroundColor: "transparent", color: "#4479A1" },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { backgroundColor: "transparent", color: "#F7931E" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { backgroundColor: "transparent", color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { backgroundColor: "transparent", color: "#E97627" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { backgroundColor: "transparent", color: "#217346" },
        },
      ],
    },
    {
      title: "AI Research & Development",
      fileName: "AIRDImg",
      skills: [
        "📄 Advancing AI research in Deep Learning, NLP, and model development.",
        "📚 Conducting literature reviews to identify trends and research gaps.",
        "🛠️ Designing and optimizing ML architectures for real-world use.",
        "✍️ Publishing research in conferences, journals, and preprints.",
        "📑 Documenting AI models, methodologies, and findings.",
        "🎤 Presenting at conferences, workshops, and seminars.",
      ],
      softwareSkills: [
        {
          skillName: "Google Scholar",
          fontAwesomeClassname: "simple-icons:googlescholar",
          style: { backgroundColor: "transparent", color: "#4285F4" }, // Google Scholar Blue
        },
        {
          skillName: "ResearchGate",
          fontAwesomeClassname: "simple-icons:researchgate",
          style: { backgroundColor: "transparent", color: "#00D0AF" }, // ResearchGate Official Color
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: { backgroundColor: "transparent", color: "#008080" },
        },
        {
          skillName: "Overleaf",
          fontAwesomeClassname: "simple-icons:overleaf",
          style: { backgroundColor: "transparent", color: "#47A141" },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: { backgroundColor: "transparent", color: "#2B579A" },
        },
        {
          skillName: "Microsoft PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: { backgroundColor: "transparent", color: "#B7472A" },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: { backgroundColor: "transparent", color: "#00C4CC" },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { backgroundColor: "transparent", color: "#F37626" },
        },
        {
          skillName: "Mendeley",
          fontAwesomeClassname: "simple-icons:mendeley",
          style: { backgroundColor: "transparent", color: "#9D1620" },
        },
      ],
    },

    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "💻 Crafting dynamic and responsive websites with HTML5, CSS3, Bootstrap, and ReactJS.",
        "🚀 Developing scalable backend applications using Node.js, Flask, and Streamlit.",
        "🌍 Deploying web applications with seamless domain & hosting on Netlify, Vercel, Heroku, and Hostinger.",
        // "🛠️ Enhancing web performance and user experience with modern frameworks.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Tech Mentor & Educator",
      fileName: "MentoringImg",
      skills: [
        "📖 Mentoring students in AI, Machine Learning, and Data Science.",
        "🛠️ Conducting hands-on workshops on IoT, Programming, and AI applications.",
        "🎓 Teaching and guiding students in STEM education and emerging technologies.",
        "📑 Creating educational contents, tutorials, and technical documentation.",
        "🤝 Collaborating with tech communities for knowledge sharing.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "C Programming",
          fontAwesomeClassname: "simple-icons:c",
          style: { backgroundColor: "transparent", color: "#A8B9CC" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { backgroundColor: "transparent", color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { backgroundColor: "transparent", color: "#181717" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { backgroundColor: "transparent", color: "#FCC624" },
        },
        {
          skillName: "Bash Scripting",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: { backgroundColor: "transparent", color: "#4EAA25" },
        },
        {
          skillName: "IoT",
          fontAwesomeClassname: "simple-icons:arduino",
          style: { backgroundColor: "transparent", color: "#00979C" },
        },
        {
          skillName: "Embedded Systems",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: { backgroundColor: "transparent", color: "#C51A4A" },
        },
        {
          skillName: "MS-DOS",
          fontAwesomeClassname: "simple-icons:windows",
          style: { backgroundColor: "transparent", color: "#00A4EF" },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "🔍 Zindi African Credit Scoring Challenge",
      img_path: "credittt.png",
      description:
        "Predicting loan default probabilities using ML with feature engineering and model optimization.",
      tags: [
        {
          lang: "📊 Scikit-Learn",
          color: "#820032",
        },
        {
          lang: "📈 XGBoost",
          color: "#00a100",
        },
        {
          lang: "⚙️ Feature Engineering",
          color: "#ff4b4b",
        },
        {
          lang: "💰 Financial Modeling",
          color: "#3c0095",
        },
      ],
      link:
        "https://zindi.africa/users/saky-semicolon/competitions/certificate",
      code:
        "https://github.com/saky-semicolon/Zindi_African-Credit-Scoring-Challenge",
      linkcolor: "white",
    },

    {
      title: "💳 Credit Scoring Model",
      img_path: "crescore.webp",
      description:
        "Developing a model to predict creditworthiness based on financial data.",
      tags: [
        {
          lang: "📊 Classification Algorithms",
          color: "#004782",
        },
        {
          lang: "🧼 Data Preprocessing",
          color: "#c47206",
        },
        {
          lang: "🤖 Machine Learning",
          color: "#4257f5",
        },
        {
          lang: "💰 Financial Analytics",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/saky-semicolon/Credit-Scoring-Model",
      code: "https://github.com/saky-semicolon/Credit-Scoring-Model",
      linkcolor: "white",
    },
    {
      title: "🧠 Topic Modeling on Mental Health Related Tweets",
      img_path: "topics.png",
      description:
        "Using NLP techniques (LDA, BERTopic) for sentiment analysis and trend identification.",
      tags: [
        {
          lang: "💬 NLP",
          color: "#8700b0",
        },
        {
          lang: "📚 LDA",
          color: "#c47206",
        },
        {
          lang: "📊 BERTopic",
          color: "#ff4b4b",
        },
        {
          lang: "📝 Sentiment Analysis",
          color: "#3c0095",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Topic-Modeling-on-Mental-Health-Related-Tweets",
      code:
        "https://github.com/saky-semicolon/Topic-Modeling-on-Mental-Health-Related-Tweets",
      linkcolor: "white",
    },
    {
      title: "🔐 Anomaly Detection in Credit Card Fraud",
      img_path: "credit fraud.png",
      description:
        "Comparative analysis of Autoencoder, Isolation Forest, and One-Class SVM for fraud detection.",
      tags: [
        {
          lang: "📉 Autoencoder",
          color: "#ff4b4b",
        },
        {
          lang: "🌲 Isolation Forest",
          color: "#c47206",
        },
        {
          lang: "🚨 One-Class SVM",
          color: "#ff4b4b",
        },
        {
          lang: "💳 Fraud Detection",
          color: "#3c0095",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Anomaly-Detection-in-Credit-Card-Fraud",
      code:
        "https://github.com/saky-semicolon/Anomaly-Detection-in-Credit-Card-Fraud",
      linkcolor: "white",
    },
    {
      title: "🎓 Placement Prediction using Machine Learning",
      img_path: "placementt.png",
      description:
        "Predicting student placement outcomes based on academic and extracurricular data.",
      tags: [
        {
          lang: "📊 Data Mining",
          color: "#8700b0",
        },
        {
          lang: "⚡ Feature Engineering",
          color: "#c47206",
        },
        {
          lang: "📈 Logistic Regression",
          color: "#ff4b4b",
        },
        {
          lang: "🌳 Decision Trees",
          color: "#3c0095",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Placement-Prediction-using-Machine-Learning",
      code:
        "https://github.com/saky-semicolon/Placement-Prediction-using-Machine-Learning",
      linkcolor: "white",
    },
    {
      title: "🌍 Cross-Lingual Transfer Learning System",
      img_path: "TLL.png",
      description:
        "Adaptation of a German dataset for dialogue state tracking using BERT.",
      tags: [
        {
          lang: "🔠 BERT",
          color: "#004782",
        },
        {
          lang: "🔄 Transfer Learning",
          color: "#303030",
        },
        {
          lang: "💬 Dialogue State Tracking",
          color: "#ff4b4b",
        },
        {
          lang: "🗣️ NLP",
          color: "#051c61",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Cross-Lingual-Transfer-Learning-System",
      code:
        "https://github.com/saky-semicolon/Cross-Lingual-Transfer-Learning-System",
      linkcolor: "white",
    },

    {
      title: "📊 SVM, Logistic Regression, k-NN, K-Means & PCA",
      img_path: "ml.webp",
      description:
        "A comparative analysis of machine learning models, evaluating their performance on classification and clustering tasks.",
      tags: [
        {
          lang: "📚 Scikit-Learn",
          color: "#004782",
        },
        {
          lang: "🔍 Data Preprocessing",
          color: "#c47206",
        },
        {
          lang: "📉 Dimensionality Reduction",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://github.com/saky-semicolon/SVM-Logistic-Regression-k-NN-K-Means-Clustering-and-PCA",
      code:
        "https://github.com/saky-semicolon/SVM-Logistic-Regression-k-NN-K-Means-Clustering-and-PCA",
      linkcolor: "white",
    },
    {
      title: "🚢 Titanic Survival Analysis using R",
      img_path: "titanic.png",
      description:
        "Analyzing survival rates using statistical techniques, data preprocessing, and visualizations in R.",
      tags: [
        {
          lang: "🖥 R Programming",
          color: "#004782",
        },
        {
          lang: "📉 Data Visualization",
          color: "#c47206",
        },
        {
          lang: "📊 Statistical Analysis",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Titanic-Survival-Analysis-using-R",
      code:
        "https://github.com/saky-semicolon/Titanic-Survival-Analysis-using-R",
      linkcolor: "white",
    },
    {
      title: "📊 Students' Performance Analysis",
      img_path: "stu.webp",
      description:
        "Analyzing student performance through statistical and probabilistic methods, uncovering links between study habits, extracurriculars, and academic success.",
      tags: [
        {
          lang: "📈 Statistical Analysis",
          color: "#004782",
        },
        {
          lang: "🧮 Probability & Data Science",
          color: "#c47206",
        },
        {
          lang: "📝 Data Visualization",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Students-Performance_A-Journey-in-Statistics-and-Probability_A-Memory-to-Treasure/blob/635de66fa120fb4f6a992e8c0d0cfe77b55a8cf6/Students%20Performance-%20Statistics%20Magazine.pdf",
      code:
        "https://github.com/saky-semicolon/Students-Performance_A-Journey-in-Statistics-and-Probability_A-Memory-to-Treasure",
      linkcolor: "white",
    },
  ],
};

// ProjectCards2

const projectcards2 = {
  list: [
    {
      title: "🧬🔬 HER2 IHC Image Classification",
      img_path: "her2.png",
      description:
        "Deep learning model for HER2 IHC image classification to assist in breast cancer diagnosis.",
      tags: [
        {
          lang: "🧠 Deep Learning",
          color: "#004782",
        },
        {
          lang: "📸 CNN",
          color: "#820032",
        },
        {
          lang: "🏥 Medical Imaging",
          color: "#00a100",
        },
        {
          lang: "🔬 Histopathology",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/saky-semicolon/HER2-IHC-Image-Classification",
      code: "https://github.com/saky-semicolon/HER2-IHC-Image-Classification",
      linkcolor: "white",
    },

    {
      title: "🧠🎗 Multimodal Brain Tumor Segmentation",
      img_path: "brain.png",
      description:
        "Segmentation of brain tumors from multimodal MRI scans using U-Net architecture.",
      tags: [
        {
          lang: "🏥 Medical Imaging",
          color: "#004782",
        },
        {
          lang: "🔍 U-Net",
          color: "#c47206",
        },
        {
          lang: "🖼 Image Segmentation",
          color: "#4257f5",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Multimodal-Brain-Tumor-Segmentation",
      code:
        "https://github.com/saky-semicolon/Multimodal-Brain-Tumor-Segmentation",
      linkcolor: "white",
    },
    {
      title: "👁️‍🗨️🩺 Retinal Layer Segmentation",
      img_path: "retinaa.png",
      description:
        "Automated segmentation of retinal layers from OCT images for ophthalmology diagnostics.",
      tags: [
        {
          lang: "🏥 Medical Imaging",
          color: "#004782",
        },
        {
          lang: "🔬 OCT Analysis",
          color: "#8700b0",
        },
        {
          lang: "📸 Image Processing",
          color: "#c47206",
        },
        {
          lang: "🖼️ SegNet",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/saky-semicolon/Retinal-Layer-Segmentation",
      code: "https://github.com/saky-semicolon/Retinal-Layer-Segmentation",
      linkcolor: "white",
    },
    {
      title: "🫁📷 Pneumonia Detection using CNN & EfficientNet",
      img_path: "pneumonia.png",
      description:
        "Pneumonia detection from chest X-rays using CNNs and EfficientNet models.",
      tags: [
        {
          lang: "🔬 EfficientNet",
          color: "red",
        },
        {
          lang: "💡 Transfer Learnin",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Pneumonia_Detection-CNN-EfficientNet",
      code:
        "https://github.com/saky-semicolon/Pneumonia_Detection-CNN-EfficientNet",
      linkcolor: "white",
    },
    {
      title: "✍️🔡 Handwritten Character Recognition",
      img_path: "charr.png",
      description:
        "Deep learning-based handwritten character recognition for OCR applications.",
      tags: [
        {
          lang: "📖 OCR",
          color: "red",
        },
        {
          lang: "🖍 OpenCV",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "🖐️📚 Hand-Recognition Based Smart Board Model",
      img_path: "hand.png",
      description:
        "Smart board model recognizing hand gestures for interactive learning.",
      tags: [
        {
          lang: "🔹 🖐 Hand Recognition",
          color: "#004782",
        },
        {
          lang: "🎨 Computer Vision",
          color: "#303030",
        },
        {
          lang: "💡 Interactive System",
          color: "#ff4b4b",
        },
        {
          lang: "🖍 OpenCV",
          color: "#051c61",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Handwritten-Character-Recognition",
      code:
        "https://github.com/saky-semicolon/Handwritten-Character-Recognition",
      linkcolor: "white",
    },
    {
      title: "💊⚕️ Drug-Drug Interaction Prediction (DDI Pred)",
      img_path: "ddi.avif",
      description:
        "Machine learning model for predicting drug-drug interactions in pharmaceuticals.",
      tags: [
        {
          lang: "🔬 Bioinformatics",
          color: "#004782",
        },
        {
          lang: "💊 Drug Interaction",
          color: "#c47206",
        },
      ],
      link: "https://github.com/saky-semicolon/ddi_pred",
      code: "https://github.com/saky-semicolon/ddi_pred",
      linkcolor: "white",
    },
    {
      title: "🎬📽 Hybrid Movie Recommendation System",
      img_path: "movierec.png",
      description:
        "A scalable and efficient recommendation system using deep learning and transfer learning to enhance user experience by predicting viewing preferences.",
      tags: [
        {
          lang: "🤖 Neural Collaborative Filtering",
          color: "#004782",
        },
        {
          lang: "🔢 Matrix Factorization",
          color: "#c47206",
        },
        {
          lang: "🧠 Autoencoder",
          color: "#ff4b4b",
        },
        {
          lang: "🎯 Content-Based Filtering",
          color: "#3c0095",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Hybrid-Movie-Recommendation-System",
      code:
        "https://github.com/saky-semicolon/Hybrid-Movie-Recommendation-System",
      linkcolor: "white",
    },
  ],
};

// ProjectCards3

const projectcards3 = {
  list: [
    {
      title: "🏥 Kedah Hospital Management System",
      img_path: "hmsss.png",
      description:
        "A system designed to streamline patient records, appointment scheduling, and staff management using a robust database system. ",
      tags: [
        {
          lang: "🗄 SQL",
          color: "#004782",
        },
        {
          lang: "🏥 Healthcare System",
          color: "#820032",
        },
        {
          lang: "💾 Database Management",
          color: "#00a100",
        },
        {
          lang: "🖥 Web Application",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://github.com/saky-semicolon/Kedah-Hospital-Management-System",
      code:
        "https://github.com/saky-semicolon/Kedah-Hospital-Management-System",
      linkcolor: "white",
    },

    {
      title: "Project Baling",
      img_path: "baling.png",
      description:
        "A dynamic website highlighting ongoing projects by AIU in Baling, Kedah, Malaysia, providing insights into developmental initiatives and progress.",
      tags: [
        {
          lang: "🌐 Website Development",
          color: "red",
        },
        {
          lang: "🏗 Community Projects",
          color: "#004782",
        },
        {
          lang: "📌 Local Development",
          color: "#4257f5",
        },
      ],
      link: "https://baling.netlify.app",
      code: "https://github.com/saky-semicolon/Project-Baling",
      linkcolor: "white",
    },
    {
      title: "📚 Better World Web Project",
      img_path: "bw.png",
      description:
        "An interactive e-learning platform that integrates education and gamification to enhance user engagement and knowledge retention.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://github.com/saky-semicolon/Better_World-Web-Project",
      code: "https://github.com/saky-semicolon/Better_World-Web-Project",
      linkcolor: "white",
    },
    {
      title: "🎮 Apps and Games Collection",
      img_path: "apps.png",
      description:
        "A repository featuring a variety of interactive applications and games designed for entertainment and productivity.",
      tags: [
        {
          lang: "🕹 Game Development",
          color: "red",
        },
        {
          lang: "📱 Mobile Apps",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/saky-semicolon/Apps-and-Games",
      code: "https://github.com/saky-semicolon/Apps-and-Games",
      linkcolor: "white",
    },
    {
      title: "Bank Queue Simulation",
      img_path: "bankkk(1).png",
      description:
        "Simulating real-world bank queue operations using Java for service optimization.",
      tags: [
        {
          lang: "☕ Java",
          color: "red",
        },
        {
          lang: "🔄 Queue Simulation",
          color: "red",
        },
        {
          lang: "🏗 DSA",
          color: "red",
        },
      ],
      link: "https://github.com/saky-semicolon/Bank-Queue-Simulation",
      code: "https://github.com/saky-semicolon/Bank-Queue-Simulation",
      linkcolor: "white",
    },

    {
      title: "KD Academy-LMS",
      img_path: "LMS.png",
      description:
        "A Learning Management System designed to enhance online education with course management, student tracking, and interactive learning experiences.",
      tags: [
        {
          lang: "📚 LMS",
          color: "#004782",
        },
        {
          lang: "🗄️ Database Management",
          color: "#303030",
        },
        {
          lang: "🚀 Full-Stack Development",
          color: "#051c61",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "🌐 Personal Portfolio Website",
      img_path: "portfolio.png",
      description:
        "A dynamic and interactive portfolio showcasing projects, research, blogs, and achievements with a sleek, responsive design and seamless user experience.",
      tags: [
        {
          lang: "🎨 UI/UX Design",
          color: "#004782",
        },
        {
          lang: " ⚡ React.js",
          color: "#c47206",
        },
        {
          lang: "🌍 Responsive Design",
          color: "#ff4b4b",
        },
      ],
      link: "https://saky-semicolon.netlify.app/",
      code: "https://saky-semicolon.netlify.app/",
      linkcolor: "white",
    },
  ],
};

// ProjectCards4

const projectcards4 = {
  list: [
    // {
    //   title: "🤖 Seeeee",
    //   img_path: "ml-ai.png",
    //   description:
    //     "Developing intelligent models for data-driven decision-making, predictive analytics, and automation.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "TextBlob",
    //       color: "#820032",
    //     },
    //     {
    //       lang: "OpenCV",
    //       color: "#00a100",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://teath.herokuapp.com ",
    //   code: "https://github.com/rohankokkula/TEATH",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Voice Gender Detection",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Deep Learning & Computer Vision",
    //   img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/neuralviz",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Newsearcher",
    //   img_path: "news.gif",
    //   description:
    //     "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "newspaper3k",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "nltk",
    //       color: "#051c61",
    //     },
    //   ],
    //   link: "https://newsearcher.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/Newsearcher",
    //   linkcolor: "white",
    // },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

// Publications and Blogs
const publicationData = {
  title: "Publications & Blogs",
  description:
    "Dive into my research publications and technical blogs, where I explore innovations in AI, Machine Learning, and Data Science. From cutting-edge research to industry insights, discover my contributions to the field.",
  publications: [
    {
      title:
        "AI-Driven Workload Optimization: Enhancing Employee Well-Being and Productivity to Promote Sustainable Economic Growth (SDG 8) in Malaysia",
      authors:
        "Farhana Akter, Md Rofi Uddin Shakil, Azni Abdul Rashid, Kanij Fatema, Yeasmin Akter, S M Asiful Islam Saky, Noor Jannah Afi, Kamal Ab Hamid",
      journal:
        "International Journal of Research and Innovation in Social Science (IJRISS)",
      year: 2024,
      volume: 8,
      issue: 4,
      // pages: "1-15",
      publisher: "RSIS International",
      doi: "https://dx.doi.org/10.47772/IJRISS.2024.ICAME2406",
      abstract:
        "This study investigates the use of AI-driven workload optimization as a strategic strategy for improving employee well-being and productivity in Malaysia, consequently promoting long-term economic growth consistent with SDG 8. As Malaysian firms prioritize creating employment and economic growth, and the study highlights the significance of artificial intelligence in transforming the dynamics of the workplace. In addition, AI technology may help organizations increase resource allocation, reduce operating costs, and improve employee job satisfaction. The study uses a qualitative research methodology, which includes semi-structured interviews with managers from six different firms that have implemented AI technologies. This approach provides an in-depth analysis of the impact of AI on employee experiences and organizational performance. Furthermore, the study shows the significance of focusing on strengths development approaches that promote a supportive work environment, eventually contributing to professional as well as personal goals. Furthermore, successful implementation of artificial intelligence requires active employee participation, which helps these technologies enrich rather than reduce the abilities of humans. The thematic analysis indicates an obvious connection between effective AI use and improved employee health, job happiness, and work-life balance, all of which contribute to greater productivity and workplace morale. However, the study acknowledges limitations due to its concentrated attention on a small number of businesses, emphasizing the need for more research across many different sectors. Finally, this study recommends a balanced approach that focuses on both technological innovation and employee well-being, which is essential to Malaysia’s economic growth and sustainability in the face of rapid technological advancement and increasing employee requirements.This paper presents a novel approach using deep learning algorithms for the early detection of Alzheimer's disease based on neuroimaging data.",
      link: "https://dx.doi.org/10.47772/IJRISS.2024.ICAME2406",
      codeLink: "https://dx.doi.org/10.47772/IJRISS.2024.ICAME2406",
    },
    {
      title:
        "Cybersecurity and Digital Threats in the Workplace: Evaluating the Imperative for OSHA Integration in to Employee Safety Standards in Malaysia",
      authors:
        "Farhana Akter, Yeasmin Akter, S M Asiful Islam Saky, Norizan Azizan",
      journal:
        "International Journal of Engineering Research & Technology (IJERT)",
      year: 2024,
      volume: 13,
      issue: 11,
      // pages: "1-15",
      publisher: "Engineering Science & Research Support Association (ESRSA)",
      doi: "10.17577/IJERTV13IS110099",
      abstract:
        "This study analyses cybersecurity techniques to improve employee safety within the framework of Occupational Safety and Health Administration (OSHA) requirements. As organizations focus more on digital infrastructure, the risks of cyber threats have risen, impacting both operational efficiency and employee well-being. The research project analyses and evaluates current cybersecurity measures, such as multi-layered security protocols and employee training, using qualitative interviews with representatives from nine companies. The findings demonstrate that companies implementing strong cybersecurity measures significantly decrease employee anxiety and stress about digital risks. Moreover, employees reported feeling safer and supported when their employers established effective cybersecurity methods, which created a culture of paying attention and awareness. In addition, the study highlights the psychological effects of cybersecurity responsibilities, suggesting that pressure to address digital risks can lead to higher mental health challenges for employees. As a result, the study recommends OSHA include digital security measures in its workplace safety standards to address these high risks. Despite its contributions, the study has limitations that focus on specific industries, which may disrupt the findings' generalization ability. Future studies must include a larger range of industries to gain a deeper knowledge of cybersecurity's impact on employee safety in different organizational situations. Overall, the findings emphasize the need for proactive cybersecurity measures to create a positive work environment. By bridging the gap between technological advancements in security and employee well-being, this study contributes to the increasing conversation on workplace safety in digital threats, emphasizing the need for robust legal structures that address both physical and digitall threats.",
      link:
        "https://www.ijert.org/cybersecurity-and-digital-threats-in-the-workplace-evaluating-the-imperative-for-osha-integration-in-to-employee-safety-standards-in-malaysia",
      codeLink:
        "https://www.ijert.org/cybersecurity-and-digital-threats-in-the-workplace-evaluating-the-imperative-for-osha-integration-in-to-employee-safety-standards-in-malaysia",
    },
    {
      title:
        "​​Impact of Workplace Safety on Business Success: Hazard Identification in Malaysia​",
      authors:
        "Yeasmin Akter, S M Asiful Islam Saky, Jahidul Islam, Farhana Akter, Norizan Azizan",
      journal:
        "International Journal of Research and Innovation in Social Science (IJRISS)",
      year: 2025,
      volume: 8,
      issue: 3,
      pages: "90-107",
      publisher:
        "The Global Institute for Multidisciplinary Knowledge and Responsible Future & The German Union Catalogue of Serials (ZDB)",
      doi: "https://doi.org/10.47814/ijssrr.v8i3.2535",
      abstract:
        "Workplace safety and health (WSH) are increasingly recognized as vital components of organizational success, particularly in high-risk sectors such as manufacturing and construction in Malaysia. Despite the existence of comprehensive regulations like OSHA 1994, many companies still struggle with inadequate safety practices, leading to frequent accidents and costly disruptions. This research addresses the gap in the literature regarding the direct relationship between effective WSH practices and business outcomes, particularly in terms of profitability and productivity. The primary objective of this study is to investigate how hazard identification and risk mitigation strategies can enhance organizational performance. To achieve this, a qualitative methodology was employed, involving semi-structured interviews with safety managers, HR personnel, and compliance officers from six organizations. The findings reveal a significant positive correlation between comprehensive safety protocols and improved business performance. Companies that prioritize WSH report enhanced employee morale, reduced absenteeism, and increased productivity. Furthermore, organizations with strong safety cultures experience lower turnover rates and substantial cost savings from decreased insurance claims and legal fees. The implications of this research are profound, suggesting that businesses must integrate WSH as a core element of their operational strategy. By doing so, organizations comply with regulations and gain a competitive advantage in the market. This study highlights that investing in workplace safety is not merely a legal obligation but a strategic imperative that drives long-term success and sustainability in the evolving industrial landscape of Malaysia.",
      link: "https://doi.org/10.47814/ijssrr.v8i3.2535",
      codeLink: "https://doi.org/10.47814/ijssrr.v8i3.2535",
    },

    // Conference

    // {
    //   title: "Machine Learning Approaches for Early Detection of Alzheimer's Disease",
    //   authors: "S M Asiful Islam Saky, John Doe, Jane Smith",
    //   conference: "International Conference on Artificial Intelligence in Healthcare",
    //   year: 2023,
    //   publisher: "IEEE",
    //   doi: "10.1109/ICAIH.2023.1234567",
    //   abstract: "This paper presents a novel approach using deep learning algorithms for the early detection of Alzheimer's disease based on neuroimaging data.",
    //   link: "https://doi.org/10.1109/ICAIH.2023.1234567",
    //   codeLink: "https://github.com/saky-semicolon/alzheimers-detection",
    // },

    // More publications...
  ],
  blogs: [
    {
      title: "Optimizing Deep Learning Models for Real-World Applications",
      author: "S M Asiful Islam Saky",
      platform: "Medium",
      year: 2024,
      link: "https://medium.com/your-blog-link",
      description:
        "Learn how to optimize deep learning models for deployment, balancing accuracy and efficiency.",
    },
    {
      title:
        "Understanding MLOps: The Bridge Between Model Development and Production",
      author: "S M Asiful Islam Saky",
      platform: "Towards Data Science",
      year: 2023,
      link: "https://towardsdatascience.com/your-blog-link",
      description:
        "A deep dive into MLOps, covering CI/CD, model monitoring, and automation in ML pipelines.",
    },
    {
      title: "Optimizing Deep Learning Models for Real-World Applications",
      author: "S M Asiful Islam Saky",
      platform: "Medium",
      year: 2024,
      link: "https://medium.com/your-blog-link",
      description:
        "Learn how to optimize deep learning models for deployment, balancing accuracy and efficiency.",
    },
    {
      title:
        "Understanding MLOps: The Bridge Between Model Development and Production",
      author: "S M Asiful Islam Saky",
      platform: "Towards Data Science",
      year: 2023,
      link: "https://towardsdatascience.com/your-blog-link",
      description:
        "A deep dive into MLOps, covering CI/CD, model monitoring, and automation in ML pipelines.",
    },
    {
      title: "Optimizing Deep Learning Models for Real-World Applications",
      author: "S M Asiful Islam Saky",
      platform: "Medium",
      year: 2024,
      link: "https://medium.com/your-blog-link",
      description:
        "Learn how to optimize deep learning models for deployment, balancing accuracy and efficiency.",
    },
    {
      title:
        "Understanding MLOps: The Bridge Between Model Development and Production",
      author: "S M Asiful Islam Saky",
      platform: "Towards Data Science",
      year: 2023,
      link: "https://towardsdatascience.com/your-blog-link",
      description:
        "A deep dive into MLOps, covering CI/CD, model monitoring, and automation in ML pipelines.",
    },
    {
      title: "Optimizing Deep Learning Models for Real-World Applications",
      author: "S M Asiful Islam Saky",
      platform: "Medium",
      year: 2024,
      link: "https://medium.com/your-blog-link",
      description:
        "Learn how to optimize deep learning models for deployment, balancing accuracy and efficiency.",
    },
    {
      title:
        "Understanding MLOps: The Bridge Between Model Development and Production",
      author: "S M Asiful Islam Saky",
      platform: "Towards Data Science",
      year: 2023,
      link: "https://towardsdatascience.com/your-blog-link",
      description:
        "A deep dive into MLOps, covering CI/CD, model monitoring, and automation in ML pipelines.",
    },
    // More blogs...
  ],
};

// Education and Experience
const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Science & AI Freelancer",
        subtitle: "Fiverr",
        date: "September 2024 - present",
        content: [
          "Turning Complex AI Challenges into Real-World Solutions!",
          "Developing models for data-driven decision-making.",
          "Building predictive analytics, automation, and recommendation systems.",
          "Implementing chatbots, sentiment analysis, and virtual assistants.",
          "Object detection, facial recognition, and image classification.",
          "Enhancing financial security with risk assessment models.",
          "Optimizing workflows with intelligent automation solutions.",
          "Integrating scalable AI models into business operations.",
        ],
      },
      {
        title: "Founder, Data Science & AI Researcher",
        subtitle: "SEMICOLON",
        date: "April 2020 - June 2020",
        content: [
          "Founded SEMICOLON with the Mission to solve real-world problems using AI and creating valuable educational contents.",
          "Writing blogs and study materials on AI, ML, and Data Science and some other CS topics.",
          "Created comprehensive tutorials and technical documentation on various topics",
          "Developed interactive learning materials for AI enthusiasts and beginners",
          "Collaborated with AI experts to create cutting-edge research content",
          "Some of the most popular playlists are- Linux Guide 2.0, Operating Systems, Programming Fundamentals, and many more.",
        ],
      },
      {
        title: "IoT Instructor & Tech Mentor",
        subtitle: "STEAM AIU CLUB",
        date: "June 2023 - Present",
        content: [
          "Teaching students about Internet of Things (IoT) applications and implementations, covering real-world use cases.",
          "Conducting hands-on workshops on IoT-based automation, Arduino, and Raspberry Pi projects, enabling practical learning.",
          "Mentoring students in STEM and technology-driven projects, fostering innovation and problem-solving skills.",
          "Developing structured learning materials and guides on IoT protocols, sensors, and microcontroller programming.",
          "Collaborating with industry professionals and university faculty to enhance IoT education and research.",
        ],
      },
      {
        title: "Nestlé Youth Influencer",
        subtitle: "Nestlé",
        date: "March 2024 - February 2025",
        content: [
          "Promoted Nestlé products on campus, increasing brand awareness and student engagement.",
          "Organized and led career talks & LinkedIn workshops, helping students enhance their professional development.",
          "Engaged with students through interactive events, promotions, and brand storytelling, fostering a positive brand image.",
          "Demonstrated leadership and networking skills, positioning Nestlé as a preferred brand within the campus community.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title:
            "Bachelor of Computer Science(Data Science), Bachelor of Technology",
          subtitle:
            "Albukhary International University, Alor Setar, Kedah, Malaysia",
          date: "March 2023 – Present",
          content: [
            "Relevant Coursework: Data Science, Machine Learning, Artificial Intelligence, Data Mining, Big Data Analytics, Data Visualization, and Web Development.",
            "Awards: Dean’s List Award for Academic Excellence",
            "Activities & Societies: AIU Computing Club, 3 Zero Club, and Hult Prize",
          ],
        },
        {
          title: "Pre-University English Programme, Language Centre",
          subtitle:
            "Albukhary International University, Alor Setar, Kedah, Malaysia",
          date: "Nov 2022 – Feb 2023",
          content: [
            "IELTS Score: 6.5 (B2)",
            "Activities & Societies: Collaborative Learning Project (CLP), Word Games",
            "Relevant Coursework: English Language, Academic Writing, and Communication Skills",
          ],
        },
        {
          title: "Complete Web Development, Web Design & Development",
          subtitle: "Programming Hero, Dhaka, Bangladesh",
          date: "July 2022 – Dec 2022",
          content: [
            "Learned to build responsive websites and web applications using modern web technologies",
            "Learned about Git and GitHub and Deployments",
            "Relevant Coursework: HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, React.js, Node.js",
            "Activities: Developed a Portfolio Website & e-Commerce Website",
          ],
        },
      ],
    },
    {
      title: ["Awards & Scolarships"],
      data: [
        {
          title: "Awards",
          content: ["African Credit Scoring Challenge", "Dean's List Award"],
        },
        {
          title: "Scholarship",
          content: [
            "Fully Funded Scholarship to Pursue Bachelor-Albukhary Foundation",
          ],
        },
      ],
    },
    {
      title: ["Volunterism Works"],
      data: [
        {
          title: "Mentoring Individuals from South Asean Countries",
          subtitle: "A's Bridge & 3 Zero Club",
          content: [
            "Conducted workshops on Effective Interview Preparation, mentoring participants from Afghanistan, Pakistan, and India on essential strategies for interview success.",
            "Provided structured guidance on resume building, communication skills, and interview techniques, ensuring an engaging and insightful learning experience for attendees.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Learn WordPress",
      subtitle: "One Month",
      logo_path: "onemonth.png",
      certificate_link:
        "https://onemonth.com/certificates/zFgu3r7VFQQMZQMXyefY",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "SQL (Advanced)",
      subtitle: "HackerRank",
      logo_path: "sql.png",
      certificate_link: "https://www.hackerrank.com/certificates/bb3aaf5e8feb",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/certificates/6479e77347cc",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "AI-Driven Market Analysis & Prediction",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c6aa2c94-1216-446a-9192-88ce303ae1be/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/23W8GZFCKC49",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/H3RA8L935H7U",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QFESMXWJRSP6",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/MSNI0NWV0MW9",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Artificial Intelligence with Python by CS50",
      subtitle: "Cursa | CS50 | Harvard University",
      logo_path: "cursa.png",
      certificate_link:
        "https://cursa.app/en/my-certificate/e2e4166acbb57e91ed9e9c2bea720888/ok",
      alt_name: "CS50",
      color_code: "#000000",
    },
    {
      title: "PyTorch and Deep Learning for Decision Makers",
      subtitle: "The Linux Foundation",
      logo_path: "linuxf.png",
      certificate_link:
        "https://www.credly.com/badges/741cdc54-b1f3-4c78-8335-d078ed598bfe",
      alt_name: "LF",
      color_code: "#000000",
    },
    {
      title: "Introduction to Linux",
      subtitle: "The Linux Foundation",
      logo_path: "lf.png",
      certificate_link:
        "https://www.credly.com/badges/a9eaa844-b3ee-4c53-931f-abadf0109b5e",
      alt_name: "LF",
      color_code: "#000000",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/0fb6e215-13c0-4d71-9b30-6348c3036d75",
      alt_name: "Cisco",
      color_code: "#000000",
    },

    {
      title: "Deep Learning with TensorFlow",
      subtitle: "Cognitive Class | IBM",
      logo_path: "ccibm.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/e1f83288619242479a66565bc92f2350",
      alt_name: "Cognitive Class",
      color_code: "#000000",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      subtitle: "Amazon Web Services Training and Certification",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/58ba64cb-04d0-4121-acbd-a9d528bd4de9/print",
      alt_name: "AWS Academy Machine Learning Foundations",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I’m always open to new opportunities, collaborations, and discussions about AI, Machine Learning, Data Science, and IoT. Whether you’re interested in working together on a project, inviting me for a talk, or just networking, feel free to reach out!",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Jln Tun Razak, Bandar Alor Setar, 05200 Alor Setar, Kedah, Malaysia",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+60147627004",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/saky-semicolon",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saky-semicolon/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/smasifulislamsaky/",
    fontAwesomeIcon: "fa-kaggle", // Reference https://fontawesome.com/icons/kaggle?style=brands
    backgroundColor: "#20BEFF", // Reference https://simpleicons.org/?q=kaggle
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=1mo3UhMAAAAJ&hl=en",
    fontAwesomeIcon: "fa-graduation-cap", // Closest alternative to Google Scholar
    backgroundColor: "#4285F4", // Google Scholar's brand color
  },

  {
    name: "X",
    link: "https://twitter.com/saky_semicolon",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#00acee", // Reference https://simpleicons.org/?q=twitter
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  aboutMe,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  projectcards2,
  projectcards3,
  projectcards4,
  publicationData,
  certifications,
  resumeleft,
  resumeright,
};
