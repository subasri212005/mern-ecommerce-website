const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB connected to host: '+con.connection.host)
    })
};

module.exports = connectDatabase;
//DB_URL=mongodb+srv://Subasri:WQRvuG32OlbJF1fw@mern.4r8wq0n.mongodb.net/?appName=MERN//
//DB_URL=mongodb+srv://Subasri:WQRvuG32OlbJF1fw@mern.4r8wq0n.mongodb.net/?appName=MERN
