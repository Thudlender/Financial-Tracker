const { Financial } = require("../models");
const financial = require("../models/financial.model");

//create a new  Financial record
exports.create = async (req, res) =>{
    const {userId, date, desscription, amount, category, paymentMethod} = req.body;
    const newRecord = {
      userId,
      date,
      desscription,
      amount,
      category,
      paymentMethod,
    };
    await Financial.create(newRecord).then((date)=>{
        res
            .status(500)
            .send({
                message: error.message ||
                "Some error occurd while saving the financial record",
            });
    });
};

//Retrieve all financial records
exports.findAll = async (req, res) => {
    await Financial.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occurd while retrieving the financial record",
        });
    })
};

//Retrieve all financial records by User Id
exports.findAllByUserId = async (req,res) => {
    const userId = req.params.userId;
    await Financial.findAll({ where: { userId:userId} })
    .then((data) =>{
        res.send(data);
    })
    .catch((error) => {
        res.status(500).send({
            message:
            error.message ||
            "Some error occurd while retrieving the financial record",
        });
    });
};
// [ยังต้องแก้] 
//     V
 //Get By id
    exports.getByid = async (req, res)=>{
        const id = req.params.id;
        await Financial.findByPk(id)
          .then((data) => {
            if (!data) {
              res
                .status(404)
                .send({ message: "No found Restaurant with id " + id });
            } else {
              res.send(data);
            }
          })
          .catch((error) => {
            res.status(500).send({
              message:
                error.message ||
                "Something error occured while creating the reataurant.",
            });
          });
    };

    //Update a restaurant
    exports.update = async (req, res) =>{
        const id = req.params.id;
        await Financial.update(req.body, {
          where: {
            id: id,
          },
        })
          .then((num) => {
            if (num === 1) {
              res.send({ message: "Restaurant was update successfully" });
            } else {
              res.send({
                message:
                  "Cannot update restaurant with id=" +
                  id +
                  ". Mayby restaurant was not found or req.body is empty!",
              });
            }
          })
          .catch((error) => {
            res.status(500).send({
              message:
                error.message ||
                "Something error occured while creating the reataurant. ",
            });
          });
    };

    //delete a restaurant
    exports.delete = async (req,res) =>{
        const id = req.params.id;
        await Financial.destroy({ where: { id: id } })
          .then((num) => {
            if (num == 1) {
              res.send({ message: "Restaurant eas deleted successfully" });
            } else {
              res.send({
                message: "Cannot delete restaurant with id=" + id + ".",
              });
            }
          })
          .catch((error) => {
            res.status(500).send({
              message:
                error.message ||
                "Something error occured while while registering a new user. ",
            });
          });
    };


