import ClassListLesson from '../ClassListLesson/ClassListLesson';
import './ClassList.css';

export default function ClassList({ classes, selectedClass, setSelectedClass }) {
  const ClassListLesson = classes.map(o =>
    <ClassListLesson
      class={o}
      isSelected={o === selectedClass}
      setSelectedClass={setSelectedClass}
      key={o._id}
    />
  );
  return (
    <main className="ClassList">
      {classListLessons}
    </main>
  );
}