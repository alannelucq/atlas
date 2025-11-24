import { StrictBuilder } from "builder-pattern";

export type PageSummary = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'review' | 'done';
  lastModifiedAt: string;
  tags: string[];
}

export function StubPageSummaryBuilder() {
  return StrictBuilder<PageSummary>()
    .id('xxx')
    .title('Getting started guide')
    .description('Welcome to Atlas! This is a text block')
    .lastModifiedAt('2021-11-24')
    .status('todo')
    .tags(['documentation', 'guide'])
}
