

import UserCard from "../../components/userCard";

const UsersPage = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();


    return (
        <div className="grid grid-cols-3 gap-4">

            {
                data.map(d => <UserCard key={d._id} user={d}></UserCard>)
            }
        </div>
    );
};

export default UsersPage;