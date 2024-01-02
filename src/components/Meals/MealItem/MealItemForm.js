import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      setMessage(''); // Clear the message if validation fails
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    setMessage('Item added to cart');

    // Set a timeout to clear the message after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
            {message && <p>{message}</p>}
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      
    </form>
  );
};

export default MealItemForm;
