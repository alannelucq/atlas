import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { FakeUUIDProvider, UUIDProvider } from "./core/providers/uuid.provider";
import { InMemoryPageGateway, PageGateway } from "./features/domain/gateways/page.gateway";
import { EmptyPageBuilder, StubPageBuilder } from "./features/domain/models/page.model";
import { provideQueryClient, QueryClient } from "@tanstack/angular-query-experimental";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideQueryClient(new QueryClient()),
    {provide: UUIDProvider, useValue: new FakeUUIDProvider().withUuid('xxx')},
    {
      provide: PageGateway,
      useValue: new InMemoryPageGateway().withPages({
        'xxx': EmptyPageBuilder('xxx').build(),
        'yyy': StubPageBuilder().id('yyy').build()
      })
    }
  ]
};
