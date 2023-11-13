import useSWR from 'swr'
// import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR("https://redesigned-space-eureka-gww46gjpwqv2vjv9-4000.app.github.dev/posts", fetcher, { refreshInterval: 500 });
    const renderedPosts = data && Object?.values(data)?.map((post) => {
        return (
            <div
                className="card"
                style={{ width: "30%", marginBottom: "20px" }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
};

export default PostList;