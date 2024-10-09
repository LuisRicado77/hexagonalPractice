import {config} from "dotenv"

config();

//enfoque variable por variable
//enfoque objeto json
//usar clases

class Parameter{
    
    static readonly DATABASE_HOST = process.env.DATABASE_HOST || "test";
    static readonly DATABASE_PORT = process.env.DATABASE_PORT || "test";
    static readonly DATABASE_NAME = process.env.DATABASE_NAME || "test";
}


export {Parameter}