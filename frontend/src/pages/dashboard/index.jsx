import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial.context";
import AddRecordForm from "./AddRecordForm";
import { FinancialRecordTable } from "./FinancialRecord.Table";

const Dashboard = () => {
    return (
        
    <div>
        <AddRecordForm/>
        <FinancialRecordTable/>
    </div>
   );
};

export default Dashboard;
