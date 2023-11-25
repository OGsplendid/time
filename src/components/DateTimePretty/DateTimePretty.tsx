import React from "react";
import { DateTime } from "../DateTime/DateTime";
import { fromUnixTime, differenceInMinutes } from 'date-fns'

interface IRelativeDateTimeProps {
    date: string,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withRelativeDateTime(Component: any) {

    return class extends React.Component<IRelativeDateTimeProps, IRelativeDateTimeProps> {
        state = {
            date: '',
        };

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
            return <Component {...this.state} />
        }
    }
}

// function withRelativeDateTime<P>(Component: React.ComponentType<P & TDate>) {

//     const ResultComponent = (props: P) => {
//         return <Component {...props} />
//     }

//     // return class extends React.Component {
//     //     render() {
//     //         return <Component {...this.props} />
//     //     }
//     // }
//     return ResultComponent;
// }

export const DateTimePretty = withRelativeDateTime(DateTime);
