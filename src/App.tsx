import './App.css';
import { TasksGroup } from './components/TasksGroup/TasksGroup';

function App() {
  return (
    <div className="h-full min-h-full flex items-center justify-center p-6 font-sansPro text-grayscale900">
      <div className="max-w-[820px] flex-1">
        <TasksGroup />
      </div>
    </div>
  );
}

export default App;
