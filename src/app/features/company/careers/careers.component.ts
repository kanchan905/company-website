import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  readonly heroBadges = [
    '💼 6 Open Roles',
    '📍 Kundli, Sonipat',
    '⚡ Quick Hiring'
  ];

  readonly heroStats = [
    { value: '6', label: 'Open Positions' },
    { value: '15+', label: 'Team Members' },
    { value: '10+', label: 'Years of Growth' },
    { value: '4.8/5', label: 'Team Happiness' }
  ];

  readonly reasons = [
    {
      icon: '🎯',
      title: 'High Ownership',
      description:
        'Own projects end-to-end and influence client outcomes directly. Minimal micromanagement.',
    },
    {
      icon: '📈',
      title: 'Real Growth Path',
      description:
        'Structured mentorship, role-based progression, and clear annual reviews — for every team member.',
    },
    {
      icon: '🏅',
      title: 'Tally Certifications',
      description:
        'Company-sponsored Tally, GST, and related certifications — keep sharpening your skills.',
    },
    {
      icon: '🤝',
      title: 'Family-style Culture',
      description:
        'Small team, no politics — honest feedback, shared festivals, and a celebration after every milestone.',
    },
    {
      icon: '🚀',
      title: 'Diverse Exposure',
      description:
        'Retail, manufacturing, distribution, education — fresh industry challenges every quarter.',
    },
    {
      icon: '💼',
      title: 'Stable & Trusted',
      description: '10+ years old Tally 5-Star Certified Partner — career stability with genuine business growth.'
    }
  ];

  readonly perks = [
    { icon: '💰', label: 'Competitive Salary' },
    { icon: '🏅', label: 'Tally Certified Training' },
    { icon: '📈', label: 'Performance Bonus' },
    { icon: '🛟', label: 'Health Insurance' },
    { icon: '☕', label: 'Modern Kundli Office' },
    { icon: '📅', label: 'Sundays Off (6-Day Week)' },
    { icon: '🎓', label: 'Internal Promotions' },
    { icon: '🎉', label: 'Festival Celebrations' }
  ];

  readonly openings = [
    {
      role: 'Tally Implementation Consultant',
      type: 'Full Time',
      experience: '2 - 5 Years',
      location: 'Kundli, Sonipat',
      salary: '₹ 25K - 40K / month',
      tag: 'Hot',
      summary:
        'Lead TallyPrime deployments — masters setup, data migration, multi-user configuration, and client training. Onsite + remote across Haryana.',
      skills: ['TallyPrime', 'GST', 'Data Migration', 'Excel'],
      featured: true
    },
    {
      role: 'Tally Support Engineer',
      type: 'Full Time',
      experience: '1 - 3 Years',
      location: 'Kundli, Sonipat',
      salary: '₹ 18K - 28K / month',
      tag: 'New',
      summary:
        'Onsite + remote Tally support — troubleshooting, GST fixes, license unlocks, and backup setup for our client base.',
      skills: ['TallyPrime', 'Troubleshooting', 'Networking', 'Support'],
      featured: true
    },
    {
      role: 'GST & Accounts Trainer',
      type: 'Full Time',
      experience: '3 - 6 Years',
      location: 'Kundli + Online',
      salary: '₹ 22K - 35K / month',
      tag: null,
      summary:
        'Deliver practical TallyPrime, GST, and payroll training at the Education Centre — classroom and online batches.',
      skills: ['Tally Course', 'GST', 'Teaching', 'Accounting'],
      featured: false
    },
    {
      role: 'Tally Sales Executive',
      type: 'Full Time',
      experience: '1 - 4 Years',
      location: 'Sonipat + Field',
      salary: '₹ 20K - 30K + Incentives',
      tag: 'Field',
      summary:
        'Sell Tally and adjacent products across Sonipat–Panipat — demos, closures, and renewal management.',
      skills: ['Sales', 'TallyPrime', 'Communication', 'Negotiation'],
      featured: false
    },
    {
      role: 'Customer Success / Renewal Manager',
      type: 'Full Time',
      experience: '2 - 4 Years',
      location: 'Kundli, Sonipat',
      salary: '₹ 22K - 32K / month',
      tag: null,
      summary:
        'Manage TSS renewals, account reviews, escalations, and upsell paths — maintain ~98% retention.',
      skills: ['CRM', 'Account Mgmt', 'TallyPrime', 'Excel'],
      featured: false
    },
    {
      role: 'Front Desk / Admin Executive',
      type: 'Full Time',
      experience: 'Fresher - 2 Years',
      location: 'Kundli, Sonipat',
      salary: '₹ 12K - 18K / month',
      tag: 'Fresher',
      summary:
        'Front desk, client visits, billing follow-up, light Tally entries, and founder coordination.',
      skills: ['MS Office', 'Communication', 'Tally Basic', 'Hindi/English'],
      featured: false
    }
  ];

  readonly process = [
    {
      step: '01',
      icon: '📄',
      title: 'Application & Profile Review',
      description:
        'Email or WhatsApp your CV. We review within 1–2 days and call shortlisted candidates.',
      timeline: '1 - 2 days'
    },
    {
      step: '02',
      icon: '☎️',
      title: 'First Discussion',
      description:
        'Casual phone or in-office conversation — role expectations, background, salary, and growth.',
      timeline: '2 - 3 days'
    },
    {
      step: '03',
      icon: '🧪',
      title: 'Practical Round',
      description:
        'Hands-on TallyPrime or role scenario — typically 1–2 hours at the office.',
      timeline: '2 - 4 days'
    },
    {
      step: '04',
      icon: '🤝',
      title: 'Final Round & Offer',
      description:
        'Founder conversation, transparent offer, and joining timeline — everything spelled out clearly.',
      timeline: '1 - 2 days'
    }
  ];

  readonly applyContact = {
    phone: '+91 82228 45550',
    phoneHref: 'tel:+918222845550',
    email: 'tyagi.sts@gmail.com',
    emailHref: 'mailto:tyagi.sts@gmail.com?subject=Job Application — softTech',
    whatsapp: 'https://wa.me/918222845550?text=Hi, I want to apply for a job at softTech'
  };
}
