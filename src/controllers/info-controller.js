const { StatusCodes } = require('http-status-code');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: `API is live`,
        error: {},
        data: {}
    })
}

module.exports = {
    info
}
