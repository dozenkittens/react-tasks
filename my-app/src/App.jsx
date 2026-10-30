import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import ActionButton from "./components/ActionButton";
import ProfileCard from "./components/ProfileCard";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div>
      <Greeting />
      <TaskList />
      <ActionButton />
      <ProfileCard />
      <ImageGallery />
    </div>
  );
}

export default App;
