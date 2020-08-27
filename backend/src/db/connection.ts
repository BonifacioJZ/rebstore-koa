
import mongoose, {ConnectionOptions} from 'mongoose'
import config from '../config/config.env'

const dbOptions:ConnectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex:true
};

mongoose.connect(config.DB.URI,dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connect stablished')
})

connection.on('error', err => {
  console.error('error', err)
  process.exit(0);
})