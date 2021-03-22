import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from "react-bootstrap";


const TableData = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [transactionHistory, settransactionHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getTransaction = async () => {
    try {
      const response = await fetch(`https://resttest.bench.co/transactions/${page}.json`);
      const jsonData = await response.json();
      setIsLoading(false);
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
                <td>{data.Date}</td>
                <td>{data.Company}</td>
                <td>{data.Ledger}</td>
                <td>{data.Amount}</td>
              </tr>
            );
          })}

        </tbody>

      </ReactBootstrap.Table >

    </div>
  );
};

export default TableData;