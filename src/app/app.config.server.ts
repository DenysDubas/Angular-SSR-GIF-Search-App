import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch())
  ]
};
