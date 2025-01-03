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
import Excellent from "../../assets/images/Memes/maza-aaya.gif";
import Good from "../../assets/images/Memes/2nd.gif";
import Average from "../../assets/images/Memes/3rd.gif";
import Poor from "../../assets/images/Memes/4th.gif";

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
      { id: Date.now(), creditHours: 3, mid: "", final: "" },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    const validatedValue = Math.min(50, Math.max(value));
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: validatedValue } : subject
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
        total > 85
          ? 4.0
          : total >= 80
          ? 3.7
          : total > 75
          ? 3.3
          : total >= 72
          ? 3.0
          : total > 68
          ? 2.7
          : total >= 64
          ? 2.3
          : total >= 60
          ? 2.0
          : total >= 57
          ? 1.7
          : total >= 54
          ? 1.3
          : total >= 50
          ? 1.0
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
        backgroundColor: grades.map((grade) => {
          if (grade.grade >= 3.7) return "#4CAF50"; // A
          if (grade.grade >= 2.7) return "#FFC107"; // B
          if (grade.grade >= 1.7) return "#FF9800"; // C
          return "#F44336"; // F
        }),
      },
    ],
  };

  const getMemeBasedOnCGPA = () => {
    if (cgpa >= 3.7) {
      return Excellent; // Excellent meme
    } else if (cgpa >= 3.0) {
      return Good; // Good meme
    } else if (cgpa >= 2.0) {
      return Average; // Okay meme
    } else {
      return Poor; // Failing meme
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-10">
        <h1 className="text-center font-bold text-5xl animate-fadeInDown dark:text-yellow-400">
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
              className="w-1/3 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 scale-100 transition-all"
            >
              <option value={1}>1 Credit Hour</option>
              <option value={2}>2 Credit Hours</option>
              <option value={3}>3 Credit Hours</option>
            </select>
            <input
              type="number"
              placeholder="Mids and Sessional Marks (Max 50)"
              value={subject.mid}
              onChange={(e) =>
                handleInputChange(subject.id, "mid", e.target.value)
              }
              className="w-1/3 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 transition-all"
            />
            <input
              type="number"
              placeholder="Final Marks (Max 50)"
              value={subject.final}
              onChange={(e) =>
                handleInputChange(subject.id, "final", e.target.value)
              }
              className="w-1/3 p-2 border-2 border-yellow-400 dark:border-yellow-400 rounded-md bg-gray-100 dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-yellow-400 focus:outline-none focus:border-white focus:transform focus:scale-105 transition-all"
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
        <h2 className="text-center text-2xl text-[#1e1e1e] dark:text-yellow-400 mt-32">
          Your CGPA: {cgpa}
        </h2>
        <div className="mt-10 bg-gray-100 dark:bg-[#1e1e1e] rounded-lg p-5 shadow-2xl">
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        {cgpa > 0 && (
          <div className="mt-10 flex justify-center">
            <img
              src={getMemeBasedOnCGPA()}
              alt="Meme based on CGPA"
              className="rounded-lg shadow-lg"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CGPAPredictor;
