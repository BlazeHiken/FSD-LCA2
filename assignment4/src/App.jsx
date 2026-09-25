import "./App.css";

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
    <div className="app">
      <h1>Profile Card</h1>

      <ProfileCard
        name="Siddharth Phadtare"
        image="src/assets/sekiro.jpg"
        description="Data Engineer Celebal Technologies | Student Representative of MCA in Board of Studies MIT-WPU | MCA @ MIT-WPU | BSc Cs @ SCOS"
      />
    </div>
  );
}

export default App;
