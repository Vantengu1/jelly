import { FormEvent } from "react";

const Review = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = new FormData(event.currentTarget);
        const data = Object.fromEntries(form);

        const postData = async () => {
            const req = await fetch(``, {
                method: 'POST',
                body: JSON.stringify(data),
            });
            const answer  = await req.json();
        };
        postData();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name <input type="text" name="user_name"/>
            </label>

            <label>
                Email <input type="email" name="user_email"/>
            </label>

            <input type="submit" />
        </form>
    );
};

export default Review;