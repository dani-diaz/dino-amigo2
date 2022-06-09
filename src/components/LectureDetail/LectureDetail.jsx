import './LectureDetail.css';
import LineLesson from '../LineLesson/LineLesson';


export default function LectureDetail({ lecture, handleChangeQty, handleSave }) {
  if (!lecture) return null;

  const lineLessons = lecture.lineLessons.map(lesson =>
    <LineLesson
      lineLesson={lesson}
      isDone={lecture.isDone}
      handleChangeQty={handleChangeQty}
      key={lesson._id}
    />
  );

  return (
    <div className="LectureDetail">
      <div className="section-heading">
        {lecture.isDone ?
          <span>CLASS<span className="smaller">{lecture.lectureId}</span></span>
          :
          <span>NEW CLASS</span>
        }
        <span>{new Date(lecture.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-lesson-container flex-ctr-ctr flex-col scroll-y">
        {lineLessons.length ?
          <>
            {lineLessons}
            <section className="lessons-done">
              {lecture.isDone ?
                <span className="right">LESSONS DONE&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleSave}
                  disabled={!lineLessons.length}
                >SAVE</button>
              }
              <span>{lecture.totalQty}</span>
              <span className="right">${lecture.lectureTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="no-lessons">You have no lessons done! </div>
        }
      </div>
    </div>
  );
}