const mongoose = require('mongoose')

const connectionDataBase = () => {
    mongoose.connect(process.env.MONGO_DB,).then((data) => { console.log(`mongodb connected with server : ${data.connection.host}`); });
}

module.exports = connectionDataBase