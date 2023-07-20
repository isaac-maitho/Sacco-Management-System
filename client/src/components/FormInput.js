import { useContext } from 'react';
import { FormContext } from './form/Form';

function FormInput(props) {
  const {
    label, 
    type = 'text', 
    name, 
    className,
    id,
    placeholder
  } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="form-group">
    <label htmlFor="formGroupExampleInput">{label}</label>
    <input type={type} className={className} id={id}  placeholder={placeholder} name={name}
        value={form[name]}
        onChange={handleFormChange}/>
  </div>
  )
}

export default FormInput