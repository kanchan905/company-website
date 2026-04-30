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
  readonly highlights = [
    { label: 'Tally Expertise', value: '10+ Years' },
    { label: 'Businesses Served', value: '250+' },
    { label: 'Support Response', value: '< 2 Hours' }
  ];

  readonly serviceCards = [
    {
      icon: '🧾',
      title: 'TallyPrime Implementation',
      description: 'Set up TallyPrime with clean masters, GST-ready workflow, and accurate reports from day one.',
      linkText: 'Explore Tally Services',
      link: '/products/tally-solutions'
    },
    {
      icon: '📱',
      title: 'Tally On Mobile',
      description: 'Give owners and sales teams live visibility of ledgers, receivables, and stock on the go.',
      linkText: 'See Mobile Features',
      link: '/services/mobile-apps'
    },
    {
      icon: '🔒',
      title: 'Business Security Stack',
      description: 'Protect business devices and finance systems with antivirus, backups, and support plans.',
      linkText: 'Get Security Plan',
      link: '/solutions/it-consulting'
    },
    {
      icon: '⚙️',
      title: 'Business Automation',
      description: 'Automate collections, reminders, and routine ops so your team focuses on growth.',
      linkText: 'Automate Workflow',
      link: '/solutions/business-automation'
    }
  ];

  readonly whyUsCards = [
    {
      icon: '✅',
      title: 'Certified + Practical Team',
      description: 'Deep product knowledge with real business process experience in retail, trading, and service sectors.'
    },
    {
      icon: '🚀',
      title: 'Fast Deployment',
      description: 'Structured onboarding checklist helps go live quickly without interrupting daily operations.'
    },
    {
      icon: '📊',
      title: 'Decision-Focused Reporting',
      description: 'Dashboards and reports designed for owners to act faster on margins, cash flow, and receivables.'
    }
  ];

  readonly testimonials = [
    {
      quote: 'Our migration to TallyPrime was smooth and the training made the entire team productive in just a few days.',
      name: 'Manufacturing Client',
      role: 'Operations Head'
    },
    {
      quote: 'Mobile reporting and outstanding reminders helped us improve collections and reduce manual follow-ups.',
      name: 'Distribution Client',
      role: 'Business Owner'
    }
  ];
}
