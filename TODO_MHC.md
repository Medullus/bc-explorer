We need a better way to configure this using ENV and set commands to modify these configs

2 places to consider configuring:
1. /app/persistance/postgreSQL/db/pgconfig.json contains :
```{
    "pg": {
        "host": "127.0.0.1",
        "port": "5432",
        "database": "fabricexplorer",
        "username": "hppoc",
        "passwd": "password"
    }
}
```

2. /app/platform/fabric/config.json. This config is the network setup and for some weird reason has the pg object above also.
We need ENV for 
configtxgenToolPath - path to configtxgen binary
admin.key - path to admin priv key
admin.cert - path to admin cert
pg.host - host for postgres
pg.port - port for postgres
pg.database - db name
pg.username - admin user of db
pg.passwd - admin pw for db

Lets create a script to pull modify these values base on ENV. the pg is okay for now as most of it doesn't matter now, but the
configtxgenToolPath, admin.key, admin.cert varies based on ENV and will be a pain to configure for local and remote