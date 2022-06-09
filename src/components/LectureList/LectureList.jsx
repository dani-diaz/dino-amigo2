import LectureListLesson from '../LectureListLesson/LectureListLesson';
import './LectureList.css';

export default function LectureList({ selectedLecture, setSelectedLecture }) {
  const LectureListLesson = lectures.map(o =>
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