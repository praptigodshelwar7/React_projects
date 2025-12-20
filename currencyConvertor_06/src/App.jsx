import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convert, setConvert] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvert(amount);
    setAmount(convert);
  };

  const convertCurrency = () => {
    if (!currencyInfo[to]) return;
    setConvert(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
          className="space-y-4"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(value) => setAmount(value)}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convert}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisabled
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
