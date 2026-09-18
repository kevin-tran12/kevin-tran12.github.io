/**
 * Every piece of copy and every outbound link on the site lives here.
 * Updating the portfolio should be a data edit, not a markup edit.
 */

export const meta = {
	title: 'Kevin Tran — Product Engineer',
	description:
		'Product engineer. Four years shipping production software across frontend, backend, data, and infrastructure — currently building and operating MadeForSeconds end to end.',
	url: 'https://kevin-tran12.github.io',
} as const;

export const hero = {
	name: 'Kevin Tran',
	role: 'Product Engineer',
	location: 'Atlanta, open to relocation',
	// Leads with the claim rather than the name — the name sits in the nav.
	// Engineers open with who they are; product people open with what they do.
	headline: 'I turn problems that are still vague into product that ships.',
	summary:
		'Interface, API, data model, and the infrastructure underneath it. Four years doing that in production, and right now a live platform I designed, built, and operate on my own.',
	// The cloud certs are real differentiators, but only one earns hero space
	// now that the target is product work. ACE lives in credentials.
	badges: ['Google Cloud Professional Cloud Architect', '4 years in production'],
} as const;

export type Stat = { value: string; label: string };

/**
 * Sits directly under the hero so the first thing past the claim is
 * evidence for it. Every figure here is checked against the repo, not
 * the resume — see the MadeForSeconds README's CI-enforced counts.
 */
export const stats: Stat[] = [
	{ value: '1,112', label: 'backend tests gating every merge' },
	{ value: '19', label: 'MCP tools running the whole pipeline' },
	{ value: '$10', label: 'hard monthly ceiling on LLM spend' },
];

export const about = {
	// The old intro and closing said what the hero headline and the approach
	// cards now say; keeping them would be the same claim three times.
	groups: [
		{
			title: 'What I build',
			items: [
				'Full-stack product features in React/TypeScript and Python (FastAPI, Django)',
				'LLM features that are grounded, metered, and safe to leave running',
				'Payments and money-correct workflows where being wrong once is expensive',
				'Integrations against third-party platforms and their failure modes',
				'Internal tooling that deletes manual work instead of documenting it',
			],
		},
		{
			title: 'What I bring with it',
			items: [
				'Production debugging — including in systems I did not write',
				'Test suites and CI that gate a release rather than decorate it',
				'Google Cloud and Terraform, so shipping does not stop at the merge',
				'Authentication, least-privilege access, and API hardening',
				'Working directly with non-engineers to find the real requirement',
			],
		},
	],
	personal:
		'Outside of engineering I enjoy powerlifting, cooking, and automotive projects — I am usually happiest building or fixing something with my hands.',
} as const;

export type ApproachItem = { title: string; body: string };

/**
 * Product and forward-deployed interviews screen for judgment under ambiguity,
 * which a list of technologies cannot show. Written as behaviour rather than
 * self-description — each one is something an interviewer can push on.
 */
export const approach: ApproachItem[] = [
	{
		title: 'Find the real requirement first',
		body: 'My early questions tend to sound like pushback — why this constraint, what breaks if we skip it, what are people actually complaining about. That is deliberate. I want the model underneath the request, because a feature built on a misread requirement is expensive to unwind and nobody notices until it ships.',
	},
	{
		title: 'Make the risky thing reversible',
		body: 'I am not cautious about shipping. I am cautious about not being able to un-ship. Tests that gate the release, a staging environment that actually blocks production, rollback paths, spend ceilings, and monitoring that tells me before a user does — those are what let me move fast on the parts that matter.',
	},
	{
		title: 'Understand the failure, not just the fix',
		body: 'I can live with an experiment failing. I cannot live with not knowing why it failed. More than a few of the best things I have built started as a postmortem on something that broke in a way I did not predict — the cost controls on MadeForSeconds are entirely that.',
	},
	{
		title: 'Own it after launch',
		body: 'I stay on what I shipped: the production support, the debugging, the second-order problem nobody saw coming. Handing a feature off at the merge means never finding out which of your assumptions were wrong. Shipping is the middle of the job, not the end of it.',
	},
];

