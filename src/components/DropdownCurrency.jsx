import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const DropDownCurrency = (props) => {
  const values = {
    dollar: ["$Dollar", "$"],
    pound: ["E:Pound", "E"],
    euro: ["€:Euro", "€"],
    ruppee: ["₹:Ruppee", "₹"],
  };
  const {currency, dispatch} = useContext(AppContext);
  const [currentCurrency, setCurrency] = useState(values.euro[0]);

  const updateCurrency = (newCurrency) => {
    setCurrency(values[newCurrency][0]);
    dispatch({
      type: "CHG_CURRENCY",
      payload: values[newCurrency][1],
    });
  };

  return (
    <div className="dropdown" style={{ marginLeft: "2rem" }}>
      <button
        className="btn border-5 dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "#5DD070", color: "white" }}
      >
        Currency: {currentCurrency}
      </button>
      <ul className="dropdown-menu">
        {Object.keys(values).map((key, idx) => {
          console.log(values[key])
          return (
            <li
              className="dropdown-item"
              style={{ backgroundColor: "#5DD070", color: "black" }}
              onClick={() => updateCurrency(key)}
            >
              <span>{values[key][0]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownCurrency;
