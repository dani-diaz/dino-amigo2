import './LineLesson.css';

export default function LineLesson({ lineLesson, isDone, handleChangeQty }) {
  return (
    <div className="LineLesson">
      <div className="flex-ctr-ctr">{lineLesson.lesson.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineLesson.lesson.name}</span>
        <span>{lineLesson.lesson.quiz.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isDone && 'center' }}>
        {!isDone &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineLesson.lesson._id, lineLesson.qty - 1)}
          >−</button>
        }
        <span>{lineLesson.qty}</span>
        {!isDone &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineLesson.lesson._id, lineLesson.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-quiz">${lineLesson.extQuiz.toFixed(2)}</div>
    </div>
  );
}