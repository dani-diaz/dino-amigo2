import LessonForm from "../../components/LessonForm/LessonForm";
import "./LessonsPage.css";

export default function LessonsPage(props) {
  return (
   <body className="lessonsPage"> 
    <h1>Welcome to your Dino Amigo lessons!</h1>
    <br />
    <div className="lesson-parag">
      <h2> Why cartoons and music?</h2>    
         <h3> Kids love cartoons and music so why not mix them to create a powerful learning tool?    
          Beyond the fun, there is also a strong educational basis:     
          Research has shown that music is one of the best ways to learn a foreign language.    
      </h3> 
    </div>
    <div className="container-lesson">
      {props.lessons.map((lesson) => {
        return <LessonForm key={lesson.title} lesson={lesson} />;
      })}
    </div>
   </body>
  );
}
