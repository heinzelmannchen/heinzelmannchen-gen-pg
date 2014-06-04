heinzelmannchen-gen-pg
======================

This generator creates data from a database scheme.

If you use this generator in a .heinzelrc, you need to configurate a db-connection.

Example .heinzelrc
------------------

```json
{
    "domains": {
        // ...
    },
    "generators": {
        "heinzelmannchen-gen-pg": {
            "npm": "heinzelmannchen-gen-pg",
            "config": {
                "database": "Heinzel",
                "charset": "utf8",
                "host": "127.0.0.1",
                "password": "***",
                "user": "***"
            }
      }
    },
    "templates": {
        // ...
    }
}
```
