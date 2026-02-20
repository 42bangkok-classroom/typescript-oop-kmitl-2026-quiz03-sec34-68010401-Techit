export class OnlineCourse {
    courseName : string = "";
    MaxStudents : number = 0;
    private enrolledStudents : number = 0;
    private isOpen : boolean = false;

    constructor(courseName : string, MaxStudents : number){
        this.courseName = courseName;
        this.MaxStudents = MaxStudents;
    }