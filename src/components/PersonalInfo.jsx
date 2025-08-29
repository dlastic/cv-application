import "../styles/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
