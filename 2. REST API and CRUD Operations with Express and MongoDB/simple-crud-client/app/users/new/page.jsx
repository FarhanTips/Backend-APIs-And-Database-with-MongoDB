
"use client";
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast";

const NewUserPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUser = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            newUser[key] = value.toString();
        });
        console.log("Form submitted successfully!", newUser);

        const res = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const afterFetchPost = await res.json();
        console.log(afterFetchPost);
        if (afterFetchPost.insertedId){
            toast.success("User Added successfully!")
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                    <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                        id="fieldgroup-email"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                    />
                    <FieldDescription>
                        We&apos;ll send updates to this address.
                    </FieldDescription>
                </Field>
                <Field orientation="horizontal">
                    <Button type="reset" variant="outline">
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </Field>
            </FieldGroup>
        </form>
    );
};

export default NewUserPage;