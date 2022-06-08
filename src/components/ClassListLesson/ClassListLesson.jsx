import './ClassListLesson.css';

export default function ClassListLesson({ class, isSelected, setSelectedClass }) {
  return (
    <div
      className={`ClassListLesson${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedClass(class)}
    >
      <div>
        <div>Class taken:</div>
        <div className="smaller">{new Date(class.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${class.classTotal.toFixed(2)}</div>
        <div className="smaller">{class.totalQty} Lesson{class.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}