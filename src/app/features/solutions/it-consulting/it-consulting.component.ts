import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-it-consulting',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './it-consulting.component.html',
  styleUrl: './it-consulting.component.scss'
})
export class ItConsultingComponent {
  readonly heroBadges = [
    '🛡️ Security-first SMB IT',
    '🧾 Tally + Business stack',
    '📍 Kundli • Sonipat • NCR'
  ];

  readonly heroStats = [
    { value: '10+', label: 'Years advising SMBs' },
    { value: '250+', label: 'Sites supported' },
    { value: '< 2 hr', label: 'Critical response' },
    { value: '100%', label: 'Genuine licenses only' }
  ];

  readonly whyConsult = [
    {
      icon: '🎯',
      title: 'Right tool, right budget',
      description:
        'Not every problem needs enterprise software. We recommend practical stacks — TallyPrime, TSplus, Quick Heal — sized for you.'
    },
    {
      icon: '🔒',
      title: 'Risk before rollout',
      description:
        'Data loss, ransomware, weak Wi-Fi, everything on one PC — audit first, then roadmap. Fewer surprises, less downtime.'
    },
    {
      icon: '📋',
      title: 'Written recommendations',
      description:
        'More than verbal advice — priority list, rough costing, and phasing so leadership has clear direction.'
    },
    {
      icon: '🤝',
      title: 'Implementation partner too',
      description:
        'Not slide decks only — the same team configures, trains, and supports from advice through execution.'
    }
  ];

  readonly services = [
    {
      icon: '🧾',
      title: 'Tally & Finance IT',
      description:
        'Multi-user sizing, backup policy, TallyPrime Cloud / TSplus access design, and GST workflow review.',
      linkText: 'Book Tally IT review',
      link: '/contact'
    },
    {
      icon: '🛡️',
      title: 'Endpoint & Network Security',
      description:
        'Quick Heal rollout, patch hygiene, USB policy, Wi-Fi hardening, and pragmatic firewall guidance.',
      linkText: 'Security assessment',
      link: '/contact'
    },
    {
      icon: '🖥️',
      title: 'Remote Access & Branch IT',
      description:
        'TSplus or RDP designs for branches, VPN alternatives, user roles, and session logging — simple to maintain.',
      linkText: 'Plan remote access',
      link: '/contact'
    },
    {
      icon: '💾',
      title: 'Backup & Disaster Recovery',
      description:
        '3-2-1 backup thinking for SMBs — local plus cloud copies, restore drills, and Tally company rescue planning.',
      linkText: 'Backup roadmap',
      link: '/contact'
    },
    {
      icon: '🌐',
      title: 'Office Network & Wi-Fi',
      description: 'Router selection, VLAN basics for guest Wi-Fi, printer sharing, stable LAN for Tally multi-user — field-tested.',
      linkText: 'Network health check',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'IT Governance Lite',
      description:
        'Password policy, admin rights, vendor list, asset register — realistic controls for small teams, not bureaucracy.',
      linkText: 'Governance starter kit',
      link: '/contact'
    }
  ];

  readonly engagement = [
    {
      name: 'Health Check',
      duration: 'Half day',
      priceHint: 'Fixed fee',
      bullets: ['Inventory of PCs, Tally, network', 'Top 5 risks + quick wins', '1-page summary report']
    },
    {
      name: 'IT Roadmap',
      duration: '1–2 weeks',
      priceHint: 'Project',
      bullets: ['Interviews with owner + accounts', 'Phased plan + budget bands', 'Vendor-neutral options']
    },
    {
      name: 'Advisory + Execution',
      duration: 'Ongoing',
      priceHint: 'Retainer / milestone',
      bullets: ['Quarterly review calls', 'Change requests as you grow', 'Same team implements fixes']
    }
  ];

  readonly process = [
    { step: '01', title: 'Listen', detail: 'Current pain, growth plans, budget guardrails — no jargon.' },
    { step: '02', title: 'Assess', detail: 'Onsite or remote walkthrough of PCs, network, Tally, backups.' },
    { step: '03', title: 'Recommend', detail: 'Written options with pros/cons — you choose, we implement.' },
    { step: '04', title: 'Support', detail: 'Post-change monitoring + training — handover with clarity.' }
  ];

  readonly faqs = [
    {
      q: 'Do we need a full-time IT hire?',
      a:
        'Every business differs. For smaller setups we often recommend quarterly health checks plus on-call support. As you scale we can plan the shift to part-time IT or an MSP partner.'
    },
    {
      q: 'Is consulting billed separately from implementation?',
      a:
        'Health checks and roadmaps are usually fixed or project fees. Implementation is a separate quote with transparent breakdown. Advisory-only is fine if you implement internally.'
    },
    {
      q: 'Can consulting happen remotely?',
      a:
        'Yes — screen share and checklist reviews work well. For critical cases we prefer onsite visits across Sonipat–Kundli–Panipat.'
    },
    {
      q: 'If hardware purchases are needed, does softTech help?',
      a:
        'Yes — guidance on routers, PCs, UPS, and server sizing plus trusted vendor introductions. You may purchase directly; we avoid lock-in.'
    }
  ];
}
