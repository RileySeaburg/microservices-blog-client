// Copyright (c) 2022 Evolving Software Corporation
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useState } from 'react'

type Props = {
    postId: string
}

export default function CreateComment({ postId }: Props) {
    const [comment, setComment] = useState('')
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:4001/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                comment
            }),
            headers: {
                'Content-Type': 'application/json'

            }
        })
       const data = await res.json();
        console.log(data);
        setComment('')
    }
    console.log(`id: `, postId);
    return (
        <form id='createComment'
            onSubmit={onSubmit}
            className='form-group'
            style={

                {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    margin: 'auto'

                }
            } >
            <label
                className='form-label'
                htmlFor='comment'>Comment</label>
            <input
                className='form-control'
                placeholder='Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type='text' id='comment' name='comment' />
            <input
                className='btn btn-primary '
                type='submit' value='Create Comment' />
        </form>
    )
}