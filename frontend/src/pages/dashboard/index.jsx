import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial.context";
import AddRecordForm from "./AddRecordForm";
import { FinancialRecordTable } from "./FinancialRecord.Table";

const Dashboard = () => {
    return (
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="text-center text-4xl md:text-5xl md:leading-snug font-bold  my-2">
            Welcome {user?.firstName}! Here are your finance:    
        </div> 
        <AddRecordForm />
        <FinancialRecordTable />
      </div>
    );
};

export default Dashboard;
