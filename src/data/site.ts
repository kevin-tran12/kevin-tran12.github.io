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

export type Initiative = {
	title: string;
	body: string;
	outcome: string;
};

export type Engagement = {
	org: string;
	role: string;
	period: string;
	summary: string;
	initiatives: Initiative[];
};

export const engagements: Engagement[] = [
	{
		org: 'Novogradac & Company LLP',
		role: 'Software Engineer',
		period: '2022 – 2026',
		summary:
			'Contributed to backend platform modernization efforts for an accounting and advisory organization, with a focus on API architecture, deployment reliability, workflow automation, and operational efficiency.',
		initiatives: [
			{
				title: 'API & Integration Modernization',
				body: 'Designed and delivered authenticated REST APIs and search capabilities that provided a consistent integration layer for internal systems and external consumers.',
				outcome:
					'Improved maintainability of backend services and reduced the need for ad-hoc data access patterns.',
			},
			{
				title: 'Workflow Decoupling & Maintainability',
				body: 'Refactored tightly coupled business processes into event-driven workflows using Django signals and asynchronous application events.',
				outcome:
					'Simplified feature enhancements and reduced the impact of changes across dependent application components.',
			},
			{
				title: 'Production Release Stability',
				body: 'Managed PostgreSQL schema evolution and deployment sequencing across multiple production releases in a live production environment.',
				outcome:
					'Maintained data integrity and minimized operational risk during application upgrades.',
			},
			{
				title: 'Billing & Reporting Automation',
				body: 'Integrated Stripe APIs and webhook-driven event processing to support stakeholder and partner reporting workflows.',
				outcome:
					'Reduced manual reconciliation effort and improved operational visibility into billing activity.',
			},
			{
				title: 'Deployment & Environment Consistency',
				body: 'Supported Dockerized services and GitLab CI/CD automation to standardize development and staging deployment workflows, and root-caused Terraform version drift between v1 and v2 across environments.',
				outcome:
					'Reduced environment-specific configuration drift and improved deployment repeatability across teams.',
			},
		],
	},
	{
		org: 'MadeForSeconds',
		role: 'Cloud Infrastructure & Platform Engineering',
		period: '2026 – Present',
		summary:
			'Designed and implemented a serverless Google Cloud platform focused on infrastructure automation, deployment reliability, secure access management, and operational scalability.',
		initiatives: [
			{
				title: 'Infrastructure as Code Transformation',
				body: 'Replaced manual cloud resource provisioning with a Terraform-managed Google Cloud architecture spanning Cloud Run, Firestore, Cloud Functions, Secret Manager, Artifact Registry, IAM, GCS, and Identity Platform.',
				outcome:
					'Established reproducible, version-controlled infrastructure provisioning and reduced the operational overhead associated with manual environment management.',
			},
			{
				title: 'Deployment Automation & Release Confidence',
				body: 'Implemented GitHub Actions CI/CD pipelines incorporating automated testing, deployment validation, and SAST security scanning against a 277-test suite spanning backend, frontend, and browser flows.',
				outcome:
					'Increased release confidence and reduced the likelihood of regressions reaching deployed environments.',
			},
			{
				title: 'Environment Provisioning Optimization',
				body: 'Automated infrastructure provisioning and application environment configuration workflows to streamline onboarding and development setup.',
				outcome:
					'Reduced environment setup time from days to hours and improved developer productivity.',
			},
			{
				title: 'Cloud Security & Access Governance',
				body: 'Designed least-privilege IAM roles and service-account boundaries aligned with the operational responsibilities of each GCP resource.',
				outcome:
					'Improved access governance and reduced unnecessary permission exposure across the cloud environment.',
			},
			{
				title: 'Authentication & API Hardening',
				body: 'Implemented Google Sign-In using OAuth 2.0 / OpenID Connect and introduced SSRF mitigation controls within the FastAPI backend.',
				outcome:
					'Strengthened authentication handling and improved the security posture of externally accessible API workflows.',
			},
		],
	},
];

export const valueProposition = {
	statement:
		'The common thread across these initiatives is identifying operational friction, deployment risk, security exposure, and maintenance bottlenecks, then implementing pragmatic engineering solutions that make systems easier to operate, scale, secure, and evolve over time.',
	areas: [
		'Cloud infrastructure automation (Terraform / GCP)',
		'CI/CD and deployment workflow standardization',
		'Backend API architecture and integration design',
		'Operational workflow automation',
		'Least-privilege cloud security and access governance',
		'Environment provisioning and developer experience improvements',
	],
};

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
