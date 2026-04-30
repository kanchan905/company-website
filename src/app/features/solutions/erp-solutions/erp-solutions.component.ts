import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-erp-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './erp-solutions.component.html',
  styleUrl: './erp-solutions.component.scss'
})
export class ErpSolutionsComponent {
  readonly stats = [
    { value: '35%', label: 'Faster monthly closing' },
    { value: '50%', label: 'Lower manual reporting effort' },
    { value: '100%', label: 'Department visibility in one system' }
  ];

  readonly modules = [
    {
      icon: '📦',
      title: 'Inventory & Procurement',
      description: 'Track stock movement, reorder points, and vendor performance in one place.',
      compact: true
    },
    {
      icon: '💰',
      title: 'Finance & Compliance',
      description: 'Automate entries, GST workflows, and reporting without spreadsheet dependency.',
      compact: true
    },
    {
      icon: '📈',
      title: 'Leadership Dashboards',
      description: 'Role-wise insights for management, operations, and accounts teams.',
      compact: true
    }
  ];
}
