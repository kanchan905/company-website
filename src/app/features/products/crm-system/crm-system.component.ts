import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-crm-system',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './crm-system.component.html',
  styleUrl: './crm-system.component.scss'
})
export class CrmSystemComponent {
  readonly heroBadges = [
    '📊 Pipeline + tasks',
    '📱 WhatsApp + email',
    '🔗 Tally / website integration'
  ];

  readonly heroStats = [
    { value: 'Leads', label: 'Capture from web + WhatsApp' },
    { value: 'Pipeline', label: 'Stage-wise visibility' },
    { value: 'Reminders', label: 'Auto follow-up nudges' },
    { value: 'Reports', label: 'Owner dashboards' }
  ];

  readonly whyCrm = [
    {
      icon: '🎯',
      title: 'Built for Indian SMBs',
      description:
        'Enterprise CRMs feel heavy and expensive. We deliver a lightweight CRM your team will adopt for daily use.'
    },
    {
      icon: '🔁',
      title: 'No leak follow-ups',
      description:
        'Auto-reminders, next-action dates, and owner alerts — older leads do not silently die.'
    },
    {
      icon: '🧾',
      title: 'Tally / billing friendly',
      description:
        'Quotation → order → invoice flows align with Tally. Less duplicate data entry.'
    },
    {
      icon: '📲',
      title: 'WhatsApp first',
      description:
        'WhatsApp lead capture, click-to-chat, templates — meeting sales teams on their real channel.'
    }
  ];

  readonly modules = [
    {
      icon: '👥',
      title: 'Lead capture & sources',
      description: 'Website forms, WhatsApp, IndiaMART, manual entry — leads land in one inbox with source tags.',
      linkText: 'Connect lead sources',
      link: '/contact'
    },
    {
      icon: '🚦',
      title: 'Pipeline & stages',
      description: 'Customisable stages (New → Qualified → Quoted → Won/Lost), drag-and-drop view, owner-wise filter.',
      linkText: 'Design your pipeline',
      link: '/contact'
    },
    {
      icon: '📞',
      title: 'Activities & tasks',
      description: 'Calls, meetings, site visits, follow-ups — task lists and reminders on each salesperson’s dashboard.',
      linkText: 'Activity workflows',
      link: '/contact'
    },
    {
      icon: '📝',
      title: 'Quotations & proposals',
      description: 'Standard quotation templates, version history, approval flow — quote turnaround fast.',
      linkText: 'Quotation module',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'Reports & dashboards',
      description:
        'Pipeline value, salesperson performance, conversion rates, ageing leads — one-glance view for owners.',
      linkText: 'Reports walkthrough',
      link: '/contact'
    },
    {
      icon: '🔐',
      title: 'Roles & access',
      description:
        'Salesperson, manager, admin — each sees only relevant fields. Region / branch partitioning supported.',
      linkText: 'Setup access',
      link: '/contact'
    }
  ];

  readonly integrations = [
    { icon: '🧾', name: 'Tally / accounting', detail: 'Customer master sync, quotation → invoice handoff.' },
    { icon: '📲', name: 'WhatsApp', detail: 'Lead capture, click-to-chat from CRM, template messages.' },
    { icon: '📧', name: 'Email & SMS', detail: 'Transactional emails, OTP, SMS reminders for follow-ups.' },
    { icon: '🌐', name: 'Website forms', detail: 'Contact / quote forms directly drop leads into CRM.' },
    { icon: '📦', name: 'IndiaMART / portals', detail: 'API / CSV based lead import from B2B portals.' },
    { icon: '📊', name: 'Google Sheets', detail: 'Export / scheduled reports to Sheets for legacy workflows.' }
  ];

  readonly process = [
    { step: '01', title: 'Map process', detail: 'Capture your current sales flow and leak points.' },
    { step: '02', title: 'Configure', detail: 'Pipeline, users, templates, integrations setup.' },
    { step: '03', title: 'Train', detail: 'Salesman + manager training, cheatsheet + recorded sessions.' },
    { step: '04', title: 'Support', detail: 'AMC and incremental features as you grow.' }
  ];

  readonly faqs = [
    {
      q: 'We track leads in Excel — is switching difficult?',
      a:
        'Not really. We import your spreadsheet first, stand up a simple 4–5 stage pipeline, and train the team in ~30 minutes. Familiar Excel thinking stays; structure arrives.'
    },
    {
      q: 'Can the CRM integrate with Tally?',
      a:
        'Yes — common patterns include customer master sync, quotation → Tally invoice push, and outstanding views inside CRM. Final architecture is agreed during scoping.'
    },
    {
      q: 'Cloud or on-premise?',
      a:
        'Most deployments are cloud-hosted for mobile and branch access. Sensitive environments can use on-premise or private cloud.'
    },
    {
      q: 'How does WhatsApp integration work?',
      a:
        'Click-to-chat from CRM plus optional WhatsApp Business API templates. Captured numbers open chats in one tap.'
    },
    {
      q: 'How is pricing structured per user?',
      a:
        'Setup fee plus per-user monthly pricing depending on integrations and customisation. Written quotes cover user counts and features.'
    }
  ];
}
