const express = require('express'); 
const router = express.Router()  
const Team = require('../controllers/team')
  
router.route('/add').post(Team.add);  
router.route('/').get(Team.get); 
router.route('/:id').get(Team.getById); 
router.route('/:id').patch(Team.updateById); 
router.route('/:id').delete(Team.deleteById); 
 
module.exports = router;  
 