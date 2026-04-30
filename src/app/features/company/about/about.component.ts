import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { MediaHighlightComponent } from '../../../shared/components/media-highlight/media-highlight.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    MediaHighlightComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly pillars = [
    {
      title: 'Mission',
      description: 'Indian SMBs ko simple, reliable aur insight-driven business systems dena.'
    },
    {
      title: 'Vision',
      description: 'Har growing business ke liye technology adoption ko easy aur outcome-focused banana.'
    }
  ];

  readonly stats = [
    { value: '10+', label: 'Years of consulting & implementation' },
    { value: '250+', label: 'Businesses transformed' },
    { value: '98%', label: 'Client retention rate' }
  ];

  readonly milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Started with a clear mission: simplify finance operations for growing businesses.'
    },
    {
      year: '2018',
      title: 'Process Framework',
      description: 'Built a repeatable onboarding and support model for faster and cleaner deployments.'
    },
    {
      year: '2022',
      title: 'Digital Expansion',
      description: 'Added cloud-ready workflows, mobile reporting, and automation-first advisory.'
    },
    {
      year: 'Today',
      title: 'Growth Partner',
      description: 'Serving multi-industry clients with outcome-driven software and business consulting.'
    }
  ];

  readonly values = [
    {
      icon: '01',
      title: 'Outcome First Thinking',
      description: 'Every project starts with clear KPIs, so teams can track value from day one.'
    },
    {
      icon: '02',
      title: 'Partnership Mindset',
      description: 'We work as an extension of your team with continuous support and optimization.'
    },
    {
      icon: '03',
      title: 'Practical Domain Expertise',
      description: 'Strong accounting and operations understanding ensures solutions that actually work daily.'
    }
  ];
}
