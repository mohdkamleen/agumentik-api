const express = require('express'); 
const router = express.Router()  
const Package = require('../controllers/package')
  
router.route('/add').post(Package.add);  
router.route('/').get(Package.get); 
router.route('/:id').get(Package.getById); 
router.route('/:id').patch(Package.updateById); 
router.route('/:id').delete(Package.deleteById); 
 
module.exports = router;  
 