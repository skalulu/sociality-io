import React from 'react';

const UserHelper = () => {
  return (
    <div className='user-helper'>
        <div className='user-helper-list'>
            <ul className='ulul'>
                <li className='published'>Published</li>
                <li className='scheduled ml-15'>Scheduled</li>
                <li className='approval ml-15'>Need Approval</li>
                <li className='error ml-15'>Error</li>
                <li className='notes ml-15'>Notes</li>
            </ul>
        </div>
        <div className='user-logo'>
            <img src={'https://picsum.photos/50/50'} alt='nada'></img>
        </div>
    </div>
  )
}

export default UserHelper