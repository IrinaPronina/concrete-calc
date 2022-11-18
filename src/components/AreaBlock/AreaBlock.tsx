import InputNumber from '../../components/InputNumber/InputNumber';


interface IAreaBlockProps {
  id: string,
}

const AreaBlock: React.FC<IAreaBlockProps> = props => {
  return (
    <div className="calc__fieldset" id={props.id}>
      <div className="calc__field">
        <div className="calc__block">
          <label className={"calc__label label-left ${isVisible ? ' disabled' : ''}"} htmlFor="calc-area">Площадь пола (в м<sup>2</sup>)</label>
          <InputNumber id={'calc_area'} placeholder={'от 100'} inputValue={inputValue} inputOnChange={handleInputValue} />
        </div>
      </div>
    </div>
  )
}

// const AreaBlock: React.SFC = ({ areaBlock }) => {
//   const {
//     title,
//     value } = areaBlock;

//   return (
//     <div className="calc__fieldset">
//       <div className="calc__field">
//         <div className="calc__block">
//           <label className={"calc__label label-left ${isVisible ? ' disabled' : ''}"} htmlFor="calc-area">Площадь пола (в м<sup>2</sup>)</label>
//           <InputNumber id={'calc_area'} placeholder={'от 100'} inputValue={inputValue} inputOnChange={handleInputValue} />
//           <div className="calc__error">
//             {/* {errors?.area && <p>{errors?.area?.message}</p>} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default AreaBlock