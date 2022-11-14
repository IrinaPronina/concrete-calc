import { useEffect, useState } from 'react';
import InputNumber from '../../InputNumber/InputNumber';
import './AreaBlock.scss';

const AreaBlock: React.FC = () => {

  const [inputValue, setInputValue] = useState("");

  
  return (
    <div className="calc__fieldset">
    <div className="calc__field">
      <div className="calc__block">
        <label className={"calc__label label-left ${isVisible ? ' disabled' : ''}"} htmlFor="calc-area">Площадь пола (в м<sup>2</sup>)</label>
        <InputNumber id={'calc_area'} placeholder={'от 100'} inputValue={inputValue} inputOnChange={handleInputValue}/>
        <div className="calc__error">
          {/* {errors?.area && <p>{errors?.area?.message}</p>} */}
          </div>
      </div>
    </div>
  </div>
  )

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement> ) {
    setInputValue(e.target.value);
    console.log(e.target.value);
    // setThicknessValue(!e.target.value)
  }
}

export default AreaBlock