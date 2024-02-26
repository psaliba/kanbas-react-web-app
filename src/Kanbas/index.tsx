import { Navigate, Route, Routes } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { db } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
      _id: "0",
      name: "New Course",
      image: "test.jpg",
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      number: "1"
  });

  const updateCourse = () => {
      setCourses(
          courses.map((c) => {
              if (c._id === course._id) {
                  return course;
              }
              return c;
          })
      )
  }
  const addCourse = () => {
      const newCourse = { ...course, _id: new Date().getTime().toString() };
      setCourses([...courses, {...course, ...newCourse}]);
  }
  const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
  };
   return (
    <Provider store={store}>
     <div className="d-flex">
       <div>
         <KanbasNavigation/>
       </div>
       <div style={{ flexGrow: 1 }}>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard course={course} courses={courses} setCourse={setCourse} addCourse={addCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />

        </Routes>

       </div>
     </div>
     </Provider>
 );}
 export default Kanbas;