class Student{
    constructor(id,name,course,slot){
this.id = id;
this.name = name;
this.course=course;
this.slot=slot;

    }
    Learn(semester){

                document.querySelector("#learn").innerHTML=this.name+" enrolled in "+this.course+" learnig in "+semester;
    }
    Exam(previous ,percentage){
        document.querySelector("#exam").innerHTML= "he is done his "+previous+" by "+percentage;
    }

}
let s1 = new Student('121',"ali","prime 2.0","9 to 11");
s1.Learn("dism");
s1.Exam("cpism","95%");