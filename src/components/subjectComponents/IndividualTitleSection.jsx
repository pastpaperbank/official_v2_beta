import { useState } from "react";
import "../../styles/IndividualTitleSection.css";

function IndividualTitleSection({ subject, examCode, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const options = ["Revision Notes", "Past Papers", "Course Creator"];

  return (
    <div className="individual-title-section-main-container">
         <div className="individual-title-section-title-container">
            <h1>
                <span className="exam-board">Edexcel IGCSE</span>{" "}
                <span className="subject">{subject}</span>
            </h1>
        </div>


        <div className="individual-title-section-info-container">
            <div className="individual-title-section-info-exam-code-container">
            <p>Exam Code: {examCode}</p>
            </div>

            <div
            className="individual-title-section-info-sub-page-choices-container"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            >
            {/* Selected option (green box) */}
                <div
                    className="selected-option"
                    onClick={() => setOpen(!open)}
                    >
                    {selected}
                    <span className="arrow">▼</span>
                </div>

            {/* Dropdown menu */}
            {open && (
                <div className="dropdown-options">
                {options.map((option, i) => (
                    <p
                    key={i}
                    onClick={() => {
                        setSelected(option);
                        setOpen(false);
                    }}
                    >
                    {option}
                    </p>
                ))}
                </div>
            )}
            </div>
        </div>
    </div>
  );
}

export default IndividualTitleSection;
