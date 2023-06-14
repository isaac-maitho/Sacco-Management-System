import React, { useState, useMemo, useCallback } from 'react';
import './Form.css';
import Button from './Button';

export const FormContext = React.createContext({
  form: {}
});

function Form(props) {
  const { children, submit = () => {}, initialValues } = props;

  const [form, setForm] = useState(initialValues);



  const handleFormChange = useCallback(event => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    console.log(`----> val`, value)

    // Update state
    // Assign new value to the appropriate form field
    setForm({
      ...form,
      [name]: value
    });
  }, [form] )

  const providedValues = useMemo(() => ({
    form,
    handleFormChange
  }), 
  [form, handleFormChange])

  return (
    <form className="Form">
      <FormContext.Provider value={providedValues}>
        {children}
      </FormContext.Provider>

<Button type="submit" className="btn btn-primary"  text="Submit" onClick={() => submit(form)}/>
    </form>
  );
}

export default Form;