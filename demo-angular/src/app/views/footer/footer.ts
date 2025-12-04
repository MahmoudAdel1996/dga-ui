import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, CodeExampleComponent],
  templateUrl: './footer.html',
})
export class Footer {
  primaryFooterCode = `<footer class="dga-footer on-primary">
  <div class="dga-footer-content container-fluid">
    <!-- Main Footer Content -->
    <div class="dga-footer-nav-wrapper">
      <!-- Footer Link Groups (5 columns) -->
      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <!-- Social Media & Accessibility -->
      <div class="dga-footer-social">
          <!-- Social Media -->
          <div class="dga-footer-nav-group">
            <h6 class="dga-footer-section-title">Social Media</h6>
            <div class="d-flex gap-2 flex-wrap">
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <!-- Accessibility Tools -->
          <div class="dga-footer-nav-group">
            <h6 class="dga-footer-section-title">Accessibility Tools</h6>
            <div class="d-flex gap-2 flex-wrap">
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-eye"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-volume-up"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-universal-access"></i>
              </a>
            </div>
          </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="dga-footer-meta">
      <div class="dga-footer-meta-content">
        <!-- Footer Links Row -->
        <div class="dga-footer-meta-links">
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
        </div>

        <!-- Copyright -->
        <div class="dga-footer-copyright-container">
          <p class="dga-footer-copyright">All Right Reserved For Digital Government Authority © 2024</p>
          <div class="dga-footer-legal-links">
            <a href="#" class="link-neutral small">Terms and Conditions</a>
            <a href="#" class="link-neutral small">Privacy Policy</a>
          </div>
        </div>
      </div>

      <!-- Logos -->
      <div class="dga-footer-logo">
        <img src="https://placehold.co/125x42" alt="logo">
        <img src="https://placehold.co/125x42" alt="logo">
      </div>
    </div>
  </div>
</footer>`;

  secondaryFooterCode = `<footer class="dga-footer bg-neutral-100">
  <div class="dga-footer-content container-fluid">
    <!-- Main Footer Content -->
    <div class="dga-footer-nav-wrapper">
      <!-- Footer Link Groups (5 columns) -->
      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <div class="dga-footer-nav-group">
        <h6 class="dga-footer-section-title">Group Label</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
          <li class="mb-2"><a href="#" class="link-neutral small">Footer Link</a></li>
        </ul>
      </div>

      <!-- Social Media & Accessibility -->
      <div class="dga-footer-social">
          <!-- Social Media -->
          <div class="dga-footer-nav-group">
            <h6 class="dga-footer-section-title">Social Media</h6>
            <div class="d-flex gap-2 flex-wrap">
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <!-- Accessibility Tools -->
          <div class="dga-footer-nav-group">
            <h6 class="dga-footer-section-title">Accessibility Tools</h6>
            <div class="d-flex gap-2 flex-wrap">
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-eye"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-volume-up"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary" aria-label="Download">
                <i class="bi bi-universal-access"></i>
              </a>
            </div>
          </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="dga-footer-meta">
      <div class="dga-footer-meta-content">
        <!-- Footer Links Row -->
        <div class="dga-footer-meta-links">
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
          <a href="#" class="link-neutral text-decoration-underline small">Footer Link</a>
        </div>

        <!-- Copyright -->
        <div class="dga-footer-copyright-container">
          <p class="dga-footer-copyright">All Right Reserved For Digital Government Authority © 2024</p>
          <div class="dga-footer-legal-links">
            <a href="#" class="link-neutral small">Terms and Conditions</a>
            <a href="#" class="link-neutral small">Privacy Policy</a>
          </div>
        </div>
      </div>

      <!-- Logos -->
      <div class="dga-footer-logo">
        <img src="https://placehold.co/125x42" alt="logo">
        <img src="https://placehold.co/125x42" alt="logo">
      </div>
    </div>
  </div>
</footer>`;
}
