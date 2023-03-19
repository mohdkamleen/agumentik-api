const express = require('express')
const router = express.Router()

router.use('/testemonial', require('./testemonial'));
router.use('/package', require('./package'));
router.use('/team', require('./team'));
module.exports = router