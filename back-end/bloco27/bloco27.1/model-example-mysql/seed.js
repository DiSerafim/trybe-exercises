use model_example;

db.authors.insertMany([
  { "firstName": "George", "middleName": "R. R.", "lastName": "Martin", "birthday": "1948-09-20", "nationality": "norte-americano" },
  { "firstName": "J.", "middleName": "R. R.", "lastName": "Tolkien", "birthday": "1892-01-03", "nationality": "britânico" },
  { "firstName": "Isaac", "lastName": "Asimov", "birthday": "1920-01-20", "nationality": "russo-americano" },
  { "firstName": "Frank", "lastName": "Herbert", "birthday": "1920-02-11", "nationality": "norte-americano" },
  { "firstName": "Júlio", "lastName": "Verne", "birthday": "1905-03-24", "nationality": "francês" }
])
