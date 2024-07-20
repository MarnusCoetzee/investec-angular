import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '../../../../core/store/ai-chat/ai-chat.service';
import { marked } from 'marked'; // Import the marked library for Markdown rendering
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

marked.setOptions({
  // Customize options here
  gfm: true, // Enable GitHub Flavored Markdown (if needed)
  breaks: false, // Disable automatic line breaks (if needed)
  // ...other options
});

@Component({
  selector: 'app-ai-chatbot',
  standalone: true,
  imports: [NgFor, NgClass, MatIconModule, MatButtonModule],
  templateUrl: './ai-chatbot.component.html',
  styleUrl: './ai-chatbot.component.scss',
})
export class AiChatbotComponent implements OnInit {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  @ViewChild('userInput') userInput!: ElementRef;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private chatService: ChatService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  ngOnInit() {
    this.messages.push({ sender: 'bot', text: 'Hello! How can I help you?' });
  }

  sendMessage() {
    const text = this.userInput.nativeElement.value.trim();
    if (text) {
      this.messages.push({ sender: 'user', text });
      this.userInput.nativeElement.value = ''; // Clear input field

      this.chatService.sendMessage(text).subscribe((response) => {
        this.messages.push({ sender: 'bot', text: response });
        this.scrollToBottom();
      });
    }
  }

  sanitizeHtml(text: string): any {
    const parsedMarkdown = marked(text);
    if (typeof parsedMarkdown === 'string') {
      return this.sanitizer.bypassSecurityTrustHtml(parsedMarkdown);
    } else {
      parsedMarkdown.then((result) => {
        return this.sanitizer.bypassSecurityTrustHtml(result);
      });
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    }, 100);
  }

  handleRouteBack(): void {
    this.router.navigate(['/dashboard/main']);
  }
}
