import React from 'react'

export const EventBox = ({event}) => {
    const {title, user} = event;

    return (
        <div>
            <strong> {title} </strong>
            <span> - {user.name} </span> 
        </div>
    )
}
