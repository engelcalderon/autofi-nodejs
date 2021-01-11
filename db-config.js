const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoServer = new MongoMemoryServer();

mongoose.Promise = Promise;

const connect = () => {
    return mongoServer
        .getUri()
        .then(mongoUri => {

            const connectionOpts = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            };

            mongoose.connect(mongoUri, connectionOpts);

            mongoose.connection.on('error', (e) => {
                if (e.message.code === 'ETIMEDOUT') {
                    console.log(e);
                    mongoose.connect(mongoUri, connectionOpts);
                }
            });

            mongoose.connection.once('open', () => {
                console.log(`MongoDB successfully connected to ${mongoUri}`);
            });
        })
        .catch(err => console.log(err));
}

const close = async () => {
    try {
        await mongoose.connection.close();
        await mongoServer.stop();
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    connect,
    close
}