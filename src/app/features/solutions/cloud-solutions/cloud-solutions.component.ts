import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-cloud-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './cloud-solutions.component.html',
  styleUrl: './cloud-solutions.component.scss'
})
export class CloudSolutionsComponent {
  readonly pillars = [
    {
      icon: '☁️',
      title: 'Cloud Migration',
      description: 'Move critical workloads with zero data-loss planning and rollback safety.'
    },
    {
      icon: '🔐',
      title: 'Security & Backups',
      description: 'Protect infrastructure with role-based access, scheduled backups, and audit visibility.'
    },
    {
      icon: '⚡',
      title: 'High Availability',
      description: 'Build resilient systems with uptime-focused deployment and monitoring.'
    }
  ];
}
