import LectureListLesson from '../LectureListLesson/LectureListLesson';
import './LectureList.css';

export default function LectureList({ lectures, selectedLecture, setSelectedLecture }) {
  const lectureListLessons = lectures.map(o =>
    <LectureListLesson
      lecture={o}
      isSelected={o === selectedLecture}
      setSelectedLecture={setSelectedLecture}
      key={o._id}
    />
  );
  return (
    <main className="LectureList">
      {lectureListLessons}
    </main>
  );
}