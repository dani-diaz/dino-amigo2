import { Link } from "react-router-dom";

export default function LessonForm(props) {
  return (
    < >
      <section className="LessonForm">
        <div className="lesson-link">
          <Link to={`/MyLesson/${props.lesson.title}`} >
            <div className="lesson-title">
              <h1>{props.lesson.title}</h1>
            </div>
          </Link>
        </div>
        <div className="lesson-card1"
          style={{
          background: `url(${props.lesson.lessonImage}) no-repeat center center`,
          WebkitBackgroundSize: "cover"
          }}>
        </div>
      </section>
    </>
  );
}
