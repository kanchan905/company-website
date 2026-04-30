import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-tally-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './tally-solutions.component.html',
  styleUrl: './tally-solutions.component.scss'
})
export class TallySolutionsComponent {
  readonly productHighlights = [
    {
      icon: '🧾',
      title: 'GST & Compliance Ready',
      description: 'Manage invoicing, returns, and ledgers with confidence and reduced compliance stress.'
    },
    {
      icon: '📊',
      title: 'Business Reports',
      description: 'Track profitability, receivables, expenses, and cash flow with decision-ready reports.'
    },
    {
      icon: '📱',
      title: 'Connected Mobility',
      description: 'Extend visibility through mobile-compatible reporting for owners and managers.'
    }
  ];
}
