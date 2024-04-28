import { get } from "env-var";
import 'dotenv/config';

export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').required().asString(),
    POSTGRES_URL: get('POSTGRES_URL').required().asString(),
    POSTGRES_USER: get('POSTGRES_USER').required().asString(),
    POSTGRES_DB: get('POSTGRES_DB').required().asString(),
    POSTGRES_PORT: get('POSTGRES_PORT').required().asPortNumber(),
    POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
    WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(),

}