const { MOCK_TESTIMONIALS } = require("../utils/Mocks/MOCK_TESTIMONIALS");

const getTestimonials = (req, res) => {
    try {
        console.log("getTestimonials is getting executed")
        res.status(200).json({
            data: MOCK_TESTIMONIALS
        });
    } catch (error) {
        res.status(error.statusCode).json({
            err: error.explaination,
            message: error.message,
            data: {},
            success: false
        });
    }
}

module.exports = {
    getTestimonials
}