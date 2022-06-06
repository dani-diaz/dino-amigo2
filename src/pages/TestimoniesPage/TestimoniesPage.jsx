export default function TestimoniesPage({ testimony, index, setTestimonies, testimonies }) {
  function handleClick(testimony, index) {
    const newTestimonies = [...testimonies];
    if (testimony.completed) {
      newTestimonies.splice(index, 1);
    } else {
      testimony.completed = true;
    }
    setTestimonies(newTestimonies);
  }
  return (
    <>
<h1>Testimonies</h1>
    <li
      className="TestimonyPage"
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      <div className="flex-ctr-ctr"> {index + 1}</div>
      <span style={{ textDecoration: testimony.completed && "line-through" }}>
        {testimony.text}
      </span>
      <button onClick={() => handleClick(testimony, index)}>
        {testimony.completed ? "❌ " : "✔️"}
      </button>
    </li>
    </>
  );
}
