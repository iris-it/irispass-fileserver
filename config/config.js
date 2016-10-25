var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'irispass-fileserver'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://root@localhost/irispass-admin',
    },

    test: {
        root: rootPath,
        app: {
            name: 'irispass-fileserver'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://root@localhost/irispass-admin',
    },

    production: {
        root: rootPath,
        app: {
            name: 'irispass-fileserver'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://root@localhost/irispass-admin',
    }
};

module.exports = config[env];
