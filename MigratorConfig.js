module.exports = {
    database: {
        "client": "mysql",
        "connection": {
            "host"     : "127.0.0.1",
            "user"     : "some_user",
            "password" : "please_change_this",
            "database" : "ghost",
        }
    },
    migrationPath: process.cwd() + 'node_modules/ghost/core/server/data/migrations',
    currentVersion: '1.21.4'
};
