const constants = require('generator-jhipster/generators/generator-constants');
const angularFiles = require('generator-jhipster/generators/client/files-angular').files;

const ANGULAR_DIR = constants.ANGULAR_DIR;
const ORIGINAL_ANGULAR_TEMPLATE_PATH = '../../../node_modules/generator-jhipster/generators/client/templates/angular';
const CURRENT_ANGULAR_TEMPLATE_PATH = 'angular';

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
    writeFiles
};

/**
 * Writing files for angular framework.
 * First copying all files from original client sub-generator
 * then copying files from our own blueprint generator.
 *
 * PLEASE be sur copying original files first to avoid overwriting yours.
 */
function writeFiles() {
    this.writeFilesToDisk(angularFiles, this, false, ORIGINAL_ANGULAR_TEMPLATE_PATH); // always originals first
    this.writeFilesToDisk(files, this, false, CURRENT_ANGULAR_TEMPLATE_PATH);
}
