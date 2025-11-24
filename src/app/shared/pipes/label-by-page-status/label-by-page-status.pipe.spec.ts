import { PageSummary } from "../../../features/domain/models/page-summary.model";
import { LabelByPageStatusPipe } from "./label-by-page-status.pipe";
import { expect } from "vitest";

type AssertionParam = { status: PageSummary['status'], expectedLabel: string }

describe('Pipe : Label by page status', () => {
  it.each([
    {status: 'todo', expectedLabel: 'To Do'},
    {status: 'doing', expectedLabel: 'In Progress'},
    {status: 'review', expectedLabel: 'Review'},
    {status: 'done', expectedLabel: 'Done'},
  ] as AssertionParam[])('should have correct label ', ({status, expectedLabel}) => {
    expect(new LabelByPageStatusPipe().transform(status)).toBe(expectedLabel);
  })
});
