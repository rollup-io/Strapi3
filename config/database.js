module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_PRIVATE_URL')
        },
        pool: { min: 0 }
    },
    settings: {
      forceMigration: false,
      runMigrations: false
    }
});
