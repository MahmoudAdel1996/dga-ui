import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-tables',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesComponent {
  // Default table with checkboxes
  defaultTableCode = `<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col" style="width: 3.25rem;">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkSelectAll">
        </th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow1">
        </th>
        <td><a href="javascript:void(0);">Mark</a></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow2">
        </th>
        <td><a href="javascript:void(0);">Jacob</a></td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow3">
        </th>
        <td><a href="javascript:void(0);">John</a></td>
        <td>Doe</td>
        <td>@social</td>
      </tr>
    </tbody>
  </table>
</div>`;

  // Side-borderless table
  sideBorderlessTableCode = `<div class="table-responsive">
  <table class="table side-borderless">
    <thead>
      <tr>
        <th scope="col" style="width: 3.25rem;">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkSelectAll">
        </th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow1">
        </th>
        <td><a href="javascript:void(0);">Mark</a></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow2">
        </th>
        <td><a href="javascript:void(0);">Jacob</a></td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow3">
        </th>
        <td><a href="javascript:void(0);">John</a></td>
        <td>Doe</td>
        <td>@social</td>
      </tr>
    </tbody>
  </table>
</div>`;

  // Striped table
  stripedTableCode = `<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" style="width: 3.25rem;">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkSelectAll">
        </th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow1">
        </th>
        <td><a href="javascript:void(0);">Mark</a></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow2">
        </th>
        <td><a href="javascript:void(0);">Jacob</a></td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow3">
        </th>
        <td><a href="javascript:void(0);">John</a></td>
        <td>Doe</td>
        <td>@social</td>
      </tr>
    </tbody>
  </table>
</div>`;

  // Combination: striped + side-borderless
  stripedSideBorderlessTableCode = `<div class="table-responsive">
  <table class="table table-striped side-borderless">
    <thead>
      <tr>
        <th scope="col" style="width: 3.25rem;">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkSelectAll">
        </th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow1">
        </th>
        <td><a href="javascript:void(0);">Mark</a></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow2">
        </th>
        <td><a href="javascript:void(0);">Jacob</a></td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">
          <input type="checkbox" class="form-check-input form-check-input-sm ripple" id="chkRow3">
        </th>
        <td><a href="javascript:void(0);">John</a></td>
        <td>Doe</td>
        <td>@social</td>
      </tr>
    </tbody>
  </table>
</div>`;

  // Table with links in cells - more comprehensive example
  tableWithLinksCode = `<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Department</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a href="javascript:void(0);">John Doe</a></td>
        <td><a href="mailto:john.doe@example.com">john.doe@example.com</a></td>
        <td>Engineering</td>
        <td>
          <a href="javascript:void(0);">Edit</a> | 
          <a href="javascript:void(0);">Delete</a>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td><a href="javascript:void(0);">Jane Smith</a></td>
        <td><a href="mailto:jane.smith@example.com">jane.smith@example.com</a></td>
        <td>Marketing</td>
        <td>
          <a href="javascript:void(0);">Edit</a> | 
          <a href="javascript:void(0);">Delete</a>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td><a href="javascript:void(0);">Mike Johnson</a></td>
        <td><a href="mailto:mike.johnson@example.com">mike.johnson@example.com</a></td>
        <td>Sales</td>
        <td>
          <a href="javascript:void(0);">Edit</a> | 
          <a href="javascript:void(0);">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;

  // Responsive table wrapper
  responsiveTableCode = `<!-- Responsive wrapper ensures horizontal scrolling on small screens -->
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Department</th>
        <th scope="col">Position</th>
        <th scope="col">Hire Date</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>John</td>
        <td>Doe</td>
        <td>john.doe@example.com</td>
        <td>Engineering</td>
        <td>Senior Developer</td>
        <td>2020-01-15</td>
        <td>Active</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jane</td>
        <td>Smith</td>
        <td>jane.smith@example.com</td>
        <td>Marketing</td>
        <td>Marketing Manager</td>
        <td>2019-06-20</td>
        <td>Active</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mike</td>
        <td>Johnson</td>
        <td>mike.johnson@example.com</td>
        <td>Sales</td>
        <td>Sales Representative</td>
        <td>2021-03-10</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>`;
}
