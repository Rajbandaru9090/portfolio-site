export const blogs = {
  "resume-screener": {
    id: "resume-screener",
    title: "AI Resume Screener – GPT Skill Match & Dashboard",
    subtitle: "A freelance project built for D13 AI (Startup) to automate resume screening with GPT, dashboards, and visual analytics.",
    icon: "Brain",
    badge: "GPT-4",
    category: "AI/ML",
    publishedDate: "December 2024",
    readTime: "12 min read",
    heroImage: "/gpt-business-query.png",
    heroSubtitle: "Revolutionizing Talent Acquisition: AI-Powered Resume Screening with GPT-4. In today's hyper-competitive talent landscape, recruiters are inundated with an unprecedented volume of resumes for every open position. The traditional manual screening process is not only time-intensive and prone to human bias, but also notoriously inefficient in identifying high-potential candidates obscured by keyword clutter.",
    sections: [
      {
        id: "problem-statement",
        title: "The Imperative for Intelligent Screening",
        icon: "Target",
        content: "The current resume screening paradigm is fundamentally flawed. Recruiters grapple with hundreds of applications per role, presented in myriad formats, employing diverse terminologies for identical skills, and often burying critical experience within irrelevant details. Conventional Applicant Tracking Systems (ATS), largely reliant on rigid keyword-matching algorithms, consistently fail to grasp context, leading to a high rate of false positives and, critically, the oversight of genuinely talented individuals.",
        listItems: [
          "Overlooked Top Talent: Exceptional candidates are inadvertently discarded due to shallow keyword filters.",
          "Wasted Resources: Significant time and effort are expended on reviewing unqualified profiles.",
          "Suboptimal Hiring Decisions: A lack of deep insight perpetuates poor recruitment outcomes."
        ],
        finalNote: "There is an undeniable demand for a system capable of transcending keyword limitations, understanding the nuanced intent and context behind skills, providing natural language explanations for match scores, and presenting visual, data-driven hiring insights at scale. My AI-powered Resume Screener was developed precisely to address this critical gap, transforming job matching into an intelligent, data-driven, and AI-enhanced process."
      },
      {
        id: "introduction",
        title: "Introducing the AI-Powered Resume Screener",
        icon: "Brain",
        content: "I developed an AI-powered Resume Screener leveraging OpenAI GPT-4 to empower recruiters (and job seekers) with the capability to automatically assess how effectively multiple resumes align with a given job description. Unlike conventional ATS, this screener offers:",
        listItems: [
          "Semantic Skill Matching: Moving beyond mere keyword association to understand contextual relevance.",
          "Personalized Score Explanations: Providing human-readable justifications for match scores.",
          "Interactive Visualizations: Offering dynamic insights through a clean, Streamlit-powered interface."
        ],
        subsections: [
          {
            title: "Key Features",
            content: "Users can seamlessly upload resumes in bulk, paste a job description, and instantly receive:",
            listItems: [
              "GPT-based Match Scores: A comprehensive score for each resume, reflecting its alignment.",
              "Matched and Missing Skills: A clear breakdown of a candidate's relevant and absent proficiencies.",
              "Downloadable CSV Summary: For easy data export and further analysis.",
              "Interactive Visuals: Including radar charts and heatmaps for profound skill insights."
            ]
          }
        ],
        finalNote: "This is not a mere AI gimmick; it is a scalable, real-world application demonstrating the transformative potential of Large Language Models (LLMs) in mitigating information overload within hiring workflows, delivering tangible business value in minutes, not days."
      },
      {
        id: "engineering-goals",
        title: "Engineering Goals: A Precision-Driven Approach",
        icon: "Database",
        content: "The core mission of the Resume Screener was to resolve a significant real-world bottleneck using advanced AI and automation. My focus was on architecting a solution that is simultaneously recruiter-friendly and technically robust. The precise goals guiding this system's design were:",
        listItems: [
          "Automated Resume-to-JD Matching: Eliminate manual comparison by leveraging GPT-4 for semantic evaluation of resume alignment with job descriptions, focusing on contextual understanding over keyword parity.",
          "Batch Resume Screening Capability: Facilitate the upload and analysis of 10+ resumes in PDF, DOCX, or TXT formats concurrently, ensuring scalability for genuine recruitment use cases.",
          "Transparent Match Scoring and Explanation: For each resume, generate a numerical match score (0–100), delineate matched and missing skills, and provide a human-readable, GPT-4 generated explanation for the assigned score, enhancing transparency.",
          "Interactive Visual Analytics: Develop a clean, Streamlit-powered UI featuring radar charts, heatmaps, filterable tables, and full export functionality for team collaboration.",
          "Deployable, Portable, and Production-Ready: Package the application for cloud hosting on Streamlit Cloud, ensuring simple file upload/download, a modern UX, and clear branding.",
          "Demonstration of Advanced AI Prompt Engineering: The application serves as a prime example of sophisticated prompt design and LLM integration beyond conventional chatbots."
        ]
      },
      {
        id: "tech-stack",
        title: "The Engineering Core: Unpacking the AI Resume Screener's Tech Stack and Intelligence",
        icon: "Server",
        content: "The AI Resume Screener is built on an end-to-end architecture meticulously designed for enterprise-grade performance. From intelligent resume parsing to GPT-powered scoring and interactive visualizations, every layer was chosen for scalability, accuracy, and an intuitive user experience.",
        technologies: [
          "Python",
          "OpenAI GPT-4 API",
          "PyMuPDF",
          "python-docx",
          "Regex & NLP",
          "Streamlit",
          "Plotly",
          "Pandas",
          "CSV Export",
          "Streamlit Cloud",
          "GitHub"
        ],
        subsections: [
          {
            title: "Backend & AI Layer",
            content: "The screener's modular design ensures extensibility, allowing for future integrations with ATS APIs or multilingual resume support.",
            listItems: [
              "Python: The foundational scripting language for all data processing and orchestration.",
              "OpenAI GPT-4 API: The core intelligence engine, driving natural language understanding, semantic scoring, and generating lucid explanations for match scores.",
              "PyMuPDF / python-docx: Libraries specifically chosen for their robust capabilities in extracting clean, structured text from diverse resume formats (PDF and DOCX), handling complex layouts effectively.",
              "Regex & NLP Preprocessing: Essential components for cleaning raw input data and precisely identifying key skill blocks within resumes, ensuring high-quality input for the AI."
            ]
          },
          {
            title: "Frontend & Visualization",
            content: "The final user interface is engineered not merely to display results but to transform them into actionable insights.",
            listItems: [
              "Streamlit: A lightweight yet powerful web framework, ideal for rapidly developing interactive user interfaces and Minimum Viable Products (MVPs) for internal tools.",
              "Plotly: Leveraged for creating dynamic and insightful visualizations, including radar charts for skill alignment and heatmaps for score comparisons, enhancing data interpretability.",
              "Pandas: The ubiquitous data manipulation library, used for handling resume batches, structuring dataframes, and facilitating seamless data exports."
            ]
          },
          {
            title: "Export & Deployment",
            content: "Ensuring accessibility and modern development best practices.",
            listItems: [
              "CSV Download: A crucial feature enabling users to export all resume scores and skill matches into a standard spreadsheet format for further analysis or internal sharing.",
              "Streamlit Cloud: Provides a free, streamlined platform for cloud deployment and easy sharing of the application, ensuring accessibility.",
              "GitHub: Utilized for comprehensive version control and maintaining open-source visibility, reflecting modern development best practices."
            ]
          }
        ]
      },
      {
        id: "gpt-prompt",
        title: "GPT Prompt Logic: The Engine of Semantic Understanding",
        icon: "Brain",
        content: "The core intelligence of the application stems from its sophisticated prompt engineering strategy, which meticulously communicates expectations to the GPT model. This strategy is critical for eliciting precise and structured outputs.",
        listItems: [
          "The system communicates with GPT-4 using a dynamic prompt template: \"You are a hiring manager. For each resume provided, analyze how well it matches the following job description. Score from 0 to 100. Also list the matched skills, missing skills, and a short explanation for your score.\"",
          "This template provides the LLM with clear role context and a precise structured output expectation. The prompt is dynamically populated with the parsed job description, cleaned resume text, and a meticulously defined scoring rubric.",
          "GPT's output is then rigorously parsed using regex or JSON-style wrappers to extract critical information: Match Score (numeric), Explanation (human-readable text), and Matched/Missing Skills (structured lists).",
          "These extracted values directly populate the UI visualizations and result tables. This process not only demonstrates GPT's capacity for semantic understanding but also highlights how expert prompt engineering can guide LLMs to produce highly structured, business-useful outputs."
        ]
      },
      {
        id: "dashboard-features",
        title: "Interactive Dashboard Features: Actionable Insights at Your Fingertips",
        icon: "BarChart3",
        content: "The final user interface is engineered not merely to display results but to transform them into actionable insights, ensuring recruiters and job seekers gain clarity rather than confusion.",
        listItems: [
          "Radar Chart: Skill Alignment: Visually represents each resume's matched skills against the job description's requirements. This provides an instant visual summary of a candidate's strengths and weaknesses across various skill categories.",
          "Heatmap or Bar Chart: Score Comparison: Enables a direct side-by-side comparison of multiple resumes with a color-coded heatmap of scores. This allows for quick insight into overall top-ranking resumes or those excelling in specific skill areas.",
          "Match Table: Filterable Insights: Presents a detailed breakdown for each resume in a tabular format, including match score, matched keywords, missing skills, and GPT explanation. This table is fully filterable and sortable.",
          "CSV Export: Provides the functionality to download the entire batch of results as a CSV file, facilitating seamless internal sharing and tracking of hiring decisions."
        ]
      },
      {
        id: "skill-matching",
        title: "Skill Matching Logic",
        icon: "Target",
        content: "The skill matching algorithm goes beyond simple keyword matching to understand context and relevance. This section demonstrates how the system analyzes and compares skills across different resume formats and job descriptions.",
        imagePlaceholder: "/images/resume2.png"
      },
      {
        id: "dashboard-design",
        title: "Dashboard Design",
        icon: "BarChart3",
        content: "The Streamlit-powered dashboard provides an intuitive interface for resume analysis. This section showcases the user experience and interface design that makes the tool accessible to both technical and non-technical users.",
        imagePlaceholder: "/images/resume3.png"
      },
      {
        id: "results",
        title: "Transformative Results and Business Impact",
        icon: "TrendingUp",
        content: "Rigorous testing on over 20 real and synthetic resumes across 5 diverse job descriptions (including Data Analyst, ML Engineer, and Data Engineer roles) confirmed the tool's consistent delivery of clear, fair, and justifiable rankings.",
        metrics: [
          { label: "Alignment with Expert Ranking", value: "92%" },
          { label: "Screening Time Reduction", value: "10x Faster" },
          { label: "Resumes Tested", value: "20+" },
          { label: "Job Descriptions Analyzed", value: "5 Roles" }
        ],
        listItems: [
          "92% alignment between GPT scores and expert manual ranking, validating the AI's accuracy.",
          "A 10x acceleration in screening time compared to traditional manual evaluations, significantly boosting efficiency.",
          "High transparency through GPT-generated explanations, substantially reducing recruiter uncertainty and fostering trust.",
          "Improved decision-making driven by intuitive visual cues and exportable data, leading to more informed hiring choices."
        ],
        finalNote: "Whether the goal is to efficiently screen candidates or meticulously tailor a resume for a specific role, this tool offers the clarity and speed that traditional ATS systems conspicuously lack."
      },
      {
        id: "conclusion",
        title: "Conclusion: A Paradigm Shift in Talent Acquisition",
        icon: "Target",
        content: "This AI Resume Screener stands as a testament to how large language models, when synergistically combined with intelligent prompt design and an intuitive user interface, can effectively resolve critical bottlenecks in the hiring process. It transcends the typical \"toy\" project, emerging as a production-ready system poised to revolutionize how companies filter talent and how candidates strategically position themselves.",
        listItems: [
          "GPT-4 for semantic matching",
          "Batch resume processing capabilities",
          "Visual, filterable dashboards",
          "Open deployment via Streamlit"
        ],
        finalNote: "The project delivers FAANG-level innovation to one of the most persistent challenges in recruiting. More importantly, it powerfully highlights the ability to architect, build, and articulate sophisticated AI-powered data tools—a truly critical skill set for modern data professionals."
      }
    ],
    demoUrl: "https://ai-resume-screener-gkoqrvoaywyqr39qmxqrtt.streamlit.app/"
  },
  "retailx-dashboard": {
    id: "retailx-dashboard",
    title: "RetailX – Databricks-Powered Fraud & Sales Intelligence",
    subtitle: "A scalable data engineering project leveraging 3M+ grocery transactions for fraud detection and advanced sales analytics",
    icon: "Shield",
    badge: "Fraud Detection",
    category: "Data Engineering",
    publishedDate: "December 2024",
    readTime: "15 min read",
    heroImage: "/retailx-dashboard-hero.png",
    heroSubtitle: "The modern retail landscape is a labyrinth of millions of daily transactions, a fertile ground for both growth and sophisticated fraud. Unearthing critical business patterns and thwarting illicit activities within this colossal data volume demands real-time analysis, robust infrastructure, and intelligent decision support—capabilities traditional business intelligence dashboards often lack.",
    sections: [
      {
        id: "problem-statement",
        title: "Addressing the Retail Data Deluge",
        icon: "Target",
        content: "The core challenge in retail analytics lies not just in the sheer volume of data, but in extracting actionable insights from it. Domain experts and business leaders frequently encounter nuanced questions, such as \"Which departments show an unusual spike in high-value transactions?\", that static dashboards simply cannot address. RetailX was engineered to democratize data access, transforming raw transactional records into intelligent, AI-powered insights. With a dataset comprising over 3 million Instacart orders, the project necessitated a robust big data infrastructure coupled with advanced machine learning pipelines to ensure scalability, intelligence, and user-friendliness for decision-makers across fraud, operations, and revenue teams."
      },
      {
        id: "objectives",
        title: "A Multi-faceted Approach to Fraud Analytics",
        icon: "Database",
        content: "The primary objective of RetailX was to construct a scalable and intelligent fraud analytics solution for large-scale retail transaction data. This ambitious goal was underpinned by several key outcomes:",
        listItems: [
          "Robust Data Engineering: A sophisticated data engineering pipeline was developed to process and meticulously clean over three million real-world online grocery orders, forming the foundation for reliable analysis.",
          "Hybrid Fraud Detection: Anomalies and fraudulent transactions were identified through a hybrid approach. This combined rule-based logic, leveraging predefined business rules, with unsupervised machine learning techniques to detect subtle, evolving patterns indicative of fraud.",
          "Intuitive Real-time Visibility: An intuitive Streamlit-based dashboard was crafted to provide real-time visibility into crucial business trends, including revenue performance, category-level dynamics, and the identification of high-risk customer segments.",
          "AI-Powered Natural Language Interface: A defining differentiator of RetailX was the seamless integration of OpenAI's GPT-4 API. This innovation created a natural language assistant within the dashboard, empowering non-technical users to pose complex business questions in plain English, thereby significantly enhancing analytical accessibility across the organization.",
          "Dynamic Data Exploration: The platform incorporated dynamic filters, enabling users to explore data comprehensively by region, department, fraud severity, and time, facilitating granular analysis.",
          "Optimized Backend Infrastructure: The backend infrastructure was meticulously optimized to ensure high performance for querying large-scale data, crucial for real-time insights.",
          "Explainable AI: Beyond accurate fraud predictions, the platform was designed to deliver explainable insights, ensuring that detected anomalies could be understood and acted upon within the context of business operations."
        ]
      },
      {
        id: "tech-stack",
        title: "Engineered for Enterprise Scale: The Tech Stack",
        icon: "Server",
        content: "To deliver an end-to-end analytics and AI-powered dashboard on a multi-million row dataset, RetailX adopted a modern, cloud-based tech stack aligned with contemporary enterprise engineering standards.",
        technologies: [
          "Python",
          "Pandas", 
          "PySpark",
          "Delta Lake",
          "Databricks",
          "Apache Spark",
          "OpenAI GPT-4",
          "Streamlit",
          "SQL",
          "Git/GitHub"
        ],
        listItems: [
          "Scalable Backend Processing: Python, Pandas, and PySpark formed the backbone of backend processing. PySpark was instrumental in performing efficient distributed computations over the 3 million-plus order records, while Delta Lake optimized data storage, caching, and partitioning for rapid read/write performance within Databricks.",
          "Intelligent AI Layer: OpenAI's GPT-4 API powered the AI layer, generating natural language responses and assisting in business analytics tasks. The assistant intelligently converted user prompts, such as \"Show the top three departments with highest fraud rates last month,\" into backend logic using meticulously designed prompt engineering patterns, seamlessly returning insights within the dashboard.",
          "Robust Data Infrastructure: The project was built on Databricks, leveraging the scalable power of Apache Spark and Delta Tables for versioned, high-performance data storage. Databricks' collaborative notebook environment facilitated exploratory data analysis and model training. SQL was extensively employed for metric calculations, customer-level aggregations, and dynamic dashboard queries.",
          "Interactive Frontend: Streamlit, a lightweight and flexible web application framework, was chosen for the frontend development. The dashboard featured dynamic filters (by region, category, fraud score, and date), fraud score visualizations, revenue trend graphs, and real-time performance indicators.",
          "Cloud Deployment and Version Control: For seamless deployment, the solution was hosted on Streamlit Cloud, offering public accessibility with one-click deployment and continuous GitHub integration. Git and GitHub were utilized for robust version control, ensuring a modular, production-grade codebase with organized directory structures, environment configurations, and comprehensive README documentation."
        ]
      },
      {
        id: "architecture",
        title: "Unpacking RetailX: A Deep Dive into its Fraud Detection Architecture and AI Integration",
        icon: "BarChart3",
        content: "The challenge of combating fraud in the modern retail industry is multifaceted, demanding a sophisticated blend of deterministic rules and adaptive intelligence. RetailX addresses this by employing a two-tier fraud detection pipeline, meticulously designed to maximize both precision and interpretability. Furthermore, its groundbreaking integration of OpenAI's GPT-4 API democratizes data access, transforming how business stakeholders interact with complex analytical insights."
      },
      {
        id: "fraud-detection",
        title: "The Hybrid Fraud Detection Pipeline: A Two-Tiered Approach",
        icon: "Shield",
        content: "The fraud detection module within RetailX operates on a two-tier pipeline, marrying the immediate signal value of rule-based heuristics with the nuanced pattern recognition capabilities of unsupervised machine learning. This hybrid approach ensures comprehensive coverage, identifying both known and novel fraud typologies.",
        subsections: [
          {
            title: "Rule-Based Heuristics",
            content: "The first tier is anchored in rule-based heuristics, derived from extensive exploratory data analysis and domain-driven thresholds. These rules act as immediate tripwires, flagging transactions that deviate sharply from established norms.",
            listItems: [
              "High-value purchases in low-volume categories: Identifying transactions where an unusually expensive item is purchased in a product category that typically sees lower average transaction values.",
              "Unusually high order quantities: Detecting instances where an order contains an excessive number of units (e.g., more than 20 units of a single item), often indicative of stock manipulation or reselling schemes.",
              "Repeated customer transactions within suspicious timeframes: Pinpointing rapid, successive orders from the same customer, which could suggest account takeover or fraudulent testing of payment methods."
            ]
          },
          {
            title: "Machine Learning Models",
            content: "While these rules provide immediate and interpretable signals, their static nature limits their ability to evolve with increasingly sophisticated fraud tactics. This limitation necessitated the second tier, which employs unsupervised machine learning models to uncover hidden behavioral patterns.",
            listItems: [
              "Isolation Forest: This algorithm excels at isolating anomalies by building random decision trees. It partitions data and measures how easily an observation can be isolated. Transactions that are easily isolated (i.e., require fewer splits to be separated from the rest of the data) are more likely to be outliers and thus flagged with a high anomaly score. This is particularly effective for detecting subtle, multi-dimensional deviations from normal purchasing behavior.",
              "KMeans Clustering: This algorithm clusters users into distinct behavioral cohorts based on their transaction characteristics. By analyzing features such as basket size, average unit price, product category concentration, and inter-order intervals, KMeans groups users with similar purchasing patterns. Transactions or user behaviors that significantly deviate from their assigned cluster's norm are then flagged as potentially fraudulent."
            ]
          }
        ]
      },
      {
        id: "gpt-integration",
        title: "GPT Assistant Integration: Natural Language Analytics at Scale",
        icon: "Brain",
        content: "A cornerstone of the RetailX platform is the seamless integration of OpenAI's GPT-4 API, directly embedded into the Streamlit dashboard. This natural language assistant fundamentally reshapes how business stakeholders interact with data, eliminating the need for SQL queries or reliance on data analysts.",
        listItems: [
          "Through advanced prompt engineering and sophisticated response parsing, the assistant acts as a real-time translator, converting plain English business questions into executable backend logic. For instance, a query such as \"Which categories had the highest average order value in the West last quarter?\" is parsed by the system, which then dynamically generates a metric table, intelligently filtered by region, category, and time.",
          "The assistant's intelligence extends to recognizing key analytical phrases like \"top revenue,\" \"fraud hotspots,\" \"return patterns,\" and \"customer churn.\" It maps these phrases to corresponding query templates and appropriate visualization types, ensuring that the user's intent is accurately translated into meaningful data representations.",
          "Beyond simple query translation, the GPT integration also includes risk scoring logic. Powered by GPT, this feature analyzes fraud attributes and user clusters to provide AI-driven explainability, detailing why certain transactions were flagged. This transparency is crucial for building trust in the model's output and empowering business users to act decisively on the insights provided.",
          "Crucially, the GPT integration is far more than a superficial front-end feature. It is deeply interconnected with the underlying analytics engine, leveraging pre-computed datasets and optimized Spark queries for unparalleled performance. By enabling natural language analytics, the assistant effectively dismantles the technical barrier for non-coders, empowering cross-functional teams to engage directly and meaningfully with the data."
        ]
      },
      {
        id: "results",
        title: "Tangible Results and Business Transformation",
        icon: "TrendingUp",
        content: "The RetailX platform has demonstrated compelling results across performance, accuracy, and user experience, solidifying its position as a production-grade data product.",
        metrics: [
          { label: "Fraud Detection Precision", value: "92%" },
          { label: "High-Risk Transactions Flagged", value: "2,300+" },
          { label: "Performance Improvement", value: "5x Faster" },
          { label: "Data Volume Handled", value: "3M+ Orders" }
        ],
        listItems: [
          "Exceptional Fraud Detection Performance: The fraud detection pipeline achieved a remarkable 92% precision rate on synthetic labeled data, successfully flagging over 2,300 high-risk transactions from a dataset of 3 million orders. The hybrid approach proved its efficacy, with rule-based logic capturing visible outliers and ML models uncovering more subtle, insidious fraud patterns across departments and regions.",
          "Optimized Query Performance: The strategic utilization of Delta Lake optimizations—including data partitioning, Z-ordering, and caching—yielded a 5x reduction in dashboard load times. This significant improvement renders real-time analysis feasible even for multi-million row datasets. Furthermore, Spark's inherent scalability ensures the system's adaptability, capable of handling a 10x increase in data volume without requiring major refactoring.",
          "Enhanced User Experience and Usability: The Streamlit dashboard garnered positive feedback for its intuitive UI and business-aligned layout. Its multi-dimensional filtering capabilities (by date range, department, fraud score, and region) empower users to explore critical KPIs such as revenue leakage, return rates, churn-prone segments, and fraud density heatmaps with minimal onboarding or training.",
          "Democratized Data Access: The GPT-powered assistant has profoundly amplified the platform's impact by making insights accessible to non-technical teams. This democratization of data has fostered more agile and informed decision-making across the organization. Departments like operations, finance, and category management can now proactively explore fraud risks or analyze revenue shifts without the traditional delays associated with SQL reports or BI refreshes."
        ]
      },
      {
        id: "conclusion",
        title: "Conclusion and Future Directions",
        icon: "Target",
        content: "RetailX stands as a testament to how intelligent data products can fundamentally transform business understanding and operational agility. By seamlessly integrating scalable infrastructure (Databricks, Spark), advanced analytics (ML, rule-based logic), and intuitive AI interaction (GPT), the project provides a robust blueprint for building next-generation fraud analytics platforms. It transcends the limitations of static dashboards, enabling real-time decisions, dynamic data exploration, and explainable AI, all within a user-friendly interface.",
        listItems: [
          "Supervised Learning Integration: Elevating the fraud detection logic through the incorporation of supervised learning models, trained on real-world, labeled fraud datasets, promises to further refine accuracy and predictive power.",
          "Expanded User Behavior Analytics: Deepening insights into user behavior by integrating additional data streams such as session tracking, device metadata, and location signals.",
          "Advanced GPT Assistant Capabilities: Fine-tuning the GPT assistant or integrating it with vector databases for more precise semantic search capabilities and embedding-based recommendations could unlock even more sophisticated natural language interactions."
        ],
        finalNote: "RetailX is more than just a portfolio project; it is a demonstrable, production-grade data product that tackles a tangible business problem using the tools and workflows synonymous with excellence in data engineering and analytics. For any data professional aspiring to build intelligent systems at scale, this project serves as both a technical benchmark and a compelling narrative asset."
      }
    ],
    demoUrl: "https://databricksfraudai-eabvl6ka4zbnpwegezffec.streamlit.app/"
  }
};

export const getBlog = (id) => {
  return blogs[id] || null;
};

export const getAllBlogs = () => {
  return Object.values(blogs);
}; 