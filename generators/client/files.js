const constants = require('generator-jhipster/generators/generator-constants');
const fileAngular = require('generator-jhipster/generators/client/files-angular');

const ANGULAR_DIR = constants.ANGULAR_DIR;
const ORIGIN_DIR = '../../../node_modules/generator-jhipster/generators/client/';
const ORIGIN_TEMPLATE_DIR = `${ORIGIN_DIR}templates/`;

const files = {
    myModule: [
        {
            condition: generator => generator.addMyModule,
            path: ANGULAR_DIR,
            templates: [
                'my-module/my-module.module.ts'
            ]
        }
    ]
};

module.exports = {
    writeFiles,
    files
};


function writeFiles() {
    // write files from jhipster -- Only for angular
    // TODO add React support
    this.writeFilesToDisk(fileAngular.files, this, false, `${ORIGIN_TEMPLATE_DIR}angular`);
    this.writeFilesToDisk(files, this, false, 'angular');
}
