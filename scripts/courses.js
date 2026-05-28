const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true,
        certificate: "Web and Computer Programming",
        description: "This course introduces basic programming concepts and problem solving using code.",
        technology: ["Python", "VS Code", "GitHub"]
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true,
        certificate: "Web and Computer Programming",
        description: "This course teaches basic web development using HTML and CSS.",
        technology: ["HTML", "CSS", "VS Code"]
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true,
        certificate: "Web and Computer Programming",
        description: "This course focuses on writing programs using functions and clean organization.",
        technology: ["Python", "Functions", "Testing"]
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false,
        certificate: "Web and Computer Programming",
        description: "This course introduces object-oriented programming using classes and objects.",
        technology: ["C#", "OOP", "Visual Studio Code"]
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true,
        certificate: "Web and Computer Programming",
        description: "This course teaches dynamic web pages using JavaScript, responsive design, and DOM interaction.",
        technology: ["HTML", "CSS", "JavaScript"]
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false,
        certificate: "Web and Computer Programming",
        description: "This course focuses on frontend development, APIs, JSON data, responsive layouts, and JavaScript modules.",
        technology: ["HTML", "CSS", "JavaScript", "APIs", "JSON"]
    }
];

const coursesContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");
const courseDetails = document.querySelector("#course-details");

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

        card.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        coursesContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    credits.textContent =
        `The total credits for course listed above is ${totalCredits}`;
}

function displayCourseDetails(course) {
    courseDetails.innerHTML = "";

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    const closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDetails.addEventListener("click", (event) => {
    const dialogDimensions = courseDetails.getBoundingClientRect();

    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        courseDetails.close();
    }
});

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