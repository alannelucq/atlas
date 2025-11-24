import { Page } from "../models/page.model";
import { PageSummary } from "../models/page-summary.model";

export abstract class PageGateway {
  abstract getPageById(id: string): Promise<Page>;


  abstract createPage(id: string): Promise<Page>;

  abstract getLatestPages(): Promise<PageSummary[]>;
}

export class InMemoryPageGateway extends PageGateway {

  pageById: Record<string, Page> = {};
  summaryById: Record<string, PageSummary> = {};

  withPages(pages: Record<string, Page>) {
    this.pageById = pages;
    return this;
  }

  withSummaries(summaries: Record<string, PageSummary>) {
    this.summaryById = summaries;
    return this;
  }

  override async getPageById(id: string): Promise<Page> {
    return this.pageById[id];
  }

  override async createPage(id: string): Promise<Page> {
    const newPage: Page = {id, title: '', content: ''};
    this.pageById[newPage.id] = newPage;
    return newPage;
  }

  override async getLatestPages(): Promise<PageSummary[]> {
    return Object.values(this.summaryById);
  }
}
