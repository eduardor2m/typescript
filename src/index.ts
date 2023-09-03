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

var array = [
  30, 15, 22, 10, 5, 8, 16, 60, 40, 70, 80, 90, 100, 20, 25, 35, 45, 55, 65, 75, 85, 95, 99, 1, 2,
  3, 4, 5, 6, 7, 8, 9, 10,
];

export function searchLinear(array: number[], value: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

export function bubbleSort(array: number[]) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i];
      const next = array[i + 1];
      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(array));
