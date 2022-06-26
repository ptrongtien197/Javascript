var courses = ["javascript", "PHP", "Ruby"];

courses.length = 10;

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

for (var index in courses) {
    console.log(courses[index]);
}
