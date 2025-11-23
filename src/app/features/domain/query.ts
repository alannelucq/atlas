import { assertInInjectionContext, inject, Signal } from "@angular/core";
import { PageGateway } from "./gateways/page.gateway";
import { injectQuery } from "@tanstack/angular-query-experimental";

const queryKeys = {
  byId: (id: string) => ['pages', id]
};

export function injectPage(id: Signal<string>) {
  assertInInjectionContext(injectPage);
  const gateway = inject(PageGateway);
  return injectQuery(() => ({
    queryKey: queryKeys.byId(id()),
    queryFn: async () => gateway.getById(id())
  }))
}
