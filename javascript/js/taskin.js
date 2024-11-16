class Employee{
    constructor(id,name,slot,salary){
        this.id=id;
        this.name=name;
        this.slot=slot;
        this.salary=salary;



    }
    JobTitle(jb){
 console.log(`${this.name} as ${jb} join our orgnization his working slot  is ${this.slot} his salary package is ${this.salary}`);
    }

}
class Developer extends Employee{
    constructor(id,name,slot,salary,jobStatus){
        super(id,name,slot,salary)
        this.jobStatus = jobStatus;
    }
    Skill(s){
        console.log(`he is working as ${s} developer and his join us ${this.jobStatus}`);
    }
}
let d = new Developer("em1213","ali"," 9 to 6","85k","onsite");
d.JobTitle("junior developer");
d.Skill("php and laravel");