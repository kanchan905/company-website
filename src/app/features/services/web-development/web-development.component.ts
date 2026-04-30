import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {
  readonly offerings = [
    {
      icon: '🌐',
      title: 'Corporate Websites',
      description: 'High-conversion brand websites built for trust, speed, and lead capture.'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      description: 'Scalable online storefronts with catalog, checkout, and order workflows.'
    },
    {
      icon: '⚙️',
      title: 'Custom Web Platforms',
      description: 'Tailored web apps for operations, reporting, automation, and internal teams.'
    }
  ];
}
