import { Page } from "../models/page.model";

export abstract class PageGateway {
  abstract getById(id: string): Promise<Page>;

  abstract createPage(id: string): Promise<Page>;
}

export class InMemoryPageGateway extends PageGateway {

  pageById: Record<string, Page> = {};

  withPages(pages: Record<string, Page>) {
    this.pageById = pages;
    return this;
  }

  override async getById(id: string): Promise<Page> {
    return this.pageById[id];
  }

  override async createPage(id: string): Promise<Page> {
    const newPage: Page = {id, title: '', content: ''};
    this.pageById[newPage.id] = newPage;
    return newPage;
  }
}
