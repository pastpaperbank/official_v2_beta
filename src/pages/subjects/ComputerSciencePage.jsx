import { useState } from 'react';
import MenuBar from '../../components/MenuBar';
import IndividualTitleSection from '../../components/subjectComponents/IndividualTitleSection';
import '../../styles/UniversalSubjectPage.css';

function ComputerSciencePage() {
  const [selected, setSelected] = useState("Revision Notes");

  return (
    <div className='universal-subject-page-main-wrapper'>
      {/* Pass selected + setSelected down */}
      <IndividualTitleSection 
        subject='Computer Science' 
        examCode='4CP0' 
        selected={selected} 
        setSelected={setSelected} 
      />
      <div className='universal-subject-page-main-content-wrapper'>
            {/* Show only the chosen section */}
            {selected === "Revision Notes" && (
                <div className='universal-revision-notes-section'>
                <p>revision notes</p>
                </div>
            )}

            {selected === "Past Papers" && (
                <div className='universal-past-paper-section'>
                <p>past paper</p>
                </div>
            )}

            {selected === "Course Creator" && (
                <div className='universal-course-creator-section'>
                <p>course creator</p>
                </div>
            )}

      </div>



      <MenuBar/>
    </div>
  );
}

export default ComputerSciencePage;
