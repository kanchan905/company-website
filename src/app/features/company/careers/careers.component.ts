import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  readonly reasons = [
    {
      title: 'High Ownership',
      description: 'You own projects end-to-end and directly influence client outcomes.'
    },
    {
      title: 'Continuous Learning',
      description: 'Work on real implementation challenges across industries and tools.'
    },
    {
      title: 'Growth Culture',
      description: 'Structured mentorship and role-based progression path for every team member.'
    }
  ];

  readonly process = [
    {
      step: '01',
      title: 'Profile Review',
      description: 'We review your profile and schedule a short call to understand role-fit and expectations.',
      timeline: '1-2 days'
    },
    {
      step: '02',
      title: 'Practical Interaction',
      description: 'A practical assignment or scenario-based discussion to evaluate problem-solving approach.',
      timeline: '2-4 days'
    },
    {
      step: '03',
      title: 'Final Conversation',
      description: 'Culture fit, growth path discussion, and a transparent offer conversation.',
      timeline: '1-2 days'
    }
  ];

  readonly openings = [
    {
      role: 'Implementation Consultant',
      type: 'Full Time',
      location: 'Sonipat',
      summary: 'Lead software onboarding, map processes, and ensure smooth go-live for clients.'
    },
    {
      role: 'Customer Support Executive',
      type: 'Full Time',
      location: 'Panipat',
      summary: 'Resolve client issues, guide users, and maintain excellent service experience.'
    },
    {
      role: 'Business Development Associate',
      type: 'Full Time',
      location: 'Remote + Field',
      summary: 'Identify growth opportunities, manage pipeline, and drive client consultations.'
    }
  ];
}
