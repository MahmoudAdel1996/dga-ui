import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-dropdown',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  basicDropdownCode = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;

  dividerDropdownCode = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    With divider
  </button>
  <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Section 1</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><h6 class="dropdown-header">Section 2</h6></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    <li><a class="dropdown-item disabled" aria-disabled="true">Disabled item</a></li>
  </ul>
</div>`;

  iconDropdownCode = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle btn-icon" type="button" data-bs-toggle="dropdown">
    <i class="bi bi-person-circle"></i> Account
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item text-danger" href="#"><i class="bi bi-box-arrow-right me-2"></i>Sign out</a></li>
  </ul>
</div>`;

  directionDropdownCode = `<div class="dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropup</button>
  <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li></ul>
</div>

<div class="dropend">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropend</button>
  <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li></ul>
</div>

<div class="dropstart">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropstart</button>
  <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li></ul>
</div>`;

  splitDropdownCode = `<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
    <span class="visually-hidden">Toggle dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;
}
