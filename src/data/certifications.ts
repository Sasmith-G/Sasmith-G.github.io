export type Certification = {
  title: string;
  issuer: string;
  // Short label shown in the pill, e.g. "AI & Machine Learning"
  category: string;
  // A few skills covered, shown as small chips
  tags: string[];
  // Link to the credential (Credly, Coursera, etc.). Leave out until you have it.
  url?: string;
  // Issuer logo in /public, e.g. "/certifications/ibm.svg". Falls back to an award icon.
  logo?: string;
};

export const certifications: Certification[] = [
  {
    title: "GEN AI Using IBM Watsonx",
    issuer: "IBM",
    category: "AI & Machine Learning",
    tags: ["Prompt Engineering", "Transformers", "RAG"],
    logo: "/certifications/ibm.png",
    url: "/certificates/ibm-generative-ai.pdf",
  },
  {
    title: "Data Science Hackathon",
    issuer: "IIT Hyderabad",
    category: "Professional",
    tags: ["Data Analytics", "Python"],
    logo: "/certifications/iith.png",
    url: "/certificates/iith-data-science-hackathon-winner.jpg",
  },
  {
    title: "AWS Solutions Architect",
    issuer: "GeeksforGeeks",
    category: "Professional",
    tags: ["Cloud Computing", "System Design"],
    logo: "/certifications/gfg.png",
    url: "/certificates/gfg-aws-solutions-architect.pdf",
  },
  {
    title: "Full Stack Development",
    issuer: "GeeksforGeeks",
    category: "Programming",
    tags: ["FrontEnd", "BackEnd"],
    logo: "/certifications/gfg.png",
    url: "/certificates/gfg-full-stack.pdf",
  },
  {
    title: "Web Development with AI",
    issuer: "IIT Madras",
    category: "Programming",
    tags: ["JavaScript", "Tailwind CSS", "React", "Database"],
    logo: "/certifications/iitm.png",
    url: "/certificates/iitm-web-development-ai.pdf",
  },
  {
    title: "Python Full Course",
    issuer: "GeeksforGeeks",
    category: "AI & Machine Learning",
    tags: ["OOPS", "Fundamentals"],
    logo: "/certifications/gfg.png",
    url: "/certificates/gfg-python.pdf",
  },
  {
    title: "React Full Course",
    issuer: "GeeksforGeeks",
    category: "Programming",
    tags: ["Component", "Events", "Hooks"],
    logo: "/certifications/gfg.png",
    url: "/certificates/gfg-react.pdf",
  },
];
