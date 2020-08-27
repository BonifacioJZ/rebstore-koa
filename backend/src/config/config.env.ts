export default {
  JWT_SECRET: process.env.JWT_SECRET || 'secret_pass',
  DB: {
    URI: process.env.URI_MONGO || 'mongodb+srv://reb_jz:LSyKeIzMKijyyGAt@reb.iefiq.azure.mongodb.net/rebstore?retryWrites=true&w=majority'
  }
}
