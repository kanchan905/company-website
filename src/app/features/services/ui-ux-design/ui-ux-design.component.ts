import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-ui-ux-design',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.scss'
})
export class UiUxDesignComponent {
  readonly heroBadges = [
    '🎨 Figma-first delivery',
    '📐 Reusable design system',
    '📱 Mobile + desktop parity'
  ];

  readonly heroStats = [
    { value: 'Wireframe → UI', label: 'Structured handover' },
    { value: 'Design system', label: 'Tokens + components' },
    { value: 'Prototype', label: 'Click-through review' },
    { value: 'Dev-friendly', label: 'Specs + assets ready' }
  ];

  readonly whyDesign = [
    {
      icon: '🎯',
      title: 'Business goals first',
      description:
        'Visuals come later — first we clarify what users need to do and what outcomes the business expects.'
    },
    {
      icon: '🧭',
      title: 'Flows before screens',
      description:
        'Approve user journeys and low-fi wireframes first so UI iterations stay focused.'
    },
    {
      icon: '🧱',
      title: 'Reusable design system',
      description:
        'Tokens (colour, type, spacing) and components — new pages take minutes, not hours.'
    },
    {
      icon: '🤝',
      title: 'Dev-friendly handover',
      description:
        'Annotated Figma, states, edge cases, and exports — less guesswork for frontend.'
    }
  ];

  readonly services = [
    {
      icon: '🧠',
      title: 'UX research & audit',
      description:
        'Heuristic audit of existing apps or sites plus lightweight interviews — packaged as an insights brief.',
      linkText: 'Book UX audit',
      link: '/contact'
    },
    {
      icon: '🗺️',
      title: 'Information architecture',
      description:
        'Sitemap, user flows, and navigation structure — putting content in the right places.',
      linkText: 'Plan IA project',
      link: '/contact'
    },
    {
      icon: '✏️',
      title: 'Wireframes & low-fi',
      description:
        'Greyscale wireframes for fast iteration — decisions are not stuck in visual debate.',
      linkText: 'Start wireframes',
      link: '/contact'
    },
    {
      icon: '🎨',
      title: 'UI design (web + mobile)',
      description: 'Brand-aligned, responsive UI for marketing sites, dashboards, mobile apps — clean and modern.',
      linkText: 'Get UI quote',
      link: '/contact'
    },
    {
      icon: '🧪',
      title: 'Interactive prototypes',
      description:
        'Click-through Figma prototypes for stakeholder review and light user testing.',
      linkText: 'Prototype walkthrough',
      link: '/contact'
    },
    {
      icon: '📦',
      title: 'Design system & guidelines',
      description: 'Reusable component library, typography rules, color tokens — long-term consistency.',
      linkText: 'Build design system',
      link: '/contact'
    }
  ];

  readonly principles = [
    { icon: '👁️', name: 'Clarity over cleverness', detail: 'One obvious primary action per screen with strong hierarchy.' },
    { icon: '🧩', name: 'Consistency', detail: 'Same components, same spacing — predictable user experience.' },
    { icon: '♿', name: 'Accessible by default', detail: 'Contrast, touch targets, keyboard paths — inclusive design.' },
    { icon: '⚡', name: 'Performance-aware', detail: 'Image strategy, asset sizes — design jo fast load ho.' }
  ];

  readonly process = [
    { step: '01', title: 'Discover', detail: 'Stakeholder Q&A, references, success metrics.' },
    { step: '02', title: 'Define', detail: 'Flows + wireframes; structure approved before pixels.' },
    { step: '03', title: 'Design', detail: 'High-fidelity UI, responsive states, dark/light if needed.' },
    { step: '04', title: 'Handover', detail: 'Specs, assets, design system docs for dev team.' }
  ];

  readonly faqs = [
    {
      q: 'Do you offer development alongside design?',
      a:
        'Yes — design and web/mobile development can come from one team. Design-only or dev-only is fine too.'
    },
    {
      q: 'Will you follow our existing brand guidelines?',
      a:
        'Yes — we extend the design system from your brand colours, fonts, and logo rules.'
    },
    {
      q: 'How many revisions are included?',
      a:
        'Typically 2–3 rounds per milestone (wireframe, UI, prototype). Major scope changes are quoted separately — transparent pricing.'
    },
    {
      q: 'What is the final delivery format?',
      a:
        'Editable Figma file, exported assets (SVG/PNG), annotated specs, and a short Loom walkthrough — self-serve for developers.'
    }
  ];
}