export const featuredProject = {
	name: 'MadeForSeconds',
	tagline:
		'A production food platform with a shipped AI assistant, agent-driven publishing, and payments — built and operated by one person.',
	description:
		'A public recipe site with supporter subscriptions, an admin expense ledger behind Google OAuth and a TOTP second factor, a conversational assistant grounded in an owner-authored ingredient knowledge base, and a 19-tool MCP server that lets Claude draft, illustrate, publish, and promote recipes as an authenticated client. Every product decision and every technical one is mine.',
	links: {
		live: 'https://madeforseconds.pages.dev',
		repo: 'https://github.com/kevin-tran12/MadeForSeconds',
	},
	status: 'Live in production',
	/**
	 * The frame that separates a product engineer from a software engineer:
	 * it shows the decision and what it cost, not a list of features.
	 */
	story: [
		{
			label: 'The problem',
			body: 'Publishing a recipe meant sitting in an admin form. One person cooking, shooting, and writing could not also be a data-entry clerk.',
		},
		{
			label: 'The decision',
			body: 'Take the admin UI off the critical path. A 19-tool MCP server over OAuth 2.1, so drafting, revision, images, and publishing happen in the conversation where the recipe gets written.',
		},
		{
			label: 'The outcome',
			body: 'Every mutating call rate-budgeted, audited, and idempotency-keyed, so the workflow survives being interrupted or retried.',
		},
	],
	// One line that conveys the whole system before any card is read.
	architecture:
		'Cloudflare Pages → Cloud Run (FastAPI) → Firestore, with a single service backing the browser API, the agent-facing MCP endpoint, and the assistant. Terraform manages every GCP resource, and the Anthropic API is reached through Workload Identity Federation rather than a stored key.',
	highlights: [
		{
			title: 'Sous Chef — an LLM feature that is safe to leave running',
			points: [
				'Answers are grounded in an owner-authored ingredient knowledge base rather than the model’s own recall',
				'A cheap Haiku classifier routes each question to one specialist prompt — routing, not fan-out, so an answer is still a single Sonnet call',
				'Food-safety temperatures, allergen disclaimers, and refusal rules live in the shared core, so a misrouted question still gets the right answer',
				'Per-tier quotas over a hard $10/month spend ceiling, metered before the call is made rather than reconciled after',
				'Deterministic PII stripping runs before the model sees the message, not after it responds',
			],
		},
		{
			title: 'A 19-tool MCP server so one person can run the whole pipeline',
			points: [
				'Drafting, revision, image upload, publishing, and ingredient profiles all happen in the conversation where the recipe is being written',
				'OAuth 2.1 through WorkOS AuthKit — the backend is a pure resource server and holds no credentials of its own',
				'Every mutating call is rate-budgeted, idempotency-keyed, and written to an append-only audit log that records argument names and never their values',
			],
		},
		{
			title: 'Payments that cannot double-charge',
			points: [
				'Exactly-once Stripe webhook processing through a transactional reservation, not a best-effort dedupe',
				'An immutable per-payment donation ledger, so the money record is never a derived value',
				'Signed-email-link cancellation, so a supporter never needs an account in order to leave',
			],
		},
		{
			title: 'The kill switch that made things worse',
			points: [
				'The billing circuit breaker set Cloud Run max instances to zero — but in proto3 a zero serializes as unset, so the API applied its own default and raised the cap from 1 to 20. The kill switch increased spend exposure twentyfold',
				'Rewrote it to revoke the public invoker role instead, then hit the knock-on: that 403 carries no CORS headers, so the browser cannot distinguish "refusing us" from "offline"',
				'Fixed with two independent signals — a status file on a bucket that stays up, and an opaque no-cors probe — plus a typing rule that a missing status file can only soften the message, never claim an outage was intentional',
			],
		},
		{
			title: 'Shipping quickly without breaking it',
			points: [
				'1,112 backend and 143 frontend tests plus Playwright end-to-end specs gate every merge',
				'Build once, promote by digest — production only deploys after a full staging run against that same image',
				'Daily Terraform drift detection, SBOM and build provenance, and secret scanning across full git history',
			],
		},
	],
	// Chips rather than a layer/technology table — the table read like internal docs.
	stack: [
		'React 19',
		'TypeScript',
		'FastAPI',
		'Python 3.12',
		'Anthropic API',
		'MCP',
		'Cloud Run',
		'Firestore',
		'Terraform',
		'GitHub Actions',
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
	/** Only set where an initiative spans a distinct phase of the engagement. */
	period?: string;
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
		org: 'MadeForSeconds',
		role: 'Founder & Product Engineer',
		period: '2026 – Present',
		summary:
			'Own a production platform end to end — what gets built, how it is architected, how it ships, and what happens when it breaks. Full architecture and security detail is in the case study above.',
		initiatives: [
			{
				title: 'Shipped a conversational assistant to real users',
				body: 'Built Sous Chef: a retrieval-grounded cooking assistant with router-selected specialist prompts, streamed responses, clarifying questions, per-tier quotas, and a hard monthly spend ceiling enforced before the model is called. Safety and refusal rules sit in a shared core so routing can never bypass them.',
				outcome:
					'An AI feature with a known worst-case monthly cost, shipped to production rather than kept as a demo.',
			},
			{
				title: 'Took the admin UI off the critical path',
				body: 'Designed a 19-tool MCP server over OAuth 2.1 so the entire authoring pipeline — draft, revise, illustrate, publish, maintain ingredient profiles — runs inside the conversation where the recipe is being written. Every mutating tool is rate-budgeted, audited, and idempotency-keyed.',
				outcome:
					'Publishing stopped being a sequence of forms, and the operator workflow now survives being interrupted or retried.',
			},
			{
				title: 'Built a release process one person can trust',
				body: 'Put in a build-once, promote-by-digest pipeline that refuses to deploy when the staging and production images differ, gated merges on the full test suite and security scanning, and added daily infrastructure drift detection and supply-chain attestation.',
				outcome:
					'Can ship to production on any given day without a second reviewer, and know within a day when reality diverges from the code.',
			},
		],
	},
	{
		org: 'Novogradac & Company LLP',
		role: 'Full-Stack Software Engineer',
		period: '2022 – 2026',
		summary:
			'Two phases. First the internal pipeline analysts used to produce the firm’s LIHTC market studies, then two year-scale iterations of its primary public web platform. Rotated into whichever team needed help throughout — roughly four additional projects a year alongside primary product work.',
		initiatives: [
			{
				title: 'Market studies and rent comparability studies',
				period: '2022 – 2024',
				body: 'Core engineer on the small team behind the internal application analysts used to produce the firm’s market studies and rent comparability studies — the reports that establish where the LIHTC rent line falls for a given market. An analyst entered project data, a Pandas-based pipeline processed it, and the system produced the finished 20-to-40-page report: charts, data tables, and narrative sections composed by a deterministic rule-based generator rather than written by hand.',
				outcome:
					'The only software behind those reports, and a contributor to its standing as the leading practice in the field. Turnaround went from roughly two weeks to roughly two days.',
			},
			{
				title: 'Public platform iterations, front to back',
				period: '2024 – 2026',
				body: 'Owned features end to end across two full iterations of the primary public platform — including the discovery work when a requirement was not yet defined — shipping across frontend, backend, authentication, search, data models, admin tooling, integrations, SEO, testing, and production debugging.',
				outcome:
					'Carried features from discovery through to production rather than picking up a finished spec at a frontend or backend boundary.',
			},
			{
				title: 'Migrations and release sequencing',
				body: 'Owned most of the migration scripts across the platform work — PostgreSQL schema changes, the data moves that came with them, and the deployment sequencing around each release. All of it ran against a live production database, where the wrong ordering is not something you undo afterwards.',
				outcome:
					'Data came through repeated production upgrades intact.',
			},
			{
				title: 'Arguing for LLMs, including against my own work',
				body: 'Advocated for bringing LLM tooling — Claude Code, ChatGPT — into day-to-day engineering and analyst work. That meant making the case against something I had helped build: rule-based generation was the right answer for report prose in 2022, and the right thing to hand to a model once models became reliable enough to do it. The generator moved to maintenance pending deprecation on exactly that reasoning.',
				outcome:
					'Pushed the firm toward adopting AI tooling rather than defending the pre-AI system I had a stake in.',
			},
			{
				title: 'Dropping into unfamiliar codebases',
				body: 'Routinely stepped into teams and systems I had not written when they needed additional support — scoping existing behaviour quickly, identifying what was incomplete or quietly broken, and contributing without a long ramp-up.',
				outcome:
					'Became the person assigned when a project needed someone productive in an unfamiliar system fast.',
			},
			{
				title: 'Payment reconciliation automation',
				body: 'Automated weekly reconciliation across Stripe and a third-party education platform, resolving nested payments, shared identifiers, and duplicate records to produce a single consolidated report.',
				outcome:
					'Replaced a recurring manual comparison with consolidated stakeholder reporting.',
			},
			{
				title: 'Google Maps re-engineering',
				body: 'Migrated a complex legacy Google Maps implementation to a substantially different API and configuration model, owning the research, implementation, testing, release support, and the compatibility debugging that surfaced later.',
				outcome:
					'Kept a customer-facing feature working through a breaking third-party migration.',
			},
			{
				title: 'Raising the delivery floor',
				body: 'Advocated for stronger test coverage and added CI visibility, automated and Selenium regression tests, and improvements to logging, documentation, and browser-security controls.',
				outcome:
					'Made regressions visible before release rather than after a report from production.',
			},
		],
	},
];

