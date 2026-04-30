import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  readonly studies = [
    {
      title: 'Distribution Firm: 42% faster receivables follow-up cycle',
      challenge: 'Manual reminder process and delayed outstanding visibility.',
      outcome: 'Automated workflow and dashboard-led collection review improved cash discipline.'
    },
    {
      title: 'Retail Group: Reduced monthly reporting effort by 50%',
      challenge: 'Fragmented reporting across billing, stock, and finance teams.',
      outcome: 'Centralized data flow and cleaner reporting structure improved decision speed.'
    },
    {
      title: 'Services Company: 30% better lead conversion tracking',
      challenge: 'No structured CRM process and inconsistent sales follow-ups.',
      outcome: 'Pipeline stages, task triggers, and reporting improved conversion predictability.'
    }
  ];
}
