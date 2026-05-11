import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly heroBadges = [
    'Tally 5-Star Certified Partner',
    'Sonipat • Panipat • Haryana',
    'Authorized Reseller'
  ];

  readonly heroHighlights = [
    { label: 'Years of Expertise', value: '10+' },
    { label: 'Happy Businesses', value: '250+' },
    { label: 'Supported Ledgers', value: '2500+' }
  ];

  readonly primeFeatures = [
    {
      icon: '🏦',
      title: 'Automated Bank Statements',
      description: 'Import statements directly and auto-match entries — say goodbye to manual punching of bank transactions.'
    },
    {
      icon: '💳',
      title: 'Integrated Payments',
      description: 'Send payment links on invoices and let customers pay you faster, with auto-reconciled accounting entries.'
    },
    {
      icon: '🔁',
      title: 'Smart Bank Reconciliation',
      description: 'Reconcile thousands of entries in minutes with intelligent matching, rules, and suggestions.'
    },
    {
      icon: '🔌',
      title: 'Bharat Connect Plug-In',
      description: 'Manage bills and B2B payments seamlessly through Bharat Connect right inside TallyPrime.'
    }
  ];

  readonly oneStopPoints = [
    'GST-ready invoicing, returns, and e-Way Bill',
    'Inventory, multi-godown, batches & expiry',
    'Multi-user, multi-company, role-based security',
    'MIS dashboards for owners — daily, weekly, monthly',
    'Data backup, audit trail and statutory reports'
  ];

  readonly mobileFeatures = [
    'Live Tally data anywhere, even offline',
    'Sales analysis, top items, top customers',
    'Automated outstanding payment reminders',
    'Stock summary & inactive items report',
    '100% data security with bank-grade encryption'
  ];

  readonly products = [
    {
      icon: '🧾',
      title: 'TallyPrime 7.0',
      description: 'India\'s most trusted accounting, inventory and compliance software for growing businesses.',
      linkText: 'View TallyPrime',
      link: '/products/tally-solutions'
    },
    {
      icon: '📱',
      title: 'Tally on Mobile',
      description: 'Powered by Biz Analyst — access your Tally data, reports and reminders from any phone.',
      linkText: 'See Mobile App',
      link: '/services/mobile-apps'
    },
    {
      icon: '🛡️',
      title: 'Quick Heal Antivirus',
      description: 'Endpoint security for business PCs — protect your finance data from malware and ransomware.',
      linkText: 'Get Quick Heal',
      link: '/solutions/it-consulting'
    },
    {
      icon: '🖥️',
      title: 'TSplus Remote Access',
      description: 'Affordable, secure remote desktop access for your Tally and ERP systems — without VPN hassle.',
      linkText: 'Explore TSplus',
      link: '/solutions/cloud-solutions'
    },
    {
      icon: '🧮',
      title: 'Vyapar App',
      description: 'Simple GST billing and inventory app for small shops, traders and service providers.',
      linkText: 'Try Vyapar',
      link: '/products/billing-software'
    },
    {
      icon: '🛟',
      title: 'LIC Insurance',
      description: 'Secure your family and business future with India\'s most trusted life insurance partner.',
      linkText: 'Plan with LIC',
      link: '/solutions/business-automation'
    }
  ];

  readonly services = [
    {
      icon: '⚙️',
      title: 'Tally Software Services (TSS)',
      description: 'Stay updated with the latest Tally releases, statutory changes, online data access and product expert support.',
      linkText: 'Renew TSS',
      link: '/services/web-development'
    },
    {
      icon: '🎓',
      title: 'Tally Certified Course',
      description: 'Learn TallyPrime, GST, payroll and accounting from certified trainers — practical, job-oriented training.',
      linkText: 'Join Tally Course',
      link: '/services/ui-ux-design'
    },
    {
      icon: '🧰',
      title: 'Backup & Unlock Tool',
      description: 'Tally data backup automation, license unlock and rescue services for damaged or locked companies.',
      linkText: 'Get Support',
      link: '/contact'
    }
  ];

  readonly stats = [
    { value: '10+', label: 'Years Serving Businesses' },
    { value: '15', label: 'Expert Team Members' },
    { value: '250+', label: 'Happy Customers' },
    { value: '2500+', label: 'Ledgers Managed' }
  ];

  readonly whyUsCards = [
    {
      icon: '🏅',
      title: 'Certified + Practical Team',
      description: 'Tally-certified consultants with deep, hands-on experience in retail, trading, manufacturing and services.'
    },
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Structured onboarding plan helps you go live quickly without disturbing your day-to-day operations.'
    },
    {
      icon: '📞',
      title: 'Local Onsite Support',
      description: 'Sonipat, Panipat and nearby Haryana — onsite + remote support available within your business hours.'
    },
    {
      icon: '📈',
      title: 'Decision-Focused Reports',
      description: 'Custom dashboards that help owners act faster on cash flow, receivables and profit margins.'
    }
  ];

  readonly testimonials = [
    {
      quote: 'Migration to TallyPrime 7.0 was smooth and the training made our entire accounts team productive within a week.',
      name: 'Sharma Trading Co.',
      role: 'Distribution • Sonipat'
    },
    {
      quote: 'Tally on Mobile changed how we follow up on payments. Our outstanding has reduced by almost 30% in 3 months.',
      name: 'Verma Industries',
      role: 'Manufacturing • Panipat'
    },
    {
      quote: 'Their team is just a call away. Onsite support during GST filing season is the reason we are with softTech for years.',
      name: 'Goyal Enterprises',
      role: 'Retail Chain • Haryana'
    }
  ];

  readonly contactInfo = [
    { icon: '📞', label: 'Call Us', value: '+91 82228 45550' },
    { icon: '✉️', label: 'Email', value: 'tyagi.sts@gmail.com' },
    { icon: '📍', label: 'Visit', value: 'SCO 32, Ground Floor, HSIIDC Commercial Complex, Kundli 131028' }
  ];
}
