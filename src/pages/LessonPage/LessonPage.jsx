import { useParams } from "react-router-dom";
import "./LessonPage.css";
import { Link } from "react-router-dom";
import { questions } from "../../quizData.js";

export default function LessonPage({ lessons }) {
      let { lessonName } = useParams();
    
      let lesson = lessons.find((l) => l.title === lessonName);

      let filteredQuestions = questions.filter((question) => {
        return question.quizTitle.includes(lessonName);
      });


  return (
    <> 
    <h1>{lesson.number}</h1>
    <div className="lesson-card">
      <h1 className="lesson-name1">{lesson.title}</h1>
      <iframe 
      src={`${lesson.video}`} 
      width="640" 
      height="315" 
      title="YouTube video player" 
      frameborder="90" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>
      <h1>Quiz</h1>
      <div>{filteredQuestions.map((question) => (
        <p>
            <Link to={`/quiz/${question.quizTitle}`} className="quiz-link">{question.quizTitle}</Link> 
        </p>
      ))}</div>
        
    </div>

   
  </>
  );
};
