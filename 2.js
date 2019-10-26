const is_name_valid = (name) =>  /^[A-Z]{3,}$/.test(name);

console.log(is_name_valid('RINA'));
console.log(is_name_valid('DO'));

const is_age_valid = (age) =>  /^\d{1,2}$/.test(age);

console.log(is_age_valid('25'));
console.log(is_age_valid('222'));
console.log(is_age_valid('A2'));

const is_username_valid = (username) =>  /^[a-z]{4}([_.]?\w+)\d{3}$/.test(username);

console.log(is_username_valid('rina_333'));
console.log(is_username_valid('Ronaldona'));
