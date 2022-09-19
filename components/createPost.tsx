// Copyright (c) 2022 Evolving Software Corporation
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useState } from 'react'

type Props = {}

function CreatePost({ }: Props) {
    const [title, setTitle] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
     
        fetch('http://localhost:4000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            })
        })
    }

    return (
        <div id="post">
            <h1>Create A Post</h1>
            <form id='createPost'
                onSubmit={onSubmit}
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        margin: 'auto'
                    }
                } >
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title'
                onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <input type='submit' value='Create Post' />
            </form>
        </div>
    )
}

export default CreatePost