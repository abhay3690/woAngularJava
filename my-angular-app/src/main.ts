import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from './app/app';
import { provideHttpClient, withFetch, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/componentweb/service/authInterceptor';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
}).catch(err => console.error(err));