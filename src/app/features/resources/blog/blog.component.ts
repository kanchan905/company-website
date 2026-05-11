import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  readonly heroBadges = [
    '📌 Tally · GST · IT',
    '💡 SMB focused',
    '🇮🇳 India compliance'
  ];

  readonly heroStats = [
    { value: 'Guides', label: 'How-to & checklists' },
    { value: 'Playbooks', label: 'Real workflows' },
    { value: 'Updates', label: 'Statutory & product news' },
    { value: 'Free', label: 'No paywall — ever' }
  ];

  readonly topics = [
    'TallyPrime',
    'GST & e-invoice',
    'Billing & POS',
    'CRM & sales',
    'Cloud & backup',
    'Security',
    'Automation'
  ];

  readonly featured = {
    tag: 'Featured',
    title: 'TallyPrime + day-end discipline: fewer surprises at month close',
    summary:
      'Simple habits — backup before close, voucher review checklist, and receivables ageing on one screen — that calm month-end before the CA visit.',
    date: '6 May 2026',
    readTime: '8 min read'
  };

  readonly posts = [
    {
      title: 'How to improve cash flow visibility in growing businesses',
      category: 'Finance',
      date: '28 Apr 2026',
      readTime: '6 min read',
      summary:
        'Practical reporting and receivables tracking patterns that reduce cash surprises without enterprise BI tools.'
    },
    {
      title: 'Tally + automation: practical setup for faster collections',
      category: 'Automation',
      date: '22 Apr 2026',
      readTime: '5 min read',
      summary:
        'Reminder workflows, cleaner ledgers, and WhatsApp nudges — practical ways to shorten SMB collection cycles.'
    },
    {
      title: 'Choosing the right CRM for B2B sales teams',
      category: 'Sales',
      date: '15 Apr 2026',
      readTime: '7 min read',
      summary:
        'Team size, process maturity, and Tally integration — a framework that skips vanity features.'
    },
    {
      title: 'Local SEO checklist for service-area businesses (Kundli / NCR)',
      category: 'Marketing',
      date: '8 Apr 2026',
      readTime: '6 min read',
      summary:
        'Google Business Profile, reviews, citations, and on-page basics — actionable checklist for map-pack visibility.'
    },
    {
      title: 'Backup strategy for Tally companies: 3-2-1 simplified for SMBs',
      category: 'IT & security',
      date: '1 Apr 2026',
      readTime: '5 min read',
      summary:
        'Local copy + cloud copy + restore drills — realistic coverage for ransomware and disk failures.'
    },
    {
      title: 'E-invoice (IRP) readiness: what accountants should verify first',
      category: 'GST',
      date: '25 Mar 2026',
      readTime: '6 min read',
      summary:
        'Master data, HSN mapping, auth tokens, and error logs — top failure points before go-live.'
    },
    {
      title: 'Why thermal POS + Tally sync beats “Excel-only” billing',
      category: 'Billing',
      date: '18 Mar 2026',
      readTime: '5 min read',
      summary:
        'Counter speed versus accounting depth — combining both to reduce duplicate entry and stock mismatch.'
    },
    {
      title: 'Cloud access for Tally: TSplus vs hosted — decision guide',
      category: 'Cloud',
      date: '10 Mar 2026',
      readTime: '7 min read',
      summary:
        'Branches, WFH, and budget — architecture choices that stay maintainable long term.'
    },
    {
      title: 'Quick Heal + patch hygiene: minimum viable security for offices',
      category: 'Security',
      date: '3 Mar 2026',
      readTime: '4 min read',
      summary:
        'USB policy, admin rights, and weekly reboot — a realistic baseline for compact teams.'
    }
  ];

  readonly faqs = [
    {
      q: 'Where can I read full articles?',
      a:
        'Today we curate summaries and topic requests. Use “Discuss with expert” on any title for detailed notes or a call. A dedicated article CMS may arrive soon.'
    },
    {
      q: 'Are guest posts or collaborations possible?',
      a:
        'Yes — we share editorial guidelines with industry experts. Pitch topics to tyagi.sts@gmail.com (subject: Blog pitch).'
    },
    {
      q: 'How do I subscribe to the newsletter?',
      a:
        'Email us below — we can manually add you to the monthly digest (Tally + GST + IT tips) until the formal list goes live.'
    }
  ];
}
