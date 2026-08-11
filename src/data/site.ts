/**
 * Every piece of copy and every outbound link on the site lives here.
 * Updating the portfolio should be a data edit, not a markup edit.
 */

export const meta = {
	title: 'Kevin Tran — Cloud & Platform Engineer',
	description:
		'Cloud and platform engineer in Atlanta. Terraform-managed GCP infrastructure, containerized Python services, and the CI/CD that ships them.',
	url: 'https://kevin-tran12.github.io',
} as const;

export const hero = {
	name: 'Kevin Tran',
	role: 'Cloud & Platform Engineer',
	location: 'Atlanta, GA — open to relocation',
	// PCA first — it is the senior of the two.
	badges: ['Google Cloud Professional Cloud Architect', 'Associate Cloud Engineer'],
	summary:
		'I build cloud-native systems and the pipelines that run them: Terraform-managed GCP infrastructure, containerized Python services on Cloud Run, and event-driven architectures that replace manual workflows.',
} as const;

export const about = [
	'Most of my day-to-day has been Python — Django and Wagtail CMS platforms, Stripe webhook integrations that automate payment processing and reporting, and Django signals used to decouple business logic across application events. Alongside that I maintain GitLab CI/CD pipelines and Dockerized services, and write the pytest and Selenium coverage that keeps them honest.',
	'The work I care most about sits one layer down: making infrastructure reproducible. On my own projects that means Terraform-defined Cloud Run services, least-privilege IAM service accounts, and edge hosting on Cloudflare — infrastructure you can tear down and stand back up from source.',
	'I came to engineering from a career in hospitality, by way of App Academy and computer science coursework at Georgia State. When I am not coding I am fixing cars, snowboarding, powerlifting, rock climbing, hiking, cooking, and traveling — if it is hands-on or outdoors, I am usually in.',
] as const;

export type StackRow = { layer: string; tech: string };

export const featuredProject = {
	name: 'MadeForSeconds',
	tagline: 'A production recipe platform running entirely inside GCP’s always-free tier.',
	description:
		'A personal recipe site with supporter subscriptions, a TOTP-gated expense ledger, and a remote MCP server that lets Claude author and publish recipes over OAuth 2.1. I designed and built the whole thing — application, infrastructure, and delivery pipeline.',
	links: {
		live: 'https://madeforseconds.pages.dev',
		repo: 'https://github.com/kevin-tran12/MadeForSeconds',
	},
	highlights: [
		{
			title: 'Reproducible infrastructure',
			body: 'Terraform defines every GCP resource — Cloud Run, Firestore, Cloud Storage, Secret Manager — with IAM service accounts scoped to least privilege. The environment rebuilds from source.',
		},
		{
			title: 'Scale to zero, cost to zero',
			body: 'Cloud Run scales to zero between requests and every service stays inside GCP’s always-free tier, so the platform costs nothing to keep online.',
		},
		{
			title: 'Two delivery pipelines',
			body: 'GitHub Actions and Cloud Build ship the FastAPI backend to Cloud Run; Cloudflare Pages builds and deploys the React frontend from the same repository.',
		},
		{
			title: 'An agent-facing API',
			body: 'A remote MCP server over Streamable HTTP, authenticated with OAuth 2.1 through WorkOS AuthKit, lets Claude draft and publish recipes as a first-class client.',
		},
		{
			title: 'Hardened at the edge',
			body: 'CSP and HSTS are enforced at the Cloudflare edge, admin access to the expense ledger is gated behind TOTP, and secrets never leave Secret Manager.',
		},
		{
			title: 'Payments and state',
			body: 'Stripe handles one-time and recurring supporter donations; Firestore holds real-time state and Cloud Storage holds images and receipts.',
		},
	],
	stack: [
		{ layer: 'Frontend', tech: 'React 19 · Vite 6 · TypeScript · Tailwind CSS v4' },
		{ layer: 'Backend', tech: 'FastAPI (Python 3.12)' },
		{ layer: 'Database', tech: 'Cloud Firestore' },
		{ layer: 'Auth', tech: 'Google Identity Platform · TOTP admin 2FA' },
		{ layer: 'Payments', tech: 'Stripe (one-time and recurring)' },
		{ layer: 'Agent interface', tech: 'Remote MCP server · OAuth 2.1 via WorkOS AuthKit' },
		{ layer: 'Hosting', tech: 'GCP Cloud Run (backend) · Cloudflare Pages (frontend)' },
		{ layer: 'CI/CD', tech: 'GitHub Actions · Cloud Build · Cloudflare Pages' },
		{ layer: 'Infrastructure', tech: 'Terraform' },
	] satisfies StackRow[],
} as const;

