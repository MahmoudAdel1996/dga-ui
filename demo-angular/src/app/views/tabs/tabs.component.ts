import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-tabs',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  basicTabsCode = `<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>`;

  pillsCode = `<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>`;

  verticalTabsCode = `<div class="d-flex align-items-start">
  <ul class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    </li>
  </ul>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">Home content...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">Profile content...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">Messages content...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">Settings content...</div>
  </div>
</div>`;

  justifiedTabsCode = `<ul class="nav nav-tabs nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>`;

  tabsWithIconsCode = `<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="bi bi-house-door"></i>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="bi bi-person"></i>Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="bi bi-envelope"></i>Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"><i class="bi bi-gear"></i>Settings</a>
  </li>
</ul>`;

  dropdownTabsCode = `<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>`;

  staticStatesCode = `<!-- Hover State (Simulated) -->
<ul class="nav nav-tabs mb-3">
  <li class="nav-item">
    <a class="nav-link pseudo-hover" href="#">Hovered</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Normal</a>
  </li>
</ul>

<!-- Pressed State (Simulated) -->
<ul class="nav nav-tabs mb-3">
  <li class="nav-item">
    <a class="nav-link pseudo-active" href="#">Pressed</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Normal</a>
  </li>
</ul>

<!-- Focused State (Simulated) -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link pseudo-focus" href="#">Focused</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Normal</a>
  </li>
</ul>`;


  verticalVariationsCode = `<!-- Large Vertical Tabs with Icons -->
<div class="nav flex-column nav-tabs nav-lg">
  <button class="nav-link active"><i class="bi bi-house-door"></i>First Tab</button>
  <button class="nav-link"><i class="bi bi-person"></i>Second Tab</button>
  <button class="nav-link"><i class="bi bi-envelope"></i>Third Tab</button>
  <button class="nav-link disabled"><i class="bi bi-gear"></i>Disabled</button>
  <button class="nav-link disabled active"><i class="bi bi-check-circle"></i>Disabled Selected</button>
</div>

<!-- Medium Vertical Tabs -->
<div class="nav flex-column nav-tabs nav-md">
  <button class="nav-link active"><i class="bi bi-house-door"></i>First Tab</button>
  <button class="nav-link"><i class="bi bi-person"></i>Second Tab</button>
  <button class="nav-link"><i class="bi bi-envelope"></i>Third Tab</button>
</div>

<!-- Small Vertical Tabs -->
<div class="nav flex-column nav-tabs nav-sm">
  <button class="nav-link active"><i class="bi bi-house-door"></i>First Tab</button>
  <button class="nav-link"><i class="bi bi-person"></i>Second Tab</button>
  <button class="nav-link"><i class="bi bi-envelope"></i>Third Tab</button>
</div>`;

  sizedTabsCode = `<!-- Large Tabs -->
<ul class="nav nav-tabs nav-lg mb-3">
  <li class="nav-item">
    <a class="nav-link active" href="#">Large Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Large Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Large Disabled</a>
  </li>
</ul>

<!-- Medium Tabs (Default) -->
<ul class="nav nav-tabs nav-md mb-3">
  <li class="nav-item">
    <a class="nav-link active" href="#">Medium Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Medium Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Medium Disabled</a>
  </li>
</ul>

<!-- Small Tabs -->
<ul class="nav nav-tabs nav-sm">
  <li class="nav-item">
    <a class="nav-link active" href="#">Small Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Small Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Small Disabled</a>
  </li>
</ul>`;
  flushTabsCode = `<!-- Flush Tabs (Full Width Indicator) -->
<ul class="nav nav-tabs flush">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>`;
}
