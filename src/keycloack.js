import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: proccess.env.APP_AUTH_URL,
  realm: "Demo-Realm",
  clientId: APP_AUTH_CLIENT_ID,
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
