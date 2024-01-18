import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDone',
  standalone: true,
  pure: false,
})
export class TaskDonePipe implements PipeTransform {
  transform(value: [{ task: string; done: boolean }]): string {
    const doneTask = value.filter((task) => task.done).length;
    return `Subtask ${doneTask} to ${value.length}`;
  }
}
