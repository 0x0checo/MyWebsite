export const site = {
  name: "Wenyu",
  tagline: "NLP / AI Engineer · Uppsala University",
  location: "Uppsala, Sweden",
  links: {
    github: "https://github.com/0x0checo",
    linkedin: "https://www.linkedin.com/in/wenyuli020303/",
    email: "mailto:jasonlee020303@gmail.com",
    cv: "/cv.pdf",
  },
  highlights: [
    "AI Detection",
    "Croatian News Information Retrieval",
    "Explainability (IG/LIME/ATTENTION) on Transformers",
    "Multilingual MT (mBART / NLLB)",
  ],
  projects: [
    {
      title: "AI-Generated Text Detection (Internship Project)",
      description:
        "Built an AI-generated text detection pipeline for short-form content, covering data prep, modeling, evaluation, and deployment-ready inference.",
      tags: ["Detection", "NLP", "ML"],
      link: "https://www.revdetect.com/",
      thumbnail: "/projects/aidetect.png",
      thumbnailAlt: "AI-generated content detection web interface",
    },
    {
      title: "Croatian News Information Retrieval",
      description:
        "This repository evaluates ranking algorithms for a Croatian-language IR system using a news-article setup.",      tags: ["BM25", "SBERT", "Evaluation"],
      link: "https://github.com/0x0checo/information-retrieval-search-engine",
      thumbnail: "/projects/IR.png",
      thumbnailAlt: "Information retrieval evaluation metrics (Accuracy@5, MAP, etc.)",
    },
    {
      title: "XAI for Text Classification",
      description:
        "Integrated Gradients vs LIME/SHAP with deletion tests on fine-tuned BERT (SST-2).",
      tags: ["XAI", "BERT", "Captum"],
      link: "https://github.com/0x0checo/nlp-xai",
      thumbnail: "/projects/xai.png",
      thumbnailAlt: "Deletion test plot comparing IG / Attention / LIME",
    },
    {
      title: "Low-Resource MT: Luganda ↔ English",
      description:
        "Training + back-translation experiments with mBART/NLLB; BLEU + qualitative error analysis.",
      tags: ["MT", "Low-resource", "NLLB"],
      link: "https://github.com/0x0checo/Luganda-to-English-machine-translation",
      thumbnail: "/projects/mt.png",
      thumbnailAlt: "BLEU scores comparison before and after fine-tuning",
    },
  ],
  about: `
  I am a Master’s student in Language Technology at Uppsala University, specializing in Machine Learning and Natural Language Processing (NLP).
My academic background combines linguistics and computer science, with hands-on experience in text classification, sentiment analysis, information extraction, and transformer-based models (BERT, GPT, etc.).
I am skilled in Python, PyTorch, Hugging Face, and scikit-learn, and have experience working with large-scale datasets and applied AI projects.
Proficient in English, Chinese, and Urdu, I thrive in collaborative, international team environments.
`.trim(),

 FeatureCard: [
  {
    title: "Cross-cultural & multilingual collaboration",
    body: "I enjoy working in international teams and communicating clearly across cultures and time zones. Fluent in English and Chinese, with an academic background in Urdu, I’m comfortable discussing technical details and aligning expectations with diverse colleagues.",
  },
  {
    title: "Reliable, structured, and easy to work with",
    body: "I value ownership and transparency: I write things down, share progress early, and keep tasks well-scoped. I’m proactive about asking clarifying questions, giving realistic updates, and delivering on time—without overcomplicating things.",
  },
  {
    title: "Tech stack I use most",
    body: "My work centers on NLP and machine learning—especially transformer-based models, evaluation, and error analysis. I’m comfortable iterating quickly: building baselines, running controlled experiments, and turning results into clear takeaways for the next step.",
  },
],

techStack: [
  "Python",
  "PyTorch",
  "Hugging Face",
  "scikit-learn",
  "Transformers",
  "RAG",
  "Vector DB",
  "FastAPI",
  "Docker",
  "Git",
  "Linux",
  "SQL",
]
}

