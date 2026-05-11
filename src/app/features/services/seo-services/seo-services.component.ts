import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-seo-services',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './seo-services.component.html',
  styleUrl: './seo-services.component.scss'
})
export class SeoServicesComponent {
  readonly heroBadges = [
    '📈 Organic-first growth',
    '📍 Google Business Profile',
    '🇮🇳 India + NCR focused'
  ];

  readonly heroStats = [
    { value: 'Search Console', label: 'Audit baseline' },
    { value: 'On + Off page', label: 'Full-funnel SEO' },
    { value: 'Local SEO', label: 'Maps + reviews' },
    { value: 'Monthly report', label: 'Clear progress' }
  ];

  readonly whySeo = [
    {
      icon: '🎯',
      title: 'Intent over keyword stuffing',
      description:
        'We target queries your buyers actually search for — buying intent, not vanity traffic.'
    },
    {
      icon: '🛠️',
      title: 'Technical + content together',
      description:
        'If the site is not fast and crawl-friendly, rankings stall. Content alone is not enough. We fix both together.'
    },
    {
      icon: '📍',
      title: 'Local SEO for service areas',
      description:
        'Kundli, Sonipat, Panipat, NCR — proper Google Business Profile and map-pack setup for service-area businesses.'
    },
    {
      icon: '📊',
      title: 'Reports without fluff',
      description:
        'Monthly: what shipped, where rankings moved, next month’s plan — in an owner-readable format.'
    }
  ];

  readonly services = [
    {
      icon: '🔬',
      title: 'SEO audit & strategy',
      description: 'Full site audit — technical, on-page, off-page — plus 90-day roadmap with priorities and ownership.',
      linkText: 'Book SEO audit',
      link: '/contact'
    },
    {
      icon: '🔧',
      title: 'Technical SEO',
      description:
        'Crawl errors, Core Web Vitals, schema, sitemap, canonical, mobile usability — aligned with how search engines crawl.',
      linkText: 'Plan technical fixes',
      link: '/contact'
    },
    {
      icon: '📝',
      title: 'On-page & content SEO',
      description:
        'Titles, meta, headings, internal links, and topic clusters aligned with buying intent. Existing pages optimised too.',
      linkText: 'Improve on-page',
      link: '/contact'
    },
    {
      icon: '📍',
      title: 'Local & Google Business Profile',
      description:
        'GBP setup, categories, services, weekly posts, reviews strategy — built for visibility in the local pack.',
      linkText: 'Local SEO plan',
      link: '/contact'
    },
    {
      icon: '🔗',
      title: 'Backlinks & off-page',
      description: 'Quality, niche-relevant backlinks. Listings, partnerships, PR-style mentions — spammy directories avoid.',
      linkText: 'Discuss off-page',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'Analytics & tracking',
      description:
        'GA4, Search Console, GBP insights — structured goal tracking with monthly performance reviews.',
      linkText: 'Setup analytics',
      link: '/contact'
    }
  ];

  readonly stack = [
    { icon: '🧪', name: 'Audit tools', detail: 'Search Console, GA4, Lighthouse, schema validators — vendor-neutral.' },
    { icon: '📑', name: 'Content briefs', detail: 'Topic, intent, outline, internal links — structured briefs for writers.' },
    { icon: '🏷️', name: 'Schema & meta', detail: 'Organization, LocalBusiness, FAQ schema — aimed at rich results.' },
    { icon: '📥', name: 'Reporting cadence', detail: 'Monthly PDF plus a short call — what shipped, what is pending, next focus.' }
  ];

  readonly process = [
    { step: '01', title: 'Audit', detail: 'Tech + content + local SEO — current state baseline.' },
    { step: '02', title: 'Plan', detail: 'Priority list + monthly roadmap, agreed with owner.' },
    { step: '03', title: 'Execute', detail: 'Tech fixes, content publishing, GBP updates, links.' },
    { step: '04', title: 'Review', detail: 'Monthly metrics + adjustments — what is working, what is not.' }
  ];

  readonly faqs = [
    {
      q: 'How soon do SEO results appear?',
      a:
        'Technical fixes can show impact in 2–6 weeks. Content and backlinks usually need a realistic window of 3–6 months. We set honest expectations from day one.'
    },
    {
      q: 'Do you guarantee rankings?',
      a:
        'No serious agency can guarantee #1 — we do not control Google’s algorithms. We guarantee process, transparency, and measurable progress.'
    },
    {
      q: 'We already have a site — is redesign mandatory?',
      a:
        'Not always. Often technical and content improvements work on the existing site. Major redesign only when structure or speed is badly broken.'
    },
    {
      q: 'For local businesses, is GBP alone enough?',
      a:
        'GBP is essential but rarely sufficient on its own. Website, reviews, citations, and content together build trust for both algorithms and users.'
    }
  ];
}
