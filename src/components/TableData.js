import React, { useEffect, useState } from 'react';

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
      "test"
    </div>
  );
};

export default TableData;