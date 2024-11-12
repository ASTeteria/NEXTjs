import React from 'react';

type Params = { id: string }

const UserPage = async ({params}: { params: Params }) => {

    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => res.json());


    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserPage;