import React from 'react';

const UsersPage = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return (
        <div>
            Total Users: {data.length}
        </div>
    );
};

export default UsersPage;