import './App.css';

import UserList from './components/UserList/UserList.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
