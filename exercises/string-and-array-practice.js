// Use all of the JavaScript tricks to write a simple algorithm. 
// Given a list of `Student` objects, write a function that prints welcome statements. The function should:
// 1. Welcome only new students (using the `isNew` attribute)
// 2. Welcome only 10 students (can be selected arbitrarily based on new students)
// 3. Should print out "Welcome, First L.!", where the printed out name should be computed based on their inputted name of "First Last". You may assume all names be formatted "First(space)Last" and that both First and Last will exist.
// 4. Limit your solution to 5 lines of code. See hints below on JavaScript language features to make use of


// Start with the following starter code:
class Student {
  constructor(name, isNew) {
    this.name = name;
    this.isNew = isNew;
  }
}
const michael = new Student("Michael Nova", false)
const matt = new Student("Matt Oata", true)
const allen = new Student("Allen Mia", true)
const tony = new Student("Tony Nuga", true)
const jordan = new Student("Jordan Hela", true)
const patrick = new Student("Patrick Kova", true)
const mitali = new Student("Mitali Ga", true)
const cherry = new Student("Cherry Hera", true)
const bao = new Student("Bao Wenya", true)
const val = new Student("Val Dona", true)
const jawwad = new Student("Jawwad Ahma", true)
const sophie = new Student("Sophie Nova", true)
const danielle = new Student("Danielle Pola", true)

const students = [michael, matt, allen, tony, jordan, patrick, mitali, cherry, bao, val, jawwad, sophie, danielle]

function welcomeStudents(students) {
  students.map(student => {
      if (student.isNew) {
          return("Welcome "+ student.name)
      }
    }); 
}

welcomeStudents(students)


// Hints:
// 1. Use filter to find new students
// 2. Use slice to get just 10 students
// 3. Use parameter context matching to get names out of students
// 4. Use split to break up name into first and last
// 5. Use string interpolation to create the string to be printed.
// 6. Use forEach to loop over students