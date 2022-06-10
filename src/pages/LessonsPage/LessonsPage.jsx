import LessonForm from "../../components/LessonForm/LessonForm";
import "./LessonsPage.css";

export default function LessonsPage(props) {
  return (
    <div className="container-lesson">
      {props.lessons.map((lesson) => {
        return <LessonForm key={lesson.title} lesson={lesson} />;
      })}
    </div>
  );
}
