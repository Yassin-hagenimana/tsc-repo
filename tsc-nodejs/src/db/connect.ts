import mongoose, { ConnectOptions } from 'mongoose'
import { config } from '../../config/defaults'
import log from '../logger'

function connect(){
    const dbUrl=config.dbUri

    return mongoose
    .connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } as ConnectOptions)
   .then(()=>{
    log.info("Database connected")
   })
   .catch((error)=>{
         log.error("error",error)
         //process.exit(1)
   })

}

export default connect;