import useSWR from 'swr'
// import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {

    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR(`https://redesigned-space-eureka-gww46gjpwqv2vjv9-4001.app.github.dev/posts/${postId}/comments`, fetcher, { refreshInterval: 1000 });

    const renderedComments = data && data?.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;