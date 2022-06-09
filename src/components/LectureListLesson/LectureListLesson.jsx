import './LectureListLesson.css';

export default function LectureListLesson({ lecture, isSelected, setSelectedLecture }) {
  return (
    <div
      className={`LectureListLesson${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedLecture(lecture)}
    >
      <div>
        <div>Class taken: <span className="smaller">{lecture.lectureId}</span></div>
        <div className="smaller">{new Date(lecture.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${lecture.lectureTotal.toFixed(2)}</div>
        <div className="smaller">{lecture.totalQty} Lesson{lecture.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}