# ik-usersAPI

API:

=== /profile/myId ===

GET
Get user with id == myId

PUT
Change user properties
_____________________
|input: JSON {
|  name: _string_,
|  surname: _string_,
|  email: _string_,
|  gender: _string_
|}
_____________________
|output: JSON user(all fields)
_____________________
All properties  are optional. 
You cannot set empty properties (verified by the validator).
The list of fields to change is in the file keys\keys.prod.js.

=== /profiles?page=N ===

GET
Get a list of users (page N)
* pagination - 10 items on page *

=== /user ===

POST
registration and login

-> /register
_____________________
|input: JSON {
|  name: _string_,
|  email: _string_,
|  password: _string_
|}
_____________________
|output: JSON user (filled in fields)
_____________________

-> /login
_____________________
|input: JSON {
|  email: _string_,
|  password: _string_
|}
_____________________
|output: "Authentication was successful"
_____________________










