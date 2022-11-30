import Terra from '../index';
import { config } from 'dotenv';
var terra: Terra;

beforeAll(() => {
  config();
  terra = new Terra(process.env.DEV_ID || '', process.env.API_KEY || '', process.env.SECRET || '');
});

it('Constructor and functions', () => {
  expect(typeof terra.checkTerraSignature).toBe('function');
  expect(typeof terra.deauthUser).toBe('function');
  expect(typeof terra.getActivity).toBe('function');
  expect(typeof terra.getAthlete).toBe('function');
  expect(typeof terra.getBody).toBe('function');
  expect(typeof terra.getDaily).toBe('function');
  expect(typeof terra.getMenstruation).toBe('function');
  expect(typeof terra.getNutrition).toBe('function');
  expect(typeof terra.getSleep).toBe('function');
  expect(typeof terra.getUser).toBe('function');
  expect(typeof terra.getUsers).toBe('function');
});

it('.authUser', () => {
  expect(typeof terra.authUser).toBe('function');
  return terra.authUser('GARMIN').then((res) => {
    expect(res.auth_url).not.toBe(undefined);
    expect(res.status).toBe('success');
    expect(res.user_id).not.toBe(undefined);
  });
});

it('.generateAuthToken', () => {
  expect(typeof terra.generateAuthToken).toBe('function');
  return terra.generateAuthToken().then((res) => {
    expect(res.expires_in).not.toBe(undefined);
    expect(res.token).not.toBe(undefined);
    expect(res.status).toBe('success');
  });
});

it('.generateWidgetSession', () => {
  expect(typeof terra.generateWidgetSession).toBe('function');
  return terra.generateWidgetSession('reference_id', 'EN', ['GARMIN', 'FITBIT']).then((res) => {
    expect(res.session_id).not.toBe(undefined);
    expect(res.url).not.toBe(undefined);
    expect(res.status).toBe('success');
  });
});

it('.getProviders', () => {
  expect(typeof terra.getProviders).toBe('function');
  return terra.getProviders().then((res) => {
    expect(res.providers).not.toBe(undefined);
    expect(res.sdk_providers).not.toBe(undefined);
    expect(res.status).toBe('success');
  });
});
