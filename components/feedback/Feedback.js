import React, { useState } from 'react'

const Feedback = ({ feedback , i }) => {
    const [fetchedFeedback, setFetchedFeedback] = useState(null)
    const handleSingleFeedback = async (id) => {
        const response = await fetch('/api/' + id)
        const data = await response.json()
        setFetchedFeedback(data.feedback)
    }
    return (
        <tr key={feedback.id}>
            <th scope="row">{i + 1}   </th>
            <td>{feedback.email} {fetchedFeedback ? "feedback is fetcched" : null}</td>
            <td>{feedback.feedback}</td>
            <td>
                <button onClick={() => handleSingleFeedback(feedback.id)} className='btn btn-success'>Detail</button>
            </td>
        </tr>
    )
}

export default Feedback