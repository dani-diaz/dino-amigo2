import './LibraryListLesson.css';

export default function LibraryListLesson({ libraryLesson, handleAddToLecture }) {
  return (
    <div className="LibraryListLesson">
      <div className="emoji flex-ctr-ctr">{libraryLesson.emoji}</div>
      <div className="name">{libraryLesson.name}</div>
      <div className="buy">
        <span>${libraryLesson.quiz.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToLecture(libraryLesson._id)}>
          TAKE QUIZ
        </button>
      </div>
    </div>
  );
}