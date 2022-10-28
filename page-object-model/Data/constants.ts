import "dotenv/config";

export const URL = {
    API: {
        "PROD": ""
    },
    E2E: {
        "PROD": "https://trello.com/es"
    }
};

export const CREDENTIALS = {
    REAL: {
        "USER": process.env.USER_EMAIL,
        "PASSWORD": process.env.USER_PASSWORD
    }
};