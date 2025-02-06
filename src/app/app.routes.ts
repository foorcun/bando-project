import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "home-page", loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent) },
    // { path: "content-try-page", loadComponent: () => import('./pages/content-try-page/content-try-page.component').then(m => m.ContentTryPageComponent) },
    { path: "about-page", loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent) },
    // { path: "contact-page", loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent) },
    { path: "hizmetlerimiz-page", loadComponent: () => import('./pages/hizmetlerimiz-page/hizmetlerimiz-page.component').then(m => m.HizmetlerimizPageComponent) },
    // { path: 'hizmetlerimiz/:title', loadComponent: () => import('./pages/hizmetlerimiz-detail-page/hizmetlerimiz-detail-page.component').then(m => m.HizmetlerimizDetailPageComponent) },
    { path: "", redirectTo: "home-page", pathMatch: "full" },
];

