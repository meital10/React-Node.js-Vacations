
const VACATION_VALUES = ['description', 'destination', 'img_url', 'from_date', 'to_date', 'price']

const errorHandler = res => res.sendStatus(403);



module.exports = { VACATION_VALUES, errorHandler };