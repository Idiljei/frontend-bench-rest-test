import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from "react-bootstrap";


const TableData = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const getTransaction = async () => {
    try {
      const response = await fetch(`https://resttest.bench.co/transactions/${page}.json`);
      const jsonData = await response.json();
    } catch (err) {
      error ? setError(true) : setError(false);
    }
  };

  useEffect(() => {
    getTransaction();

  }, [page]);

  return (
    <div>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>

      </ReactBootstrap.Table >

    </div>
  );
};

export default TableData;