export type Role = {
	title: string;
	org: string;
	period: string;
	bullets: string[];
};

export const experience: Role[] = [
	{
		title: 'Founder & Cloud Engineer',
		org: 'MadeForSeconds',
		period: 'Jan 2026 — Present',
		bullets: [
			'Architected a full multi-cloud environment with Terraform and agentic engineering workflows, cutting environment setup time by roughly 90%.',
			'Engineered reproducible infrastructure-as-code for Google Cloud Run services and Cloudflare edge hosting, enforcing least-privilege GCP IAM through granular service account policies.',
			'Designed a secure, event-driven architecture on Cloud Storage and Firestore for real-time state management.',
		],
	},
	{
		title: 'Python Developer',
		org: 'Novogradac',
		period: 'Apr 2022 — Feb 2026',
		bullets: [
			'Contributed to a full-platform Wagtail CMS redesign, rebuilding page templates with updated layouts and dedicated CSS structures across variable content states and responsive breakpoints.',
			'Built a Stripe webhook integration to automate payment processing and trigger report generation, and developed consolidated reports merging Thought Industries LMS and website purchase data into a single view of customer activity.',
			'Implemented Django pre/post signals to decouple core business logic across application events, reducing cross-feature bugs and improving long-term maintainability.',
			'Maintained GitLab CI/CD pipelines and Dockerized services to eliminate dev/staging drift, and authored unit and end-to-end coverage with pytest and Selenium.',
		],
	},
	{
		title: 'Full-Stack Software Engineer',
		org: 'Tektone Sound & Signal Manufacturing',
		period: 'Jan 2022 — Apr 2022',
		bullets: [
			'Developed responsive UI components with Tailwind CSS and Livewire inside a Laravel application, delivering production-ready features against sprint requirements.',
			'Diagnosed and resolved critical production issues through GitLab workflows, improving bug turnaround during onboarding.',
		],
	},
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
	{
		name: 'Cloud & IaC',
		items: [
			'GCP',
			'Cloud Run',
			'Firestore',
			'Cloud Storage',
			'Secret Manager',
			'IAM',
			'Cloudflare',
			'Terraform',
			'Docker',
		],
	},
	{
		name: 'CI/CD & Tooling',
		items: ['GitHub Actions', 'GitLab CI/CD', 'Cloud Build', 'Git', 'Linux / Bash', 'Claude Code'],
	},
	{
		name: 'Languages',
		items: ['Python', 'JavaScript (ES6)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
	},
	{
		name: 'Backend & Data',
		items: [
			'Django',
			'Wagtail CMS',
			'FastAPI',
			'Flask',
			'REST APIs',
			'Stripe webhooks',
			'PostgreSQL',
			'Redis',
		],
	},
	{
		name: 'Frontend',
		items: ['React', 'Tailwind CSS', 'Bootstrap', 'Django Templates', 'Vite', 'Responsive design'],
	},
	{
		name: 'Testing',
		items: ['pytest', 'Selenium', 'Playwright'],
	},
];

export const credentials = [
	{ title: 'Professional Cloud Architect', org: 'Google Cloud', period: 'Certified' },
	{ title: 'Associate Cloud Engineer', org: 'Google Cloud', period: 'Certified' },
	{ title: 'Full-Stack Software Engineering', org: 'App Academy', period: '2021' },
	{ title: 'Computer Science coursework', org: 'Georgia State University', period: '2018 — 2020' },
];

export const contact = {
	email: 'kevin.trancb@gmail.com',
	socials: [
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-tran-059926124/' },
		{ name: 'GitHub', url: 'https://github.com/kevin-tran12' },
	],
} as const;

export const nav = [
	{ label: 'About', href: '#about' },
	{ label: 'Work', href: '#work' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
] as const;
