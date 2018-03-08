const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('generatedHash: ', hash);
    });
});

var hashedPass = '$2a$10$mTQrBRTs.NuycCWY4X/F3Ok6QzizsldqTrzXQXUaIroPEfv8XKgSe';
bcrypt.compare(password, hashedPass, (err, res) => {
    console.log('Passwored Matched: ', res);
});

var data = {
    id: 10
}

var token = jwt.sign(data, 'salt');
console.log(token);

var decoded = jwt.verify(token, 'salt');
console.log(decoded);

/*var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`, `Hash: ${hash}`);

var data = {
    id: 4
}

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

//man in the middle manipulation
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash) {
    console.log('Data was not changed.');
} else {
    console.log('Alert! Data was changed.');
}*/