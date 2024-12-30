import { useState } from "react";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CGPAPredictor = () => {
    const [subjects, setSubjects] = useState(['sub']);
    const [cgpa, setCGPA] = useState(0);
    const [grades, setGrades] = useState([]);

    const handleAddSubject = () => {
        setSubjects([
            ...subjects,
            { id: Date.now(), creditHours: 3, mid: "", final: "" },
        ]);
    };

    const handleInputChange = (id, field, value) => {
        setSubjects((prevSubjects) =>
            prevSubjects.map((subject) =>
                subject.id === id ? { ...subject, [field]: value } : subject
            )
        );
    };

    const handleDeleteSubject = (id) => {
        setSubjects(subjects.filter((subject) => subject.id !== id));
    };

    const calculateCGPA = () => {
        let totalPoints = 0;
        let totalCredits = 0;
        let newGrades = [];

        subjects.forEach(({ creditHours, mid, final }) => {
            const total = parseFloat(mid || 0) + parseFloat(final || 0);
            const grade =
                total >= 95
                    ? 4.0
                    : total >= 85
                        ? 3.7
                        : total >= 75
                            ? 3.3
                            : total >= 65
                                ? 3.0
                                : total >= 55
                                    ? 2.7
                                    : 0;

            totalPoints += grade * creditHours;
            totalCredits += creditHours;
            newGrades.push({ subject: `Subject ${newGrades.length + 1}`, grade });
        });

        setCGPA(totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0);
        setGrades(newGrades);
    };

    const chartData = {
        labels: grades.map((grade) => grade.subject),
        datasets: [
            {
                label: "Grades",
                data: grades.map((grade) => grade.grade),
                backgroundColor: [
                    "#4CAF50",
                    "#FFC107",
                    "#F44336",
                    "#17A2B8",
                    "#6C757D",
                ],
            },
        ],
    };

    return (

        <>
            <Header />
            <div className="cgpa-container">
                <h1>CGPA Predictor</h1>
                <button className="add-btn" onClick={handleAddSubject}>
                    Add Subject
                </button>
                {subjects.map((subject) => (
                    <div key={subject.id} className="subject-row">
                        <select
                            value={subject.creditHours}
                            onChange={(e) =>
                                handleInputChange(subject.id, "creditHours", e.target.value)
                            }
                            className="dropdown"
                        >
                            <option value={1}>1 Credit Hour</option>
                            <option value={2}>2 Credit Hours</option>
                            <option value={3}>3 Credit Hours</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Midterm Marks"
                            value={subject.mid}
                            onChange={(e) =>
                                handleInputChange(subject.id, "mid", e.target.value)
                            }
                            className="input-field"
                        />
                        <input
                            type="number"
                            placeholder="Final Marks"
                            value={subject.final}
                            onChange={(e) =>
                                handleInputChange(subject.id, "final", e.target.value)
                            }
                            className="input-field"
                        />
                        <button
                            className="delete-btn"
                            onClick={() => handleDeleteSubject(subject.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <button className="calculate-btn" onClick={calculateCGPA}>
                    Calculate CGPA
                </button>
                <h2>Your CGPA: {cgpa}</h2>
                <div className="chart-container">
                    <Bar
                        data={chartData}
                        options={{ responsive: true, maintainAspectRatio: false }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CGPAPredictor;
