import React, { useEffect } from 'react';
import './UserList.styles.css';

import { useDataLayerContextValue } from '../../contexts/DataLayer';

import Spinner from '../spinner/spinner.component';

import UserModel from '../UserModel/UserModel.component';
import axios from 'axios';

const UserList = () => {
    const [{user}, dispatch ] = useDataLayerContextValue();

    useEffect(() => {
      axios.get('https://037c91d4-06ae-4c9a-b7ee-8f3081759560.mock.pstmn.io/testFTL')
           .then(res => {
             dispatch({
               type: 'SET_USER',
               user: res.data
             })
           })
           .catch(err => console.log(err));
    }, [dispatch]);

    return (
        <div className='user-list-container'>
            <div className='user-list-title'>A list of users fetched from a Mock API</div>
            <div className='user-lists'>
            {
                user? user.members.map(({ id, activity_periods, ...otherprops }) => <UserModel key={ id } activity_periods = { activity_periods } {...otherprops} />)
                    : <Spinner />
            }
            </div>
        </div>
    );
}

export default React.memo(UserList);
