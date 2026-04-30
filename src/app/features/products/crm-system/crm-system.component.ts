import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-crm-system',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './crm-system.component.html',
  styleUrl: './crm-system.component.scss'
})
export class CrmSystemComponent {
  readonly crmModules = [
    {
      icon: '👥',
      title: 'Lead & Pipeline Tracking',
      description: 'Capture leads, track stages, and improve close rates with structured follow-ups.'
    },
    {
      icon: '📞',
      title: 'Sales Activity Management',
      description: 'Log calls, meetings, and tasks so no opportunity gets missed.'
    },
    {
      icon: '📈',
      title: 'Revenue Forecasting',
      description: 'Use dashboard insights to predict sales performance and optimize strategy.'
    }
  ];
}
