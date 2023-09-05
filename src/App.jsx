import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';

function App() {

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  };

  const BackgroundImage='data:image/jpeg;base64,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'

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('${BackgroundImage}')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-6">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              onAmountChange={(amount)=>setAmount(amount)}
                              selectCurrency={from}
                              inputClassName='outline outline-1 rounded'
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-6 mb-4 ">
                          <InputBox
                              label="to"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                              inputClassName='outline outline-1 rounded'
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
