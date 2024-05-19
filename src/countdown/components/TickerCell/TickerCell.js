import style from './TickerCell.module.scss';

export const TickerCell = ({ label, value }) => {
    console.log("Value", value);
    const numericValue = value != null ? value : 0; // Default to 0 if value is null or undefined
    const formattedValue = numericValue < 10 ? `0${numericValue}` : numericValue.toString();

    return (
        <div className={style.tickerCell}>
            <span className={style.tickerCellValue}>{formattedValue}</span>
            <span className={style.tickerCellLabel}>{label}</span>
        </div>
    );
}