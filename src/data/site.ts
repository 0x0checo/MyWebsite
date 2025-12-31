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
      link: "https://www.revdetect.com/" // 没有公开repo也可以放 Notion/Blog/空
    },
    {
      title: "Croatian News Information Retrieval",
      description:
        "This repository evaluates ranking algorithms for a Croatian-language IR system using a news-article setup.",      tags: ["BM25", "SBERT", "Evaluation"],
      link: "https://github.com/0x0checo/information-retrieval-search-engine",
    },
    {
      title: "XAI for Text Classification",
      description:
        "Integrated Gradients vs LIME/SHAP with deletion tests on fine-tuned BERT (SST-2).",
      tags: ["XAI", "BERT", "Captum"],
      link: "https://github.com/0x0checo/nlp-xai",
    },
    {
      title: "Low-Resource MT: Luganda ↔ English",
      description:
        "Training + back-translation experiments with mBART/NLLB; BLEU + qualitative error analysis.",
      tags: ["MT", "Low-resource", "NLLB"],
      link: "https://github.com/0x0checo/Luganda-to-English-machine-translation",
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
    title: "I prioritize clear, async communication",
    body: "I’m comfortable collaborating across time zones and keeping work visible via docs, tickets, and weekly updates.",
  },
  {
    title: "I’m flexible with time-zone collaboration",
    body: "Based in Sweden, available for EU/UK-friendly hours and async coordination when needed.",
  },
  {
    title: "Tech stack I use most",
    body: "Python, PyTorch, Hugging Face, scikit-learn, and modern web tooling for demos and dashboards.",
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

