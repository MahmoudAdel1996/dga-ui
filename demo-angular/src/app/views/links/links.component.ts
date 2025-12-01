import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-links',
  imports: [CommonModule, TranslateModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {}
