const connection = require('./connection')

module.exports.bannerInsert = (request, response) => {
    const requestUUID = request.file.filename.split('.')[0]
    const requestInformation = `${request.file.destination}/${request.file.filename}`
    connection.query('INSERT INTO banner (uuid, information) VALUES (?, ?)', [requestUUID, requestInformation], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}

module.exports.bannerSelect = (request, response) => {
    connection.query('SELECT uuid, information, create_at, update_at from banner', [], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}

module.exports.bannerUpdate = (request, response) => {
    const { uuid } = request.body
    const requestInformation = `${request.file.destination}/${request.file.filename}`
    connection.query('UPDATE banner SET information = ?, update_at = ? WHERE uuid = ?', [requestInformation, Date.now(), uuid], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}

module.exports.bannerDelete = (request, response) => {
    const { uuid } = request.body
    connection.query('DELETE FROM banner WHERE uuid = ?', [uuid], (error, result) => {
        if(error){
            response.status(200).json({status: false, payload: error})
        }else{
            response.status(200).json({status: true, payload: result})
        }
    })
}