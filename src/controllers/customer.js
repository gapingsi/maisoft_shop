const {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customers: result });
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  console.log(data);
  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customers: result });
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  console.log(data);
  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customers: result });
  });
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
};
