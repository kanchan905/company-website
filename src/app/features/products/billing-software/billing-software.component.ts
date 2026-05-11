import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-billing-software',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './billing-software.component.html',
  styleUrl: './billing-software.component.scss'
})
export class BillingSoftwareComponent {
  readonly heroBadges = [
    '🧾 GST-ready invoices',
    '📦 Stock + billing sync',
    '🖨️ Thermal + A4 print'
  ];

  readonly heroStats = [
    { value: 'GST', label: 'Invoice + e-invoice ready' },
    { value: 'Stock', label: 'Auto-update on sale' },
    { value: 'POS', label: 'Counter + back-office' },
    { value: 'Reports', label: 'Daily sales + outstanding' }
  ];

  readonly whyBilling = [
    {
      icon: '⚡',
      title: 'Fast invoice creation',
      description:
        'Item code, barcode, or quick search — seconds at the counter. Waiting customers skip long forms.',
    },
    {
      icon: '🧾',
      title: 'GST + e-invoice ready',
      description:
        'Compliant GST layouts, HSN, tax slabs, e-invoice (IRP) export — auditors and accountants stay aligned.',
    },
    {
      icon: '📦',
      title: 'Stock stays accurate',
      description:
        'Stock auto-deducts per bill, returns add stock back — fewer mismatches versus manual registers.',
    },
    {
      icon: '🔁',
      title: 'Sync with Tally',
      description:
        'Day-end or scheduled sync — billing stays up front, accounting stays in Tally with minimal duplicate entry.',
    }
  ];

  readonly features = [
    {
      icon: '🧾',
      title: 'Invoice & quotation',
      description: 'GST / non-GST invoices, quotations, delivery challan, sales return — sab standard templates.',
      linkText: 'See invoice options',
      link: '/contact'
    },
    {
      icon: '📦',
      title: 'Inventory & barcode',
      description:
        'Multi-godown, batch, expiry, barcode scanning — wholesale, retail, and pharmacy-friendly.',
      linkText: 'Plan inventory',
      link: '/contact'
    },
    {
      icon: '💳',
      title: 'Payments & receivables',
      description:
        'Cash, card, UPI, partial payments, party ledger, and ageing — daily visibility on outstanding balances.',
      linkText: 'Payments workflow',
      link: '/contact'
    },
    {
      icon: '🖨️',
      title: 'Print &amp; share',
      description: '80mm thermal POS, A5/A4 print, PDF download, WhatsApp share — customers receive bills instantly.',
      linkText: 'Print formats',
      link: '/contact'
    },
    {
      icon: '🏷️',
      title: 'Discounts &amp; schemes',
      description: 'Item-level / bill-level discount, scheme codes, price lists, party-wise rates — sales team friendly.',
      linkText: 'Setup pricing',
      link: '/contact'
    },
    {
      icon: '📊',
      title: 'Reports &amp; MIS',
      description:
        'Owner-ready MIS for daily sales, tax summaries, and outstanding at a glance.',
      linkText: 'Reports demo',
      link: '/contact'
    }
  ];

  readonly integrations = [
    { icon: '🧾', name: 'Tally / accounting', detail: 'Sales voucher push, customer master sync, tax mapping.' },
    { icon: '📷', name: 'Barcode scanner', detail: 'Plug-and-play USB scanners — faster POS throughput.' },
    { icon: '🖨️', name: 'Thermal & A4 printer', detail: '80mm thermal POS and A4 printer support — automatic formats.' },
    { icon: '🏦', name: 'UPI / payment links', detail: 'QR + UPI link generation directly on bill (where applicable).' },
    { icon: '📲', name: 'WhatsApp share', detail: 'Share PDF bills in one tap — paperless option.' },
    { icon: '📊', name: 'Excel export', detail: 'CSV / Excel exports — easy handoff for accountants.' }
  ];

  readonly process = [
    { step: '01', title: 'Understand', detail: 'Counter speed, GST setup, multi-branch needs — short discovery.' },
    { step: '02', title: 'Configure', detail: 'Item master, taxes, price lists, users + roles.' },
    { step: '03', title: 'Train', detail: 'Counter staff + accountant training, printable cheatsheet.' },
    { step: '04', title: 'Support', detail: 'AMC, year-end resets, GST updates, troubleshooting.' }
  ];

  readonly faqs = [
    {
      q: 'We already use Tally — why add billing software?',
      a:
        'Dedicated billing/POS software optimises fast invoicing, barcode reads, and thermal printing at the counter. Day-end sync keeps accounting inside Tally — speed up front, depth in the books.'
    },
    {
      q: 'Do you support GST e-invoice (IRP)?',
      a:
        'Yes — eligible businesses can use e-invoice export or API integration. Compliance updates ship on schedule.'
    },
    {
      q: 'Can retail counters and back office share one system?',
      a:
        'Absolutely — from single-user counters to multi-user networks covering billing front-end plus purchases, stock adjustments, and reports.'
    },
    {
      q: 'Do you supply thermal printers and scanners?',
      a:
        'Yes — we recommend or procure trusted POS printers, scanners, and drawers. Your existing hardware works too once drivers are configured.'
    },
    {
      q: 'Is it cloud-based or offline?',
      a:
        'Both — offline LAN setups for maximum counter speed, or cloud for multi-branch visibility. We recommend based on footprint and branches.'
    }
  ];
}
