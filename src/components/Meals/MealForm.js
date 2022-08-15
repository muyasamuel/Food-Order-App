import React, { useRef , useState} from 'react';
import Input from '../UI/Input';
import classes from './MealForm.module.css';



function MealForm() {
  const [amountValid , setAmountValid] = useState(true)


  const amountRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    

    const enteredAmount = amountRef.current.value;

    if( enteredAmount.trim() === '' || enteredAmount < 0 || enteredAmount > 5){
      setAmountValid(false);
      return;
    }

    console.log(enteredAmount)
  }
  return (
    <form className={classes.form} onSubmit={submit}>
      <Input ref={amountRef} label='amount' input={{
            type: 'number',
            id: 'amount',
            min: '1',
            max:'5',
            step: '1',
            defaultValue: '1',
        }}/>
        <button>Add</button>
        {!amountValid && <p>please put right figure </p>}

    </form>
    
  )
}

export default MealForm