import React from "react";
import { useId } from "react";

function InputBox({
    label,//CHECK FROM/TO
    amount,//how much amoutn to convert
    onAmountChange,//useState
    onCurrenchChange,//useState
    currencyOptions = [],//all available list as aray
    selectCurrency = 'usd',//set as default
    amountDisable = false,
    currencyDisable = false,
    placeholder,
    className = "",
}) {
   const amountInputId = useId()//to get UNIQUE VALUe

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}//event fire kar ke method call to know all other components
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrenchChange && onCurrenchChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {currencyOptions.map((curr) => (

                        // NOTE use key while looping in react 
                        <option key={curr} value={curr}>
                            {curr}
                        </option>

                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
