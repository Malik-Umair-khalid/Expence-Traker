import React from "react";
import "./css/style.css";
import BasicSelect from "../../components/select";
import BasicTextFields from "../../components/Input";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useState } from "react";
import BasicButtons from "../../components/Button";

function ExpenseTraker() {
  const [currency, setcurrency] = useState("Rs");
  const [price, setprice] = useState("");
  const [Item, setItem] = useState("");
  const [balance, setbalance] = useState("0000");
  const [income, setincome] = useState("0000");
  const [expence, setexpence] = useState("0000");
  const [asd, setasd] = useState([])
  console.log(asd)
  function allbalance(params) {
    let newPrice = +balance + +price;
    setbalance(newPrice);
    if (price > 0) {
      let newIncone = +income + +price - +expence;

      setincome(newIncone);
    } else if (price < 0) {
      let newExpence = +expence + +price

      setexpence(newExpence);
    }
  }
 
console.log(...obj, ...onj2)
  return (
    <>
      <div className="container-fluid mt-3 bg-primary main p-2 mt-0 shadow-lg">
        <h1>Expense Trakor</h1>
      </div>
      <div className="container">
        <div className="row border shadow p-3 mt-3">
          <div className="col-lg-6  hight">
            <div className="shadow border_bottom">
              <h3 className="mb-5 fw-light">Select Your currency</h3>
              <BasicSelect myCurrency={(currency) => setcurrency(currency)} />
            </div>
            <div className="border_bottom shadow">
              <h3 className="mb-5 fw-light">Add New Transition</h3>
              <div className="mt-3">
                <BasicTextFields
                  onChange={(e) => setprice(e.target.value)}
                  type="number"
                  label="Enter Item Price"
                />
              </div>
              <div className="mt-3 p-2">
                <p>(NEGATIVE - EXPENSE, POSITIVE - INCOME)</p>
              </div>
              <div className="mt-2">
                <BasicTextFields
                  onChange={(e) => setItem(e.target.value)}
                  type="text"
                  label="Enter Item Name"
                />
              </div>
              <div className="mt-2">
                <BasicButtons onClick={allbalance} title="Add Transition" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 my_border">
            <div className="shadow border_bottom">
              <h3 className="fw-light">Your Balance</h3>
              <h3 className="text-center mt-2 p-3 fw-light">
                <span>{currency}</span> {balance}
              </h3>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ">
                    <h3 className="fw-light">Income</h3>
                    <h4 className="fw-light text-center income">
                      <span>{currency}</span>
                      <span>{income}</span>
                    </h4>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-light">Expence</h3>
                    <h4 className="fw-light text-center expence">
                      <span>{currency}</span>
                      <span>{expence}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow border_bottom overflow-scroll history">
              <h3 className="fw-light">Transition History</h3>
              <ul className="list">
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>{" "}
                <li className="d-flex justify-content-between">
                  <button className="my_btn">
                    <DeleteSharpIcon />
                  </button>
                  <p>Item Name</p>
                  <p>Item Price</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExpenseTraker;
