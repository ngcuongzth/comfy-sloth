import { useContext, createContext, useEffect,
    useReducer, useState
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

const UserProvider = ({children})=>{

    const [myUser, setMyUser] = useState(null);
    const {
        isAuthenticated, loginWithRedirect, logout,
        user, isLoading
    } = useAuth0()

    useEffect(()=>{
        if(isAuthenticated) {
            setMyUser(user);
        }
        else{
            setMyUser(null)
        }
    },[isAuthenticated])
    return (
        <UserContext.Provider value={{
            loginWithRedirect, logout, myUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = ()=>{
    return useContext(UserContext)
}
