
import { useState } from 'react';

function Calculator() {
    const [resultValue, setResultValue] = useState('0');

    const handleBtnClick = (buttonValue) => {
        if (resultValue === '0') {
            setResultValue(buttonValue);
        } else {
            setResultValue(resultValue + buttonValue);
        }
    };

    const handleCalculate = () => {
        try {
            setResultValue(eval(resultValue).toString());
        } catch (error) {
            setResultValue('Error');
        }
    };

    const handleClear = () => {
        setResultValue('0');
    };

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-sm-5'>
                    <div className="calculator">
                        <h2>React Simple Calculator</h2>
                        <input type="text" className="form-control mb-3" value={resultValue} readOnly />

                        <div className="input-group">
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('7')}>7</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('8')}>8</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('9')}>9</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('+')}>+</button>
                        </div>
                        <div className="input-group">
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('4')}>4</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('5')}>5</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('6')}>6</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('-')}>-</button>
                        </div>
                        <div className="input-group">
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('1')}>1</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('2')}>2</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('3')}>3</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('*')}>*</button>
                        </div>
                        <div className="input-group">
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('0')}>0</button>
                            <button className="btn btn-outline-primary" onClick={handleClear}>C</button>
                            <button className="btn btn-outline-primary" onClick={handleCalculate}>=</button>
                            <button className="btn btn-outline-primary" onClick={() => handleBtnClick('/')}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;