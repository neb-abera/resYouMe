// import dotenv from 'dotenv';

// dotenv.config();

const REACT_APP_OKTA_CLIENT_ID = '0oa8k0ax28cwzrvJy5d7'; // import.meta.env.CLIENT_ID; // process.env.CLIENT_ID;
const REACT_APP_OKTA_DOMAIN = 'dev-77750792.okta.com'; // import.meta.env.ISSUER; // process.env.ISSUER;
const REACT_APP_PORT = 5174; // import.meta.env.CLIENT_PORT; // process.env.CLIENT_PORT;

export const oktaConfig = {
  oidc: {
    clientId: REACT_APP_OKTA_CLIENT_ID,
    issuer: `https://${REACT_APP_OKTA_DOMAIN}/oauth2/default`,
    redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`,
    scopes: ['openid', 'profile', 'email']
  },
  widget: {
    clientId: REACT_APP_OKTA_CLIENT_ID,
    issuer: `https://${REACT_APP_OKTA_DOMAIN}/oauth2/default`,
    redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`,
    scopes: ['openid', 'profile', 'email']
  }
};
