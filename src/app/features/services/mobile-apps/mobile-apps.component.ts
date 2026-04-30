import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-mobile-apps',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './mobile-apps.component.html',
  styleUrl: './mobile-apps.component.scss'
})
export class MobileAppsComponent {
  readonly appTypes = [
    {
      icon: '📱',
      title: 'Business Utility Apps',
      description: 'Apps for reporting, field team tracking, and operational visibility.'
    },
    {
      icon: '🧑‍💼',
      title: 'Client-Facing Apps',
      description: 'User-centric mobile experiences for engagement, retention, and conversion.'
    },
    {
      icon: '🔗',
      title: 'System Integration',
      description: 'Integrate mobile apps with ERP, CRM, billing, and backend platforms.'
    }
  ];
}
