module.exports = {
    askForMyModule
};

function askForMyModule() {
    if (this.existingProject) return;

    const done = this.async();
    const prompts = [
        {
            type: 'confirm',
            name: 'addMyModule',
            message: response => this.getNumberedQuestion('Would you like to add my module into your app?', true),
            default: true
        }
    ];
    this.prompt(prompts).then((props) => {
        this.addMyModule = props.addMyModule;
        done();
    });
}
