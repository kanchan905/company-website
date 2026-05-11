import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../../../shared/components/feature-card/feature-card.component';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-erp-solutions',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent
  ],
  templateUrl: './erp-solutions.component.html',
  styleUrl: './erp-solutions.component.scss'
})
export class ErpSolutionsComponent {
  readonly heroBadges = [
    '🧾 TallyPrime as ERP Core',
    '📍 Kundli • Sonipat • Haryana',
    '⚡ Go-live in weeks, not months'
  ];

  readonly heroStats = [
    { value: '250+', label: 'ERP-style setups delivered' },
    { value: '6', label: 'Core business areas covered' },
    { value: '35%', label: 'Avg. faster month closing' },
    { value: '100%', label: 'Single source of truth' }
  ];

  readonly outcomes = [
    {
      icon: '📊',
      title: 'One Ledger, One Truth',
      description:
        'Sales, purchase, stock, and cash — linked entries end duplicate spreadsheets and repeat punching.'
    },
    {
      icon: '🔁',
      title: 'Repeatable Workflows',
      description:
        'Approval rules, voucher types, GST defaults — the team delivers consistent quality every day.'
    },
    {
      icon: '📱',
      title: 'Owner Visibility',
      description:
        'Mobile dashboards and alerts let owners monitor receivables, stock, and cash without visiting the office.'
    }
  ];

  readonly modules = [
    {
      icon: '🧾',
      title: 'Financial Accounting',
      description:
        'Multi-company, multi-user, cost centres, budgets, bank reconciliation, and statutory books — audit-ready.',
      linkText: 'Discuss finance setup',
      link: '/contact'
    },
    {
      icon: '📦',
      title: 'Inventory & Godowns',
      description:
        'Batch, expiry, multi-godown, BOM, job work, and stock ageing — trading and manufacturing alike.',
      linkText: 'Plan inventory model',
      link: '/contact'
    },
    {
      icon: '🛒',
      title: 'Sales & Purchase',
      description:
        'GST invoicing, e-invoice, e-way bill, order tracking, price lists, and party-wise credit control.',
      linkText: 'See sales workflow',
      link: '/contact'
    },
    {
      icon: '📑',
      title: 'Taxation & Compliance',
      description:
        'GSTR-1 / 3B workflows, TDS, e-invoicing integration, and return reconciliation straight from Tally data.',
      linkText: 'Compliance review',
      link: '/contact'
    },
    {
      icon: '👥',
      title: 'Payroll & HR basics',
      description:
        'Salary structures, statutory deductions, payslips, and employee masters — for growing teams.',
      linkText: 'Payroll scope call',
      link: '/contact'
    },
    {
      icon: '📈',
      title: 'MIS & Dashboards',
      description: 'Management reports, cash flow views, party outstanding, stock summary — decision-ready layouts.',
      linkText: 'Dashboard workshop',
      link: '/contact'
    }
  ];

  readonly phases = [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      detail:
        'Document current process, pain points, master data quality, and reporting needs — produces a clear blueprint.',
    },
    {
      step: '02',
      title: 'Design & Configuration',
      detail:
        'Chart of accounts, voucher types, GST setup, inventory structure, and user roles — documented configuration.',
    },
    {
      step: '03',
      title: 'Data Migration & UAT',
      detail:
        'Opening balances, party and item masters, historical vouchers — parallel run plus formal user acceptance testing.',
    },
    {
      step: '04',
      title: 'Go-live & Hypercare',
      detail:
        'Cut-over plan, training batches, first-month hypercare, and a documented escalation matrix for stable production.',
    }
  ];

  readonly industries = [
    { icon: '🛒', label: 'Retail & Trading' },
    { icon: '🏭', label: 'Manufacturing' },
    { icon: '📦', label: 'Distribution' },
    { icon: '🧵', label: 'Textiles' },
    { icon: '💊', label: 'Pharma' },
    { icon: '🍱', label: 'Food & FMCG' },
    { icon: '📚', label: 'Education' },
    { icon: '🔧', label: 'Services' }
  ];

  readonly ecosystem = [
    {
      icon: '☁️',
      title: 'TallyPrime Server',
      text: 'Multi-user concurrency, central data, and faster reporting — ideal for mid-sized teams.',
    },
    {
      icon: '📱',
      title: 'Tally on Mobile',
      text: 'Powered by Biz Analyst — live MIS, reminders, and approvals on the go.',
    },
    {
      icon: '🛡️',
      title: 'Security & Remote',
      text: 'Quick Heal endpoints + TSplus remote access — secure access to ERP from branch / home.'
    }
  ];

  readonly faqs = [
    {
      q: 'Do smaller businesses need “ERP”?',
      a:
        'For SMBs, ERP does not mean heavy SAP — it means a practical system like TallyPrime that brings accounting, stock, GST, and reporting together. Modules roll out in phases by size.'
    },
    {
      q: 'How long does implementation take?',
      a:
        'Simple trading setups often take 1–2 weeks; multi-godown plus migration cases may take 3–6 weeks. After the blueprint is clear, we commit to a timeline.'
    },
    {
      q: 'Can data move from existing software?',
      a:
        'Yes — masters and opening data can migrate from Excel, legacy Tally, or other billing tools. We do not go live without a quality check.'
    }
  ];
}
