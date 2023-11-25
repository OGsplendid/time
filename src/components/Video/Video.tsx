import React from 'react'
import { IListItem } from '../../module'
import { DateTimePretty } from '../DateTimePretty/DateTimePretty'

export const Video = ({ url, date }: IListItem) => {
    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={date} />
        </div>
    )
}
