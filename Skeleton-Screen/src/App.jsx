import Skeleton from "./components/Skeleton";

function App() {
  return (
    <div className="App">
      <Skeleton shape={"avatar"} />
      <Skeleton shape={"title"} />
      <Skeleton shape={"text"} />
      <Skeleton shape={"text"} />
      <Skeleton shape={"text"} />
      <Skeleton shape={"thumbnail"} />
    </div>
  );
}

export default App;
