class vehical{
 constructor(model,color,company,name){
    // alert("run by constructor")
    this.model= model
this.c = color;
this.company = company;
this.name=name;
 }   
 drive(){
    // alert("run by method")
    console.log(this.name+" has a model number "+this.model+" the color of that car is "+this.c)

 }
 break(){

 }
}
let car  = new vehical("m22","black","abc","car");
car.drive();
let bus = new vehical("m12","red","abc","bus")
bus. drive();