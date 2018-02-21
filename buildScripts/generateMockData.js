/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const outputFile = './src/api/db.json';

const json = JSON.stringify(jsf(schema));

fs.writeFile(outputFile, json, (err) => {
    if (err) {
        return console.log(chalk.red(err));
    } else {
        console.log(chalk.green(`Mock Data file ${outputFile} Generated!`));
    }
});
