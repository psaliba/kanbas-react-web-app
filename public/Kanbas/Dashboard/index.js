function getCourses() {
    const courses = [
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        },
        {
            img: "/images/test.jpg",
            courseLink: "/Kanbas/Courses/Home/screen.html",
            name: "CS1234 React JS",
            text: "Full stack developer",
            goLink: "/Kanbas/Courses/Home/screen.html"
        }
    ];

    document.write(`
    ${courses.map((course, i) => {
        return `<div class="card"> <img src="${course.img}" class="card-img-top"
    style="max-height: 150px"/>
        <div class="card-body">
            <a class="card-title" href="${course.courseLink}"
            style="text-decoration: none; color: navy; font-weight: bold">
            ${course.name}</a>
            <p class="card-text">${course.text}</p>
            <a html="${course.goLink}" class="btn btn-primary"> Go </a>
        </div>
</div>`
    }).join("")}
    `)
}
