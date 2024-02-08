const accountModel = require('../models/account-model')

exports.accountInsert = (request, response) => {
    accountModel.accountInsert(request, response)
}

exports.accountSelect = (request, response) => {
    accountModel.accountSelect(request, response)
}

exports.accountUpdate = (request, response) => {
    accountModel.accountUpdate(request, response)
}