import TeacherCard from "../../components/TeacherCard/TeacherCard";
import "./TeachersListPage.css";

export default function TeachersListPage(props) {
  return (
    <div className="container-teacher">
      {props.teachers.map((teacher) => {
        return <TeacherCard key={teacher.name} teacher={teacher} />;
      })}
    </div>
  );
}
