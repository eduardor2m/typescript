interface IStudent {
  addGrade(grade: number): void;
  getName(): string;
  getAge(): number;
  getMedia(): number;
}

export class Student implements IStudent {
  private name: string;
  private age: number;
  private grades: number[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  public addGrade(grade: number): void {
    this.grades.push(grade);
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getMedia(): number {
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const sum = this.grades.reduce(reducer);
    return sum / this.grades.length;
  }
}

const student = new Student('John', 20);

student.addGrade(10);

console.log(student.getMedia());
console.log(student.getName());
