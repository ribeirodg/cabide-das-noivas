const jwt = require("jsonwebtoken")


console.log(jwt.sign(
    {
        data: "foobar",

    },
    "secret",
    {expiresIn: 60 * 60}
))


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNjI5NDE5MzQwLCJleHAiOjE2Mjk0MjI5NDB9.kSlI2clTx3VzxdK7HLCPCj2oA0s_28HJsriV_Y52Kvk"

// console.log(jwt.verify(token, "secret"))


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaWFnbyIsImlkYWRlIjoxMCwiaWF0IjoxNjI5NDE5NjEzLCJleHAiOjE2Mjk0MjMyMTN9.LZIDZxmjnEFjInxo8xp4VTO1NjfuOeauSa8o4vfivyY"

console.log(jwt.verify(token, "aula"))

