import { searchLinear, Student } from '..';

describe('index.ts', () => {
  it('should be true in the class Student', () => {
    const student = new Student('John', 20);
    student.addGrade(10);
    expect(student.getMedia()).toBe(10);
    expect(student.getName()).toBe('John');
  });

  it('should be true in the function searchLinear', () => {
    var array = [
      30, 15, 22, 10, 5, 8, 16, 60, 40, 70, 80, 90, 100, 20, 25, 35, 45, 55, 65, 75, 85, 95, 99, 1,
      2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];
    expect(searchLinear(array, 10)).toBe(3);
    expect(searchLinear(array, 1000)).toBe(-1);
  });
});
