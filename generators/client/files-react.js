const constants = require('generator-jhipster/generators/generator-constants');
const reactFiles = require('generator-jhipster/generators/client/files-react').files;

const REACT_DIR = constants.REACT_DIR;
const ORIGINAL_REACT_TEMPLATE_PATH = '../../../node_modules/generator-jhipster/generators/client/templates/react';
const CURRENT_REACT_TEMPLATE_PATH = 'react';

const files = {
    myModule: [
        {
            condition: generator => generator.addMyModule,
            path: REACT_DIR,
            templates: [
                'dummy-file.ts'
            ]
        }
    ]
};

module.exports = {
    writeFiles
};

/**
 * Writing files for react framework.
 * First copying all files from original client sub-generator
 * then copying files from our own blueprint generator.
 *
 * PLEASE be sur copying original files first to avoid overwriting yours.
 */
function writeFiles() {
    this.writeFilesToDisk(reactFiles, this, false, ORIGINAL_REACT_TEMPLATE_PATH); // always originals first
    this.writeFilesToDisk(files, this, false, CURRENT_REACT_TEMPLATE_PATH);
}
