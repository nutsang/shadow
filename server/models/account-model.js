const connection = require('./connection')

module.exports.accountInsert = (request, response) => {
    const requestEmail = request.body.email
    const requestUsername = request.body.username
    const requestAvatar = `${request.file.destination}/${request.file.filename}`
    connection.query('INSERT INTO account (email, username, avatar) VALUES (?, ?, ?)', [requestEmail, requestUsername, requestAvatar], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            connection.query('INSERT INTO finance (email) VALUES (?)', [requestEmail], (error, result) => {
                if(error){
                    response.status(200).json({status: false, payload: error})
                }else{
                    response.status(200).json({status: true, payload: result})
                }
            })
        }
    })
}

module.exports.accountSelect = (request, response) => {
    connection.query('SELECT email, username, avatar, role, gacha_count, create_at, update_at from account', [], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}

module.exports.accountUpdate = (request, response) => {
    const requestEmail = request.body.email
    const requestUsername = request.body.username
    const requestAvatar = `${request.file.destination}/${request.file.filename}`
    const requestGachaCount = request.body.gacha_count
    connection.query('UPDATE account SET username = ?, avatar = ?, gacha_count = ?, update_at = ? WHERE email = ?', [requestUsername, requestAvatar, requestGachaCount, Date.now(), requestEmail], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}