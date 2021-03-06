import { useState, useEffect } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://immense-shore-30870.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(currentUser)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data inside useToken:', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken)
            })
        }

    }, [user]);
    return [token];
}

export default useToken;