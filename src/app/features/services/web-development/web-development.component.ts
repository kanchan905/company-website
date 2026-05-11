import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {
  readonly heroBadges = [
    '📱 Mobile-first layouts',
    '⚡ Fast, SEO-ready builds',
    '🔧 Clear handover + support'
  ];

  readonly heroStats = [
    { value: '100%', label: 'Responsive delivery' },
    { value: 'Core Web Vitals', label: 'Performance mindset' },
    { value: 'SMB', label: 'Budget-friendly phases' },
    { value: '1 team', label: 'Design → deploy → fix' }
  ];

  readonly whyWeb = [
    {
      icon: '🎯',
      title: 'Leads, not just “pretty pages”',
      description:
        'Clear CTAs, enquiry forms, WhatsApp click-to-chat — everything wired to support your sales funnel.'
    },
    {
      icon: '📐',
      title: 'Controlled scope',
      description:
        'MVP first, then iterations. Fixed milestones to reduce surprise scope creep.'
    },
    {
      icon: '🛡️',
      title: 'Maintainable stack',
      description:
        'Modern frameworks and clean structure — easier for anyone joining later to understand the codebase.'
    },
    {
      icon: '🌐',
      title: 'Hosting & domain guidance',
      description:
        'DNS, SSL, email records — we guide you through the technical maze; deploy via us or coordinate with your IT.'
    }
  ];

  readonly offerings = [
    {
      icon: '🏢',
      title: 'Corporate & brand websites',
      description: 'Trust-building homepages: services, team, certifications, client logos, contact — fast load, clear navigation.',
      linkText: 'Discuss corporate site',
      link: '/contact'
    },
    {
      icon: '🛒',
      title: 'Catalog & light e‑commerce',
      description: 'Product showcase, enquiry cart, payment gateway integration where needed — practical for SMB catalogues.',
      linkText: 'Plan storefront',
      link: '/contact'
    },
    {
      icon: '📋',
      title: 'Landing & campaign pages',
      description:
        'Google Ads / social campaigns focused landing pages — single goal, tracking hooks, A/B-friendly structure.',
      linkText: 'Campaign page quote',
      link: '/contact'
    },
    {
      icon: '🔐',
      title: 'Client portals & dashboards',
      description:
        'Light login portals: order status, document upload, support tickets — shifting routine ops to the web.',
      linkText: 'Portal discovery call',
      link: '/contact'
    },
    {
      icon: '🔗',
      title: 'Integrations & APIs',
      description:
        'CRM forms, Tally-adjacent workflows, email notifications, third-party APIs — end-to-end wiring from backend to frontend.',
      linkText: 'Integration scope',
      link: '/contact'
    },
    {
      icon: '🔍',
      title: 'SEO & performance basics',
      description:
        'Meta tags, structured data basics, image optimisation, lazy loading — foundations that help search and speed.',
      linkText: 'SEO health check',
      link: '/contact'
    }
  ];

  readonly stack = [
    { icon: 'A', name: 'Angular & SPA', detail: 'Enterprise-style apps, reusable components, typed codebase.' },
    { icon: '⚡', name: 'Performance', detail: 'Lazy routes, image strategy, lighthouse-friendly targets.' },
    { icon: '♿', name: 'Accessible UX', detail: 'Semantic HTML, contrast, keyboard paths — reinforces brand trust.' },
    { icon: '☁️', name: 'Deploy ready', detail: 'Static hosting, CDN, env configs — handover docs included.' }
  ];

  readonly process = [
    { step: '01', title: 'Discover', detail: 'Goals, audience, content map, references — 1–2 working sessions.' },
    { step: '02', title: 'Design', detail: 'Wireframe → UI approval; mobile breakpoints upfront.' },
    { step: '03', title: 'Build', detail: 'Sprint-wise demos; staging URL for your team review.' },
    { step: '04', title: 'Launch', detail: 'DNS cutover, SSL, analytics; training walkthrough recorded.' }
  ];

  readonly faqs = [
    {
      q: 'How long does a typical corporate site take?',
      a:
        'After content is ready, 3–6 weeks is common depending on scope. A campaign landing can ship in 1–2 weeks when copy and assets arrive on time.'
    },
    {
      q: 'Do you handle design or development only?',
      a:
        'Both — in-house UI design, or pixel-perfect build from your Figma. We also collaborate with mixed teams.'
    },
    {
      q: 'Who manages hosting?',
      a:
        'Deploy to your account with documentation, or we suggest a managed deploy package. You stay the long-term owner — no lock-in.'
    },
    {
      q: 'Changes later / AMC?',
      a:
        'Retainer or ticket-based AMC available. After training, small text updates may be feasible yourself if we set up CMS / static workflow.'
    }
  ];
}
