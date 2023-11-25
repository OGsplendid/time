import React from 'react'
import { TDate } from '../../module'

export const DateTime = ({ date }: TDate) => {
    return (
        <p className="date">{date}</p>
    )
}
