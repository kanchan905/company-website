import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-tally-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './tally-solutions.component.html',
  styleUrl: './tally-solutions.component.scss'
})
export class TallySolutionsComponent {
  readonly heroBadges = [
    '⭐ Tally 5-Star Certified Partner',
    '📍 Kundli • Sonipat • NCR',
    '🛡️ Genuine licenses only'
  ];

  readonly heroStats = [
    { value: 'TallyPrime', label: 'Latest release' },
    { value: 'Silver / Gold', label: 'Single & multi-user' },
    { value: 'TSS / AMC', label: 'Renewal + support' },
    { value: 'Cloud', label: 'TSplus / hosted access' }
  ];

  readonly editions = [
    {
      icon: '🥈',
      tag: 'Single user',
      name: 'TallyPrime Silver',
      summary: 'Ideal for small businesses — one user at a time, all accounting + GST features.',
      bullets: ['Single user license', 'All GST workflows', 'Lifetime use*'],
      cta: 'Buy Silver',
      ctaLink: '/contact'
    },
    {
      icon: '🥇',
      tag: 'Multi user',
      name: 'TallyPrime Gold',
      summary: 'For teams — unlimited users on one LAN, perfect for accounts + sales + inventory parallel work.',
      bullets: ['Multi-user (LAN)', 'Same features as Silver', 'Best for growing SMBs'],
      cta: 'Buy Gold',
      ctaLink: '/contact',
      highlight: true
    },
    {
      icon: '☁️',
      tag: 'Cloud access',
      name: 'TallyPrime on Cloud',
      summary: 'Access Tally remotely — branches, work-from-home, on-the-go owners. TSplus / hosted setup.',
      bullets: ['Anywhere access', 'Backup & uptime', 'User access control'],
      cta: 'Plan Cloud setup',
      ctaLink: '/solutions/cloud-solutions'
    }
  ];

  readonly capabilities = [
    {
      icon: '🧾',
      title: 'GST & compliance',
      description:
        'GSTR-ready invoicing, e-invoice (IRP), e-way bills, and returns matching — less compliance stress.',
      linkText: 'GST setup help',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'Business reports',
      description:
        'P&L, balance sheet, receivables, cash flow, party-wise outstanding — decision-ready for owners.',
      linkText: 'Reports walkthrough',
      link: '/contact'
    },
    {
      icon: '📦',
      title: 'Inventory & stock',
      description:
        'Godowns, batches, expiry, item-wise profit — wholesale, retail, and manufacturing.',
      linkText: 'Inventory advice',
      link: '/contact'
    },
    {
      icon: '👥',
      title: 'Payroll',
      description:
        'Salary, PF, ESI, professional tax — payroll modules with clean integration.',
      linkText: 'Payroll consult',
      link: '/contact'
    },
    {
      icon: '🏦',
      title: 'Banking',
      description:
        'Bank reconciliation, cheque printing, multi-bank tracking — less manual matching.',
      linkText: 'Banking workflows',
      link: '/contact'
    },
    {
      icon: '🔐',
      title: 'Security & access',
      description:
        'User roles, password policy, voucher-type access — stronger internal control.',
      linkText: 'Security review',
      link: '/contact'
    }
  ];

  readonly services = [
    { icon: '🛒', name: 'Sale & licensing', detail: 'Genuine TallyPrime Silver/Gold — proper activation and registration in the owner’s name.' },
    { icon: '🔁', name: 'TSS renewal / AMC', detail: 'Updates, statutory changes, priority support — renewal reminders + assistance.' },
    { icon: '🧰', name: 'Implementation', detail: 'Company creation, masters, chart of accounts, opening balances — clean start.' },
    { icon: '🎓', name: 'Training', detail: 'Accountant + owner training — recorded sessions + cheat sheets included.' },
    { icon: '🧩', name: 'Customisation / TDL', detail: 'Custom invoices, dashboards, fields, reports — TDL by certified team.' },
    { icon: '🚑', name: 'Data rescue & migration', detail: 'Corrupt company recovery, version upgrades, Tally ERP 9 → TallyPrime migration.' }
  ];

  readonly process = [
    { step: '01', title: 'Understand', detail: 'Business size, GST setup, multi-branch needs — short discovery.' },
    { step: '02', title: 'Quote & licensing', detail: 'Edition, license count, AMC, cloud — clear written quote.' },
    { step: '03', title: 'Setup', detail: 'Install, configure masters, train accountant, go-live checklist.' },
    { step: '04', title: 'Support', detail: 'AMC / on-call support, TSS renewals, ongoing training.' }
  ];

  readonly faqs = [
    {
      q: 'What is the difference between a genuine Tally license and a pirated copy?',
      a:
        'A genuine license registers to your name / company, includes TSS support, and receives statutory updates on time. Pirated copies carry legal risk, no updates, and higher data-loss exposure. softTech supplies only genuine licenses.'
    },
    {
      q: 'We still run Tally ERP 9 — how do we move to TallyPrime?',
      a:
        'TallyPrime stays compatible with ERP 9 — companies open directly. After verified backups we handle migration, training, and cheat sheets so the team settles in comfortably.'
    },
    {
      q: 'What does AMC cover?',
      a:
        'Phone / remote support, doubt resolution, basic troubleshooting, TSS renewal coordination, and periodic health checks. Onsite visits can be added per scope. Written AMC scope is always shared.'
    },
    {
      q: 'Can Tally run in the cloud?',
      a:
        'Yes — TSplus, hosted setups, or licensed Tally on Cloud via partners. Useful for branches / WFH. We design architecture, backups, and user access.'
    },
    {
      q: 'When is Tally customisation (TDL) useful?',
      a:
        'Custom invoice layouts, extra fields, owner dashboards, MIS reports, automated emailed reports — typically delivered through TDL. Our certified team quotes in writing after scope.'
    }
  ];
}
