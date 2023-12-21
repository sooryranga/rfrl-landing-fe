const APP_URL = process.env.NODE_ENV === 'development' ?
'http://localhost:8082' :
'https://app.rfrl.ca';
const SIGN_UP_URL = `${APP_URL}/signup`;


const getEmailSignUpURL = (email) => `${SIGN_UP_URL}?email=${email}`;

export {
  APP_URL,
  SIGN_UP_URL,
  getEmailSignUpURL,
};
