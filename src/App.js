import { useEffect } from 'react';
import './App.css';

import { useDataLayerContextValue } from './contexts/DataLayer';

import UserModel from './components/UserModel/UserModel.component';
import axios from 'axios';

function App() {
  const [{user}, dispatch ] = useDataLayerContextValue();

  useEffect(() => {
    axios.get('https://037c91d4-06ae-4c9a-b7ee-8f3081759560.mock.pstmn.io/testFTL')
         .then(res => {
           console.log(res.data);
           dispatch({
             type: 'SET_USER',
             user: res.data
           })
         })
         .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <div className="App">
      {
        user? user.members.map(({ id, ...otherprops }) => <UserModel key = { id } {...otherprops} />)
            : <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
