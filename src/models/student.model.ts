export interface Student {
    id : number;
    name: string;
    age:number;
}

export class StudentStore {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }
    getStudents(): Student[] {
        return this.students;
    }
}