import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserAction } from '../../../store/users';
import userRequest from '../../requests/user';
import to from '../../awaitTo';

function useUser() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const [userError, userResponse] = await to(userRequest.getData());

    if (userError) {
      console.log(`Error to retrieve user data: ${JSON.stringify(userError)}`);
    } else {
      dispatch(setUserAction(userResponse?.usuario[0]));
    }    
  },[]);
}

const getUserState = () => {
  const user = useSelector(state => state.user);
  return user;
};

export {
  useUser,
  getUserState,
}