export const valueProposition = {
	statement:
		'The thread through all of it is the same: take something nobody has fully specified, work out what it actually needs to do, build it, and stay with it once it is live. I am most useful where the problem is still being defined and the person holding it is not an engineer.',
	areas: [
		'Taking a vague requirement to a shipped feature',
		'Full-stack product development (React/TypeScript, Python)',
		'LLM features that are grounded, metered, and safe to ship',
		'Payments, integrations, and money-correct workflows',
		'Production debugging and post-launch ownership',
		'Delivery pipelines that let a small team ship often',
	],
};

export type SkillGroup = { name: string; items: string[] };

/**
 * Sits high on the page so a 15-second scan hits the keywords before the
 * prose. Ordered product-first — the cloud stack is real depth, but it is
 * no longer the headline.
 */
export const skills: SkillGroup[] = [
	{
		name: 'Product Engineering',
		items: [
			'End-to-end ownership',
			'Requirements discovery',
			'Rapid prototyping',
			'Production debugging',
			'Workflow automation',
		],
	},
	{
		name: 'Languages & Frameworks',
		items: [
			'Python',
			'TypeScript',
			'JavaScript (ES6)',
			'React',
			'FastAPI',
			'Django',
			'Django Ninja',
			'Wagtail',
			'SQL',
		],
	},
	{
		name: 'AI & Agents',
		items: [
			'Anthropic API',
			'MCP',
			'Retrieval grounding',
			'Prompt caching',
			'LLM cost controls',
			'Golden-set evals',
		],
	},
	{
		name: 'Data & Integrations',
		items: [
			'PostgreSQL',
			'Firestore',
			'Elasticsearch',
			'Redis',
			'pandas',
			'Stripe',
			'REST APIs',
			'OAuth 2.0 / 2.1',
		],
	},
	{
		name: 'Cloud & Delivery',
		items: [
			'Google Cloud Platform',
			'Cloud Run',
			'Terraform',
			'Docker',
			'GitHub Actions',
			'Cloud Build',
			'GitLab CI/CD',
			'Cloudflare',
		],
	},
	{
		name: 'Testing & Security',
		items: [
			'pytest',
			'Vitest',
			'Playwright',
			'Selenium',
			'SAST in CI',
			'Least-privilege IAM',
			'TOTP MFA',
			'CSP / HSTS',
		],
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
	lede:
		'I am looking for product engineer and forward-deployed engineering roles — the kind where I would own a problem from the first conversation with whoever has it through to the thing being live. I am in Atlanta and genuinely open on geography: SF, NYC, Seattle, Boston, Austin, Denver, LA, and Portland all appeal. Email is the fastest way to reach me.',
	socials: [
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-tran-059926124/' },
		{ name: 'GitHub', url: 'https://github.com/kevin-tran12' },
	],
} as const;

export const nav = [
	{ label: 'Work', href: '#work' },
	{ label: 'Approach', href: '#approach' },
	{ label: 'Strengths', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Tech', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
] as const;
