import Img3 from '../assets/graduation-potratit.webp'; 
import '../styles/SubjectButton.css';

function SubjectButton({ subjects }) {
  return (
    <>
      {subjects.map((subjectName, index) => (
        <div key={index} className="subjectButtoncontainer" id={subjectName.toLowerCase().replace(/\s+/g, '') + 'subjectButtonContainer'}>
            <div className="firstSubjectButtonInnerTrack">
                <div className="firstSubjectButtonInnerDeepTrack">
                    <div className="subjectButtonIcon">

                    </div>
                    <p>{subjectName}</p>
                </div>
                <div className="firstSubjectButtonInnerDeepRatingTrack">
                    <p>⭐️ 4.9</p>
                </div>
            </div>
            
            <div className="secondSubjectButtonInnerTrack">
                <p>Powerful Business Writing: <br />How to write Concisely </p>
            </div>

            <div className="thirdSubjectButtonInnerTrack">
                <p>Lecture: Aung Nyein Chan Soe</p>
                <img src={Img3} alt="" />
            </div>

        </div>
      ))}
    </>
  );
}

export default SubjectButton;
