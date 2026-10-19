
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link";

const UsersPage = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return (
        <div className="grid grid-cols-3 gap-4">

            {
                data.map(d => <Card key={d._id} className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>{d.name}</CardTitle>
                        <CardAction>
                            <p variant="link">{d._id}</p>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col gap-2">
                        <p className="w-full">
                            {d.email}
                        </p>
                        <Link href={`/users/${d._id}`}>
                            <Button variant="outline" className="w-full hover:bg-gray-700 hover:text-white">
                                View Details
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>)
            }
        </div>
    );
};

export default UsersPage;