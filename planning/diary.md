## initial plan

<!-- add image -->
![alt](./v-1.0.0.png)           


this is the initial plan.

## basic db structure

### creating users collection with validation

```sql

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and required",
        },
        email: {
          bsonType: "string",
          description: "must be a string and required",
        },
        password: {
          bsonType: "string",
          description: "must be a string and required",
        },
      },
    },
  },
});

```
### Adding a user

```sql

db.users.insertOne({
  name: "chamara",
  email: "ccweerasinghe1994@gmail.com",
});

```
### getting the created users

```sql

db.users.find();

````

output
```json
[
  {
    "_id": {"$oid": "6220f546f6c3f559b1e738ff"},
    "email": "ccweerasinghe1994@gmail.com",
    "name": "chamara",
    "password": "123"
  }
]

```