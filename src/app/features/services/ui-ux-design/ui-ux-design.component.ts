import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-ui-ux-design',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.scss'
})
export class UiUxDesignComponent {
  readonly designServices = [
    {
      icon: '🧠',
      title: 'UX Research & Flows',
      description: 'Understand user behavior and map clear journeys for conversion-focused products.'
    },
    {
      icon: '🎨',
      title: 'UI Design Systems',
      description: 'Consistent, scalable design systems for web and mobile product ecosystems.'
    },
    {
      icon: '🧪',
      title: 'Prototype & Validation',
      description: 'Interactive prototypes to validate ideas before development investment.'
    }
  ];
}
