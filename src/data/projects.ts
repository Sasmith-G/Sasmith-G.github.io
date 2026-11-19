export type Project = {
  id: string;
  category: string;
  title: string;
  what: string;
  why: string;
  how: string;
  year: string;
  client: string;
  domain: string;
  techstack: { icon: string; name: string }[];
  // Main image path; defaults to /projects/<id>/main.webp
  cover?: string;
  // CSS object-position for the cover on the home grid, e.g. "left" (defaults to centre)
  coverPosition?: string;
  // Second large image on the detail page; defaults to the main image
  secondImage?: string;
  // Optional detail-page gallery of thumbnails (an odd last image spans the row)
  gallery?: string[];
};

// Optional `cover` overrides the default main.webp
export const mainImage = (project: Project) => project.cover ?? `/projects/${project.id}/main.webp`;

// Icons rendered inverted (dark logos on the dark theme)
export const invertedTech = ["Next.js", "Pinecone", "Ollama", "Express.js", "Gin", "Groq API", "Prisma"];

export const projects: Project[] = [
  {
    id: "3",
    category: "AI Medical RAG System",
    title: "MedGPT",
    cover: "/projects/3/landing.png",
    secondImage: "/projects/3/demo.png",
    what: "MedGPT is a knowledge graph-augmented medical RAG system designed for factual medical question answering with reduced hallucinations. The platform constructs a knowledge graph from medical textbooks, stores embeddings in Pinecone, and uses Neo4j for graph-based retrieval, enabling multi-hop reasoning over medical knowledge.",
    why: "Built to address the challenge of hallucinations in medical AI systems by grounding responses in verified medical literature. The project combines semantic search with knowledge graph traversal to provide accurate, contextual medical information with proper citations.",
    how: "Developed using Next.js, FastAPI, Neo4j, Pinecone, and AWS (Amplify, EC2).\nImplemented knowledge graph construction pipeline with NER and entity extraction.\nIntegrated Gemini and Mistral APIs for multi-hop reasoning and response generation.\nUtilized NextAuth and DynamoDB for secure authentication and data management.",
    year: "2025",
    client: "AI Research Project",
    domain: "Healthcare AI",
    techstack: [
      { icon: "/tech/nextjs.svg", name: "Next.js" },
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/fastapi.svg", name: "FastAPI" },
      { icon: "/tech/pinecone.svg", name: "Pinecone" },
      { icon: "/tech/neo4j.svg", name: "Neo4j" },
    ],
    gallery: [
      "/projects/3/pipeline.png",
      "/projects/3/architecture.png",
    ],
  },
  {
    id: "1",
    category: "Intelligent Flight Disruption Agent",
    title: "FlightGuard AI",
    cover: "/projects/1/flightguard-cover.png",
    what: "FlightGuard AI is an agentic system that turns a flight disruption into a proactive, grounded passenger notification with no human in the loop. It checks a flight through the Amadeus Self-Service APIs, assesses whether the delay or cancellation is actionable, searches rebooking alternatives, retrieves the applicable passenger rights (EU261 and carrier policy) with RAG, and has Claude draft a clear message that cites every entitlement by source. A companion MCP server exposes the same capabilities as tools to Claude and any MCP client. Open-source project by Thayná Barreiro (MIT), forked and studied as part of my portfolio.",
    why: "Disruptions are one of the most expensive, frustrating moments in travel: a delayed flight usually means a call-centre queue and manual rebooking. The goal is to compress that into a single proactive message while staying safe and auditable: the LLM only phrases verified facts, flight options come from live APIs, and every compensation or care claim is grounded in a retrieved policy passage. That makes it a strong study in building AI agents that are reliable enough for a real customer-facing workflow, not a generic chatbot.",
    how: "Orchestrated the workflow as a compiled LangGraph state machine over a typed AgentState: check_status, assess_disruption, search_alternatives, retrieve_policies, draft_recommendation and notify, with a conditional edge that ends the run unless the flight is cancelled or delayed 2h or more (the EU261 right-to-care threshold).\nIntegrated the Amadeus On-Demand Flight Status, Flight Delay Prediction and Flight Offers Search APIs through an OAuth2 client with token caching and graceful degradation when the beta prediction endpoint fails.\nGrounded entitlements with a BM25 retriever over a section-chunked policy corpus (EU261, carrier rebooking, baggage, duty-of-care), chosen for determinism and auditability, with a clean seam for a vector store later.\nKept the LLM on a short leash: Claude only turns verified facts and cited passages into the passenger message, and every node appends to an audit trace.\nExposed five MCP tools (flight_status, predict_delay, search_flights, passenger_rights, handle_disruption) with the MCP Python SDK's FastMCP, sharing one core with the agent.\nInjected the Amadeus client, LLM and notifier (Twilio SMS/WhatsApp or console), so mock and live runs are a config switch; validated with 30 offline Pytest tests (unit, HTTP contract via respx, end-to-end graph), a CI matrix on Python 3.11 to 3.13, and a Docker image.",
    year: "2026",
    client: "Open Source (by Thayná Barreiro, MIT)",
    domain: "Agentic AI / Travel Tech",
    techstack: [
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/langgraph.svg", name: "LangGraph" },
      { icon: "/tech/claude.svg", name: "Claude" },
      { icon: "/tech/mcp.svg", name: "MCP SDK" },
      { icon: "/tech/pydantic.svg", name: "Pydantic" },
      { icon: "/tech/twilio.svg", name: "Twilio" },
      { icon: "/tech/pytest.svg", name: "Pytest" },
      { icon: "/tech/docker.svg", name: "Docker" },
    ],
    gallery: [
      "/projects/1/architecture.png",
      "/projects/1/workflow.png",
      "/projects/1/mcp.png",
      "/projects/1/demo.png",
    ],
  },
  {
    id: "5",
    category: "Distributed Cloud Media Processing Platform",
    title: "MediaFlow",
    cover: "/projects/5/mediaflow-cover-v2.png",
    what: "MediaFlow is an event-driven microservice that takes CPU-heavy media processing off the main web application. Clients create a job through a FastAPI REST API and upload media straight to S3-compatible storage with a pre-signed URL; Celery workers pull tasks from RabbitMQ, process images with Pillow and video with FFmpeg, write the output back to object storage, and track every job's status in Redis, with optional CloudFront delivery and Prometheus monitoring. Open-source team project by shahanazpr and contributors (MIT), forked and studied as part of my portfolio.",
    why: "Resizing, compressing, watermarking and transcoding media is slow and CPU-bound. Running it inside the request cycle blocks the web app and fails under load. Moving that work to a queue of independent workers keeps the API fast, lets processing scale horizontally, and makes failures retryable instead of user-facing. It is a practical study in distributed systems: asynchronous messaging, idempotent job state, direct-to-cloud uploads and observable, containerised services.",
    how: "Built the API layer in FastAPI: POST /jobs creates a job and returns a pre-signed S3 upload URL, POST /jobs/{id}/confirm-upload verifies the object exists and queues processing, and GET /jobs/{id} returns status and the output key, with /health and /metrics endpoints.\nProcessed jobs asynchronously with Celery workers over RabbitMQ, retrying transient S3, network and broker failures with exponential backoff (up to 3 attempts), and tracking each job through pending, processing, completed or failed in Redis.\nImplemented image crop, resize, compression and watermarking with Pillow, and MP4/H.264 transcoding, thumbnail extraction and watermarking with FFmpeg, storing inputs and outputs under per-job keys in S3 / MinIO with an optional CloudFront CDN helper.\nContainerised six services with Docker Compose (API, worker, RabbitMQ, Redis, MinIO, Prometheus), with health checks, a non-root worker user, and Prometheus counters and histograms for jobs, durations and queue publishes.\nValidated with 92 Pytest tests and GitHub Actions CI, including security tests for credential handling and port exposure. The Docker image-resize pipeline is verified end to end with worker and full-stack restart recovery; the video pipeline and CloudFront helper are unit-tested, with end-to-end validation and load testing still planned.",
    year: "2026",
    client: "Open Source (team project by shahanazpr & contributors, MIT)",
    domain: "Distributed Systems / Cloud",
    techstack: [
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/fastapi.svg", name: "FastAPI" },
      { icon: "/tech/celery.svg", name: "Celery" },
      { icon: "/tech/rabbitmq.svg", name: "RabbitMQ" },
      { icon: "/tech/redis.svg", name: "Redis" },
      { icon: "/tech/aws.svg", name: "AWS S3" },
      { icon: "/tech/ffmpeg.svg", name: "FFmpeg" },
      { icon: "/tech/prometheus.svg", name: "Prometheus" },
      { icon: "/tech/docker.svg", name: "Docker" },
    ],
    gallery: [
      "/projects/5/architecture.png",
      "/projects/5/lifecycle.png",
      "/projects/5/api.png",
      "/projects/5/quality.png",
    ],
  },
  {
    id: "6",
    category: "AI-Powered RAG System",
    title: "AskTheBook",
    what: "AskTheBook is an advanced Retrieval-Augmented Generation (RAG) application that enables natural language querying of textbooks and study materials. The system extracts both text and figures from PDF books, performs subject classification, query expansion, and provides contextual answers with source attribution and relevant figures.",
    why: "Built to revolutionize how students interact with their textbooks by enabling conversational queries across multiple books. The project addresses the challenge of quickly finding relevant information from extensive study materials using AI-powered search and reasoning.",
    how: "Developed using Python, Streamlit, and advanced AI models through Groq API.\nImplemented vector search for document indexing and retrieval.\nIntegrated figure extraction capabilities for both embedded images and vector-based diagrams.\nUtilized query expansion and subject classification for improved search accuracy.",
    year: "Apr 2025",
    client: "AI Research Project",
    domain: "AI & Education",
    techstack: [
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/streamlit.svg", name: "Streamlit" },
      { icon: "/tech/chroma.svg", name: "Chroma DB" },
      { icon: "/tech/groq.svg", name: "Groq API" },
    ],
    gallery: [
      "/projects/6/similar-queries.png",
      "/projects/6/final-answer.png",
      "/projects/6/source-page.png",
      "/projects/6/source-figure.png",
    ],
  },
  {
    id: "7",
    category: "Mail Management",
    title: "Mail-io",
    what: "Mail-io is an AI-powered mail management application designed to simplify email organization. It intelligently classifies emails into user-defined categories and features an innovative one-click event marking system that parses attachments and images to extract event details for calendar integration.",
    why: "The project was developed to address email overload and scheduling conflicts. Built for the Nexathon Hackathon in Feb 2025, Mail-io streamlines communication and helps users manage their time more effectively by automating email organization.",
    how: "Built using Next.js, TailwindCSS, Ollama, and MongoDB.\nImplemented advanced email classification algorithms and event parsing features.\nLeveraged real-time data synchronization to ensure accurate email management.",
    year: "Feb 2025",
    client: "Nexathon Hackathon",
    domain: "Mail & AI",
    techstack: [
      { icon: "/tech/nextjs.svg", name: "Next.js" },
      { icon: "/tech/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/tech/ollama.svg", name: "Ollama" },
      { icon: "/tech/mongodb.svg", name: "MongoDB" },
    ],
    gallery: [
      "/projects/7/dashboard.png",
      "/projects/7/inbox.png",
      "/projects/7/events.png",
      "/projects/7/pricing.png",
    ],
  },
  {
    id: "8",
    category: "GenAI Text Classification",
    title: "College Feedback Classifier",
    cover: "/projects/8/user-feedback.png",
    coverPosition: "top",
    secondImage: "/projects/8/test-results.png",
    what: "The College Feedback Classifier is an interactive web application that uses IBM Watson's FLAN-T5-XXL foundation model to categorise student feedback into Academics, Facilities or Administration themes. It shows the power of few-shot learning with large language models for text classification: students or staff type in a piece of feedback and get its theme instantly, and the app also evaluates the model on a test dataset with a comparison table and an accuracy score.",
    why: "Colleges collect large amounts of free-text feedback, and reading and routing it by hand is slow. Automatically tagging each comment with its theme lets the right department see it quickly. The project was also a way to show that a foundation model can classify text accurately from just a handful of labelled examples, with no model training required.",
    how: "Built the web app in Python with Streamlit: a test-results table and a free-text classifier with a styled result card and an expandable view of the exact prompt sent to the model.\nLoaded the labelled training and test datasets (student feedback with Academics, Facilities and Administration themes) directly from IBM Cloud Object Storage using ibm-boto3.\nEngineered a few-shot prompt: an instruction listing the allowed themes, followed by five labelled examples taken from the training set, then the new feedback to classify.\nRan IBM's FLAN-T5-XXL foundation model through the Watson Machine Learning SDK with greedy decoding, a fixed random seed and at most 5 new tokens, so the output is a single, repeatable theme label.\nCached the model client with st.cache_resource, kept credentials in a .env file, and added rate limiting between calls.\nEvaluated the model on held-out test samples, comparing actual and predicted themes row by row and reporting accuracy (90% on the evaluated samples).",
    year: "Jul 2025",
    client: "Personal Project",
    domain: "Generative AI / NLP",
    techstack: [
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/streamlit.svg", name: "Streamlit" },
      { icon: "/tech/ibm.svg", name: "IBM Watson ML" },
      { icon: "/tech/ibm.svg", name: "IBM Cloud Object Storage" },
      { icon: "/tech/pandas.svg", name: "Pandas" },
    ],
    gallery: ["/projects/8/main.png"],
  },
  {
    id: "9",
    category: "Multiplayer Game",
    title: "Chess.io",
    what: "Chess.io is a real-time multiplayer chess game that integrates video and audio communication, offering a competitive experience where players can interact face-to-face via integrated media calls.",
    why: "Developed as part of a Computer Networks project in Nov 2024, Chess.io was created to showcase real-time communication technologies and to add a personal touch to online multiplayer gaming.",
    how: "Built using React, Node.js, Express.js, WebSockets, WebRTC, and MongoDB.\nImplemented real-time communication protocols for smooth gameplay.\nIntegrated media streams seamlessly to enhance player interactions.",
    year: "Nov 2024",
    client: "Academic Project",
    domain: "Gaming/Communication",
    techstack: [
      { icon: "/tech/reactjs.svg", name: "React" },
      { icon: "/tech/nodejs.svg", name: "Node.js" },
      { icon: "/tech/expressjs.svg", name: "Express.js" },
      { icon: "/tech/mongodb.svg", name: "MongoDB" },
    ],
    cover: "/projects/9/home.png",
    secondImage: "/projects/9/board.png",
    gallery: [
      "/projects/9/profile.png",
      "/projects/9/opponent-found.png",
      "/projects/9/game-over.png",
    ],
  },
  {
    id: "10",
    category: "Resource Management",
    title: "Files.io",
    what: "Files.io is a study resource management platform designed for academic use. It allows professors to upload PDFs, documents, course links, and videos, organizing content into subject-specific cards that include syllabi, course plans, modules, and lab experiments.",
    why: "Initiated at a professor's request, Files.io centralizes study materials to improve resource accessibility for students and enhance academic efficiency.",
    how: "Developed using React.js, TailwindCSS, Firebase, Node.js, Express.js, MongoDB, and Google OAuth.\nUtilized Firebase for secure data storage and real-time updates.\nEnsured a robust authentication system with Google OAuth integration.",
    year: "Mar 2024",
    client: "College Project",
    domain: "Education",
    techstack: [
      { icon: "/tech/reactjs.svg", name: "React.js" },
      { icon: "/tech/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/tech/firebase.svg", name: "Firebase" },
      { icon: "/tech/nodejs.svg", name: "Node.js" },
      { icon: "/tech/expressjs.svg", name: "Express.js" },
      { icon: "/tech/mongodb.svg", name: "MongoDB" },
    ],
    gallery: [
      "/projects/10/subjects.png",
      "/projects/10/subject-page.png",
      "/projects/10/teacher-dashboard.png",
      "/projects/10/query-dashboard.png",
    ],
  },
  {
    id: "11",
    category: "Cloud-Based AI Presentation Summarizer",
    title: "SlideSnap",
    cover: "/projects/11/slidesnap.png",
    coverPosition: "top",
    what: "SlideSnap is a cloud-native application that turns long PowerPoint (.pptx) presentations into short, digestible summaries. Users upload a deck through a simple web page, and a serverless AWS pipeline in Python extracts the text and summarises it with an AI model from the Hugging Face Inference API, returning the key points in seconds.",
    why: "Students and professionals deal with lengthy presentations every day, and manually reviewing a 50-slide deck for an exam or a meeting can take hours. SlideSnap automates that work and gives an instant study and review aid. It was also built to practise designing a scalable, secure architecture on AWS without managing any servers.",
    how: "Designed a fully serverless, event-driven pipeline on AWS: a static HTML/JS frontend hosted on Amazon S3 and served over HTTPS through CloudFront.\nBuilt a get-upload-url Lambda behind API Gateway that returns a pre-signed S3 URL valid for 5 minutes, so the browser uploads the .pptx straight to S3 without any AWS credentials.\nThe upload event automatically triggers the processPPT Lambda, which downloads the file with Boto3 and extracts the slide text using python-pptx.\nSummarised the text with the Hugging Face Inference API, splitting large decks into chunks so each request stays within the API's input limit, then joining the chunk summaries.\nStored the Hugging Face API key encrypted in AWS SSM Parameter Store and fetched it at runtime, so no secrets live in the code; access between services is controlled with IAM roles.\nThe finished summary is saved as a .txt file in a separate results bucket.",
    year: "Aug 2025",
    client: "Cloud Architecture Design Course (Team CloudGurus)",
    domain: "Cloud / Serverless AI",
    techstack: [
      { icon: "/tech/python.svg", name: "Python" },
      { icon: "/tech/aws.svg", name: "AWS Lambda" },
      { icon: "/tech/aws.svg", name: "AWS S3" },
      { icon: "/tech/aws.svg", name: "Boto3" },
      { icon: "/tech/huggingface.svg", name: "Hugging Face" },
    ],
  },
  {
    id: "12",
    category: "Club Management",
    title: "CIMP",
    what: "CIMP (Club Integration and Management Platform) is a platform to manage the Club FFCS for its members, where members can request points for their contributions and track their progress.",
    why: "We built this to manage the FFCS Process for my CodeChef Club in Dec 2024, ensuring transparency and efficiency in contribution tracking.",
    how: "Developed using React, Go, Gin, and TailwindCSS.\nLeveraged Go and Gin for high-performance backend services.\nIntegrated efficient frontend workflows with React and TailwindCSS for seamless user management.",
    year: "Dec 2024",
    client: "CodeChef Club",
    domain: "Club Management",
    techstack: [
      { icon: "/tech/reactjs.svg", name: "React" },
      { icon: "/tech/go.svg", name: "Go" },
      { icon: "/tech/gin.svg", name: "Gin" },
      { icon: "/tech/tailwindcss.svg", name: "TailwindCSS" },
    ],
  },
  {
    id: "4",
    category: "Collaborative Photo Sharing App",
    title: "MomentsHub",
    cover: "/projects/4/momentshub-login.webp",
    coverPosition: "left",
    what: "MomentsHub is a private, invite-only web app where small groups of friends and family share one photo a day and build a shared digital scrapbook together. Members create or join groups with an invite code, post a daily photo with a caption and tags, react with emojis, comment, and rediscover past photos through an \"On This Day\" view and a filterable group gallery.",
    why: "Mainstream social media is public, algorithm-driven, and full of curated moments. We wanted a quiet, ad-free space for close friends to share everyday life, so I built MomentsHub with a teammate and use it with my own friends. It was also a chance to take a full-stack product end to end: requirements, design, testing, and deployment.",
    how: "Built a React 19 single-page app with Vite and Tailwind CSS, backed by Firebase Authentication (email/password, Google, and guest sign-in), Cloud Firestore, and Cloud Storage.\nModelled users, groups, photos, comments, reactions, and tags in Firestore, using real-time listeners for live updates, transactions for consistent writes, and date-indexed queries for the \"On This Day\" feature.\nImplemented the upload pipeline: images go to Cloud Storage and the download URL, caption, and tags are saved to Firestore, with client-side validation and rate limiting.\nFollowed an iterative SDLC with an SRS, UML models (use case, class, activity, state, DFD, ER), and a risk register; verified core flows with Cypress end-to-end tests and scored 100 in Lighthouse Accessibility and Best Practices.",
    year: "2025",
    client: "Personal Use",
    domain: "Social / Photo Sharing",
    techstack: [
      { icon: "/tech/reactjs.svg", name: "React" },
      { icon: "/tech/firebase.svg", name: "Firebase" },
      { icon: "/tech/tailwindcss.svg", name: "TailwindCSS" },
      { icon: "/tech/js.svg", name: "JavaScript" },
    ],
    gallery: [
      "/projects/4/dashboard.jpg",
      "/projects/4/photo-detail.jpg",
      "/projects/4/architecture.png",
      "/projects/4/er-diagram.jpg",
    ],
  },
  {
    id: "14",
    category: "Rental/Booking Platform",
    title: "Wanderlust",
    what: "Wanderlust is an Airbnb clone that allows users to post rental properties with location details, pricing, and booking options. It also includes features for user comments and reviews, making it easier for travelers to find and book accommodations.",
    why: "Built in Jan 2024 as a personal learning project, Wanderlust was developed to explore full-stack development and understand the intricacies of booking systems and user interactions.",
    how: "Developed using Node.js, Express.js, EJS for server-side rendering, and Bootstrap.\nImplemented server-side rendering for fast load times and SEO benefits.\nEnhanced UI with Bootstrap components and custom styling for a modern look.",
    year: "Jan 2024",
    client: "Personal Learning",
    domain: "Travel/Booking",
    techstack: [
      { icon: "/tech/nodejs.svg", name: "Node.js" },
      { icon: "/tech/expressjs.svg", name: "Express.js" },
      { icon: "/tech/ejs.svg", name: "EJS" },
      { icon: "/tech/bootstrap.svg", name: "Bootstrap" },
    ],
    gallery: [
      "/projects/14/new-listing.png",
      "/projects/14/listing.png",
      "/projects/14/reviews.png",
      "/projects/14/edit-listing.png",
    ],
  },
];
