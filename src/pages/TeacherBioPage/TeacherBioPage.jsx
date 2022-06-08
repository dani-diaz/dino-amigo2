import { useParams } from "react-router-dom";
import "./TeacherBioPage.css";

export default function TeacherBioPage({ teachers }) {
  let { teacherName } = useParams();

  let teacher = teachers.find((teach) => teach.name === teacherName);

  return (
    <div className="teacherbio-card">
      <img className="teacher-img" src={`${teacher.teacherImage}`} alt="" />
      <h1 className="teacher-name">👋🏼 Hola, I'm teacher {teacher.name}!</h1>
      <h4 className="teacher-bio">{teacher.bio} 🫶🏼</h4>
    </div>
  );
}