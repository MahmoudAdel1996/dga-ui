import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-list-group',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  basicListGroupCode = `<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`;

  activeListGroupCode = `<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
</ul>`;

  actionListGroupCode = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
</div>`;

  colorListGroupCode = `<ul class="list-group">
  <li class="list-group-item list-group-item-primary">A primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A secondary list group item</li>
  <li class="list-group-item list-group-item-success">A success list group item</li>
  <li class="list-group-item list-group-item-danger">A danger list group item</li>
  <li class="list-group-item list-group-item-warning">A warning list group item</li>
  <li class="list-group-item list-group-item-info">An info list group item</li>
  <li class="list-group-item list-group-item-light">A light list group item</li>
  <li class="list-group-item list-group-item-dark">A dark list group item</li>
</ul>`;

  badgeListGroupCode = `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Inbox <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Notifications <span class="badge text-bg-warning rounded-pill">7</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Messages <span class="badge text-bg-success rounded-pill">3</span>
  </li>
</ul>`;

  richListGroupCode = `<ul class="list-group">
  <li class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">Application submitted</h6>
      <small class="text-muted">2 days ago</small>
    </div>
    <p class="mb-1 text-muted small">Your license application has been received and is under review.</p>
    <span class="badge text-bg-warning">Pending</span>
  </li>
  <li class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">Inspection scheduled</h6>
      <small class="text-muted">5 days ago</small>
    </div>
    <p class="mb-1 text-muted small">An inspector will visit your facility on the scheduled date.</p>
    <span class="badge text-bg-info">Upcoming</span>
  </li>
  <li class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">Certificate issued</h6>
      <small class="text-muted">1 week ago</small>
    </div>
    <p class="mb-1 text-muted small">Your certificate has been issued and is ready for download.</p>
    <span class="badge text-bg-success">Completed</span>
  </li>
</ul>`;
}
