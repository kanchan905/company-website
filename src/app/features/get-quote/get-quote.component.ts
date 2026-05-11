import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { QuoteRequestPanelComponent } from '../../shared/components/quote-request-panel/quote-request-panel.component';

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, QuoteRequestPanelComponent],
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.scss'
})
export class GetQuoteComponent {
  private readonly route = inject(ActivatedRoute);

  /** Passed into quote panel for `?service=` deep links */
  routeServiceHint?: string;

  readonly heroBadges = [
    '📝 Written quote',
    '⚡ Same-day first reply',
    '🛡️ Tally 5-Star Partner'
  ];

  readonly heroStats = [
    { value: '1 page', label: 'Enough to start' },
    { value: 'Line items', label: 'Clear breakdown' },
    { value: 'Phased plan', label: 'Optional milestones' },
    { value: 'No hard sell', label: 'Honest fit only' }
  ];

  readonly checklist = [
    'Current software (Tally edition, billing, CRM, etc.)',
    'Team size / locations / outlets (approx.)',
    'Top 3 pain points + deadline expectation',
    'Budget band (rough range is fine)'
  ];

  readonly trustPoints = [
    {
      icon: '🧾',
      title: 'Transparent scope',
      text: 'Quotes list licence, services, AMC, and taxes as separate line items.'
    },
    {
      icon: '📞',
      title: 'Owner escalation',
      text: 'For complex fits, a senior engineer or the owner joins the discussion directly.'
    },
    {
      icon: '📍',
      title: 'Local delivery',
      text: 'On-site visits in the Kundli–Sonipat belt; remote support across India.'
    }
  ];

  readonly faqs = [
    {
      q: 'Is the initial consultation free?',
      a: 'Yes — a short discovery call or message for direction is free. A detailed assessment or on-site visit may be scope-based; we tell you upfront.'
    },
    {
      q: 'How long does a quote take?',
      a: 'Simple Tally licence or AMC requests are often same day. Custom web, CRM, or multi-site IT usually receive a written quote within one to three working days.'
    },
    {
      q: 'I only need an advisory quote — is that possible?',
      a: 'Absolutely — we also provide advisory-only quotes for IT consulting, security reviews, or Tally health checks.'
    }
  ];

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(q => {
      this.routeServiceHint = q.get('service') ?? undefined;
    });
  }
}
