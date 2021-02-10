import React from 'react';

const UserModel = ({ real_name, ...otherprops }) => {
    console.log(otherprops);
    return (
        <div className='user-container'>
            <button>{real_name}</button>
        </div>
    );
}

export default UserModel;
