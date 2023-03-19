const express = require('express'); 
const router = express.Router()  
const Testemonial = require('../controllers/testemonial')
  
router.route('/add').post(Testemonial.add);  
router.route('/').get(Testemonial.get); 
router.route('/:id').get(Testemonial.getById); 
router.route('/:id').patch(Testemonial.updateById); 
router.route('/:id').delete(Testemonial.deleteById); 
 
module.exports = router;  
 