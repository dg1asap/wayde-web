import React, {useEffect, useState} from 'react';
import {UserControllerApi, UserDto} from './api'; // Zakładając, że masz indeks eksportujący wszystkie API

interface UserComponentProps {
    userId: number;
}

const UserComponent: React.FC<UserComponentProps> = ({userId}) => {
    const [user, setUser] = useState<UserDto | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const api = new UserControllerApi();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await api.getUserById({id: userId});
                setUser(userData);
            } catch (e) {
                console.error(e);
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>User Information</h1>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.mail}</p>
                </div>
            ) : (
                <div>No user found.</div>
            )}
        </div>
    );
};

export default UserComponent;
