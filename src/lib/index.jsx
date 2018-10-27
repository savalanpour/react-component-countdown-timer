import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CountdownTimer extends Component {
    static propTypes = {
        className: PropTypes.string,
        count: PropTypes.number,
        border: PropTypes.bool,
        showTitle: PropTypes.bool,
        direction: PropTypes.oneOf(['right', 'left']),
        noPoints: PropTypes.bool,
        responsive: PropTypes.bool,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        size: PropTypes.number,
        labelSize: PropTypes.number,
        hideDay: PropTypes.bool,
        hideHours: PropTypes.bool,
        dayTitle: PropTypes.string,
        hourTitle: PropTypes.string,
        minuteTitle: PropTypes.string,
        secondTitle: PropTypes.string,
        onEnd: PropTypes.func,
    };

    static defaultProps = {
        count: 0,
        border: false,
        showTitle: false,
        direction: 'left',
        noPoints: false,
        color: '#000',
        backgroundColor: '#fff',
        responsive: false,
        size: 18,
        labelSize: 12,
        hideDay: false,
        hideHours: false,
        dayTitle: 'Day',
        hourTitle: 'Hour',
        minuteTitle: 'Min',
        secondTitle: 'Sec',
        className: '',
        onEnd: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
        };
    }

    componentDidMount() {
        this.handleStart();
    }

    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount === 0) {
                this.props.onEnd();
            }
            this.setState({ count: newCount >= 0 ? newCount : 0 });
        }, 1000);
    }

    handleCountdown = seconds => {
        this.setState({
            count: seconds,
        });
    };

    format = time => {
        const {
            border,
            showTitle,
            direction,
            noPoints,
            color,
            backgroundColor,
            responsive,
            size,
            hideDay,
            hideHours,
            dayTitle,
            hourTitle,
            minuteTitle,
            secondTitle,
            labelSize,
        } = this.props;
        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600) % 24;
        let day = Math.floor(time / 86400);
        day = day.toString().length === 1 ? `0${day}` : day;
        minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
        seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
        hours = hours.toString().length === 1 ? `0${hours}` : hours;
        if (showTitle) {
            const borderClass = border ? 'border' : '';
            const responsiveClass = responsive ? 'responsive' : '';
            const classBox = `countBox ${direction}`;
            return (
                <div style={{fontSize: `${size}px`}} className={`${classBox} ${borderClass} ${responsiveClass}`}>
                    <div className="countBoxItem">
                        <div style={{fontSize: `${labelSize}px`}} className={"label"}>{secondTitle}</div>
                        <div className={"count"} style={{color, backgroundColor}}>
                            {seconds}
                        </div>
                    </div>
                    {!noPoints && <span className={"split"}>:</span>}
                    <div className={"countBoxItem"}>
                        <div style={{fontSize: `${labelSize}px`}} className={"label"}>{minuteTitle}</div>
                        <div className={"count"} style={{color, backgroundColor}}>
                            {minutes}
                        </div>
                    </div>
                    {!hideHours && !noPoints && <span className={"split"}>:</span>}
                    {!hideHours && (
                        <div className={"countBoxItem"}>
                            <div style={{fontSize: `${labelSize}px`}} className={"label"}>{hourTitle}</div>
                            <div className={"count"} style={{color, backgroundColor}}>
                                {hours}
                            </div>
                        </div>
                    )}
                    {!hideDay && !noPoints && <span className={"split"}>:</span>}

                    {!hideDay && (
                        <div className={"countBoxItem"}>
                            <div style={{fontSize: `${labelSize}px`}} className={"label"}>{dayTitle}</div>
                            <div className={"count"} style={{color, backgroundColor}}>
                                {day}
                            </div>
                        </div>
                    )}
                </div>
            )
        }
        const borderClass = border ? 'border' : '';
        const responsiveClass = responsive ? 'responsive' : '';
        const classBox = `inline ${direction}`;
        return (
            <div style={{fontSize: `${size}px`}} className={`${classBox} ${borderClass} ${responsiveClass}`}>
                {!hideDay && (
                    <span className={"count"} style={{ color, backgroundColor }}>
                    {day}
                  </span>
                        )}
                        {!hideDay && !noPoints && <span className={"split"}>:</span>}
                        {!hideHours && (
                            <span className={"count"} style={{ color, backgroundColor }}>
                    {hours}
                  </span>
                        )}
                        {!hideHours && !noPoints && <span className={"split"}>:</span>}
                        <span className={"count"} style={{ color, backgroundColor }}>
                  {minutes}
                </span>
                        {!noPoints && <span className={"split"}>:</span>}
                        <span className={"count"} style={{ color, backgroundColor }}>
                  {seconds}
                </span>
            </div>
        );
    };

    render() {
        const { count } = this.state;
        const { className } = this.props;
        return (
            <div className={`root-react-component-countdown-timer ${className}`}>
                <div className="displayedTime">{this.format(count)}</div>
            </div>
        );
    }
}
