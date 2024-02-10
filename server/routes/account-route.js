const express = require('express')
const router = express.Router()
const { accountInsert, accountSelect, accountUpdate } = require('../controllers/account-controller')
const multer = require('multer')
const uuid = require('uuid')
const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './images/account-image')
    },
    filename: (request, file, callback) => {
        const fileExtension = file.originalname.split('.')[1]
        callback(null, `${uuid.v4()}.${fileExtension}`)
    }
})
const upload = multer({ storage: storage })

router.post('/account-insert', upload.single('file'), accountInsert)
router.get('/account-select', accountSelect)
router.patch('/account-update', upload.single('file'), accountUpdate)

module.exports = router