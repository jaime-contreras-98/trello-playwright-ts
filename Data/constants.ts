import "dotenv/config";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

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

export const WORKSPACES = {
    "NEW_NAME": "Workspace: " + uuidv4(),
    "DESCRIPTION": "Description: " + faker.datatype.uuid()
};

export const workspaceDropElements = [
    "Sales CRM",
    "Operations",
    "Engineering-IT",
    "Human Resources",
    "Small Business",
    "Marketing",
    "Education",
    "Other"
];

export const BOARDS = {
    "NEW_NAME": "Board: " + uuidv4()
};