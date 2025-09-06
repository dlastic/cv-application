import "../styles/CVDisplay.css";

export default function CVDisplay({ info }) {
  return (
    <div className="cv-display">
      <h2>Preview</h2>

      <div className="personal-info">
        <h2>{info.name}</h2>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>{info.address}</p>
      </div>

      <button>Download PDF</button>
    </div>
  );
}
