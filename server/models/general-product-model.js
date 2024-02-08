const connection = require('./connection')
const uuid = require('uuid')

module.exports.createGeneralProduct = (request, response) => {
    const name = request.body.name
    const gameName = request.body.game_name
    const normalPrice = request.body.normal_price
    const specialPrice = request.body.special_price
    const information = request.body.information
    const description = request.body.description
    connection.query('INSERT INTO general_product (uuid, name , game_name , normal_price , special_price , information , description, create_at) VALUE(?,?,?,?,?,?,?,?)',
        [uuid.v4(), name, gameName, normalPrice, specialPrice, information, description,Date.now()], (error, result) => {
            if (error) {
                response.status(200).json({ status: false, payload: '' })
            } else {
                response.status(200).json({ status: true, payload: 'สร้างสำเร็จ' })
            }
        })
}

module.exports.readGeneralProduct = (request, response) => {
    connection.query('SELECT game_name , name , special_price , normal_price , special_price_status FROM general_product', [], (error, result) => {
        if (error) {
            response.status(200).json({ status: false, payload: [] })
        } else {
            response.status(200).json({ status: true, payload: result })
        }
    })
}

module.exports.updateGeneralProduct = (request, response) => {
    const uuid = request.body.uuid
    const name = request.body.name
    const gameName = request.body.game_name
    const normalPrice = request.body.normal_price
    const specialPrice = request.body.special_price
    const information = request.body.information
    const description = request.body.description
    connection.query('UPDATE general_product SET name = ? , game_name = ? , normal_price = ? , special_price = ? , information = ? , description = ? , update_at = ? WHERE uuid = ? LIMIT 1', [name, gameName, normalPrice, specialPrice, information, description, Date.now(), uuid], (error, result) => {
        if (error) {
            response.status(200).json({ status: false, payload: '' })
        } else {
            response.status(200).json({ status: true, payload: 'แก้ไขสำเร็จ' })
        }
    })
}

module.exports.deleteGeneralProduct = (request, response) => {
    const uuid = request.body.uuid
    connection.query('DELETE FROM general_product WHERE uuid = ?', [uuid], (error, result) => {
        if (error) {
            response.status(200).json({ status: false, payload: '' })
        } else {
            response.status(200).json({ status: true, payload: 'ลบสำเร็จ' })
        }
    })
}