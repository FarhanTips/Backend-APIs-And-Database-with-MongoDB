import React from 'react';

const UserDetailsPage = async ({params}) => {
    const {userId} = await params;

    const res = await fetch(`http://localhost:5000/users/${userId}`);
    const user = await res.json();
    return (
        <div>
            User Details
            <p>{user._id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetailsPage;