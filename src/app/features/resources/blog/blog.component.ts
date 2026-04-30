import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  readonly posts = [
    {
      title: 'How to Improve Cash Flow Visibility in Growing Businesses',
      category: 'Finance Strategy',
      summary: 'Practical reporting and receivables tracking patterns that reduce cash surprises.',
      readTime: '6 min read'
    },
    {
      title: 'Tally + Automation: A Practical Setup for Faster Collections',
      category: 'Automation',
      summary: 'How reminder workflows and cleaner ledgers can speed up monthly collection cycles.',
      readTime: '5 min read'
    },
    {
      title: 'Choosing the Right CRM for B2B Sales Teams',
      category: 'Sales Systems',
      summary: 'A decision framework to evaluate CRM options by team size, process, and growth goals.',
      readTime: '7 min read'
    }
  ];
}
