import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {

    return (
        <div className="container-auto" >
            <div className="row">
                <div className="col-sm-auto sidebar">
                    <script>navSidebar("Dashboard")</script>
                </div>
                <div className="col-sm p-3 min-vh-100">
                    <h1>Dashboard</h1>
                    <hr />
                    <h2>Published Courses (12)</h2>
                    <hr />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="row row-cols-1 row-cols-md-5 g-4">
                                {courses.map((course) => {
                                    return (
                                        <div className="col" style={{ width: "300px" }}>
                                            <div className="card"> <img src={`/images/${course.image}`} className="card-img-top" style={{maxHeight: "150px"}} alt=""/>
                                                <div className="card-body">
                                                    <Link className="card-title" to={course._id.toString()}
                                                        style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                                        {course.name}</Link>
                                                    <p className="card-text">{`From ${course.startDate} to ${course.endDate}`}</p>
                                                    <Link to={course._id.toString()} className="btn btn-primary"> Go </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )


                                }

                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;