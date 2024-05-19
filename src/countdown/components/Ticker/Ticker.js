import { TickerCell } from '../TickerCell';
import { useTicker } from '../../hooks';

import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    console.log("SLEEP",futureDate)
    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Happening Now!!!</div>
    ) : (
        <>
            {/*<TickerCell value={months} label="Months" />*/}
            <TickerCell value={days} label="DAYS" />
            {/*<TickerSeparator />*/}
            <TickerCell value={hours} label="HOURS" />
            {/*<TickerSeparator />*/}
            <TickerCell value={minutes} label="MINUTES" />
            {/*<TickerSeparator />*/}
            <TickerCell value={seconds} label="SECONDS" />
        </>
    );

    return (
        <div className={ style.tickerShell }>
            { tickerContents }           
        </div>              
    );
}