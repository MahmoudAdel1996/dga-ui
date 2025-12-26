import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CodeExampleComponent } from '../../shared/code-example/code-example.component';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterModule, CodeExampleComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  headerCode = `<nav class="navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
        <a class="navbar-brand" href="javascript:void(0);">
            <img src="https://placehold.co/152x58" width="152" height="58" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="bi bi-arrow-left-square"></i> Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-arrow-left-square"></i> Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <!-- Footer Link Groups (5 columns) -->
                        <li class="dropdown-item-group">
                            <h6 class="dropdown-header">Group Label</h6>
                            <ul class="list-unstyled"> 
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-item-group">
                            <h6 class="dropdown-header">Group Label</h6>
                            <ul class="list-unstyled">
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-item-group">
                            <h6 class="dropdown-header">Group Label</h6>
                            <ul class="list-unstyled">
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-item-group">
                            <h6 class="dropdown-header">Group Label</h6>
                            <ul class="list-unstyled">
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-item-group">
                            <h6 class="dropdown-header">Group Label</h6>
                            <ul class="list-unstyled">
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                                <li class="dropdown-item"><a href="#" class="link-neutral small">Footer Link</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
}
