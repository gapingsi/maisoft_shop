const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(res);
      callback(null, res[0]);
    }
  });
};

const createCustomer = (data, callback) => {
  db.query(
    `INSERT INTO customer(id, firstName, 
      lastName, email, hash, phone, image, status,
       createdAt, updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?)`,

    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.hash,
      data.phone,
      data.image,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res[0]);
      }
    }
  );
};

const updateCustomer = (update, callback) => {
  db.query(
    'UPDATE customer SET firstName=?, lastName=?,hash=?, image=? WHERE id = ?',
    [
      update.firstName,
      update.lastName,
      update.hash,
      update.image,
      update.id
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(res);
        callback(null, res[0]);
      }
    }
  );
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
};
