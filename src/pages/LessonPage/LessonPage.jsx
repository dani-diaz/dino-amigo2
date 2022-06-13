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
    <body className="lesson-pard">
      <div>
        <h1 className="lesson-name1" key={lesson.title}>{lesson.number} 👉🏼 {lesson.title}</h1>
      </div>
      <div>
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
      </div>
       <div className="trans-quizname">{filteredQuizzes.map((quiz) => (
         <p key={quiz.quizTitle}>
            <Link to={`/quiz`} state={quiz} key={quiz.quizTitle} className="quiz-linkname">{quiz.quizTitle}</Link>
        </p>
      ))}</div>
        
    </body>
  );
};
