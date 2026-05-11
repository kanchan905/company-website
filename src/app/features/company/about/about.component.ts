import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly heroBadges = [
    '🏅 Tally 5-Star Certified Partner',
    '📍 Kundli • Sonipat • Haryana',
    '⭐ 4.9 / 5 by 250+ clients'
  ];

  readonly heroStats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '250+', label: 'Happy Businesses' },
    { value: '2500+', label: 'Ledgers Managed' },
    { value: '98%', label: 'Client Retention' }
  ];

  readonly pillars = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description:
        'Deliver simple, GST-ready, insight-driven accounting systems for Indian SMBs through TallyPrime — keeping daily operations smooth and transparent.'
    },
    {
      icon: '🚀',
      title: 'Our Vision',
      description:
        'Become the most trusted Tally and business technology partner for growing companies across Haryana and North India — from implementation through lifetime support.'
    },
    {
      icon: '💎',
      title: 'Our Promise',
      description:
        'Genuine licenses, fast deployment, expert training, and ongoing onsite + remote support — one trusted partner end to end.'
    }
  ];

  readonly story = {
    eyebrow: 'Our Story',
    title: 'From a small Tally support desk to a 5-Star Certified Partner',
    paragraphs: [
      'softTech began in 2014 in Kundli, Sonipat as a compact Tally support desk helping local retailers and traders install and configure TallyPrime.',
      'A decade later we rank among Tally’s 5-Star Certified Partners — serving 250+ businesses across Haryana and Delhi NCR. Beyond Tally, our team delivers Quick Heal, TSplus, Vyapar App, and LIC Insurance as an integrated business stack.',
      'Our mission is to solve business problems, not merely sell software — every client is a long-term partner.'
    ]
  };

  readonly milestones = [
    {
      year: '2014',
      title: 'Founded in Kundli',
      description: 'A small Tally support desk for local retailers and traders in Sonipat.'
    },
    {
      year: '2017',
      title: 'Tally Certified Partner',
      description: 'Became an authorized Tally Certified Partner across Haryana region.'
    },
    {
      year: '2020',
      title: 'Solutions Expansion',
      description: 'Added Quick Heal, TSplus, Vyapar App and LIC — became a one-stop business solutions provider.'
    },
    {
      year: '2022',
      title: 'Tally Education Centre',
      description: 'Launched a certified Tally course — trained 500+ students for accounting and GST careers.'
    },
    {
      year: '2024',
      title: '5-Star Partner Status',
      description: 'Achieved Tally 5-Star Certified Partner status with 250+ active business clients.'
    },
    {
      year: 'Today',
      title: 'Growth Partner',
      description: 'Serving 250+ businesses across Sonipat, Panipat, Kundli and Delhi NCR with modern, integrated systems.'
    }
  ];

  readonly values = [
    {
      icon: '🤝',
      title: 'Customer First',
      description:
        'Clear KPIs and regular check-ins on every project — value continues long after go-live.'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description:
        'Onsite + remote support within business hours. During GST season or year-end closings, we are only a call away.'
    },
    {
      icon: '✅',
      title: 'Practical Expertise',
      description:
        'Hands-on experience across retail, manufacturing, trading, and services — real process knowledge, not slides.'
    },
    {
      icon: '🔒',
      title: '100% Genuine Software',
      description:
        'Only authentic licenses — TallyPrime, Quick Heal, TSplus — sourced through OEM channels. No piracy, no compromise.'
    }
  ];

  readonly industries = [
    { icon: '🛒', name: 'Retail & Trading' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '📦', name: 'Distribution' },
    { icon: '🍱', name: 'Food & Hospitality' },
    { icon: '💊', name: 'Pharma & Healthcare' },
    { icon: '🧵', name: 'Textiles & Apparel' },
    { icon: '🔧', name: 'Services & Repairs' },
    { icon: '📚', name: 'Education' }
  ];

  readonly certifications = [
    { icon: '🏅', title: 'Tally 5-Star Partner', subtitle: 'Certified Reseller' },
    { icon: '🛡️', title: 'Quick Heal', subtitle: 'Authorized Reseller' },
    { icon: '🔗', title: 'TSplus', subtitle: 'Official Partner' },
    { icon: '📱', title: 'Biz Analyst', subtitle: 'Mobile Partner' },
    { icon: '🎓', title: 'Tally Education', subtitle: 'Certified Centre' },
    { icon: '🛟', title: 'LIC of India', subtitle: 'Authorized Advisor' }
  ];

  readonly founderQuote = {
    name: 'STS Tyagi',
    role: 'Founder & Director, softTech',
    avatar: 'S',
    message:
      'We do not merely sell software — we solve business problems. Every engagement is a long-term partnership so your Tally ecosystem grows with the company. That has been our identity for over ten years.',
    since: 'Serving since 2014'
  };

  readonly contactBlock = [
    { icon: '📞', label: 'Call', value: '+91 82228 45550', href: 'tel:+918222845550' },
    { icon: '✉️', label: 'Email', value: 'tyagi.sts@gmail.com', href: 'mailto:tyagi.sts@gmail.com' },
    { icon: '📍', label: 'Visit Us', value: 'SCO 32, Ground Floor, HSIIDC Commercial Complex, Kundli 131028', href: null }
  ];
}
