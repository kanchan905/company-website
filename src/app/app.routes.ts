import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'company/about',
    loadComponent: () =>
      import('./features/company/about/about.component')
        .then(m => m.AboutComponent)
  },
  {
    path: 'company/team',
    loadComponent: () =>
      import('./features/company/team/team.component')
        .then(m => m.TeamComponent)
  },
  {
    path: 'company/careers',
    loadComponent: () =>
      import('./features/company/careers/careers.component')
        .then(m => m.CareersComponent)
  },
  {
    path: 'company/clients',
    loadComponent: () =>
      import('./features/company/clients/clients.component')
        .then(m => m.ClientsComponent)
  },
  {
    path: 'solutions/erp-solutions',
    loadComponent: () =>
      import('./features/solutions/erp-solutions/erp-solutions.component')
        .then(m => m.ErpSolutionsComponent)
  },
  {
    path: 'solutions/cloud-solutions',
    loadComponent: () =>
      import('./features/solutions/cloud-solutions/cloud-solutions.component')
        .then(m => m.CloudSolutionsComponent)
  },
  {
    path: 'solutions/business-automation',
    loadComponent: () =>
      import('./features/solutions/business-automation/business-automation.component')
        .then(m => m.BusinessAutomationComponent)
  },
  {
    path: 'solutions/it-consulting',
    loadComponent: () =>
      import('./features/solutions/it-consulting/it-consulting.component')
        .then(m => m.ItConsultingComponent)
  },
  {
    path: 'services/web-development',
    loadComponent: () =>
      import('./features/services/web-development/web-development.component')
        .then(m => m.WebDevelopmentComponent)
  },
  {
    path: 'services/mobile-apps',
    loadComponent: () =>
      import('./features/services/mobile-apps/mobile-apps.component')
        .then(m => m.MobileAppsComponent)
  },
  {
    path: 'services/ui-ux-design',
    loadComponent: () =>
      import('./features/services/ui-ux-design/ui-ux-design.component')
        .then(m => m.UiUxDesignComponent)
  },
  {
    path: 'services/seo-services',
    loadComponent: () =>
      import('./features/services/seo-services/seo-services.component')
        .then(m => m.SeoServicesComponent)
  },
  {
    path: 'products/tally-solutions',
    loadComponent: () =>
      import('./features/products/tally-solutions/tally-solutions.component')
        .then(m => m.TallySolutionsComponent)
  },
  {
    path: 'products/crm-system',
    loadComponent: () =>
      import('./features/products/crm-system/crm-system.component')
        .then(m => m.CrmSystemComponent)
  },
  {
    path: 'products/billing-software',
    loadComponent: () =>
      import('./features/products/billing-software/billing-software.component')
        .then(m => m.BillingSoftwareComponent)
  },
  {
    path: 'resources/blog',
    loadComponent: () =>
      import('./features/resources/blog/blog.component')
        .then(m => m.BlogComponent)
  },
  {
    path: 'resources/case-studies',
    loadComponent: () =>
      import('./features/resources/case-studies/case-studies.component')
        .then(m => m.CaseStudiesComponent)
  },
  {
    path: 'resources/faqs',
    loadComponent: () =>
      import('./features/resources/faqs/faqs.component')
        .then(m => m.FaqsComponent)
  },
  {
    path: 'get-quote',
    loadComponent: () =>
      import('./features/get-quote/get-quote.component')
        .then(m => m.GetQuoteComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component')
        .then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];