class Animal{

    static Instances(){
        if( !Animal.instance ){
            Animal.instance = 1;
        }else{
            Animal.instance++;
        }
        return Animal.instance;
    }

    constructor(){
        console.log("New instantiation");
        this.date = new Date().getTime();
        console.log( Animal.Instances() );
    }

    // instance(){
    //     console.log( Animal );
    // }

}

let one = new Animal();
let two = new Animal();
let three = new Animal();
let four = new Animal();
let five = new Animal();

console.log( one, two, three, four, five );

