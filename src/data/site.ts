/**
 * Every piece of copy and every outbound link on the site lives here.
 * Updating the portfolio should be a data edit, not a markup edit.
 */

export const meta = {
	title: 'Kevin Tran — Cloud & Platform Engineer',
	description:
		'Cloud and platform engineer in the NYC metro. Terraform-managed GCP infrastructure, containerized Python services, and the CI/CD that ships them.',
	url: 'https://kevin-tran12.github.io',
} as const;

export const hero = {
	name: 'Kevin Tran',
	role: 'Cloud & Platform Engineer',
	location: 'NYC Metro — open to relocation',
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
		'A personal recipe site with supporter subscriptions, an admin expense ledger behind Google OAuth and a TOTP second factor, and a remote MCP server that lets Claude author and publish recipes over OAuth 2.1. I designed and built the whole thing — application, infrastructure, and delivery pipeline.',
	links: {
		live: 'https://madeforseconds.pages.dev',
		repo: 'https://github.com/kevin-tran12/MadeForSeconds',
	},
	highlights: [
		{
			title: 'Reproducible infrastructure',
			body: 'Terraform defines every GCP resource — Cloud Run, Firestore, Cloud Storage, Secret Manager, Artifact Registry, Cloud Functions — with IAM service accounts scoped to least privilege. The environment rebuilds from source.',
		},
		{
			title: 'Scale to zero, cost to zero',
			body: 'Cloud Run scales to zero between requests and resource allocation is tuned to GCP’s always-free tier. A Cloud Function acts as a billing circuit breaker if spend ever escapes the free tier.',
		},
		{
			title: 'Delivery pipelines with SAST',
			body: 'GitHub Actions and Cloud Build ship the FastAPI backend to Cloud Run with static analysis running in CI; Cloudflare Pages builds and deploys the React frontend from the same repository.',
		},
		{
			title: 'An agent-facing API',
			body: 'A remote MCP server over Streamable HTTP, authenticated with OAuth 2.1 through WorkOS AuthKit, lets Claude draft and publish recipes as a first-class client.',
		},
		{
			title: 'Defense in depth',
			body: 'Google OAuth through Identity Platform with a TOTP second factor on the expense ledger, SSRF defenses on upload paths, CSP and HSTS enforced at the Cloudflare edge, and secrets that never leave Secret Manager.',
		},
		{
			title: 'Tested end to end',
			body: '277 tests across pytest, Vitest, and Playwright cover the API, the React frontend, and the full browser flows — all of it gating the pipeline.',
		},
	],
	stack: [
		{ layer: 'Frontend', tech: 'React 19 · Vite 6 · TypeScript · Tailwind CSS v4' },
		{ layer: 'Backend', tech: 'FastAPI (Python 3.12)' },
		{ layer: 'Database', tech: 'Cloud Firestore' },
		{ layer: 'Auth', tech: 'Google OAuth via Identity Platform · TOTP second factor on the ledger' },
		{ layer: 'Payments', tech: 'Stripe (one-time and recurring)' },
		{ layer: 'Agent interface', tech: 'Remote MCP server · OAuth 2.1 via WorkOS AuthKit' },
		{ layer: 'Hosting', tech: 'GCP Cloud Run (backend) · Cloudflare Pages (frontend)' },
		{ layer: 'CI/CD', tech: 'GitHub Actions (SAST in pipeline) · Cloud Build · Cloudflare Pages' },
		{ layer: 'Testing', tech: 'pytest · Vitest · Playwright (277 tests)' },
		{ layer: 'Infrastructure', tech: 'Terraform · Artifact Registry · Cloud Functions' },
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
			'Architected and deployed multi-cloud infrastructure with Terraform — serverless compute on Cloud Run, edge hosting on Cloudflare Pages, Cloud Storage for media, and Firestore for real-time state — reducing environment setup from days to hours using agentic engineering workflows.',
			'Enforced least-privilege access across every cloud resource through granular GCP IAM roles and dedicated service accounts, with all secrets held in Secret Manager.',
			'Built the delivery pipeline on GitHub Actions and Cloud Build with static analysis in CI and 277 tests across pytest, Vitest, and Playwright gating every deploy.',
			'Kept running costs at effectively zero through scale-to-zero compute, free-tier-tuned resource allocation, and an automated billing circuit breaker implemented as a Cloud Function.',
		],
	},
	{
		title: 'Software Engineer',
		org: 'Novogradac & Company LLP',
		period: 'Apr 2022 — Feb 2026',
		bullets: [
			'Root-caused Terraform version drift between v1 and v2 across environments to restore a consistent infrastructure state, and maintained GitLab CI/CD pipelines — including scheduled jobs and Dockerized service deployments — that eliminated dev/staging inconsistency.',
			'Owned a Thought Industries LMS and Stripe billing integration end-to-end, automating payment processing and report generation and consolidating both sources into a single view of customer activity.',
			'Ran an Elasticsearch migration and an end-to-end Google Maps API deprecation migration, building custom replacements where the vendor path did not cover existing behavior.',
			'Implemented the application security layer — CORS, CSP, and XSS protections — alongside Django application logging and pandas-based data pipelines.',
			'Built and maintained the Django/Wagtail platform and its REST APIs, using pre/post signals to decouple business logic across application events, with pytest and Selenium coverage.',
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
			'Artifact Registry',
			'Cloud Functions',
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
			'Elasticsearch',
			'Redis',
			'pandas',
		],
	},
	{
		name: 'Frontend',
		items: ['React', 'Tailwind CSS', 'Bootstrap', 'Django Templates', 'Vite', 'Responsive design'],
	},
	{
		name: 'Testing',
		items: ['pytest', 'Selenium', 'Playwright', 'Vitest'],
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
