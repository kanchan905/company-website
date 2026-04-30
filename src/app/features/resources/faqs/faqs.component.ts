import { Component } from '@angular/core';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  readonly faqs = [
    {
      question: 'How long does implementation usually take?',
      answer: 'It depends on scope, but most focused implementations go live within 2 to 6 weeks.'
    },
    {
      question: 'Do you provide post-deployment support?',
      answer: 'Yes, we provide structured support plans for issue resolution, optimization, and training.'
    },
    {
      question: 'Can you work with our existing software setup?',
      answer: 'Absolutely. We assess your current stack and recommend improvements without unnecessary replacement.'
    },
    {
      question: 'Do you offer team training as part of projects?',
      answer: 'Yes, role-based training is included so teams can adopt systems confidently and consistently.'
    }
  ];
}
