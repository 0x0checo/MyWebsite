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
    "Croatian News Information Retrieval",
    "Explainability (IG/LIME/ATTENTION) on Transformers",
    "Multilingual MT (mBART / NLLB)",
  ],
  projects: [
    {
      title: "Croatian News Information Retrieval",
      description:
        "This repository evaluates ranking algorithms for a Croatian-language IR system using a news-article setup",
      tags: ["BM25", "SBERT", "Evaluation"],
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
  about:
    "I’m a Master's student in Language Technology (Uppsala University). I build NLP systems with a focus on retrieval, evaluation, and interpretability.",
};

