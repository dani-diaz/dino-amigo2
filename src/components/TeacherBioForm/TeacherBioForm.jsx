import { useParams } from "react-router-dom";
import "./TeacherBioForm.css";

export default function TeacherBioForm({ teachers }) {
  let { teacherName } = useParams();

  let teacher = teachers.find(() => teacher.name === teacherName);

  return (
    <div className="teacher-card">
      <div>
        <h1 className="teacher-name">{teacher.name}</h1>
        <p>{teacher.bio}</p>
      </div>
      <img src={`${teacher.teacherImage}`} alt="" />
    </div>
  );
}
