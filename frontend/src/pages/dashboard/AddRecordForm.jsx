import { useState } from "react";
// import { useUser } from "@clerk/clerk-react";
import { useFinancialRecord } from "../../contexts/financial.context";

const AddRecordForm = () => {
    const [record, setRecord] = useState({
        description:"",
        amount:0,
        date:"",
        category:"",
        PaymentMethod:""
    })
    const {addRecord} = useFinancialRecord();
    const {user} = useUser();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRecord({ ...record, [name]: value });
    };
  return (
    <div>
      <form className="space-y-2">
        <label className="form-control w-full max-w-ws">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            name="description"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            name="amount"
            className="input input-bordered w-full nax-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            name="date"
            className="input input-bordered w-full nax-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select className="select select-bordered">
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Payment Method</span>
          </div>
          <select className="select select-bordered">
            <option value="">Select a Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default AddRecordForm;
