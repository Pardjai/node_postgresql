# ik-usersAPI

API:
_____________________
 /profile/myId 
_____________________
GET
Get user with id == myId

PUT
Change user properties
======================
  input: JSON {
    name: _string_,
    surname: _string_,
    email: _string_,
    gender: _string_
  }
======================
  output: JSON user(all fields)
======================
All properties  are optional. 
You cannot set empty properties (verified by the validator).
The list of fields to change is in the file keys\keys.prod.js.
_____________________
 /profiles?page=N 
_____________________
GET
Get a list of users (page N)
* pagination - 10 items on page 
_____________________
/user 
_____________________
POST
registration and login

-> /register
======================
  input: JSON {
    name: _string_,
    email: _string_,
    password: _string_
  }
======================
  output: JSON user (filled in fields)
======================

-> /login
======================
  input: JSON {
    email: _string_,
    password: _string_
  }
======================
  output: "Authentication was successful"
======================










