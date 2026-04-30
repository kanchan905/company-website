import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-business-automation',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './business-automation.component.html',
  styleUrl: './business-automation.component.scss'
})
export class BusinessAutomationComponent {
  readonly automations = [
    {
      icon: '📨',
      title: 'Outstanding Reminders',
      description: 'Auto reminders through configured workflows to improve collections without manual follow-up.'
    },
    {
      icon: '🧾',
      title: 'Billing Approvals',
      description: 'Set role-based approval matrix for invoicing, purchases, and key finance actions.'
    },
    {
      icon: '📊',
      title: 'Smart Notifications',
      description: 'Trigger alerts for overdue receivables, stock limits, and compliance timelines.'
    }
  ];
}
