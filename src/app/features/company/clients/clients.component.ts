import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  readonly heroBadges = [
    '🏅 250+ Active Clients',
    '⭐ 4.9 / 5 Average Rating',
    '🔄 98% Renewal Rate'
  ];

  readonly heroStats = [
    { value: '250+', label: 'Active Business Clients' },
    { value: '6', label: 'Industries Served' },
    { value: '98%', label: 'Client Retention' },
    { value: '4.9/5', label: 'Avg. Satisfaction' }
  ];

  readonly clientLogos = [
    'Sharma Trading Co.',
    'Verma Industries',
    'Goyal Enterprises',
    'Singh Distributors',
    'Kumar Pharmacy',
    'Aggarwal Textiles',
    'Sonipat Steels',
    'Panipat Apparels',
    'Bhardwaj Foods',
    'Rajesh Auto Parts',
    'Modern Stationery',
    'Tyagi Hardware'
  ];

  readonly sectors = [
    {
      icon: '🛒',
      title: 'Retail & Trading',
      clientCount: '80+ clients',
      challenge:
        'Stock leakage, delayed reconciliations, weak order visibility, and GST mismatches.',
      outcome:
        'Faster billing, cleaner inventory movement, real-time sales insight, and accurate GST returns.',
      tag: 'Most Popular'
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      clientCount: '45+ clients',
      challenge: 'Manual production costing, fragmented purchase workflows, weak cost visibility.',
      outcome:
        'Improved cost tracking, tighter procurement control, and real-time WIP reporting.',
      tag: null
    },
    {
      icon: '📦',
      title: 'Wholesale & Distribution',
      clientCount: '40+ clients',
      challenge:
        'Receivables follow-up load, weak credit enforcement, and chaotic multi-godown operations.',
      outcome:
        'Automated reminders, healthier cash discipline, and multi-location stock visibility.',
      tag: null
    },
    {
      icon: '💊',
      title: 'Pharma & Healthcare',
      clientCount: '25+ clients',
      challenge:
        'Batch and expiry tracking, vendor compliance, and complex statutory reporting.',
      outcome:
        'Reliable batch reports, streamlined payable reconciliation, and audit-ready data.',
      tag: null
    },
    {
      icon: '🧵',
      title: 'Textiles & Apparel',
      clientCount: '30+ clients',
      challenge:
        'Multi-unit conversions (metres / pieces), commission tracking, and seasonal pricing swings.',
      outcome:
        'Custom unit setups, automated commissions, and clearer profitability reporting.',
      tag: null
    },
    {
      icon: '🍱',
      title: 'Food & Services',
      clientCount: '30+ clients',
      challenge:
        'Daily cash-flow tracking, inconsistent invoicing, and limited profitability visibility.',
      outcome:
        'Daily MIS, disciplined invoicing, and service-wise margin dashboards.',
      tag: null
    }
  ];

  readonly featuredStories = [
    {
      industry: 'Manufacturing',
      company: 'Verma Industries',
      location: 'Panipat',
      avatar: 'V',
      colorClass: 'story-blue',
      summary:
        'TallyPrime 7.0 migration plus custom MIS dashboards cut month-end reporting effort by ~50% — daily packs now generate automatically.',
      metrics: [
        { value: '50%', label: 'Less reporting time' },
        { value: '3x', label: 'Faster GST filing' },
        { value: '₹ 2.4L', label: 'Monthly savings' }
      ],
      quote:
        'They streamlined our entire accounts process. The owner dashboard now shows everything in near real time.',
      person: 'Ramesh Verma',
      role: 'Director'
    },
    {
      industry: 'Distribution',
      company: 'Sharma Trading Co.',
      location: 'Sonipat',
      avatar: 'S',
      colorClass: 'story-orange',
      summary:
        'Tally on Mobile plus automated outstanding reminders pulled the average collection cycle from 90 days to 38 within three months.',
      metrics: [
        { value: '60%', label: 'Faster collections' },
        { value: '30%', label: 'Outstanding reduced' },
        { value: '4 hrs', label: 'Daily time saved' }
      ],
      quote:
        'Earlier I spent entire days on follow-ups. WhatsApp and email reminders now run automatically.',
      person: 'Manish Sharma',
      role: 'CEO'
    },
    {
      industry: 'Retail Chain',
      company: 'Goyal Enterprises',
      location: 'Haryana',
      avatar: 'G',
      colorClass: 'story-green',
      summary:
        'Multi-user TallyPrime across five outlets plus Quick Heal endpoint security — one owner view with live data from every location.',
      metrics: [
        { value: '5', label: 'Outlets connected' },
        { value: '100%', label: 'Data security' },
        { value: '2x', label: 'Faster billing' }
      ],
      quote:
        'Live data from every outlet sits on one dashboard. GST filing used to take five days — now we finish in one.',
      person: 'Vikas Goyal',
      role: 'Owner'
    }
  ];

  readonly testimonials = [
    {
      rating: 5,
      quote:
        'Implementation quality was excellent and staff adoption ran faster than expected. Support stays dependable.',
      name: 'Anjali Aggarwal',
      role: 'Operations Lead',
      company: 'Aggarwal Textiles',
      location: 'Panipat',
      avatar: 'A',
      colorClass: 'avatar-pink'
    },
    {
      rating: 5,
      quote:
        'softTech’s team stays reachable late during GST season. They have partnered with us for four years.',
      name: 'Sunil Kumar',
      role: 'Proprietor',
      company: 'Kumar Pharmacy',
      location: 'Sonipat',
      avatar: 'S',
      colorClass: 'avatar-purple'
    },
    {
      rating: 5,
      quote:
        'The TallyPrime mobile app is a gem — live receivables, daily sales, and top customers are visible on the owner’s phone.',
      name: 'Rohit Singh',
      role: 'Managing Partner',
      company: 'Singh Distributors',
      location: 'Kundli',
      avatar: 'R',
      colorClass: 'avatar-teal'
    },
    {
      rating: 5,
      quote:
        'Pricing is transparent with no hidden charges. Genuine licenses plus onsite support — we have renewed for five years for that reason.',
      name: 'Pawan Bhardwaj',
      role: 'Founder',
      company: 'Bhardwaj Foods',
      location: 'Sonipat',
      avatar: 'P',
      colorClass: 'avatar-orange'
    }
  ];

  readonly certifications = [
    { icon: '🏅', title: 'Tally 5-Star Partner', subtitle: 'Certified Reseller' },
    { icon: '🛡️', title: 'Quick Heal', subtitle: 'Authorized Reseller' },
    { icon: '🔗', title: 'TSplus', subtitle: 'Official Partner' },
    { icon: '📱', title: 'Biz Analyst', subtitle: 'Mobile Partner' },
    { icon: '🎓', title: 'Tally Education', subtitle: 'Certified Centre' },
    { icon: '🛟', title: 'LIC of India', subtitle: 'Authorized Advisor' }
  ];

  readonly contactInfo = {
    phone: '+91 82228 45550',
    phoneHref: 'tel:+918222845550',
    email: 'tyagi.sts@gmail.com',
    emailHref: 'mailto:tyagi.sts@gmail.com'
  };
}
