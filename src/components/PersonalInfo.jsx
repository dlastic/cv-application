import "../styles/PersonalInfo.css";

export default function PersonalInfo({ info, setInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={info.name}
        onChange={handleChange}
        placeholder="Enter first and last name"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={info.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={info.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={info.address}
        onChange={handleChange}
        placeholder="Enter city and country"
      />

      <label htmlFor="linkedin">LinkedIn Profile</label>
      <input
        type="url"
        id="linkedin"
        name="linkedin"
        value={info.linkedin}
        onChange={handleChange}
        placeholder="Enter LinkedIn profile URL"
      />

      <label htmlFor="github">GitHub Profile</label>
      <input
        type="url"
        id="github"
        name="github"
        value={info.github}
        onChange={handleChange}
        placeholder="Enter GitHub profile URL"
      />
    </form>
  );
}
