<<<<<<< HEAD
import {
    useContext, createContext, useEffect,
    useState
=======
import { useContext, createContext, useEffect,
    useReducer, useState
>>>>>>> 14fa4f18d8dd0f844836552150d8beb213e52171
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

<<<<<<< HEAD
const UserProvider = ({ children }) => {

    const [myUser, setMyUser] = useState(null);
    const {
        loginWithRedirect, logout, user
    } = useAuth0()

    useEffect(() => {
        setMyUser(user)
    }, [user])
=======
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
>>>>>>> 14fa4f18d8dd0f844836552150d8beb213e52171
    return (
        <UserContext.Provider value={{
            loginWithRedirect, logout, myUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

<<<<<<< HEAD
export const useUserContext = () => {
=======
export const useUserContext = ()=>{
>>>>>>> 14fa4f18d8dd0f844836552150d8beb213e52171
    return useContext(UserContext)
}
