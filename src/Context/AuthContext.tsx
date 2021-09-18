import React, {createContext, FC, useState, useEffect, useContext} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface User {
  user: FirebaseAuthTypes.User | null;
}

const AuthContext = createContext({} as User);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: FC = ({children}) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const onAuthStateChanged = (
      // eslint-disable-next-line no-shadow
      user: React.SetStateAction<FirebaseAuthTypes.User | null>,
    ) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [initializing]);

  if (initializing) {
    return null;
  }

  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
