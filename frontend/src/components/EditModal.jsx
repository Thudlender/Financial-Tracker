/*eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../contexts/financial.context";

const EdiModal = ({ id, title }) => {
    const [record, setRecord] = useState({
        description:"",
        amount: 0,
        type: "expense",
        date: new Date().toISOString().split("T")[0],
        category: "",
    });

    const { updateRecord, getFinancialRecordById } = useFinancialRecords();
    const { user } = useUser();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecord({ ...record, [name]: value });
    };
    const categories = {
        income: ["Salary", "Bonus", "Investment", "Other"],
        expense: ["Food", "Rent", "Utilities", "Entertainment", "Other"],
    };

    const paymentMethods = ["Cash", "Credit Card", "Bank Transfer"];
    useEffect(() =>{
        const fetchRecords = async () => {
            try {
                const response = await getFinancialRecordById(id);
                if (response.status === 200) {
                    setRecord({
                        ...response.data,
                        date: response.data.date.split("T")[0],
                    });
                  }
                } catch (error) {
                    console.log(error);
                }
            };
            const data = fetchRecord();
            setRecord(data);
        }, [getFinancialRecordById, id]);
        const handleSubmit = (e) => {
            e.preventDefault();
            updateRecord(id, { ...record, userId: user.Id });
            document.getElementById("updateRecord").close();
        };
        // return() still need to add
    };

