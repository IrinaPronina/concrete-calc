import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import InputNumber from '../InputNumber/InputNumber';
import AreaBlock from './AreaBlock/AreaBlock';
import './Form.scss';

const Form: React.FC = () => {

  const { register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: 'onBlur'
  });

  const onSubmit = handleSubmit(data => console.log(data));

  const [inputValue, setInputValue] = useState("");
  const [outputArea, setOutputArea] = useState();

  return (
    <form 
    onSubmit={onSubmit} 
    id="com_calc" encType="application/x-www-form-urlencoded" className="calc__form">
    <div className='calc__first'>
      <div className="calc__header">
        <h2 className="calc__h2">Получите подробный расчет стоимости бетонного пола</h2>
        <div className="calc__descr">
          <p className="text">* Заполнив параметры и данные, вы получите предварительный расчет бетонного пола с обработанной поверхностью. Все дополнительные работы и не учтенные параметры мы согласуем и включим в стоимость, после выезда на Ваш объект нашего специалиста.</p>
        </div>
      </div>
      <h3 className="calc__subtitle">Введите Ваши данные:</h3>
      <AreaBlock/>
      <div className="calc__fieldset">
        <div className="calc__legend">Ваше основание</div>
        <div className="calc__field">
          <div className="calc__block">
            <input className="calc__input" type="radio" name="base" value="Существующее бетонное" id="base_concrete"
              // onChange={showInputBase} 
              />
            <label htmlFor="base_concrete" className="calc__label">Существующее бетонное</label>
          </div>
          <div className="calc__block">
            <input className="calc__input" type="radio" name="base" value="Уплотненный песок" id="base_sand"
              // onChange={showInputBase} 
              />
            <label htmlFor="base_sand" className="calc__label">Уплотненный песок</label>
          </div>
          <div className="calc__block">
            <input className="calc__input" type="radio" name="base" value="Уплотненный щебень" id="base_rubble"
              // onChange={showInputBase} 
              />
            <label htmlFor="base_rubble" className="calc__label">Уплотненный щебень</label>
          </div>
        </div>
      </div>
      <div className="calc__fieldset">
        <div className="calc__legend">Толщина бетона</div>
        <div className="calc__field switcher">
          <div className="calc__block calc-mr">
            <InputNumber id={'calc_area'} placeholder={'от 70 до 250'} inputValue={inputValue} inputOnChange={handleInputValue}/>
            <label className='calc__label label-right' htmlFor="thickness-custom">*от 70 до 250 мм
            </label>
            <div
              className="calc__error">
              {/* {errors?.thickness && <p>{errors?.thickness?.message}</p>} */}
            </div>
          </div>
          <div className="calc__block">
            <input
              className="calc__input"
              type="radio"
              name="thickness"
              id="thickness_auto"
            />
            <label htmlFor="thickness_auto" className="calc__label">Не знаю</label>
          </div>
        </div>
      </div>
    </div>
  </form>
  );


  function handleInputValue(e: React.ChangeEvent<HTMLInputElement> ) {
    setInputValue(e.target.value);
    console.log(e.target.value);
    // setThicknessValue(!e.target.value)
  }


  function showInputArea (e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    // setInputValue(e.target.value + ' м²');
  }
}

export default Form