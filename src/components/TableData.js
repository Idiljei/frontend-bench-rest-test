import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import moment from "moment";
import '../Styling/table.css';
import { toTitleCase, formatNumber } from "../helpers";

const TableData = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [transactionHistory, settransactionHistory] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  // const [amount, setAmount] =([])


  const getTransaction = async () => {
    try {
      const response = await fetch(`https://resttest.bench.co/transactions/${page}.json`);
      const jsonData = await response.json();
      setIsLoading(false);
      // setAmount(jsonData.transactions.Amount);

      if (response.status === 200) {
        settransactionHistory(jsonData.transactions);
      } else {
        error ? setError(true) : setError(false);
      }
    } catch (err) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, [page]);

  // Navigate between pages 
  const NextPage = () => {
    setPage(page + 1);
  };
  const PreviousPage = () => {
    setPage(page - 1);
  };


  return (
    <div>
      {isLoading && <p> Please wait.. Loading list of transactions</p>}
      {error && <p> Sorry, an error has occured on the website </p>}

      <ReactBootstrap.Table striped bordered hover size="small">
        <thead>
          <tr class="table-header">
            <th>Date</th>
            <th>Company</th>
            <th>Account</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactionHistory.map((data, i) => {
            return (
              <tr key={i} class="table-row">
                <td>{data.Date ? moment(data.Date).format("MMM Do, YYYY") : ""} </td>
                <td>{toTitleCase(data.Company)}</td>
                <td>{data.Ledger === '' ? 'Payment' : data.Ledger}</td>
                {/* {amount ? <td>"-${formatNumber(Math.abs(data.Amount).toFixed(2))}" </td> : */}
                  <td>${formatNumber(Math.abs(data.Amount).toFixed(2))}</td>
              </tr>
            );
          })}
        </tbody>

      </ReactBootstrap.Table >
      {transactionHistory.length !== 0 && (
        <button class="buttons" onClick={PreviousPage}>Previous</button>
      )}

      {transactionHistory.length !== 0 && (
        <button class="buttons" onClick={NextPage}>Next</button>

      )}
    </div>
  );
};

export default TableData;