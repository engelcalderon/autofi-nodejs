class Service {
    constructor() {
        this.context = {}
    }

    run(data) {
        const validatedData = this.validate(data);
        return this.executeService(validatedData);
    }
};

module.exports = Service;