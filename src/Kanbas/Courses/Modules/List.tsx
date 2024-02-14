import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div className="d-flex flex-column">
                <div className="d-flex flex-fill">
                    <button type="button" className="btn btn-light">Collapse All</button>
                    <button type="button" className="btn btn-light">View Progress</button>
                    <button type="button" className="btn btn-light"> <i className="fa fa-check-circle text-success"></i> Publish
                        All</button>
                    <button type="button" className="btn btn-danger">+ Module</button>
                    <button type="button" className="btn btn-light"><i className="fa fa-ellipsis-v"></i></button>

                </div>
                <hr />
                <div>
                    <ul className="list-group wd-modules">
                        {modulesList.map((module) => (
                            <li
                                className="list-group-item"
                                key={module._id}
                                onClick={() => setSelectedModule(module)}>
                                <div>
                                    <FaEllipsisV className="me-2" />
                                    {module.name}
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaPlusCircle className="ms-2" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                </div>
                                {selectedModule._id === module._id && (
                                    <ul className="list-group">
                                        {module.lessons?.map((lesson) => (
                                            <li className="list-group-item" key={lesson._id}>
                                                <FaEllipsisV className="me-2" />
                                                {lesson.name}
                                                <span className="float-end">
                                                    <FaCheckCircle className="text-success" />
                                                    <FaEllipsisV className="ms-2" />
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default ModuleList;