const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('mongo db connected...');
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb