import secrets from '../untracked/secrets';

/**
 *
 */
class Envs {
  ENV_PROFILE = 'prod_envs';
  SAME = this.ENV_PROFILE;
  SECRETS_TEST = secrets.SECRETS_TEST;
  LOCALSTORAGE = false;
}

export default new Envs();
