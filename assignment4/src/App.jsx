import "./App.css";
import background from "./assets/background.jpg";
import profileImage from "./assets/sekiro.jpg";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <h1>Profile Card</h1>

      <ProfileCard
        name="Siddharth Phadtare"
        image={profileImage}
        description="Data Engineer Celebal Technologies | Student Representative of MCA in Board of Studies MIT-WPU | MCA @ MIT-WPU | BSc Cs @ SCOS"
      />
    </div>
  );
}

export default App;
