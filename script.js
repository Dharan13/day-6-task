//1.Class Movie
/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
   }
}
 const movieDetails = new movie ("bluestar", "neelam studios", "PG-15");
 console.log(movieDetails);

 //output
/*
rating: "PG-15" 
studio: "Zee studios"
title: "Thunivu"
*/
//..................

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies {
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movie1 = new movies("manjummal boys", "iyalam studio");
console.log(movie1);

//output
/*
rating: "PG" 
studio: "iyalam studios"
title: "manjummal boys "
*/
//..........................

/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Movie ("vilangu", "Zee thirai", "PG");
let moviee2 = new Movie ("Rum", "Zee studios", "V");
let movie3 = new Movie ("john wick", "KRG Studios", "PG");
let movie4 = new Movie ("kaithi","lee studios","PG-13");
let movie5 = new Movie ("vikram", "rajkamal films", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Movie.getPG(movieArray);
console.log(pgMovies);

// Output: 
/*
[ Moviee { title: 'vilangu', studio: 'Zee thirai', rating: 'PG' },
  Moviee { title: 'john wick', studio: 'KRG studios', rating: 'PG' },
  Moviee { title: 'vikram', studio: 'rajkamla films', rating: 'PG' } ]
  */
//............................................


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

    /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/


    //--------------------------------

    //2.Circle

    class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
      
      //circle 1
      /*
      Circle [radius = 2 , color = green]
      Area: 12.566370614359172
      Circumference: 12.566370614359172
      */
      
      //circle 1
      /*
      Circle [radius = 5 , color = Yellow]
      Area: 78.53981633974483
      Circumference: 31.41592653589793
      */

      
      //---------------------

      //3.Write a “person” class to hold all the details.

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new Person("vinoth", "kumar",26, "mechanical", "vinoth.31@gmail.com", 8765477783, "kanyakumari");
    let person2 = new Person("vasanth ","babu",25, "mechanical", "kingkohli11@gmail.com", 6893893782, "thiruchi");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());
    
    //output
    /*
    person1
    Name: vinoth kumar
            age: 26
            department: mechanical
            email: vinothkumar@gmail.com
            mobile: 8765477783
            city: kanyakumari
            */
    
    /*person2
    
    Name: vasanth babu
            age: 25
            department: mechanical
            email: kingkohli11@gmail.com
            mobile: 6893893782
            city: thiruchy
            */

 //-------------------------------------------

 //4.write a class to calculate the uber price

 class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());
  
  //output
  //150
//-----------------------------------