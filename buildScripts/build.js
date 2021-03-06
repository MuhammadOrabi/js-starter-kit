/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take a moment..'));


webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    } else {
        const jsonStats = stats.toJson();
        if (jsonStats.hasErrors) {
            return jsonStats.errors.map(err => console.log(chalk.red(err)));
        }
        if (jsonStats.hasWarnings) {
            console.log(chalk.yellow('Webpack generated the following warnings: '));
            return jsonStats.warnings.map(warning => console.log(chalk.red(warning)));
        }
        console.log(`Webpack status: ${stats}`);
        console.log(chalk.green('Your app has been build for production and written in /dist!'));
        return 0;
    }
});
