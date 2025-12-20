import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white border border-gray-300 p-3 rounded-lg text-sm flex gap-3 ${className}`}
    >
      {/* Amount */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="
            outline-none
            w-full
            bg-gray-50
            border border-gray-300
            rounded-md
            px-2
            py-1.5
            text-gray-900
          "
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency */}
      <div className="w-1/2 flex flex-col items-end text-right">
        <p className="text-gray-600 mb-2">Currency Type</p>

        <select
          className="
            rounded-md
            px-2 py-1.5
            bg-white
            border border-gray-300
            cursor-pointer
            outline-none
            text-gray-900
          "
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="bg-white text-gray-900"
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
