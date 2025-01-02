import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
  const [subjects, setSubjects] = useState([]);
  const [cgpa, setCGPA] = useState(0);
  const [grades, setGrades] = useState([]);

  const handleAddSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now(), creditHours: 3, sessional: "", mid: "", final: "" },
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

    subjects.forEach(({ creditHours, sessional, mid, final }) => {
      const sessionalMarks = Math.min(parseFloat(sessional || 0), 25);
      const midMarks = Math.min(parseFloat(mid || 0), 25);
      const finalMarks = Math.min(parseFloat(final || 0), 50);

      const total = sessionalMarks + midMarks + finalMarks;

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
      <div className="container mx-auto my-10">
        <h1 className="text-center font-bold text-5xl animate-fadeInDown dark:text-yellow-400 ">
          CGPA Predictor
        </h1>
        <button
          className="block w-1/4 mx-auto my-4 p-2 bg-yellow-400 text-[#1e1e1e] dark:bg-yellow-400 dark:text-[#1e1e1e] font-bold uppercase rounded-md hover:bg-gray-100 dark:hover:bg-[#1e1e1e1e] hover:text-yellow-400 dark:hover:text-yellow-400  dark:hover:bg-[#1e1e1e] hover:shadow-lg transform transition-all duration-300"
          onClick={handleAddSubject}
        >
          Add Subject
        </button>
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="flex justify-between items-center gap-5 my-5"
          >
            <select
              value={subject.creditHours}
              onChange={(e) =>
                handleInputChange(subject.id, "creditHours", e.target.value)
              }
              className="w-1/4 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 scale-100 transition-all"
            >
              <option value={1}>1 Credit Hour</option>
              <option value={2}>2 Credit Hours</option>
              <option value={3}>3 Credit Hours</option>
            </select>
            <input
              type="number"
              placeholder="Sessional Marks (Max 25)"
              value={subject.sessional}
              onChange={(e) =>
                handleInputChange(subject.id, "sessional", e.target.value)
              }
              className="w-1/4 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 transition-all"
            />
            <input
              type="number"
              placeholder="Midterm Marks (Max 25)"
              value={subject.mid}
              onChange={(e) =>
                handleInputChange(subject.id, "mid", e.target.value)
              }
              className="w-1/4 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 transition-all"
            />
            <input
              type="number"
              placeholder="Final Marks (Max 50)"
              value={subject.final}
              onChange={(e) =>
                handleInputChange(subject.id, "final", e.target.value)
              }
              className="w-1/4 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 transition-all"
            />
            <button
              className="bg-red-500 text-white p-2 rounded-full ms-3 cursor-pointer border-none hover:bg-red-600 dark:hover:bg-red-600 transform transition-all duration-300"
              onClick={() => handleDeleteSubject(subject.id)}
            >
              <RxCross2 size={22} />
            </button>
          </div>
        ))}
        <button
          className="block w-1/4 mx-auto my-4 p-2 bg-yellow-400 text-[#1e1e1e] dark:bg-yellow-400 dark:text-[#1e1e1e] font-bold uppercase rounded-md hover:bg-gray-100 dark:hover:bg-[#1e1e1e] hover:text-yellow-400 dark:hover:text-yellow-400 hover:shadow-lg transform transition-all duration-300"
          onClick={calculateCGPA}
        >
          Calculate CGPA
        </button>
        <h2 className="text-center text-2xl text-[#1e1e1e] dark:text-yellow-400">
          Your CGPA: {cgpa}
        </h2>
        <div className="mt-10 bg-gray-100 dark:bg-[#1e1e1e] rounded-lg p-5 shadow-2xl">
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
