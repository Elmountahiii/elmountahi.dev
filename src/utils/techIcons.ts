import AwsIcon from "../assets/aws_icon.svg";
import DockerIcon from "../assets/docker_icon.svg";
import ExpressIcon from "../assets/express_icon.svg";
import GoIcon from "../assets/go_icon.svg";
import JavaIcon from "../assets/java_icon.svg";
import JavascriptIcon from "../assets/javascript_icon.svg";
import KubernetesIcon from "../assets/kubernetes_icon.svg";
import MongodbIcon from "../assets/mongodb_icon.svg";
import NextjsIcon from "../assets/nextjs_icon.svg";
import NodejsIcon from "../assets/nodejs_icon.svg";
import PostgresIcon from "../assets/postgres_icon.svg";
import PythonIcon from "../assets/python_icon.svg";
import ReactIcon from "../assets/react_icon.svg";
import SqliteIcon from "../assets/sqlite_icon.svg";
import TailwindIcon from "../assets/tailwindscss_icon.svg";
import TypescriptIcon from "../assets/typescript_icon.svg";
import GithubIcon from "../assets/github_icon.svg";
import VitejsIcon from "../assets/vitejs_icon.svg";

export const getTechIcon = (techName: string): string | null => {
	const normalizedName = techName.toLowerCase().replace(/[\s.]/g, "");

	const iconMap: Record<string, string> = {
		aws: AwsIcon,
		docker: DockerIcon,
		expressjs: ExpressIcon,
		express: ExpressIcon,
		go: GoIcon,
		golang: GoIcon,
		java: JavaIcon,
		javascript: JavascriptIcon,
		js: JavascriptIcon,
		kubernetes: KubernetesIcon,
		k8s: KubernetesIcon,
		mongodb: MongodbIcon,
		mongo: MongodbIcon,
		nextjs: NextjsIcon,
		next: NextjsIcon,
		nodejs: NodejsIcon,
		node: NodejsIcon,
		postgresql: PostgresIcon,
		postgres: PostgresIcon,
		python: PythonIcon,
		react: ReactIcon,
		reactjs: ReactIcon,
		reactnative: ReactIcon,
		sqlite: SqliteIcon,
		tailwindcss: TailwindIcon,
		tailwind: TailwindIcon,
		typescript: TypescriptIcon,
		ts: TypescriptIcon,
		github: GithubIcon,
		vitejs: VitejsIcon,
		vite: VitejsIcon,
	};

	return iconMap[normalizedName] || null;
};
