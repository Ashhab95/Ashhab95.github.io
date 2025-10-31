export const education: Education[] = [
  {
    school: "McGill University",
    time: "Fall 2022 – Winter 2026",
    degree: "Computer Science and Statistics Student",
    conc: "Concentration in Artificial Intelligence",
    location: "Montreal, QC",
    courses: [
      "COMP 302 Programming Paradigms",
      "COMP 303 Software Design",
      "COMP 350 Numerical Computing",
      "COMP 345 Natural Language to Data Science",
      "COMP 424 Artificial Intelligence",
      "COMP 551 Applied Machine Learning",
      "MATH 222 Calculus 3",
      "MATH 223 Linear Algebra",
      "MATH 323 Probability",
      "MATH 324 Statistics",
      "MATH 558 Design of Experiments"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "RBC",
    time: "Jan 2026 – April 2026",
    title: "Incoming Software Developer Intern",
    location: "Montreal, Canada",
    summary: "Incoming Software Developer Intern on the Digital Technology team (Online Banking); selected to join an agile squad working on full‑stack services and cloud‑native delivery.",
    bullets: [
      "Will design and deliver full‑stack features for RBC’s Online Banking platform using Java, Spring Boot, Angular, and JavaScript within OpenShift and Azure environments.",
      "Will build and optimize RESTful APIs and MongoDB integrations to improve scalability, maintainability, and performance across services.",
      "Will implement automated unit and integration testing, participate in code reviews, and contribute to CI/CD pipelines to enhance release reliability and speed.",
      "Will collaborate within an agile squad to translate business requirements into technical designs, document components and interfaces, and drive cross‑team walkthroughs.",
      "Will support platform modernization and performance tuning initiatives, including observability and developer experience improvements."
    ]
  },
  {
    company: "City Bank",
    time: "May 2024 – August 2024",
    title: "Summer Data Science Intern",
    location: "Dhaka, Bangladesh",
    summary: "Designed and deployed predictive ML solutions for customer lifetime value and behavioral analytics.",
    bullets: [
      "Designed, trained, and deployed a predictive machine learning pipeline using Scikit-learn, PyTorch, and MLflow, achieving a 15% increase in marketing ROI by identifying high-LTV (lifetime value) customers.",
      "Engineered data preprocessing workflows using Pandas, NumPy, and spaCy, improving unstructured data parsing speed by 25%.",
      "Conducted natural language processing on customer feedback using NLTK, extracting key sentiment features and enabling actionable insights into user experience.",
      "Built interactive data visualizations with Seaborn and Matplotlib to present behavioral trend analysis, aiding strategic business decisions across cross-functional teams.",
      "Collaborated with a team of 4 to create automated model evaluation dashboards using Jupyter, resulting in a 40% reduction in manual reporting time."
    ]
  },
  {
    company: "bKash",
    time: "May 2023 – August 2023",
    title: "Summer Engineering Intern",
    location: "Dhaka, Bangladesh",
    summary: "Improved backend systems, testing infrastructure, and deployment processes for mobile banking.",
    bullets: [
      "Developed and deployed RESTful APIs in Java (Spring Boot) and PostgreSQL, optimizing backend communication for the bKash Mobile Banking platform, resulting in 30% faster transaction processing.",
      "Enhanced CI/CD workflows using Git, Jenkins, and Docker, reducing integration-related errors by 20% and deployment time by 35%.",
      "Designed and executed over 100 automated unit and integration tests using JUnit, improving code coverage from 60% to 92%.",
      "Spearheaded a debugging initiative that resolved 15+ critical runtime bugs, enhancing application stability and reducing crash reports by 50%.",
      "Participated in Agile sprints, collaborating with product managers and QA engineers to ensure timely delivery of features in alignment with user requirements."
    ]
  }
];

export interface Education {
  school: string;
  time: string;
  degree: string;
  conc : string;
  location?: string;
  description?: string;
  courses: string [];
}

export interface Skill {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  time: string;
  title: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}

export function isEducation(element: Education | Experience): element is Education {
  return 'school' in element && 'degree' in element;
}
