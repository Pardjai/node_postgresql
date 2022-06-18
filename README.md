# ik-usersAPI

!to work, you need to fill in the file keys\keys.dev.js or run the program in the appropriate environment
!variables used in the program:  
* DB_USER, DB_PASSWORD, DB_NAME - MySQL parameters
* CHANGEABLE_FIELDS: ['name', 'surname', 'email', 'gender'] - a list of parameters that the user can edit

API:

 /profile/myId 
======================
* GET
Get user with id == myId*

* PUT
Change user properties
______________________
  input: JSON {
    name: _string_,
    surname: _string_,
    email: _string_,
    gender: _string_
  }
______________________
  output: JSON user(all fields)
______________________
*All properties  are optional. 
You cannot set empty properties (verified by the validator).
The list of fields to change is in the file keys\keys.prod.js.

 /profiles?page=N 
======================
* GET
Get a list of users (page N)
*pagination - 10 items on page 

/user 
======================
* POST
registration and login

-> /register
______________________
  input: JSON {
    name: _string_,
    email: _string_,
    password: _string_
  }
______________________
  output: JSON user (filled in fields)
______________________

-> /login
______________________
  input: JSON {
    email: _string_,
    password: _string_
  }
______________________
  output: "Authentication was successful"
______________________










