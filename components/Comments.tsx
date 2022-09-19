// Copyright (c) 2022 Evolving Software Corporation
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useState, useEffect } from 'react'

type Props = {
    postId: string
}

const Comments = ({ postId }: Props) => {
    const [comment, setComment] = useState([])
console.log(`postID: `, postId);
    const fetchData = async () => {
        const res = await fetch(`http://localhost:4001/posts/${postId}/comments`)
        const data = await res.json()
        console.log(`data: `, data)
        setComment(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(`Comments: for ${postId}`, comment)

    const renderComments = Object.values(comment).map((comment: any) => {
        return (
            <div className="comment">
                <li>{comment.content}</li>
            </div>
        )
    }
    )

    return <div>
        <h2>Comments</h2>
        {renderComments}
    </div>

}

export default Comments