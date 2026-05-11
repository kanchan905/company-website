import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-cloud-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './cloud-solutions.component.html',
  styleUrl: './cloud-solutions.component.scss'
})
export class CloudSolutionsComponent {
  readonly heroBadges = [
    '☁️ TallyPrime Cloud Access',
    '🔗 TSplus Remote Partner',
    '🛡️ Daily Backups Included'
  ];

  readonly heroStats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24x7', label: 'Cloud access' },
    { value: '< 2 hr', label: 'Setup turnaround' },
    { value: '100%', label: 'Genuine licenses' }
  ];

  readonly pillars = [
    {
      icon: '☁️',
      title: 'Tally on Cloud',
      description:
        'Your existing TallyPrime on a cloud server — multi-user, multi-location access without VPN headaches.',
    },
    {
      icon: '🔗',
      title: 'TSplus Remote Access',
      description:
        'Affordable Microsoft RDP alternative — run Tally and ERP Windows sessions securely from remote locations.',
    },
    {
      icon: '🛡️',
      title: 'Backup & DR',
      description:
        'Daily encrypted backups and a disaster recovery plan — far less worry about data loss.',
    },
    {
      icon: '🚀',
      title: 'High Availability',
      description:
        'Fast, stable connections for branch and home users with 99.9% uptime monitoring.',
    }
  ];

  readonly services = [
    {
      icon: '🧾',
      title: 'TallyPrime Cloud Subscription',
      description:
        'Official Tally Cloud Access — single-user / multi-user plans, monthly / yearly options, and full TSS bundled.',
      linkText: 'Get cloud pricing',
      link: '/contact'
    },
    {
      icon: '🖥️',
      title: 'TSplus Remote Desktop',
      description:
        'TSplus official partner — affordable, secure, license-friendly remote desktop on Windows Server.',
      linkText: 'Plan TSplus setup',
      link: '/contact'
    },
    {
      icon: '🔄',
      title: 'Tally Data Migration to Cloud',
      description:
        'Migrate local Tally to the cloud — companies, users, masters, and security setup carried across.',
      linkText: 'Discuss migration',
      link: '/contact'
    },
    {
      icon: '💾',
      title: 'Automated Backup Tool',
      description:
        'softTech backup utility — schedule, encrypt, and multi-location storage with an audit log.',
      linkText: 'Setup backups',
      link: '/contact'
    },
    {
      icon: '🛡️',
      title: 'Endpoint Security (Quick Heal)',
      description:
        'Endpoint antivirus to keep cloud sessions secure — Quick Heal authorised reseller stack.',
      linkText: 'Add Quick Heal',
      link: '/contact'
    },
    {
      icon: '🌐',
      title: 'Branch / Multi-Location Setup',
      description:
        'Unified cloud access for branches, home offices, and field teams with user-level controls.',
      linkText: 'Design network plan',
      link: '/contact'
    }
  ];

  readonly compareRows = [
    {
      label: 'Multi-user access',
      local: 'Limited to same-office LAN',
      cloud: '24×7 from anywhere',
      cloudGood: true
    },
    {
      label: 'Backup discipline',
      local: 'Manual / often skipped',
      cloud: 'Daily automated + encrypted',
      cloudGood: true
    },
    {
      label: 'Power / hardware failure',
      local: 'Business stops, recovery slow',
      cloud: 'Managed servers, fast recovery',
      cloudGood: true
    },
    {
      label: 'GST / e-invoice uptime',
      local: 'Network dependent',
      cloud: 'Stable high-speed internet',
      cloudGood: true
    },
    {
      label: 'Initial cost',
      local: 'Higher (server + setup)',
      cloud: 'Lower monthly subscription',
      cloudGood: true
    },
    {
      label: 'Maintenance',
      local: 'In-house IT effort',
      cloud: 'softTech managed',
      cloudGood: true
    }
  ];

  readonly phases = [
    {
      step: '01',
      title: 'Assessment',
      detail:
        'Audit current setup, user count, branches, and access patterns — choose the best-fit plan.',
    },
    {
      step: '02',
      title: 'Provisioning',
      detail:
        'Provision and configure cloud server / TSplus / TallyPrime Cloud through official channels.',
    },
    {
      step: '03',
      title: 'Migration & Test',
      detail:
        'Migrate local data to the cloud, run parallel testing and user acceptance — until everything is clean.',
    },
    {
      step: '04',
      title: 'Go-live & Monitoring',
      detail:
        'Cut-over, training, and monitoring — uptime, backups, and alerts under watch.',
    }
  ];

  readonly useCases = [
    {
      icon: '🏪',
      title: 'Multi-branch retailers',
      detail:
        'Sonipat HQ plus Panipat / Delhi branches — consolidated billing and stock in one Tally company.',
    },
    {
      icon: '🏭',
      title: 'Manufacturers with field teams',
      detail:
        'Plant, warehouse, and sales reps — one TallyPrime cloud with role-wise access.',
    },
    {
      icon: '🧑‍💼',
      title: 'Accountants & CA firms',
      detail:
        'Multiple client companies in one cloud panel — secure, audit-friendly, fast switching.',
    },
    {
      icon: '🏠',
      title: 'Work-from-home owners',
      detail:
        'MIS, vouchers, and approvals from phone and laptop — without commuting to the office every day.',
    }
  ];

  readonly faqs = [
    {
      q: 'Is running Tally on the cloud safe?',
      a:
        'Yes — official TallyPrime Cloud Access and licensed TSplus deployments use enterprise-grade security, encrypted transmission, and user-wise access control. We combine that with endpoint antivirus and disciplined backups.'
    },
    {
      q: 'What happens when the internet goes down?',
      a:
        'Cloud plus local hybrid models are possible. Offline periods use alternate connectivity or a local copy plan. For critical clients we often suggest a 4G backup router.'
    },
    {
      q: 'How do existing Tally licenses convert?',
      a:
        'You can use current single / multi-user licenses on the cloud, or take an official TallyPrime Cloud Access subscription. We explain pricing and trade-offs for both.'
    },
    {
      q: 'Is billing monthly?',
      a:
        'Yes — TallyPrime Cloud Access is available monthly and yearly. TSplus setups are typically one-time license plus optional AMC.'
    }
  ];
}
