import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent
  ],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  readonly heroBadges = [
    '📍 Haryana / NCR SMBs',
    '🧾 Tally + billing focus',
    '📊 Measurable outcomes'
  ];

  readonly heroStats = [
    { value: '40%+', label: 'Faster collections (typ.)' },
    { value: '50%', label: 'Less reporting effort' },
    { value: '30%', label: 'Better pipeline visibility' },
    { value: '1 team', label: 'Advisory + delivery' }
  ];

  readonly sectors = [
    'Distribution',
    'Retail',
    'Manufacturing',
    'Services',
    'TallyPrime',
    'CRM',
    'Billing / POS'
  ];

  readonly featured = {
    tag: 'Featured',
    title: 'Distribution firm: receivables follow-up cycle tightened in 6 weeks',
    industry: 'FMCG distribution · Sonipat region',
    challenge:
      'Manual WhatsApp reminders, no ageing dashboard for owner, and accountant fire-fighting every month-end.',
    approach:
      'Tally ageing report + simple CRM task list + weekly 15-min owner review — no heavy software swap.',
    outcome:
      'Follow-up discipline improved; owner could see top 20 defaulters any morning in under 2 minutes.',
    metrics: [
      { label: 'Avg. DSO trend', value: '↓ meaningful' },
      { label: 'Missed follow-ups', value: '↓ sharply' },
      { label: 'Month-end stress', value: '↓ owner reported' }
    ]
  };

  readonly studies = [
    {
      title: 'Pharma retailer: counter billing speed + GST line clarity',
      industry: 'Retail pharmacy',
      sector: 'Billing + Tally',
      challenge: 'Peak hour queues; GST break-up confusion on printed bill; accountant rework.',
      approach: 'Thermal template redesign + item shortcuts + default GST slab mapping to Tally ledger.',
      outcome: 'Shorter queues at peak; fewer return visits for “bill correction”; day-end mismatch reduced.',
      metrics: [
        { label: 'Counter', value: 'POS + thermal' },
        { label: 'GST', value: 'Line clarity' }
      ]
    },
    {
      title: 'Retail group: monthly reporting effort cut roughly in half',
      industry: 'Multi-branch retail',
      sector: 'Billing + Tally',
      challenge: 'Fragmented reporting across billing counters, stock, and finance consolidation.',
      approach: 'Standardised day-end export + Tally mapping + one MIS template for owner.',
      outcome: 'Centralised data flow and cleaner reporting structure improved decision speed.',
      metrics: [
        { label: 'Branches', value: '3+' },
        { label: 'Output', value: 'Single owner pack' }
      ]
    },
    {
      title: 'Services company: lead conversion tracking improved ~30%',
      industry: 'B2B services',
      sector: 'CRM',
      challenge: 'No structured pipeline; inconsistent follow-ups and lost enquiries.',
      approach: 'Simple pipeline stages + mandatory next-action date + weekly manager review.',
      outcome: 'Pipeline stages, task triggers, and reporting improved conversion predictability.',
      metrics: [
        { label: 'Stages', value: '5 clear' },
        { label: 'Channel', value: 'WhatsApp + call' }
      ]
    },
    {
      title: 'Manufacturer: stock mismatch between godown and books reduced',
      industry: 'Light manufacturing',
      sector: 'Tally inventory',
      challenge: 'Physical stock often disagreed with Tally; month-end adjustments painful.',
      approach: 'Godown-wise cycle counts + voucher discipline training + barcode at dispatch.',
      outcome: 'Fewer surprise write-offs; production planning got a cleaner baseline.',
      metrics: [
        { label: 'Godowns', value: '2' },
        { label: 'Discipline', value: 'Voucher SOP' }
      ]
    },
    {
      title: 'Regional dealer: TallyPrime migration without go-live panic',
      industry: 'IT hardware dealer',
      sector: 'TallyPrime',
      challenge: 'Fear of downtime during ERP 9 → TallyPrime switch during busy season.',
      approach: 'Parallel run weekend, verified backup, opening balances checklist, accountant shadowing.',
      outcome: 'Smooth cutover; statutory updates and training completed in first week.',
      metrics: [
        { label: 'Cutover', value: 'Weekend' },
        { label: 'Training', value: 'Hands-on' }
      ]
    },
    {
      title: 'Office IT: backup + antivirus baseline before ransomware scare',
      industry: 'Professional services',
      sector: 'IT consulting',
      challenge: 'Single desktop held all Tally data; weak patch cadence; no restore drill.',
      approach: '3-2-1 style backup plan + Quick Heal rollout + quarterly restore test.',
      outcome: 'Owners sleep better; incident response playbook documented for staff.',
      metrics: [
        { label: 'RTO target', value: 'Hours' },
        { label: 'Risk', value: '↓ single PC' }
      ]
    }
  ];

  readonly process = [
    { step: '01', title: 'Discovery', detail: 'Pain, volume, team habits — short workshop + data samples.' },
    { step: '02', title: 'Design', detail: 'Target KPIs + minimal viable process — no vanity automation.' },
    { step: '03', title: 'Deploy', detail: 'Phased rollout, training, shadow period with rollback plan.' },
    { step: '04', title: 'Measure', detail: '30 / 60 / 90 day check-ins — numbers decide next iteration.' }
  ];

  readonly faqs = [
    {
      q: 'Why are client names not public?',
      a:
        'Many SMBs prefer anonymity in public stories. We publish anonymised sector + outcome summaries. Serious prospects can arrange reference calls or NDA-backed detail.'
    },
    {
      q: 'Can every outcome repeat on the same timeline?',
      a:
        'No — starting maturity differs per business. We share ranges and typical patterns, not guarantees. The methodology stays consistent even if timelines vary.'
    },
    {
      q: 'What do you need for a similar plan?',
      a:
        'Current software list, team size, top three pain points, and roughly one month of sample reports (Excel is fine). That baseline lets us draft a realistic proposal.'
    }
  ];
}
