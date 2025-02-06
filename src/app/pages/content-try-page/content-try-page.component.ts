import { Component } from '@angular/core';
import { Content, ContentService } from '../../services/content.service';

@Component({
  selector: 'app-content-try-page',
  imports: [],
  templateUrl: './content-try-page.component.html',
  styleUrl: './content-try-page.component.scss'
})
export class ContentTryPageComponent {
  content: Content = { title: '', description: '' };

  constructor(private contentService: ContentService) {
    // Subscribe to the content updates
    this.updateContent();

    // Update content on language change
    this.contentService.currentLanguage$.subscribe(() => {
      this.updateContent();
    });
  }

  // Switch to the opposite language
  switchLanguage(): void {
    const currentLanguage = this.contentService.getCurrentLanguage(); // Use the method in ContentService
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    this.contentService.switchLanguage(newLanguage);
  }

  // Update content based on the current language
  private updateContent(): void {
    this.content = this.contentService.getContent();
    console.log("[HomePageComponent] " + this.content.title);
  }

}
