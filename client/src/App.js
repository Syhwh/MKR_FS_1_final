import { AppRouter } from './routers/AppRouter';
import { AuthContextProvider } from './Global/Context/AuthContextProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectsContextProvider } from './Global/Context/ProjectsContextProvider';
import { TaskContextProvider } from './Global/Context/TaskContextProvider';

const App = () => {
  return (

    <AuthContextProvider>
      <ProjectsContextProvider>
        <TaskContextProvider>
          <AppRouter />
        </TaskContextProvider>
      </ProjectsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
