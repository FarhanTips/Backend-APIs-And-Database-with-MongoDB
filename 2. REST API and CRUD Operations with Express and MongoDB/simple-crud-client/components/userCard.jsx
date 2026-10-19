
"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import UserUpdate from "./userUpdate";

const UserCard = ({ user }) => {
    const router = useRouter();

    const handleDeleteButton = async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE",
        })

        const afterDelete = await res.json();
        console.log("after_Delete",afterDelete);

        if (afterDelete.deletedCount>0){
            toast.success(`${user.name} deleted successfully!`);
            router.refresh();
        }
    };
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardAction>
                    <p variant="link">{user._id}</p>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
                <p className="w-full">
                    {user.email}
                </p>
                <Link href={`/users/${user._id}`}>
                    <Button variant="outline" className="w-full hover:bg-gray-700 hover:text-white">
                        View Details
                    </Button>
                </Link>
                <Button variant="destructive" onClick={() => handleDeleteButton(user._id)}>
                    Delete
                </Button>
                <UserUpdate user={user}></UserUpdate>
            </CardFooter>
        </Card>
    );
};

export default UserCard;