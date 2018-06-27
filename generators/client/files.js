const constants = require('generator-jhipster/generators/generator-constants');
const fileAngular = require('generator-jhipster/generators/client/files-angular');

const ANGULAR_DIR = constants.ANGULAR_DIR;

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
    // write files from jhipster
    this.writeFilesToDisk(fileAngular.files, this, false, '../../../node_modules/generator-jhipster/generators/client/templates/angular');
    this.writeFilesToDisk(files, this, false, 'angular');
}
