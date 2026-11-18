import Image from "next/image";
import { Card } from "@/components/ui";
import { invertedTech } from "@/data/projects";

// Ordered by current demand, one group per row:
// languages → version control, cloud & infra → web & APIs → AI/ML & agents → data
const tools = [
  ["Python", "python.svg"], ["JavaScript", "js.svg"], ["TypeScript", "ts.svg"], ["Java", "java.svg"],
  ["C++", "cpp.svg"], ["C#", "csharp.svg"], ["HTML", "html.svg"], ["CSS", "css.svg"],
  ["Git", "git.svg"], ["GitHub", "github.png"], ["Docker", "docker.svg"], ["AWS", "aws.svg"],
  ["Kafka", "kafka.svg"], ["Redis", "redis.svg"], ["Firebase", "firebase.svg"], ["Streamlit", "streamlit.svg"],
  ["React.js", "reactjs.svg"], ["Next.js", "nextjs.svg"], ["Node.js", "nodejs.svg"], ["Express.js", "expressjs.svg"],
  ["Spring Boot", "springboot.svg"], ["FastAPI", "fastapi.svg"], ["GraphQL", "graphql.svg"], ["Tailwind CSS", "tailwindcss.svg"],
  ["Pytorch", "pytorch.svg"], ["Tensorflow", "tensorflow.svg"], ["Scikit-learn", "scikitlearn.svg"], ["Hugging Face", "huggingface.svg"],
  ["LangChain", "langchain.svg"], ["CrewAI", "crewai.svg"], ["MCP SDK", "mcp.svg"], ["Ollama", "ollama.svg"],
  ["PostgreSQL", "postgresql.svg"], ["MySQL", "mysql.svg"], ["MongoDB", "mongodb.svg"], ["Prisma", "prisma.svg"],
  ["Pinecone", "pinecone.svg"], ["Chroma DB", "chroma.svg"], ["Numpy", "numpy.svg"], ["Pandas", "pandas.svg"],
];

// Icons the reference inverts on the dark theme (beyond the shared project list)
const inverted = [...invertedTech, "FastAPI"];

export default function Toolkit() {
  return (
    <div id="toolkit" className="animate-section w-full scroll-mt-32">
      <Card className="max-h-fit flex flex-col gap-5">
        <h1 className="uppercase text-lg tracking-tighter">ToolKit</h1>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {tools.map(([name, file]) => (
            <div key={name} className="flex flex-col items-center justify-evenly gap-2">
              <Image
                src={`/tech/${file}`}
                alt={name}
                width={50}
                height={50}
                className={inverted.includes(name) ? "invert" : ""}
              />
              <p className="text-sm">{name}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
