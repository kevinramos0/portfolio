export interface Tech {
	id: string;
	title: string;
	alt: string;
	icon?: string;
}

const techs: Tech[] = [
	{
		id: "ts",
		title: "TypeScript",
		alt: "ts",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	},
	{
		id: "nest",
		title: "NestJS",
		alt: "nest",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
	},
	{
		id: "vue",
		title: "VueJs",
		alt: "vue",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
	},
	{
		id: "net",
		title: ".NET Core",
		alt: "net",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
	},
	{
		id: "express",
		title: "Express",
		alt: "express",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
	},
	{
		id: "nodejs",
		title: "NodeJS",
		alt: "nodejs",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
	},
	{
		id: "astro",
		title: "Astro",
		alt: "astro",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
	},
	{
		id: "sequelize",
		title: "Sequelize",
		alt: "sequelize",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
	},
	{
		id: "postgresql",
		title: "PostgreSQL",
		alt: "postgresql",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
	},
	{
		id: "mongodb",
		title: "MongoDB",
		alt: "mongodb",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
	},
	{
		id: "sqlserver",
		title: "SQL Server",
		alt: "sqlserver",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
	},
	{
		id: "docker",
		title: "Docker",
		alt: "docker",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
	},
	{
		id: "tailwind",
		title: "TailwindCSS",
		alt: "tailwind",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		id: "sass",
		title: "Sass",
		alt: "sass",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
	},
	{
		id: "vite",
		title: "Vite",
		alt: "vite",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
	},
	{
		id: "swagger",
		title: "Swagger",
		alt: "swagger",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
	},
	{
		id: "aws",
		title: "AWS S3",
		alt: "aws",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
	},
	{
		id: "blazor",
		title: "Blazor",
		alt: "blazor",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
	},
];

/**
 * Devuelve un array personalizado de tecnologías, filtradas por id.* @param ids Array de ids que deseas incluir
 */
export function getTechsById(ids: string[]): Tech[] {
	return techs.filter((tech: Tech): boolean => ids.includes(tech.id));
}
