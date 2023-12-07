import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const btnStyle={
    borderRadius:20.,
    fontWeight: 'bolder',
    fontSize:22,
    paddingTop:2,
    // padding:10,
    color:"white"

  }

  return (
    <tr>
      <td> {props.name} </td>{" "}
      <td>
        {" "}
        {currency} {props.cost}{" "}
      </td>{" "}
      <td>
        {" "}
        <button onClick={(event) => increaseAllocation(props.name)} className="btn btn-success circle" style={btnStyle}> + </button>
      </td>
      <td>
        {" "}
        <button onClick={(event) => decreaseAllocation(props.name)} className="btn btn-danger circle" style={btnStyle}> - </button>
      </td>
      <td>
        {" "}
        <TiDelete size="1.5em" onClick={handleDeleteExpense}>
          {" "}
        </TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
