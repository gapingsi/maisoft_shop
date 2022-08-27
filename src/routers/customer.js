const { Router } = require('express');
const {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
} = require('../controllers/customer');

const router = Router();

router.get('/', getAllCustomer);
router.get('/:id', getCustomerById);
router.post('/', postCustomer);
router.patch('/', patchCustomer);

module.exports = router;
