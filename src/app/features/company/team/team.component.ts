import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  readonly heroBadges = [
    '👥 15 Expert Members',
    '🏅 8 Tally Certified Pros',
    '⚡ < 2 Hr Response'
  ];

  readonly heroStats = [
    { value: '15', label: 'Expert Team Members' },
    { value: '10+', label: 'Years Avg. Experience' },
    { value: '8', label: 'Tally Certified Pros' },
    { value: '6 Days', label: 'Onsite Support / Week' }
  ];

  readonly leadership = {
    name: 'STS Tyagi',
    role: 'Founder & Director',
    initial: 'S',
    tagline: 'Building softTech since 2014',
    bio:
      '15+ years across Tally and business technology. Grew softTech from a small support desk into a 5-Star Certified Partner trusted by 250+ businesses in Haryana and Delhi NCR.',
    expertise: ['TallyPrime Strategy', 'GST Advisory', 'Business Consulting', 'Client Relations'],
    quote:
      'We do not push boxes — we solve business problems. That distinction defines who we are.',
    contact: {
      phone: '+91 82228 45550',
      phoneHref: 'tel:+918222845550',
      email: 'tyagi.sts@gmail.com',
      emailHref: 'mailto:tyagi.sts@gmail.com'
    },
    stats: [
      { value: '15+', label: 'Years' },
      { value: '250+', label: 'Clients' },
      { value: '500+', label: 'Trained' }
    ]
  };

  readonly teamMembers = [
    {
      name: 'Anil Verma',
      role: 'Senior Tally Consultant',
      initial: 'A',
      colorClass: 'avatar-blue',
      summary:
        'TallyPrime implementation and customisation specialist — 8+ years across manufacturing and trading clients.',
      expertise: ['TallyPrime', 'Inventory', 'TDL'],
      certified: true
    },
    {
      name: 'Priya Sharma',
      role: 'GST & Compliance Expert',
      initial: 'P',
      colorClass: 'avatar-orange',
      summary:
        'CA-trained — handles GST returns, e-invoicing setup, and statutory compliance for 100+ clients.',
      expertise: ['GST', 'E-Invoice', 'TDS'],
      certified: true
    },
    {
      name: 'Rajesh Kumar',
      role: 'Implementation Lead',
      initial: 'R',
      colorClass: 'avatar-green',
      summary:
        'Leads end-to-end TallyPrime deployments — data migration, masters setup, and multi-user configuration.',
      expertise: ['Migration', 'Multi-user', 'Networking'],
      certified: true
    },
    {
      name: 'Neha Goyal',
      role: 'Tally Training Head',
      initial: 'N',
      colorClass: 'avatar-purple',
      summary:
        'Leads Tally Education Centre programmes — has certified 500+ students in practical accounting paths.',
      expertise: ['Tally Course', 'GST Training', 'Mentoring'],
      certified: true
    },
    {
      name: 'Amit Singh',
      role: 'Support & Service Manager',
      initial: 'A',
      colorClass: 'avatar-teal',
      summary:
        'Leads onsite + remote support — average response under two hours. Deep expertise in Quick Heal and TSplus.',
      expertise: ['Onsite Support', 'Quick Heal', 'TSplus'],
      certified: true
    },
    {
      name: 'Sunita Devi',
      role: 'Client Success Manager',
      initial: 'S',
      colorClass: 'avatar-pink',
      summary:
        'Owns TSS renewals, software services, and client relationships — instrumental in our 98% retention rate.',
      expertise: ['TSS Renewals', 'Account Mgmt', 'CRM'],
      certified: false
    }
  ];

  readonly departments = [
    {
      icon: '⚙️',
      name: 'Implementation',
      teamSize: 4,
      lead: 'Rajesh Kumar',
      description:
        'Configures TallyPrime to match each client — data migration, masters, multi-user rollout, and go-live.',
    },
    {
      icon: '🛟',
      name: 'Support & Service',
      teamSize: 5,
      lead: 'Amit Singh',
      description: 'Onsite + remote support across Sonipat-Panipat-Delhi NCR within business hours, 6 days a week.'
    },
    {
      icon: '🎓',
      name: 'Tally Education',
      teamSize: 3,
      lead: 'Neha Goyal',
      description:
        'Certified Tally trainers delivering practical, job-ready programmes in TallyPrime, GST, and payroll.',
    },
    {
      icon: '🤝',
      name: 'Sales & Consulting',
      teamSize: 3,
      lead: 'STS Tyagi',
      description:
        'Helps businesses choose the right TallyPrime edition, accessories, and renewals.',
    }
  ];

  readonly cultureValues = [
    {
      icon: '🎯',
      title: 'Client-First Mindset',
      description:
        'Not a team that installs and vanishes — every rollout aims at long-term partnership.'
    },
    {
      icon: '🚀',
      title: 'Fast Response',
      description:
        'Under two hours average response. Peak GST periods or year-end — still only a call away.'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description:
        'TallyPrime releases, GST updates, e-invoicing rules — the team completes quarterly certification refreshers.'
    },
    {
      icon: '✅',
      title: 'Genuine Solutions',
      description:
        'Authentic licenses only — no shortcuts. Right software, transparent pricing, dependable service.'
    }
  ];

  readonly careerPerks = [
    { icon: '🏅', label: 'Tally Certified Training' },
    { icon: '🎓', label: 'Internal Growth Path' },
    { icon: '📈', label: 'Performance Bonuses' },
    { icon: '🛟', label: 'Health & Insurance' },
    { icon: '☕', label: 'Modern Kundli Office' },
    { icon: '🤝', label: 'Family-style Culture' }
  ];
}
