import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media-highlight',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './media-highlight.component.html',
  styleUrl: './media-highlight.component.scss'
})
export class MediaHighlightComponent {
  readonly imageSrc = input<string>('images/logo.jpeg');
  readonly imageAlt = input<string>('Business visual');
  readonly eyebrow = input<string>('Highlight');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly pointOne = input<string>('');
  readonly pointTwo = input<string>('');
  readonly pointThree = input<string>('');
  readonly ctaText = input<string>('Contact Us');
  readonly ctaLink = input<string>('/contact');
  readonly reverse = input<boolean>(false);
}
