import Form from '../Form/Form'
import './Calculator.scss';

const Calculator: React.FC = () => {
  return (
    <section className='calc'>
      <div className="calc__inner container">
        <h1 className="calc__title">
          Расчет стоимости бетонных полов
        </h1>
        <Form/>
      </div>
    </section>
  )
}

export default Calculator