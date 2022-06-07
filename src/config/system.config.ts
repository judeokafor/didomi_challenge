import { Environment } from 'src/types';
import { DEPLOYED_ENVIORNMENTS, PRODUCTION_ENVIRONMENTS } from './constants';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 9091,
  isProduction: PRODUCTION_ENVIRONMENTS.includes(
    Environment[process.env.APP_ENV],
  ),
  isDeployedApplication: DEPLOYED_ENVIORNMENTS.includes(
    Environment[process.env.APP_ENV],
  ),
});
