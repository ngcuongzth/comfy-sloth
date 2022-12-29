import {
    useContext, createContext, useEffect,
    useState
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [myUser, setMyUser] = useState(null);
    const {
        loginWithRedirect, logout, user
    } = useAuth0()

    useEffect(() => {
        setMyUser(user)
    }, [user])
    return (
        <UserContext.Provider value={{
            loginWithRedirect, logout, myUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = () => {
    return useContext(UserContext)
}
