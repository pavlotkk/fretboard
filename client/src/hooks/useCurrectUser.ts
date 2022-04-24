import useLocalStorage from "./useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

export default function useCurrentUser(): string{
    const [userId, setUserId] = useLocalStorage("user_id", uuidv4())

    return userId
}