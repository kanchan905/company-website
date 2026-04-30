import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  readonly icon = input<string>('•');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly linkText = input<string>('');
  readonly link = input<string>('/');
  readonly compact = input<boolean>(false);
}
