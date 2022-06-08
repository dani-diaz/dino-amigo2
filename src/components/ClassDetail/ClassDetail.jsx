import './ClassDetail.css';
import LineLesson from '../LineLesson/LineLesson';


export default function ClassDetail({ class, handleChangeQty, handleSave }) {
  if (!class) return null;

  const lineLessons = class.lineLessons.map(lesson =>
    <LineLesson
      lineLesson={lesson}
      isDone={class.isDone}
      handleChangeQty={handleChangeQty}
      key={lesson._id}
    />
  );

  return (
    <div className="ClassDetail">
      <div className="section-heading">
        {class.isDone ?
          <span>CLASS<span className="smaller">{class.classId}</span></span>
          :
          <span>NEW CLASS</span>
        }
        <span>{new Date(class.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-lesson-container flex-ctr-ctr flex-col scroll-y">
        {lineLessons.length ?
          <>
            {lineLessons}
            <section className="lessons-done">
              {class.isDone ?
                <span className="right">LESSONS DONE&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleSave}
                  disabled={!lineLessons.length}
                >SAVE</button>
              }
              <span>{class.totalQty}</span>
              <span className="right">${class.classTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="no-lessons">You have no lessons done! </div>
        }
      </div>
    </div>
  );
}