import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-buttons',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent {
  solidButtonsCode = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-neutral">Neutral</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-danger">Danger</button>`;

  outlineButtonsCode = `<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-neutral">Neutral</button>
<button type="button" class="btn btn-outline-danger">Danger</button>`;

  buttonSizesCode = `<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary">Default</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">Extra Small</button>`;

  buttonStatesCode = `<button type="button" class="btn btn-primary">Normal</button>
<button type="button" class="btn btn-primary active">Active</button>
<button type="button" class="btn btn-primary" disabled>Disabled</button>`;

  buttonIconLeftCode = `<button type="button" class="btn btn-primary btn-icon">
  <i class="bi bi-download"></i>Download
</button>
<button type="button" class="btn btn-neutral btn-icon">
  <i class="bi bi-upload"></i>Upload
</button>
<button type="button" class="btn btn-secondary btn-icon">
  <i class="bi bi-pencil"></i>Edit
</button>
<button type="button" class="btn btn-danger btn-icon">
  <i class="bi bi-trash"></i>Delete
</button>`;

  buttonIconRightCode = `<button type="button" class="btn btn-primary btn-icon">
  Save<i class="bi bi-check"></i>
</button>
<button type="button" class="btn btn-neutral btn-icon">
  Search<i class="bi bi-search"></i>
</button>
<button type="button" class="btn btn-secondary btn-icon">
  Settings<i class="bi bi-gear"></i>
</button>`;

  buttonIconOnlyCode = `<button type="button" class="btn btn-primary btn-icon" aria-label="Download">
  <i class="bi bi-download"></i>
</button>
<button type="button" class="btn btn-neutral btn-icon" aria-label="Upload">
  <i class="bi bi-upload"></i>
</button>
<button type="button" class="btn btn-secondary btn-icon" aria-label="Edit">
  <i class="bi bi-pencil"></i>
</button>
<button type="button" class="btn btn-danger btn-icon" aria-label="Delete">
  <i class="bi bi-trash"></i>
</button>`;

  dropdownButtonCode = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Primary
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Neutral
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;

  dropdownSizesCode = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Default
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;

  iconDropdownCode = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-gear"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-gear"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-gear"></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>`;
}
