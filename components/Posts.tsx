// Copyright (c) 2022 Evolving Software Corporation
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useState, useEffect } from 'react'
import Comments from './Comments';
import CreateComment from './createComment';

type Props = {}

const Posts: React.FC<Props> = () => {
    const [posts, setPosts] = useState<{}>({});


    const fetchPosts = async () => {
        const res = await fetch('http://localhost:4000/posts/');
        const posts = await res.json();
        setPosts(posts);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    console.log(`Posts: `, posts);

    const renderPosts = Object.values(posts).map((post: any) => {
        return (
            <div className="post card p-4">
                <h2>{post.title}</h2>
                {/* delete button */}
                <Comments postId={post.id} />
                <CreateComment postId={post.id} />
                <button
                    id='deletePost'
                    onClick={(e) => {
                        e.preventDefault()
                        fetch(`http://localhost:4000/posts/${post.id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        })
                    }
                    }
                >Delete</button>
            </div>
        )
    })

    return <div>
        <h2>Posts</h2>
        <div
            style={
                {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: '1rem',
                    margin: 'auto',
                    width: '50%'
                }
            }
        >  {renderPosts || <h1>No Posts</h1>}

        </div>

    </div>

}

export default Posts