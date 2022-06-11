import { useParams } from "react-router-dom";
import "./LessonPage.css";
import { Link } from "react-router-dom";
import { quizzes } from "../../quizData.js";

export default function LessonPage({ lessons }) {
      let { lessonName } = useParams();
    
      let lesson = lessons.find((l) => l.title === lessonName);

      let filteredQuizzes = quizzes.filter((quiz) => {
        return quiz.quizTitle.includes(lessonName);
      });


  return (
    <> 

    <h1 key={lesson.number}>{lesson.number}</h1>
    <div className="lesson-card">
      <h1 className="lesson-name1" key={lesson.title}>{lesson.title}</h1>
      <iframe 
      src={`${lesson.video}`} 
      width="640" 
      height="315" 
      title="YouTube video player" 
      frameBorder="90" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen 
      key={lesson.video} >  
      </iframe>
      <h1>Quiz</h1>
      <div>{filteredQuizzes.map((quiz) => (
        <p key={quiz.quizTitle}>
            <Link to={`/quiz`} state={quiz} key={quiz.quizTitle} className="quiz-link">{quiz.quizTitle}</Link> 
        </p>
      ))}</div>
        
    </div>

   
  </>
  );
};
