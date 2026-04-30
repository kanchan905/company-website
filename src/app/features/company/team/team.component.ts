import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    MediaHighlightComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  readonly members = [
    {
      name: 'Ankit Sharma',
      role: 'Business Solutions Lead',
      summary: 'Leads digital transformation strategy with focus on finance and operational scalability.'
    },
    {
      name: 'Riya Malhotra',
      role: 'Implementation Consultant',
      summary: 'Designs practical workflows and ensures clean deployments aligned to business operations.'
    },
    {
      name: 'Vivek Mehta',
      role: 'Training & Support Specialist',
      summary: 'Helps teams adopt systems confidently through structured training and ongoing guidance.'
    },
    {
      name: 'Nisha Arora',
      role: 'Client Success Manager',
      summary: 'Ensures client goals stay on track with proactive reviews and measurable performance outcomes.'
    }
  ];

  readonly strengths = [
    'Cross-functional implementation and advisory team',
    'Fast response support with practical problem solving',
    'Business-first thinking, not tool-first execution'
  ];

  readonly metrics = [
    { value: '4.8/5', label: 'Average client rating' },
    { value: '90%', label: 'Projects completed before target timeline' },
    { value: '24/7', label: 'Priority support for critical issues' }
  ];
}
