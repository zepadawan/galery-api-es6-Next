const userRoles = {
    guest: 1,
    user: 2,
    admin: 4,
    superAdmin: 8
};

const config = {

    server: {
        portServer: 3000,
        host: 'localhost',
    },

    dbConfig: {
        port: 3306,
        host: '178.170.8.35',
        database: 'cbialy',
        username: 'jfp',
        password: 'Zepadawan123',

    },

    configAccessLevels: {
        guest: userRoles.guest | userRoles.user | userRoles.admin | userRoles.superAdmin,
        user: userRoles.user | userRoles.admin | userRoles.superAdmin,
        admin: userRoles.admin | userRoles.superAdmin,
        superAdmin: userRoles.superAdmin,
    },

    secret: " Secret"

}

export default config;