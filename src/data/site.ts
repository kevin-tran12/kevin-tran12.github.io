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
			'Took a production platform from nothing to live on a budget of effectively zero, using scale-to-zero Cloud Run, free-tier-tuned resource allocation, and an automated billing circuit breaker as a Cloud Function that cuts spend off before it escapes the free tier.',
			'Made the whole environment rebuildable from source rather than reconstructable from memory, defining Cloud Run, Firestore, Cloud Storage, Secret Manager, Artifact Registry, and Cloud Functions in Terraform — which brought setup down from days to hours with agentic engineering workflows.',
			'Contained blast radius before it mattered by scoping every resource to least-privilege IAM with dedicated service accounts and keeping all secrets in Secret Manager.',
			'Made releases safe to run unattended with GitHub Actions and Cloud Build, static analysis in CI, and 277 tests across pytest, Vitest, and Playwright gating every deploy.',
		],
	},
	{
		title: 'Software Engineer',
		org: 'Novogradac & Company LLP',
		period: 'Apr 2022 — Feb 2026',
		bullets: [
			'Restored trustworthy deploys for a 20-person engineering team by root-causing Terraform version drift between v1 and v2 across environments, then held dev and staging in parity through scheduled GitLab CI/CD pipelines and Dockerized services — removing a standing class of environment-specific failures.',
			'Gave the finance team one view of customer activity instead of two systems to reconcile by hand, owning the Thought Industries LMS and Stripe billing integration end-to-end and automating the payment processing and reporting behind it.',
			'Carried the platform through two migrations without disrupting users: search moved to Elasticsearch, and the site came off deprecated Google Maps APIs end-to-end — including custom replacements where the vendor upgrade path would have dropped existing behavior.',
			'Reduced the attack surface of a public-facing platform at a national accounting firm by implementing its CORS, CSP, and XSS protection layer, and made production incidents diagnosable through Django application logging.',
			'Let content editors ship without waiting on engineering by leading the Wagtail CMS redesign — standardized card components and modular filter blocks reused across 10+ page types — and kept the codebase maintainable as it grew by decoupling business logic with Django signals.',
		],
	},
	{
		title: 'Full-Stack Software Engineer',
		org: 'Tektone Sound & Signal Manufacturing',
		period: 'Jan 2022 — Apr 2022',
		bullets: [
			'Contributed shippable sprint work within weeks of starting on a contract engagement, building responsive UI components with Tailwind CSS and Livewire inside an existing Laravel application.',
			'Shortened turnaround on critical production bugs while still onboarding, diagnosing and resolving them through the team’s GitLab issue workflows.',
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
