import React, {FC} from 'react';
import SignUp from 'src/Components/Auth/SignUp';
import {useAuth} from 'src/Context/AuthContext';
import DrawerNav from 'src/Components/Navigation/DrawerNav';

const Auth: FC = () => {
  const {user} = useAuth();

  if (!user) {
    return <SignUp />;
  }

  return <DrawerNav />;
};

export default Auth;
