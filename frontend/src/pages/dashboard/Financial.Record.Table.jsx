import React from 'react'
import { useFinancialRecords } from "../../contexts/financial.context";

const FinancialRecordTable = () => {
    const { record } = useFinancialRecords();
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* haed */}
            <thead>
              <tr>
                <th></th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {record.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.description}</td>
                  <td>{record.amount}</td>
                  <td>{record.date}</td>
                  <td>{record.category}</td>
                  <td>{record.paymentMethod}</td>
                </tr>
              ))}

            {/* row 2 /*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialRecordTable;