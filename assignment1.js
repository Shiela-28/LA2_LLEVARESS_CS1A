// Student 1 Information
const student = {
    firstName: "Shiela",
    middleName: "Napa",
    lastName: "Llevares",
    birthDate: "september 25, 1995",
    birthPlace: "Pob.1 Real Quezon",
    address: "Bagani tocgo, candon city ilocos sur",
    courseYear: "Computer Science 1st Year",
    dreamJob: "Successful programmer"
};

// Classmate 1 Information
const classmate1 = {
    firstName: "Jonelle",
    middleName: "Macamay",
    lastName: "Galleta",
    birthDate: "January 23, 2006",
    birthPlace: "Paoc Sta lucia, Ilocos Sur",
    address: "Paoc Sta. Lucia Ilocos Sur",
    courseYear: "computer science 1st Year",
    dreamJob: "Successful programmer"
};

// Classmate 2 Information
const classmate2 = {
    firstName: " John Patrick",
    middleName: "Mapanao",
    lastName: "Andaquig",
    birthDate: "April 24, 2006",
    birthPlace: "Tampugo Sta.Cruz, Ilocos sur",
    address: "Tampugo Sta. Cruz Ilocos sur ",
    courseYear: "Computer Science 1st Year",
    dreamJob: "Software Developer"
};

// Function to format and print student
function printStudent(student) {
    console.log(`${student.firstName} ${student.middleName} ${student.lastName} was born on ${student.birthDate} in ${student.birthPlace}. 
    They currently reside at ${student.address}. They are a ${student.courseYear} student and aspire to become a ${student.dreamJob}.`);
}

// Print all students' information
printStudent(student);
printStudent(classmate1);
printStudent(classmate2);