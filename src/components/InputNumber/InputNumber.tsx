// import { useForm } from "react-hook-form";
import './InputNumber.scss';


interface InputNumberProps {
  id: string,
  placeholder: string,
  inputValue: string,
  inputOnChange: any,
  inputOnclick?: any
}

function InputNumber ({id, placeholder, inputValue, inputOnChange, inputOnclick}: InputNumberProps ) {

  // const { register,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm({
  //   mode: 'onBlur'
  // });

  return (
    <input
      placeholder={placeholder}
      className="calc__input"
      type="number"
      id={id}
      // Валидация React hook Form https://react-hook-form.com/get-started/#TypeScript
      // {...register("thickness",
      //   {
      //     min: {
      //       value: 70,
      //       message: 'Мин. значение:70'
      //     },
      //     max: {
      //       value: 250,
      //       message: 'Макс. значение:250'
      //     }
      //   }
      // )}
      value={inputValue}
      onChange={inputOnChange}
      onClick={inputOnclick} 
    />
  );
  

}

export default InputNumber