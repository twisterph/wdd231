const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    }
];
const coursesContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");
function displayCourses(courseList) {

    coursesContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <p>${course.subject} ${course.number}</p>
        `;

        coursesContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    credits.textContent =
        `The total credits for course listed above is ${totalCredits}`;
}
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});
document.querySelector("#cse").addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});

displayCourses(courses);