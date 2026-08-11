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
		'I build Terraform-managed Google Cloud infrastructure, containerized Python services on Cloud Run, and the CI/CD pipelines that make application delivery reproducible.',
} as const;

export const about = {
	intro:
		'I build cloud infrastructure and the delivery pipelines around it, backed by four years of production Python engineering.',
	groups: [
		{
			title: 'Current focus',
			items: [
				'Terraform-managed GCP — Cloud Run, Firestore, Cloud Storage, Secret Manager, Cloud Functions',
				'CI/CD on GitHub Actions and Cloud Build, with SAST and automated testing as release gates',
				'Least-privilege IAM roles and service-account boundaries',
				'OAuth 2.0 / OIDC authentication and API hardening',
				'Cost-aware serverless architecture and reproducible environments',
			],
		},
		{
			title: 'Production background',
			items: [
				'Python, Django, and Wagtail application development',
				'REST API design and Stripe webhook integrations',
				'Event-driven workflows using Django signals',
				'GitLab CI/CD and Dockerized services',
				'pytest and Selenium automated testing',
			],
		},
	],
	closing:
		'The application background is what makes the infrastructure work concrete. I spent four years on the receiving end of environment drift and manual deployment steps, which is most of why I care about reproducibility now.',
	personal:
		'Outside of engineering I enjoy powerlifting, cooking, and automotive projects — I am usually happiest building or fixing something with my hands.',
} as const;

export const featuredProject = {
	name: 'MadeForSeconds',
	tagline:
		'A production recipe platform on Google Cloud that runs for a few dollars a month.',
	description:
		'A personal recipe site with supporter subscriptions, an admin expense ledger behind Google OAuth and a TOTP second factor, and a remote MCP server that lets Claude author and publish recipes over OAuth 2.1. I designed and built the whole thing — application, infrastructure, and delivery pipeline.',
	links: {
		live: 'https://madeforseconds.pages.dev',
		repo: 'https://github.com/kevin-tran12/MadeForSeconds',
	},
	// One line that conveys the whole system before any card is read.
	architecture:
		'Cloudflare Pages → Cloud Run (FastAPI) → Firestore, with Terraform managing every GCP resource and GitHub Actions plus Cloud Build handling CI/CD.',
	highlights: [
		{
			title: 'Cost-aware serverless architecture',
			points: [
				'Cloud Run configured to scale to zero, so idle time carries no compute cost',
				'Resource allocation tuned against GCP free-tier limits; the residual spend is Cloud Storage and deploy churn, at a few cents to a few dollars a month',
				'Automated billing circuit breaker implemented as a Cloud Function',
			],
		},
		{
			title: 'Reproducible infrastructure',
			points: [
				'Terraform defines Cloud Run, Firestore, Cloud Storage, Secret Manager, Artifact Registry, and Cloud Functions',
				'The environment rebuilds from source rather than from memory',
				'Environment setup reduced from days to hours',
			],
		},
		{
			title: 'Secure machine-to-machine publishing',
			points: [
				'Remote MCP server over Streamable HTTP',
				'OAuth 2.1 authentication via WorkOS AuthKit',
				'Claude publishes recipes as an authenticated first-class client',
			],
		},
		{
			title: 'Security controls',
			points: [
				'Least-privilege IAM service accounts',
				'Secret Manager for all sensitive configuration',
				'CSP and HSTS enforced at the Cloudflare edge',
				'SSRF protections on upload paths',
				'TOTP MFA on administrative financial workflows',
			],
		},
		{
			title: 'Delivery pipeline',
			points: [
				'GitHub Actions and Cloud Build ship the FastAPI backend to Cloud Run',
				'SAST security scanning runs in CI',
				'277 tests across pytest, Vitest, and Playwright gate every deploy',
			],
		},
	],
	// Chips rather than a layer/technology table — the table read like internal docs.
	stack: [
		'React 19',
		'TypeScript',
		'FastAPI',
		'Python 3.12',
		'Cloud Run',
		'Firestore',
		'Cloud Storage',
		'Secret Manager',
		'Terraform',
		'GitHub Actions',
		'Cloud Build',
		'Cloudflare Pages',
		'Stripe',
		'OAuth 2.1',
		'Playwright',
	],
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
			'Designed and implemented a serverless Google Cloud platform focused on infrastructure automation, deployment reliability, secure access management, and operational scalability. Full architecture and security detail is in the case study above.',
		initiatives: [
			{
				title: 'Infrastructure as Code Transformation',
				body: 'Replaced manual cloud resource provisioning with a Terraform-managed Google Cloud architecture spanning Cloud Run, Firestore, Cloud Functions, Secret Manager, Artifact Registry, IAM, GCS, and Identity Platform.',
				outcome:
					'Established reproducible, version-controlled provisioning and brought environment setup down from days to hours.',
			},
			{
				title: 'Deployment Automation & Release Confidence',
				body: 'Implemented GitHub Actions and Cloud Build CI/CD pipelines incorporating automated testing, deployment validation, and SAST security scanning against a 277-test suite spanning backend, frontend, and browser flows.',
				outcome:
					'Increased release confidence and reduced the likelihood of regressions reaching deployed environments.',
			},
			{
				title: 'Cloud Security & Access Governance',
				body: 'Designed least-privilege IAM roles and service-account boundaries aligned with each GCP resource’s operational responsibilities, implemented Google Sign-In over OAuth 2.0 / OpenID Connect, and introduced SSRF mitigation controls in the FastAPI backend.',
				outcome:
					'Reduced unnecessary permission exposure across the cloud environment and strengthened the security posture of externally accessible API workflows.',
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

/**
 * Sits high on the page so a 15-second scan hits the keywords before the
 * prose. Grouped for ATS and human parsing alike.
 */
export const skills: SkillGroup[] = [
	{
		name: 'Cloud',
		items: [
			'Google Cloud Platform',
			'Cloud Run',
			'Firestore',
			'Cloud Storage',
			'Secret Manager',
			'Cloud Functions',
			'Identity Platform',
			'IAM',
		],
	},
	{
		name: 'Infrastructure',
		items: ['Terraform', 'Docker', 'Cloudflare Pages', 'Artifact Registry', 'Linux / Bash'],
	},
	{
		name: 'Backend & Data',
		items: [
			'Python',
			'FastAPI',
			'Django',
			'Wagtail CMS',
			'REST APIs',
			'Stripe webhooks',
			'PostgreSQL',
			'Elasticsearch',
			'Redis',
			'pandas',
		],
	},
	{
		name: 'CI/CD & Testing',
		items: [
			'GitHub Actions',
			'Cloud Build',
			'GitLab CI/CD',
			'pytest',
			'Playwright',
			'Vitest',
			'Selenium',
		],
	},
	{
		name: 'Security',
		items: [
			'OAuth 2.0 / OIDC',
			'OAuth 2.1',
			'TOTP MFA',
			'Least-privilege IAM',
			'SSRF mitigation',
			'CSP',
			'HSTS',
			'SAST in CI',
		],
	},
	{
		name: 'Languages & Frontend',
		items: ['TypeScript', 'JavaScript (ES6)', 'SQL', 'React', 'Tailwind CSS', 'Vite'],
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
	{ label: 'Tech', href: '#skills' },
	{ label: 'Work', href: '#work' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
] as const;
