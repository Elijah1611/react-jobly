import React from 'react'
import Protected from '../routes/Protected'

function JobBoard() {
    return (
        <Protected>
            <div>
                JobBoard Page
            </div>
        </Protected>
    )
}

export default JobBoard
