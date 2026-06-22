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
<button type="button" class="btn btn-subtle">Subtle</button>
<button type="button" class="btn btn-transparent">Transparent</button>`;

  bootstrapSemanticButtonsCode = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>`;

  bootstrapSemanticStatesCode = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary active">Primary Active</button>
<button type="button" class="btn btn-primary" disabled>Primary Disabled</button>

<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-success active">Success Active</button>
<button type="button" class="btn btn-success" disabled>Success Disabled</button>

<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-warning active">Warning Active</button>
<button type="button" class="btn btn-warning" disabled>Warning Disabled</button>

<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-light active">Light Active</button>
<button type="button" class="btn btn-light" disabled>Light Disabled</button>

<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-dark active">Dark Active</button>
<button type="button" class="btn btn-dark" disabled>Dark Disabled</button>`;

  destructiveButtonsCode = `<button type="button" class="btn btn-destructive-primary">Destructive Primary</button>
<button type="button" class="btn btn-destructive-secondary">Destructive Secondary</button>
<button type="button" class="btn btn-destructive-subtle">Destructive Subtle</button>
<button type="button" class="btn btn-destructive-transparent">Destructive Transparent</button>`;

  onPrimaryButtonsCode = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-neutral">Neutral</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-outline-secondary">Outline Secondary</button>
<button type="button" class="btn btn-subtle">Subtle</button>
<button type="button" class="btn btn-transparent">Transparent</button>

<button type="button" class="btn btn-destructive-primary">Destructive Primary</button>
<button type="button" class="btn btn-destructive-secondary">Destructive Secondary</button>
<button type="button" class="btn btn-destructive-outline-secondary">Destructive Outline</button>
<button type="button" class="btn btn-destructive-subtle">Destructive Subtle</button>
<button type="button" class="btn btn-destructive-transparent">Destructive Transparent</button>`;

  buttonGroupCode = `<div class="btn-group" role="group" aria-label="Primary button group">
  <button type="button" class="btn btn-primary">Start</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">End</button>
</div>

<div class="btn-group" role="group" aria-label="Mixed button group">
  <button type="button" class="btn btn-outline-secondary">Previous</button>
  <button type="button" class="btn btn-secondary">Current</button>
  <button type="button" class="btn btn-outline-secondary">Next</button>
</div>`;

  dangerVariantsCode = `<button type="button" class="btn btn-danger-primary">Danger Primary</button>
<button type="button" class="btn btn-danger-secondary">Danger Secondary</button>
<button type="button" class="btn btn-danger-subtle">Danger Subtle</button>
<button type="button" class="btn btn-danger-transparent">Danger Transparent</button>
<button type="button" class="btn btn-outline-danger">Outline Danger</button>
<button type="button" class="btn btn-outline-danger-secondary">Outline Danger Secondary</button>`;

  dangerVariantStatesCode = `<!-- Danger Primary -->
<button type="button" class="btn btn-danger-primary">Normal</button>
<button type="button" class="btn btn-danger-primary active">Pressed</button>
<button type="button" class="btn btn-danger-primary" disabled>Disabled</button>

<!-- Danger Secondary -->
<button type="button" class="btn btn-danger-secondary">Normal</button>
<button type="button" class="btn btn-danger-secondary active">Pressed</button>
<button type="button" class="btn btn-danger-secondary" disabled>Disabled</button>

<!-- Danger Subtle -->
<button type="button" class="btn btn-danger-subtle">Normal</button>
<button type="button" class="btn btn-danger-subtle active">Pressed</button>
<button type="button" class="btn btn-danger-subtle" disabled>Disabled</button>

<!-- Danger Transparent -->
<button type="button" class="btn btn-danger-transparent">Normal</button>
<button type="button" class="btn btn-danger-transparent active">Pressed</button>
<button type="button" class="btn btn-danger-transparent" disabled>Disabled</button>

<!-- Outline Danger -->
<button type="button" class="btn btn-outline-danger">Normal</button>
<button type="button" class="btn btn-outline-danger active">Pressed</button>
<button type="button" class="btn btn-outline-danger" disabled>Disabled</button>

<!-- Outline Danger Secondary -->
<button type="button" class="btn btn-outline-danger-secondary">Normal</button>
<button type="button" class="btn btn-outline-danger-secondary active">Pressed</button>
<button type="button" class="btn btn-outline-danger-secondary" disabled>Disabled</button>`;

  outlineButtonsCode = `<button type="button" class="btn btn-outline-secondary">Outline Secondary</button>
<button type="button" class="btn btn-destructive-outline-secondary">Destructive Outline</button>
<button type="button" class="btn btn-outline-danger">Outline Danger</button>
<button type="button" class="btn btn-outline-danger-secondary">Outline Danger Secondary</button>`;

  outlineDangerStatesCode = `<!-- Outline Danger -->
<button type="button" class="btn btn-outline-danger">Normal</button>
<button type="button" class="btn btn-outline-danger active">Pressed</button>
<button type="button" class="btn btn-outline-danger" disabled>Disabled</button>

<!-- Outline Danger Secondary -->
<button type="button" class="btn btn-outline-danger-secondary">Normal</button>
<button type="button" class="btn btn-outline-danger-secondary active">Pressed</button>
<button type="button" class="btn btn-outline-danger-secondary" disabled>Disabled</button>`;

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
<button type="button" class="btn btn-subtle btn-icon">
  <i class="bi bi-eye"></i>View
</button>
<button type="button" class="btn btn-transparent btn-icon">
  <i class="bi bi-link"></i>Link
</button>
<button type="button" class="btn btn-destructive-primary btn-icon">
  <i class="bi bi-trash"></i>Delete
</button>
<button type="button" class="btn btn-destructive-secondary btn-icon">
  <i class="bi bi-x-circle"></i>Cancel
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
<button type="button" class="btn btn-destructive-primary btn-icon" aria-label="Delete">
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
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Secondary
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-subtle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Subtle
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Transparent
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-destructive-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Destructive Primary
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
