import { assertInInjectionContext, inject, Signal } from "@angular/core";
import { PageGateway } from "./gateways/page.gateway";
import { injectQuery } from "@tanstack/angular-query-experimental";

const queryKeys = {
  byId: (id: string) => ['pages', id],
  summaries: () => ['pages', 'summaries']
};

export function injectPage(id: Signal<string>) {
  assertInInjectionContext(injectPage);
  const gateway = inject(PageGateway);
  return injectQuery(() => ({
    queryKey: queryKeys.byId(id()),
    queryFn: async () => gateway.getPageById(id())
  }))
}

export function injectLatestPages() {
  assertInInjectionContext(injectLatestPages);
  const gateway = inject(PageGateway);
  return injectQuery(() => ({
    queryKey: queryKeys.summaries(),
    queryFn: async () => gateway.getLatestPages()
  }));
}
