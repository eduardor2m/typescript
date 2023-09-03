import { Student } from '..';

describe('index.ts', () => {
  it('should be true', () => {
    const student = new Student('John', 20);
    student.addGrade(10);
    expect(student.getMedia()).toBe(10);
    expect(student.getName()).toBe('John');
  });
});
