import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-seo-services',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './seo-services.component.html',
  styleUrl: './seo-services.component.scss'
})
export class SeoServicesComponent {
  readonly seoAreas = [
    {
      icon: '🔎',
      title: 'Technical SEO',
      description: 'Fix crawl, index, speed, and structure issues that block organic growth.'
    },
    {
      icon: '✍️',
      title: 'Content SEO',
      description: 'Build targeted content clusters aligned with search intent and conversion goals.'
    },
    {
      icon: '📍',
      title: 'Local SEO',
      description: 'Improve map visibility and local discovery for service-area businesses.'
    }
  ];
}
