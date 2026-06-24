import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-carousel',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  controlStatesCode = `<!-- Default -->
<button type="button" class="carousel-control-prev position-static">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>

<!-- Pressed -->
<button type="button" class="carousel-control-prev position-static active">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>

<!-- Disabled -->
<button type="button" class="carousel-control-prev position-static disabled" aria-disabled="true">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>`;

  controlSizesCode = `<!-- Small: 32px -->
<button type="button" class="carousel-control-prev carousel-control-sm">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
</button>

<!-- Medium (default): 40px -->
<button type="button" class="carousel-control-prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
</button>

<!-- Large: 48px -->
<button type="button" class="carousel-control-prev carousel-control-lg">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
</button>`;

  sizesCarouselCode = `<!-- Large controls (48px) -->
<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">...</div>
  <button class="carousel-control-prev carousel-control-lg" type="button" data-bs-target="#id" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carousel-control-lg" type="button" data-bs-target="#id" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- Small controls (32px) -->
<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">...</div>
  <button class="carousel-control-prev carousel-control-sm" type="button" data-bs-target="#id" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carousel-control-sm" type="button" data-bs-target="#id" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

  indicatorDotsCode = `<!-- Medium dots (default: 12px) -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#id" data-bs-slide-to="0" class="active" aria-current="true"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="2"></button>
</div>

<!-- Large dots (16px) -->
<div class="carousel-indicators carousel-indicators-lg">
  <button type="button" data-bs-target="#id" data-bs-slide-to="0" class="active" aria-current="true"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="2"></button>
</div>

<!-- Small dots (8px) -->
<div class="carousel-indicators carousel-indicators-sm">
  <button type="button" data-bs-target="#id" data-bs-slide-to="0" class="active" aria-current="true"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#id" data-bs-slide-to="2"></button>
</div>`;

  basicCarouselCode = `<div id="carouselBasic" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded" style="height: 300px;">
        <h3>Slide 1</h3>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-secondary text-white rounded" style="height: 300px;">
        <h3>Slide 2</h3>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-success text-white rounded" style="height: 300px;">
        <h3>Slide 3</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselBasic" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselBasic" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

  indicatorsCarouselCode = `<div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded" style="height: 300px;">
        <div class="carousel-caption d-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-secondary text-white rounded" style="height: 300px;">
        <div class="carousel-caption d-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-success text-white rounded" style="height: 300px;">
        <div class="carousel-caption d-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

  fadeCarouselCode = `<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded" style="height:220px;">
        <h3>Fade Slide 1</h3>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-danger text-white rounded" style="height:220px;">
        <h3>Fade Slide 2</h3>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center justify-content-center bg-warning text-dark rounded" style="height:220px;">
        <h3>Fade Slide 3</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span>
  </button>
</div>`;
}
