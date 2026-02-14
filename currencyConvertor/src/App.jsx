  import { useState } from 'react'
  
  import { InputBox } from '../Components'
  import useCurrencyHook from '../hooks/useCurrencyHook'

  function App() {
    const [amount, setAmount] = useState()//hook
    const [from , setFrom] = useState("usd")//hook
    const [to , setTo] = useState("inr")//hook
    const [convertedAmount , setConvertedAmount] = useState() // final value after conversion

    //Accept -> CurrencyType 
    const currencyInfo = useCurrencyHook(from)//CUSTOME HOOK
    //Return -> map {K -> V} (K : list of currencies & V : 1 CurrencyType cursponds to how much interms of that K)

    const options = Object.keys(currencyInfo)//get all keys from currencyInfo(Object)
    //Option = list of all currencies

    const swap = () => {//Swap function
      //SWAP (currency types)
      setFrom(to)
      setTo(from)
      //SWAP (amounts)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }

    //SIMPLE Mathematics
    const convert= () => {
      setConvertedAmount(amount * currencyInfo[to])
    }

    //HTML
    return (
          <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                  backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/New_York_Stock_Exchange_-_panoramio_%282%29.jpg/500px-New_York_Stock_Exchange_-_panoramio_%282%29.jpg')`,
              }}
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();//form redirect to some resource that we dont want
                              convert();//call convert meth
                            
                          }}
                      >
                          <div className="w-full mb-1">
                              <InputBox
                                  label="FROM"
                                  amount={amount}//set ammount
                                  currencyOptions={options}//list of options
                                  onCurrenchChange={(currency) => setFrom(currency)}//set from = that selected value
                                  selectCurrency={from}//fill that selected value in <Select value = ?
                                  onAmountChange={(amount) => setAmount(amount)}// set amount = that amount
                                  placeholder={"Enter Amount"}
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
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="TO"
                                  amount={convertedAmount}//int
                                  currencyOptions={options}//list of currenncies
                                  onCurrenchChange={(currency) => setTo(currency)}//set to = selected currency
                                  selectCurrency={to}//set <Select value = to
                                  amountDisable // editing disabled
                                  placeholder={"Converter Amount"}
                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      )
    }

  export default App
