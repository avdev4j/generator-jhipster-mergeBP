/* eslint-disable consistent-return */
const chalk = require('chalk');
const ClientGenerator = require('generator-jhipster/generators/client');
const prompts = require('./prompts');
const writeFiles = require('./files').writeFiles;


module.exports = class extends ClientGenerator {
    constructor(args, opts) {
        super(args, Object.assign({fromBlueprint: true}, opts)); // fromBlueprint variable is important

        const jhContext = this.jhipsterContext = this.options.jhipsterContext;

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint avdev4j')}`);
        }

        this.configOptions = jhContext.configOptions || {};
        // This sets up options for this sub generator and is being reused from JHipster
        jhContext.setupClientOptions(this, jhContext);
    }

    get initializing() {
        return super._initializing();
    }

    get prompting() {
        return {
            askForMyModule: prompts.askForMyModule,

            setSharedConfigOptions() {
                this.configOptions.lastQuestion = this.currentQuestion;
                this.configOptions.totalQuestions = this.totalQuestions;
            }
        };
    }

    get configuring() {
        return super._configuring();
    }

    get default() {
        return super._default();
    }

    get writing() {
        return {
            write() {
                writeFiles.call(this);
            }
        };
    }

    get install() {
        return super._install();
    }

    get end() {
        const phaseFromJHipster = super._end();
        const myCustomPhaseSteps = {
            logMe() {
                this.log('i am a pretty log. Please display me !!!');
            }
        };

        return Object.assign(phaseFromJHipster, myCustomPhaseSteps);
    }
};
