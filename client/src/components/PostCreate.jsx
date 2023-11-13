import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post("https://redesigned-space-eureka-gww46gjpwqv2vjv9-4000.app.github.dev/posts", {
            title,
        });

        setTitle("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;