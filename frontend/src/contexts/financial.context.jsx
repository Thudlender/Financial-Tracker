import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/financial.service";
import { useUser } from "@clerk/clerk-react";

export const useFinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
    const [records, setRecord] = useState([]);
    const { user } = useUser();
    const fetchRecords = async () => {
        if (!user) return;
        try {
          const response = await FinancialService.getAllFinancialRecordsByUserId(
            user.id
          );
          if //!!! /*  NOT DONE  */ !!!//
        }
    }
}