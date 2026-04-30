import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contactPoints = [
    { label: 'Phone', value: '+91 98123 85193' },
    { label: 'Email', value: 'info@softtec.in' },
    { label: 'Location', value: 'Sonipat, Haryana, India' }
  ];
}
