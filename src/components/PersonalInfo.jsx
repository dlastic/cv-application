import "../styles/PersonalInfo.css";

export default function PersonalInfo({ info, setInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={info.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={info.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={info.address}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
