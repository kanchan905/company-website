import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-business-automation',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './business-automation.component.html',
  styleUrl: './business-automation.component.scss'
})
export class BusinessAutomationComponent {
  readonly heroBadges = [
    '🤖 Tally-based Workflows',
    '📨 WhatsApp + Email Auto',
    '⚡ Setup in days, not months'
  ];

  readonly heroStats = [
    { value: '4 hrs', label: 'Saved per day per user' },
    { value: '60%', label: 'Faster collections' },
    { value: '100%', label: 'Audit-trail enabled' },
    { value: '3x', label: 'Faster GST filing' }
  ];

  readonly pains = [
    {
      icon: '📞',
      title: 'Daily Follow-ups',
      description:
        'Outstanding collections mean all-day phone calls — staff fatigue and irritated customers.'
    },
    {
      icon: '🧾',
      title: 'Manual Invoicing',
      description:
        'Copying Excel into Tally, GST mismatches, repeat entries — the same work redone several times a day.'
    },
    {
      icon: '📊',
      title: 'No Visibility',
      description:
        'Owners lack a real-time picture of cash, stock, and sales — decisions arrive late and emotionally.'
    },
    {
      icon: '⚠️',
      title: 'Missed Deadlines',
      description:
        'GST returns, TDS, e-invoice — monthly last-minute panic, penalties, and compliance stress.'
    }
  ];

  readonly automations = [
    {
      icon: '📨',
      title: 'Outstanding Reminders',
      description:
        'WhatsApp and email auto-reminders by ageing buckets — templated messages for 30 / 60 / 90 day tiers.',
      linkText: 'Setup reminders',
      link: '/contact'
    },
    {
      icon: '🧾',
      title: 'E-Invoice Automation',
      description:
        'Generate e-invoices directly from TallyPrime with automatic IRN retrieval — no portal hopping or manual JSON.',
      linkText: 'Enable e-invoice',
      link: '/contact'
    },
    {
      icon: '🛒',
      title: 'GSTR-1 / 3B Auto Upload',
      description:
        'Upload straight from Tally data to the GST portal — reconciliation and error fixes on one screen.',
      linkText: 'GST workflow',
      link: '/contact'
    },
    {
      icon: '🏦',
      title: 'Bank Auto Reconciliation',
      description:
        'Import bank statements with rules-based matching — reconcile thousands of lines in minutes.',
      linkText: 'Bank automation',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'Daily MIS to Owner',
      description:
        'Daily digest of sales, stock, cash, and top customers via WhatsApp / email — on the owner’s phone by 9 AM.',
      linkText: 'Build owner MIS',
      link: '/contact'
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description:
        'Stock reorders, credit-limit breaches, due payments, low cash — threshold alerts triggered from TallyPrime.',
      linkText: 'Configure alerts',
      link: '/contact'
    },
    {
      icon: '✍️',
      title: 'Approval Matrix',
      description:
        'Sales orders, purchase orders, and high-value vouchers — role-based digital approvals with audit trails.',
      linkText: 'Plan approvals',
      link: '/contact'
    },
    {
      icon: '🔄',
      title: 'Scheduled Backups',
      description:
        'Daily encrypted backup plus WhatsApp confirmation — hard to forget when the system sends the reminder.',
      linkText: 'Enable backups',
      link: '/contact'
    },
    {
      icon: '📑',
      title: 'Auto Report Schedules',
      description:
        'Monthly P&L, balance sheet, and party ledgers emailed on schedule — no manual regeneration.',
      linkText: 'Schedule reports',
      link: '/contact'
    }
  ];

  readonly impactRows = [
    { label: 'Outstanding follow-up', before: '3-4 hrs / day staff', after: 'Auto WhatsApp + email' },
    { label: 'E-invoice generation', before: 'Portal copy-paste', after: 'TallyPrime → IRN auto' },
    { label: 'GST filing', before: '4-5 days end of month', after: '1 day with reconciliation' },
    { label: 'Bank reconciliation', before: '1-2 days manual', after: 'Minutes — rules-based' },
    { label: 'Owner reports', before: 'Pull-request to accountant', after: 'Daily 9 AM auto digest' },
    { label: 'Stock alerts', before: 'Reactive — out of stock', after: 'Proactive reorder triggers' }
  ];

  readonly steps = [
    {
      step: '01',
      title: 'Process Audit',
      detail:
        'Over 2–3 days we observe your daily workflow and pinpoint the biggest time sinks.'
    },
    {
      step: '02',
      title: 'Automation Map',
      detail:
        'A prioritised automation roadmap — quick wins first, complex workflows in phase two.'
    },
    {
      step: '03',
      title: 'Configure & Test',
      detail:
        'Configure TallyPrime add-ons, integrations, and templates — go live after UAT.'
    },
    {
      step: '04',
      title: 'Train & Refine',
      detail:
        'Staff training, escalation matrix, and first-month tuning — ROI typically visible within 30 days.'
    }
  ];

  readonly tools = [
    { icon: '🧾', title: 'TallyPrime + Connected Services', text: 'Native e-invoice, GST, banking, and connected workflows.' },
    { icon: '📱', title: 'Biz Analyst Mobile', text: 'Automated reminders, owner MIS, and WhatsApp templates.' },
    { icon: '💬', title: 'WhatsApp Business APIs', text: 'Template reminders and invoice sharing — official channels.' },
    { icon: '🛡️', title: 'Quick Heal + Backup', text: 'Endpoint security + scheduled encrypted backups.' }
  ];

  readonly faqs = [
    {
      q: 'Do we have to leave existing Tally for automation?',
      a:
        'No — our approach is Tally-first. Automation uses add-ons, integrations, and connected services inside your current TallyPrime. Data migration is usually unnecessary.'
    },
    {
      q: 'How long does setup take and what does it cost?',
      a:
        'Quick wins such as reminders, MIS, and backups often go live in 5–10 days. A full automation roadmap may take 4–6 weeks. Cost follows scope — transparent quotes after assessment.'
    },
    {
      q: 'Which number sends WhatsApp reminders?',
      a:
        'Through the official WhatsApp Business API using your business number. Templates are Meta-approved — minimal spam or block risk.'
    },
    {
      q: 'How do you handle staff resistance?',
      a:
        'Training positions automation as removing repetitive work so teams focus on higher-value tasks and KPIs tied to growth.'
    }
  ];
}
