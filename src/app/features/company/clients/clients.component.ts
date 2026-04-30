import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  readonly metrics = [
    { value: '250+', label: 'Businesses served across sectors' },
    { value: '40%', label: 'Average reporting time reduced' },
    { value: '95%', label: 'Support satisfaction score' }
  ];

  readonly sectors = [
    {
      title: 'Retail & Distribution',
      challenge: 'Stock leakage, delayed reconciliations, and low order visibility.',
      outcome: 'Faster billing, cleaner inventory flow, and real-time sales insights.'
    },
    {
      title: 'Manufacturing',
      challenge: 'Manual production costing and fragmented purchase workflows.',
      outcome: 'Improved cost tracking and stronger control on procurement cycles.'
    },
    {
      title: 'Wholesale Trading',
      challenge: 'Receivables follow-up and credit policy inefficiencies.',
      outcome: 'Automated reminders and better cash-flow discipline.'
    },
    {
      title: 'Professional Services',
      challenge: 'Inconsistent invoicing and weak profitability tracking.',
      outcome: 'Service-wise profitability dashboards and better billing consistency.'
    },
    {
      title: 'Education & Coaching',
      challenge: 'Scattered fee records and delayed monthly reporting.',
      outcome: 'Centralized finance workflow with timely statements and alerts.'
    },
    {
      title: 'Healthcare',
      challenge: 'Compliance-heavy operations with complex vendor management.',
      outcome: 'Reliable reporting and streamlined payable reconciliation.'
    }
  ];

  readonly testimonials = [
    {
      quote: 'The new process cut our month-end reporting effort by almost half. Team support is consistently reliable.',
      name: 'Manufacturing Business Owner'
    },
    {
      quote: 'Implementation quality was excellent and adoption by staff was much faster than expected.',
      name: 'Retail Chain Operations Lead'
    }
  ];
}
