import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-billing-software',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './billing-software.component.html',
  styleUrl: './billing-software.component.scss'
})
export class BillingSoftwareComponent {
  readonly billingFeatures = [
    {
      icon: '🧾',
      title: 'Fast Invoice Creation',
      description: 'Generate GST-ready invoices in seconds with templates and product-level setup.'
    },
    {
      icon: '📦',
      title: 'Stock + Billing Sync',
      description: 'Automatically adjust inventory on billing so stock and sales stay aligned.'
    },
    {
      icon: '💳',
      title: 'Payment & Receivables',
      description: 'Track partial/full payments and monitor outstanding balances clearly.'
    }
  ];
}
