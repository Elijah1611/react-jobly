import React from 'react'
import Protected from '../routes/Protected'

function Job() {
    return (
        <Protected>
            <div>
                Job Page
            </div>
        </Protected>
    )
}

export default Job
