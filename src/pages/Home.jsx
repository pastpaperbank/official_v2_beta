import '../styles/Home.css';
import Img1 from '../assets/graduation-cap.webp'; 
import Img2 from '../assets/graduation-face.avif'; 
import Img3 from '../assets/graduation-potratit.webp'; 
import Img4 from '../assets/footballer.jpg'; 
import founderImg from '../assets/founder.jpg'; 
import quoteImg from '../assets/quote.png'; 

import MenuBar from '../components/MenuBar';
import SubjectButton from '../components/SubjectButton';
import useTypewriter from '../hooks/TypeWriter';

const subjects = ['Computer Science', 'Chemistry', 'Physics', 'Biology', 'Further Pure Math', 'Math B', 'Business'];

function Home() {
    const typedText = useTypewriter("F ree IGCSE resources at your fingertip", 70);

    return (
        <>
            <div className="firstWelcomeWrapper">
                <div className="centered">
                    <h1>
                        <span className='auto-type'>{typedText}</span>
                    </h1>
                </div>
                <p>pastpaperbank.com</p>
            </div>

            <div className='subjectButtonsWrapper'>
                <h1>SUBJECTS</h1>
                <div className='subjectButtonsInnerFirstContainer'>
                    <SubjectButton subjects={subjects}/>
                </div>
            </div>

            <div className='founderQuoteWrapper'>
                <div className='founderQuoteContainer'>
                    <div className='firstFounderQuoteInnerTrack'>
                        <img src={quoteImg} alt="" />
                        <div className='firstFounderQuoteInnerActualQuoteTrack'>
                            <p>I see Past Paper Bank not just as a platform for sharing IGCSE resources cost free, but as a place that guides students to study more effectively and excel in their exams, drawing on the real experiences of senior students.</p>
                        </div>
                        <div className='firstFounderQuoteInnerDeep'>
                            <p>Aung Nyein Chan Soe</p>
                            <p>Founder @ Past Paper Bank</p>
                        </div>
                    </div>
                </div>
                <div className='secondFounderQuoteInnerTrack'>
                    <img src={founderImg} alt="" />
                </div>
            </div>

            <MenuBar/>
        </>
    );
}

export default Home;
