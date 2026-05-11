import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  icon: string;
  title: string;
  blurb: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  readonly heroBadges = [
    '📞 Same-day reply',
    '📍 Onsite Kundli / NCR',
    '🛡️ Genuine licenses only'
  ];

  readonly heroStats = [
    { value: '< 1 day', label: 'Typical first reply' },
    { value: 'On-site + remote', label: 'Support options' },
    { value: 'Written quotes', label: 'No verbal-only deals' },
    { value: 'Owner contact', label: 'Direct escalation' }
  ];

  readonly activeId = signal<string>('general');

  readonly categories: FaqCategory[] = [
    {
      id: 'general',
      icon: '💬',
      title: 'General',
      blurb: 'Working style, scope, and how engagements typically start.',
      items: [
        {
          q: 'Which kinds of businesses do you work with?',
          a:
            'Primarily Indian SMBs in distribution, retail, manufacturing, and services that want Tally, IT, and automation from one partner. Onsite across Haryana / NCR; remote elsewhere in India.'
        },
        {
          q: 'How do engagements usually start?',
          a:
            'Short discovery call (complimentary) → written proposal with phased plan → confirmed kick-off. Everything is documented — nothing verbal-only.'
        },
        {
          q: 'May we visit your office?',
          a:
            'Yes — SCO 32, Ground Floor, HSIIDC Commercial Complex, Kundli 131028. Please call ahead so we can reserve focused time.'
        }
      ]
    },
    {
      id: 'tally',
      icon: '🧾',
      title: 'Tally',
      blurb: 'Licensing, AMC, migration, TDL customisation.',
      items: [
        {
          q: 'Can we buy a genuine TallyPrime license through you?',
          a:
            'Yes — softTech is a Tally 5-Star Certified Partner. Silver, Gold, and multi-user packs register in the owner’s name with proper activation.'
        },
        {
          q: 'Is migrating from Tally ERP 9 to TallyPrime safe?',
          a:
            'Yes. We verify backups, run a test cutover in one company, train accountants, and keep a fallback plan — even during busy seasons.'
        },
        {
          q: 'What does AMC include?',
          a:
            'Phone / remote support, routine issue resolution, TSS renewal reminders, and refresher training. Onsite visits can be added per scope. Written AMC scope is always shared.'
        },
        {
          q: 'Who delivers TDL customisations?',
          a:
            'Our in-house certified team handles custom invoices, MIS reports, owner dashboards, and automated emails — written estimates follow scope sign-off.'
        }
      ]
    },
    {
      id: 'support',
      icon: '🛠️',
      title: 'Support &amp; SLA',
      blurb: 'Response time, channels, escalation path.',
      items: [
        {
          q: 'What are typical support response times?',
          a:
            'First response usually within a business day. Critical Tally / billing outages for AMC clients enter a priority queue — typically acknowledged inside two hours.'
        },
        {
          q: 'Which channels can we use?',
          a:
            'Phone, WhatsApp, email, and remote sessions (AnyDesk / TeamViewer). Onsite coverage across Kundli–Sonipat–Panipat; broader NCR depending on scope.'
        },
        {
          q: 'How does escalation work?',
          a:
            'Assigned engineer → senior engineer → owner. AMC clients retain direct owner contact for high-impact incidents.'
        }
      ]
    },
    {
      id: 'security',
      icon: '🔐',
      title: 'Security &amp; backup',
      blurb: 'Data safety, antivirus, restore drills.',
      items: [
        {
          q: 'Do you design backup strategies?',
          a:
            'Yes — 3-2-1 style for SMBs: local copy, cloud copy, quarterly restore drills. We actively discourage “everything on one PC” setups.'
        },
        {
          q: 'Can you help with antivirus and patching?',
          a:
            'We deploy reliable endpoint suites such as Quick Heal, set monthly patch cadence, and tighten USB policy — realistic for SMB teams.'
        },
        {
          q: 'Is ransomware recovery realistic?',
          a:
            'With disciplined backups, recovery is achievable. Setups that rely solely on production disks are risky — assessments highlight those gaps.'
        }
      ]
    },
    {
      id: 'pricing',
      icon: '💼',
      title: 'Pricing &amp; contracts',
      blurb: 'How quotes work, invoicing, refunds.',
      items: [
        {
          q: 'Do you charge fixed fees or retainers?',
          a:
            'Both — fixed project quotes (Tally licenses, billing deployments, web builds) and monthly retainers (AMC, IT consulting, SEO). We recommend the fit after scope review.'
        },
        {
          q: 'Are there hidden charges?',
          a:
            'No. Written quotes list licenses, services, AMC, and taxes. Anything outside scope requires approval before invoicing.'
        },
        {
          q: 'Payment terms and GST invoicing?',
          a:
            'GST invoices with proper HSN/SAC. Milestone billing is common. Bank transfer, UPI, and cheque are all accepted.'
        },
        {
          q: 'What is your refund policy?',
          a:
            'Tally licenses are non-refundable per Tally policy. Services follow milestones — completed milestones are non-refundable; future milestones may cancel with written notice.'
        }
      ]
    },
    {
      id: 'partner',
      icon: '🌐',
      title: 'Partnership &amp; trust',
      blurb: 'Confidentiality, data, references.',
      items: [
        {
          q: 'Will you sign an NDA?',
          a:
            'Yes — standard practice. We can share a mutual NDA template or review yours.'
        },
        {
          q: 'Will our Tally data stay confidential?',
          a:
            'Yes. Only authorised engineers receive access; remote sessions are logged; backups follow encrypted-at-rest patterns. Audit evidence available on request.'
        },
        {
          q: 'Can we speak with reference clients?',
          a:
            'For serious prospects we arrange reference calls or visits (with client consent). Anonymised narratives also appear on the Case Studies page.'
        }
      ]
    }
  ];

  setActive(id: string): void {
    this.activeId.set(id);
  }
}
