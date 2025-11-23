import { StrictBuilder } from "builder-pattern";

export type Page = {
  id: string;
  title: string;
  content: string;
}

export function StubPageBuilder() {
  return StrictBuilder<Page>()
    .id('xxxxx-xxxxx-xxxxx')
    .title('My awesome page')
    .content('Some content');
}

export function EmptyPageBuilder(id: string) {
  return StrictBuilder<Page>()
    .id(id)
    .title('')
    .content('')
}
