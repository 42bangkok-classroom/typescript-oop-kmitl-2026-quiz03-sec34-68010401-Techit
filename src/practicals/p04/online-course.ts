export class OnlineCourse {
    courseName : string = "" ;
    maxStudents : number = 0 ;
    private enrolledStudents:number = 0 ;
    isOpen:boolean = true ;

    constructor(courseName : string,maxStudents : number,enrolledStudents:number = 0,isOpen:boolean = true){
        this.courseName = courseName;
        this.maxStudents = maxStudents;
        this.enrolledStudents = enrolledStudents;
        this.isOpen = isOpen;
    }

    enroll():boolean{
        if(this.isOpen && this.enrolledStudents<this.maxStudents){
            this.enrolledStudents++
            console.log(`Successfully enrolled in ${this.courseName}.`)
            return true ;
        }else{
            console.log(`false  (Course Full)`)
            return false ;
        }
    }
    closeCourse(){
        this.isOpen = false ;
        console.log(`${this.courseName} is now closed for enrollment.`)
    }
    getAvailableSeats():number{
        return this.maxStudents-this.enrolledStudents
    }
    canEnroll():boolean{
        return this.isOpen && this.enrolledStudents<this.maxStudents
    }
    getCourseStatus():string{
        return this.isOpen?"Open":"Closed"
    }
}