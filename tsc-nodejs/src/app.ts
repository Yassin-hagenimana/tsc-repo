import express from 'express'
import {config} from '../config/defaults'
import log from "./logger"
import connect from "./db/connect"

import routes from "./services/routes"

const port = config.port;
const host = config.host;

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.listen(port,host,()=>{
log.info(`Server listening at http://${host}:${port}`);

connect()

routes(app)
});