import { AppRouter } from './routers/AppRouter';
import { AuthContextProvider } from './Global/Context/AuthContextProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectsContextProvider } from './Global/Context/ProjectsContextProvider';

const App = () => {
  return (

    <AuthContextProvider>
      <ProjectsContextProvider>
        <AppRouter />

      </ProjectsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
