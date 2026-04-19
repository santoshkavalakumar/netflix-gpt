export const checkValidData = (email, password, username) => {


const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPassWordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if(!isEmailValid) return "Email Id is not valid";
if(!isPassWordValid) return "Password is not Valid.";

return null;


}