// Student 1 Information
const student = {
    firstName: "Shiela", //First name
    middleName: "Napa", // Middle name
    lastName: "Llevares", // Last name
    birthDate: "september 25, 1995", //Birthdate
    birthPlace: "Pob.1 Real Quezon", // Birthpalce
    address: "Bagani tocgo, candon city ilocos sur", // Address
    courseYear: "Computer Science 1st Year", // Course
    dreamJob: "Successful programmer" // Dream job
};

// Classmate 1 Information
const classmate1 = {
    firstName: "Jonelle", //First name
    middleName: "Macamay", // Middle name
    lastName: "Galleta", // Last name
    birthDate: "January 23, 2006", //Birthdate
    birthPlace: "Paoc Sta lucia, Ilocos Sur", // Birthpalce
    address: "Paoc Sta. Lucia Ilocos Sur", // Address
    courseYear: "computer science 1st Year", // Course
    dreamJob: "Successful programmer" // Dream job
};

// Classmate 2 Information
const classmate2 = {
    firstName: " John Patrick", //First name
    middleName: "Mapanao", // Middle name
    lastName: "Andaquig", // Last name
    birthDate: "April 24, 2006", //Birthdate
    birthPlace: "Tampugo Sta.Cruz, Ilocos sur", // Birthpalce
    address: "Tampugo Sta. Cruz Ilocos sur ", // Address
    courseYear: "Computer Science 1st Year", // Course
    dreamJob: "Software Developer" // Dream job
};

// Function to format and print student
function printStudent(student) {
    console.log(`${student.firstName} ${student.middleName} ${student.lastName} was born on ${student.birthDate} in ${student.birthPlace}. 
    They currently reside at ${student.address}. They are a ${student.courseYear} student and aspire to become a ${student.dreamJob}.`);
}

// Print all students' information
//Display the result
printStudent(student);
printStudent(classmate1);
printStudent(classmate2);