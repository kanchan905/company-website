import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { QuoteRequestPanelComponent } from '../../shared/components/quote-request-panel/quote-request-panel.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    QuoteRequestPanelComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly heroBadges = [
    '📞 Same-day reply',
    '🛡️ Tally 5-Star Certified Partner',
    '📍 Kundli · Sonipat · NCR'
  ];

  readonly heroStats = [
    { value: '< 1 day', label: 'First response' },
    { value: 'On-site + remote', label: 'Both available' },
    { value: 'Written quote', label: 'No verbal-only' },
    { value: 'Owner contact', label: 'Direct escalation' }
  ];

  readonly contactCards = [
    {
      icon: '📞',
      title: 'Call us',
      lines: ['+91 82228 45550'],
      cta: { label: 'Tap to call', href: 'tel:+918222845550' }
    },
    {
      icon: '✉️',
      title: 'Email us',
      lines: ['tyagi.sts@gmail.com'],
      cta: { label: 'Compose email', href: 'mailto:tyagi.sts%40gmail.com?subject=softTech%20enquiry' }
    },
    {
      icon: '📲',
      title: 'WhatsApp',
      lines: ['Fast for quick questions'],
      cta: { label: 'Open chat', href: 'https://wa.me/918222845550?text=Hello%20softTech' }
    },
    {
      icon: '📍',
      title: 'Visit office',
      lines: ['SCO 32, Ground Floor', 'HSIIDC Commercial Complex', 'Kundli 131028, Haryana'],
      cta: { label: 'Get directions', href: 'https://maps.google.com/?q=HSIIDC+Commercial+Complex+Kundli' }
    }
  ];

  readonly faqs = [
    {
      q: 'How soon will you reply?',
      a: 'You will typically get a first reply the same working day. For urgent Tally or billing-down issues, AMC customers get priority in the queue.'
    },
    {
      q: 'What should I share for a quote?',
      a: 'Your current software list, team size, top three pain points, and about one month of sample reports (Excel is fine). That level of brief is enough for a realistic proposal.'
    },
    {
      q: 'Can you visit on site?',
      a: 'Yes — we visit regularly in the Kundli–Sonipat–Panipat belt, and the NCR based on scope. For critical issues, the owner or a senior engineer may visit in person.'
    }
  ];
}
