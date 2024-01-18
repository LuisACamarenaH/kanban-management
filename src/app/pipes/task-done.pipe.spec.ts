import { TaskDonePipe } from './task-done.pipe';

describe('TaskDonePipe', () => {
  it('create an instance', () => {
    const pipe = new TaskDonePipe();
    expect(pipe).toBeTruthy();
  });
});
