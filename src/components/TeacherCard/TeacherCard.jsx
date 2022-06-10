import { Link } from "react-router-dom";

export default function TeacherCard(props) {
  return (
    <>
      <Link to={`/ImTeacher/${props.teacher.name}`} className="teacher-link">
        <div className="title-1">
          <h1>{props.teacher.name}</h1>
        </div>
        <div className="teacher-card1"
          style={{
          background: `url(${props.teacher.teacherImage}) no-repeat center center`,
          WebkitBackgroundSize: "cover"
          }}
          >
        </div>
      </Link>
    </>
  );
}
