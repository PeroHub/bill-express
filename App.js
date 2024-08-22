import { Router } from './routes/Router';
import { registerRootComponent } from 'expo';
import { AuthProvider } from './contexts/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

registerRootComponent(App);

export default App;
