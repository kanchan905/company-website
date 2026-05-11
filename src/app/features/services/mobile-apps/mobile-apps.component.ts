import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-mobile-apps',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './mobile-apps.component.html',
  styleUrl: './mobile-apps.component.scss'
})
export class MobileAppsComponent {
  readonly heroBadges = [
    '📱 Android + iOS ready',
    '🔗 Tally / ERP friendly',
    '🚀 Play Store + App Store deploy'
  ];

  readonly heroStats = [
    { value: 'Cross-platform', label: 'One codebase, two stores' },
    { value: 'Offline-first', label: 'Field-team friendly' },
    { value: 'OTP / SSO', label: 'Login flows built-in' },
    { value: 'Analytics', label: 'Track real usage' }
  ];

  readonly whyMobile = [
    {
      icon: '🎯',
      title: 'Apps with a real purpose',
      description:
        'Not brochure-only apps — we focus on concrete workflows: order booking, attendance, dispatch, and approvals.'
    },
    {
      icon: '🌐',
      title: 'Tally & backend integration',
      description:
        'Secure sync with your existing ERP, Tally data, CRM, or custom APIs — duplicate entry drops sharply.'
    },
    {
      icon: '🔋',
      title: 'Built for poor networks',
      description:
        'For field staff, warehouse, and branch teams — offline queue and retry logic so data is not lost.'
    },
    {
      icon: '🔒',
      title: 'Role-based access',
      description:
        'Salesperson, supervisor, owner — each role sees only what they need. Audit log and remote disable support.'
    }
  ];

  readonly appTypes = [
    {
      icon: '🧾',
      title: 'Order booking apps',
      description:
        'Sales reps capture orders in the field — customer lists, price lists, stock checks, instant sync to Tally / ERP.',
      linkText: 'Plan order app',
      link: '/contact'
    },
    {
      icon: '🚚',
      title: 'Dispatch & delivery',
      description:
        'Driver app with load sheets, POD photos, signatures, and GPS check-ins — admins see live status.',
      linkText: 'Dispatch workflow',
      link: '/contact'
    },
    {
      icon: '⏱️',
      title: 'Attendance & field tracking',
      description: 'Geo-fenced punch-in, daily reporting, beat plan — supervisor dashboard included.',
      linkText: 'Field tracking demo',
      link: '/contact'
    },
    {
      icon: '🧑‍💼',
      title: 'Customer-facing apps',
      description:
        'Catalog, loyalty points, complaints, AMC requests — a direct channel to end customers under your brand.',
      linkText: 'Customer app brief',
      link: '/contact'
    },
    {
      icon: '✅',
      title: 'Approval & workflow apps',
      description:
        'Quotation, leave, and expense approvals on mobile — owners tap Approve / Reject so decisions move faster.',
      linkText: 'Approval workflows',
      link: '/contact'
    },
    {
      icon: '🔔',
      title: 'Notification & utility',
      description: 'Push notifications, OTP login, share intents, deep links — small but high-impact features for retention.',
      linkText: 'Utility app quote',
      link: '/contact'
    }
  ];

  readonly stack = [
    { icon: '⚛️', name: 'Cross-platform first', detail: 'Single codebase Android + iOS — faster delivery, easier maintenance.' },
    { icon: '🔌', name: 'API & backend ready', detail: 'REST / JSON integration with Tally exports, ERP, or custom Node/PHP backends.' },
    { icon: '🔐', name: 'Security baseline', detail: 'Secure storage, certificate pinning options, role tokens — owner-friendly defaults.' },
    { icon: '🛠️', name: 'Maintainable structure', detail: 'Versioning, feature flags, in-app update prompts — long-term ownership in mind.' }
  ];

  readonly process = [
    { step: '01', title: 'Discover', detail: 'Users, workflows, devices — short Q&A + sample screens.' },
    { step: '02', title: 'Prototype', detail: 'Clickable mockup approval before any code is written.' },
    { step: '03', title: 'Build & test', detail: 'Sprint demos, internal beta on real devices in your office.' },
    { step: '04', title: 'Launch & iterate', detail: 'Play Store / App Store publishing + post-launch support.' }
  ];

  readonly faqs = [
    {
      q: 'Do Android and iOS cost separately?',
      a:
        'We prefer a cross-platform stack (Flutter or similar), so one codebase serves both platforms. Store-specific items such as icons and signing are included.'
    },
    {
      q: 'Can data sync with Tally?',
      a:
        'Yes — via Tally TDL, XML, or middleware. Typical patterns: push orders to Tally, pull ledgers / stock, day-end sync. We finalise the integration approach during scoping.'
    },
    {
      q: 'How long does publishing take?',
      a:
        'After the build is ready, Android is usually 1–3 days; iOS App Store review can take 3–7 days. Developer accounts are set up in your name so you retain ownership.'
    },
    {
      q: 'Changes or redesign for an existing app?',
      a:
        'We audit and recommend continuing or rewriting — vendor-neutral. If the codebase is healthy, we add AMC and new features.'
    }
  ];
}
