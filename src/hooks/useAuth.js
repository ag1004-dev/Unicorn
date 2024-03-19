import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
export const useAuth = () => useContext(AuthContext);