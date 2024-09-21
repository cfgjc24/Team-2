import React, { useState, useEffect } from 'react';
import Student_module from '../pages/Student_module.jsx';

function Tutor_Start() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents([
            { id: 1, name: "Jose Iglesias" },
            { id: 2, name: "Francisco Lindor" },
            { id: 3, name: "Tyrone Taylor" },
            { id: 4, name: "Jacob DeGrom" },
            { id: 5, name: "Francisco Alvarez" },
            { id: 6, name: "Luis Torrens" },
            { id: 7, name: "Max Scherzer" },
            { id: 8, name: "Harrison Bader" }
        ]);
    }, []);

    return (
        <>
            <div className="Tutor_Start">
                <button>Start Class</button>
                <h3 id="className">Students List</h3>
                <div className="grid">
                    {students.map((student) => (
                        <div key={student.id} className="module-card">
                            {student.name ? (
                                <Student_module
                                    name={student.name} // Pass the student name here
                                />
                            ) : (
                                <p>Module {student.id} is not available.</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Tutor_Start;
