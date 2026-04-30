import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-it-consulting',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './it-consulting.component.html',
  styleUrl: './it-consulting.component.scss'
})
export class ItConsultingComponent {
  readonly consultingAreas = [
    {
      icon: '🧩',
      title: 'Technology Advisory',
      description: 'Choose the right software stack and implementation strategy for your current business maturity.'
    },
    {
      icon: '🛡️',
      title: 'Risk & Compliance Readiness',
      description: 'Identify process-level risks and strengthen controls for data, operations, and reporting.'
    },
    {
      icon: '🗺️',
      title: 'Roadmap Planning',
      description: 'Create phased execution plans for digital transformation with clear ROI checkpoints.'
    }
  ];
}
