import React from "react";
import { DateTime } from "../DateTime/DateTime";
import { fromUnixTime, differenceInMinutes } from 'date-fns'

interface IRelativeDateTimeProps {
    date: string,
}

function withRelativeDateTime<
    T extends IRelativeDateTimeProps = IRelativeDateTimeProps
>(WrappedComponent: React.ComponentType<T>) {
    class WithRelativeDateTime extends React.Component<T> {
        state = {
            date: '',
        } as T;

        componentDidMount(): void {
            const inTime = Date.parse(this.props.date);
            const formattedDate = fromUnixTime(inTime);
            const diff = differenceInMinutes(formattedDate, new Date());
            diff < 60 ? this.setState({date: `${diff} минут назад`})
                : diff < 24 * 60 ? this.setState({date: `${(diff / 60).toFixed(0)} часов назад`})
                    : this.setState({date: `${(diff / 60 / 24).toFixed(0)} дней назад`});
        }

        render() {
            console.log(this.props)
            return <WrappedComponent {...this.state} />
        }
    }

    return WithRelativeDateTime;
}

export const DateTimePretty = withRelativeDateTime(DateTime);
