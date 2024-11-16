class Animal {
    constructor(name,type){
        this.name=name;
        this.type=type;
alert("base constructor");
    }
    Eat(food){
        console.log(this.name+" is a "+this.type +" and it eats "+food)
    }
}
class Cat extends Animal{
constructor(name,type,cattype){
    super(name,type);
this.cattype=cattype;

}
}
let c = new Cat("persian","non-veg","pet Cat");
c.Eat("chicken");