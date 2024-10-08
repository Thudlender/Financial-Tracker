const Financial = require("../models/financial.model");

//create a new  Financial record
exports.create = async (req, res) =>{
  console.log("hello world")
    const {userId, date, description, amount, category, paymentMethod} = req.body;
    console.log(userId,
      date,
      description,
      amount,
      category,
      paymentMethod)
    const newRecord = {
      userId,
      date,
      description,
      amount,
      category,
      paymentMethod,
    };
    
    Financial.create(newRecord).then((data)=>{
      res.send(data);
  }).catch((error)=>{
      res.status(500).send({message: error.message || 
          "Some error occured while saving the financial "})
  })
}

//Retreive all financial records
exports.findAll = async (req, res)=>{
  await Financial.findAll()
      .then((data)=>{
          res.send(data);
      })
      .catch((error)=>{
          res.status(500).send({
              message: error.message || 
              "Some error occuser while retrieving the financial reccord",
          });
});
};

//Retreive all financial records by User Id
exports.findAllByUserId = async (req, res) => {
    const userId = req.params.userId;
    await Financial.findAll({where:{userId:userId}})
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "No fond Finacial with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Something error occured while creating the record.",
        });
      });
  };

//Retreive all financial records  findOne
exports.findOne = async (req, res)=>{
  const userId = req.params.userId;

  await Financial.findAll({ where:{ userId:userId} })
  .then((data)=>{
      res.send(data);
  })
  .catch((error)=>{
      res.status(500).send({
          message: 
          error.message ||
          "Some error occuser while retrieving the financial reccord",
      });
  });
};

//Retreive all financial records  update
exports.update = async (req, res) => {
const userId = req.params.userId;
await Financial.update(req.body, {
  where: { userId: userId },
})
  .then((num) => {
    if (num == 1) {
      res.send({
        message: "Restaurant was updated successfully.",
      });
    } else {
      res.send({
        message:
          "Cannot update Restaurant with id=" +
          id +
          "Maybe Restaurant was not found or req.body is empty!",
      });
    }
  })
  .catch((error) => {
    res.status(500).send({
      message:
        error.message || "Something error occurred creating the financial.",
    });
  });
};

//Retreive all financial records  delete
exports.delete = async (req, res) => {
const userId = req.params.userId;
await Financial.destroy({ where: { userId: userId } })
  .then((num) => {
    if (num == 1) {
      res.send({
        message: "Financial was deleted successfully.",
      });
    } else {
      res.send({
        message: "Cannot delete Financial with id=" + id + ".",
      });
    }
  })
  .catch((error) => {
    res.status(500).send({
      message:
        error.message || "Something error occurred creating the restaurant.",
    });
  });
};