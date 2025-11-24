import { Pipe, PipeTransform } from "@angular/core";
import { PageSummary } from "../../../features/domain/models/page-summary.model";

const labelByStatus: Record<PageSummary['status'], string> = {
  todo: 'To Do',
  doing: 'In Progress',
  review: 'Review',
  done: 'Done',
};

@Pipe({name: 'labelByPageStatus'})
export class LabelByPageStatusPipe implements PipeTransform {
  transform(status: PageSummary['status']): string {
    return labelByStatus[status];
  }
}
