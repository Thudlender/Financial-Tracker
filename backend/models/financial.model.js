const {Datatypes} = require("sequilize")
const sequilize = require("./db");

const Financial = sequilize.define("financial",{
    id:{
        type: Datatypes.INTERGER,
        autoIncrement:true,
        primaryKey:true
    },
    userId:{
        type: Datatypes.STRING,
        allowNull: false
    },
    description:{ 
        type: Datatypes.STRING,
        allowNull: false
    },
    date:{
        type:Datatypes.DATE,
        allowNull: false,
    },
    amount:{
        type:Datatypes.DECIMAL,
        allowNull: false,
    },
    catagory:{
        type:Datatypes.STRING,
        allowNull: false,
    },
    paymentMethod:{
        type:Datatypes.STRING,
        allowNull: false,
    },
});

Financial.sync({force:true})
.then(() => {
    console.log("Table created or already exists");
})
.catch((error) => {
    console.log("Error creating Financial Table", error);
});

module.exports = Financial;
