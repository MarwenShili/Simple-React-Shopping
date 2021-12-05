import classes from './InputItem.module.css'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal';

const InputItem = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredPrice, setEnteredPrice] = useState();
  const [error, setError] = useState();


  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPrice.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid values (non-empty values).',
      });
      return;
    }
    if (+enteredPrice < 1) {
      setError({
        title: 'Invalid Price',
        message: 'Please enter a valid Price (> 0).',
      });
      return;
    }
    props.addCard(enteredName, enteredDescription, enteredPrice);
    setEnteredName('');
    setEnteredDescription('');
    setEnteredPrice('')
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };


  const errorHandler = () => {
    setError(null);
  };



  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.form}>
      <div className="card col-12">
        <form onSubmit={submitHandler} className="col-12">
          <div className={classes.control}>
            <label htmlFor='Name'>Name</label>
            <input type='text' value={enteredName} onChange={nameHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='Description'>Description</label>
            <textarea rows='5' value={enteredDescription} onChange={descriptionHandler}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor='price'>Price</label>
            <input type="number" min="0" max="10000.00" step="1" value={enteredPrice} onChange={priceHandler} />
          </div>
          <button type="submit" className="btn btn-dark m-4">Add</button>
        </form>
      </div>
      </div>
    </>
  )
}
export default InputItem





// import React, { useState } from 'react';

// import Card from '../UI/Card';
// import Button from '../UI/Button';
// import ErrorModal from '../UI/ErrorModal';
// import classes from './AddUser.module.css';

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState('');
//   const [enteredAge, setEnteredAge] = useState('');
//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: 'Invalid input',
//         message: 'Please enter a valid name and age (non-empty values).',
//       });
//       return;
//     }
//     if (+enteredAge < 1) {
//       setError({
//         title: 'Invalid age',
//         message: 'Please enter a valid age (> 0).',
//       });
//       return;
//     }
//     props.onAddUser(enteredUsername, enteredAge);
//     setEnteredUsername('');
//     setEnteredAge('');
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <div>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredAge}
//             onChange={ageChangeHandler}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AddUser;
