import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface QuoteFormModel {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

@Component({
  selector: 'app-quote-request-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quote-request-panel.component.html',
  styleUrl: './quote-request-panel.component.scss'
})
export class QuoteRequestPanelComponent implements OnChanges {
  /** Optional hint from route, e.g. `?service=tally` */
  @Input() presetService?: string;

  readonly services = [
    'Tally Solutions (Sale / AMC / TDL)',
    'Billing Software / POS',
    'CRM System',
    'ERP / Cloud Solutions',
    'Business Automation',
    'IT Consulting',
    'Web Development',
    'Mobile Apps',
    'UI / UX Design',
    'SEO Services',
    'Other / not sure yet'
  ];

  readonly budgets = [
    'Under ₹ 25,000',
    '₹ 25,000 – ₹ 1 lakh',
    '₹ 1 – 3 lakhs',
    '₹ 3 lakhs +',
    'Not finalised yet'
  ];

  readonly hours = [
    { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed (urgent calls answered)' }
  ];

  readonly form = signal<QuoteFormModel>({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  readonly submitted = signal(false);

  updateField<K extends keyof QuoteFormModel>(field: K, value: QuoteFormModel[K]): void {
    this.form.update(current => ({ ...current, [field]: value }));
  }

  get whatsappLink(): string {
    const f = this.form();
    const text = [
      `Hello softTech,`,
      f.name ? `Name: ${f.name}` : '',
      f.company ? `Company: ${f.company}` : '',
      f.phone ? `Phone: ${f.phone}` : '',
      f.email ? `Email: ${f.email}` : '',
      f.service ? `Service: ${f.service}` : '',
      f.budget ? `Budget: ${f.budget}` : '',
      f.message ? `Requirement: ${f.message}` : ''
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/918222845550?text=${encodeURIComponent(text)}`;
  }

  get mailtoLink(): string {
    const f = this.form();
    const subject = `Enquiry${f.service ? ' — ' + f.service : ''}`;
    const body = [
      f.name ? `Name: ${f.name}` : '',
      f.company ? `Company: ${f.company}` : '',
      f.phone ? `Phone: ${f.phone}` : '',
      f.email ? `Email: ${f.email}` : '',
      f.service ? `Service: ${f.service}` : '',
      f.budget ? `Budget: ${f.budget}` : '',
      '',
      'Requirement:',
      f.message || ''
    ]
      .filter(Boolean)
      .join('\n');
    return `mailto:tyagi.sts%40gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  handleSubmit(): void {
    this.submitted.set(true);
  }

  resetForm(): void {
    this.form.set({
      name: '',
      phone: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
    this.submitted.set(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const v = changes['presetService']?.currentValue as string | undefined;
    if (!v || typeof v !== 'string') return;
    const key = v.trim().toLowerCase();
    if (!key) return;
    const match = this.services.find(
      s =>
        s.toLowerCase().includes(key) ||
        key.split(/[\s-]+/).some(part => part.length > 2 && s.toLowerCase().includes(part))
    );
    if (match) {
      this.form.update(f => ({ ...f, service: match }));
    }
  }
}
