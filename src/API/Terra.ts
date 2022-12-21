import { Activity } from '../models/Activity';
import { dataType, GetData, TerraDataResponse } from './Data';
import { TerraAthleteResponse, GetAthlete } from './Athlete';
import { GenerateWidgetSession, TerraWidgetResponse } from './GenerateWidgetSessions';
import { GenerateAuthToken, TerraAuthTokenResponse } from './GenerateAuthToken';
import { GetProviders, TerraProvidersResponse } from './Providers';
import { GetSubscribers, TerraSubscriptionsResponse } from './Subscribers';
import { DeauthUser, GetUser, TerraUserResponse } from './UserInfo';
import { Body } from '../models/Body';
import { Sleep } from '../models/Sleep';
import { Daily } from '../models/Daily';
import { Nutrition } from '../models/Nutrition';
import { Menstruation } from '../models/Menstruation';
import { checkForServerSideAndWarn, CheckTerraSignature } from './Helpers';
import { AuthUser, TerraAuthUserResponse } from './AuthUser';
import { Mutex } from 'async-mutex';
export default class Terra {
  private devID: string;
  private apiKey: string;
  private secret: string;
  private mutex: Mutex = new Mutex();

  constructor(devID: string, apiKey: string, secret: string) {
    checkForServerSideAndWarn();
    this.devID = devID;
    this.apiKey = apiKey;
    this.secret = secret;
  }

  /**
   * Generate an Auth Token to be used with the SDK initialization
   *
   * @returns {Promise<TerraAuthTokenResponse>} A promise of type Auth Token Response
   */
  generateAuthToken(): Promise<TerraAuthTokenResponse> {
    return GenerateAuthToken(this.devID, this.apiKey);
  }

  /**
   * Generate an Auth URL to be authenticate a user
   *
   * @param {string} referenceID - Terra user ID
   * @param {string} resource - Wearable provider
   * @param {string} language - Language the widget page is showed in
   * @param {string} authSuccessRedirectUrl - Redirect URL when the session succeeds
   * @param {string} authFailureRedirectUrl - Redirect URL when the session fails
   * @param {string} facilityId - Facility ID for applicable resource (e.g. INBODY)
   *
   * @returns {Promise<TerraAuthUserResponse>} A promise of type Authenticate User Response
   */
  authUser(
    resource: string,
    referenceId?: string,
    language?: string,
    authSuccessRedirectUrl?: string,
    authFailureRedirectUrl?: string,
    facilityId?: string,
  ): Promise<TerraAuthUserResponse> {
    return AuthUser(
      this.devID,
      this.apiKey,
      resource,
      referenceId,
      language,
      authSuccessRedirectUrl,
      authFailureRedirectUrl,
      facilityId,
    );
  }

  /**
   * Generate a widget session
   *
   * @param {string} referenceID - Terra user ID
   * @param {string[]} providers - Array of strings for wearable providers
   * @param {string} language - Language the widget page is showed in
   * @param {string} authSuccessRedirectUrl - Redirect URL when the session succeeds
   * @param {string} authFailureRedirectUrl - Redirect URL when the session fails
   *
   * @returns {Promise<TerraWidgetResponse>} A promise of type Widget Response
   */
  generateWidgetSession(
    referenceID: string,
    language: string,
    providers?: string[],
    authSuccessRedirectUrl?: string,
    authFailureRedirectUrl?: string,
  ): Promise<TerraWidgetResponse> {
    return GenerateWidgetSession(
      this.devID,
      this.apiKey,
      referenceID,
      language,
      providers,
      authSuccessRedirectUrl,
      authFailureRedirectUrl,
    );
  }

  /**
   * Get available Terra providers
   *
   * @return {Promise<TerraProvidersResponse>} A promise of type Providers
   *
   */
  getProviders(): Promise<TerraProvidersResponse> {
    return GetProviders();
  }

  /**
   * Get all subscribed users
   *
   * @return {Promise<TerraSubscriptionsResponse>} A promise of type Subscriptions
   *
   */
  getUsers(): Promise<TerraSubscriptionsResponse> {
    return GetSubscribers(this.devID, this.apiKey);
  }

  /**
   * Get information about a Terra user
   *
   * @param {string} userID - Terra user ID
   *
   * @return {Promise<TerraUserResponse>} A promise of type User
   *
   */
  getUser(userID: string): Promise<TerraUserResponse> {
    return GetUser(this.devID, this.apiKey, userID);
  }

  /**
   * Deauthenticate Terra user
   *
   * @param {string} userID - Terra user ID
   *
   * @return {Promise<void>} A promise fulfilled when deauth succeeds
   *
   */
  deauthUser(userID: string): Promise<void> {
    return DeauthUser(this.devID, this.apiKey, userID);
  }

  // Data getters
  private getDataWrapper<T>(
    type: dataType,
  ): (userId: string, startDate: Date, endDate?: Date, toWebhook?: boolean) => Promise<TerraDataResponse<T>> {
    return (userId: string, startDate: Date, endDate?: Date, toWebhook?: boolean) => {
      return GetData<T>(type, this.devID, this.apiKey, userId, startDate, endDate, toWebhook);
    };
  }

  /**
   * Get Athlete data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   *
   * @return {Promise<TerraAthleteResponse>} A promise of type Athlete Data
   *
   */
  getAthlete(userId: string, toWebhook?: boolean): Promise<TerraAthleteResponse> {
    return GetAthlete(this.devID, this.apiKey, userId, toWebhook);
  }

  /**
   * Get Activity data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Activity>>} A promise of type Activity Data
   *
   */
  getActivity = this.getDataWrapper<Activity>('activity');

  /**
   * Get Body data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Body>>} A promise of type Body Data
   *
   */
  getBody = this.getDataWrapper<Body>('body');

  /**
   * Get Daily data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Daily>>} A promise of type Daily Data
   *
   */
  getDaily = this.getDataWrapper<Daily>('daily');

  /**
   * Get Sleep data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Sleep>>} A promise of type Sleep Data
   *
   */
  getSleep = this.getDataWrapper<Sleep>('sleep');

  /**
   * Get Nutrition data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Nutrition>>} A promise of type Nutrition Data
   *
   */
  getNutrition = this.getDataWrapper<Nutrition>('nutrition');

  /**
   * Get Menstruation data for current user
   * @param {boolean} toWebhook - True for sending data to webhook and false for sending data in response body
   * @param {Date} startDate - Start date for the date range limit
   * @param {Date} endDate - End date for the date range limit
   * @return {Promise<TerraDataResponse<Menstruation>>} A promise of type Menstruation Data
   *
   */
  getMenstruation = this.getDataWrapper<Menstruation>('menstruation');

  /**
   * Checks webhook signature
   * @param {string} terraSignature - Terra signature string found in header of request sent to webhook endpoint
   * @param {ReqBody} payload - Body of request sent to webhook endpoint
   * @param {string} secret - Signing secret used to verify webhook
   * @return {Boolean} - A boolean, true if the signature is valid
   *
   */
  checkTerraSignature(terraSignature: string, payload: string) {
    return CheckTerraSignature(terraSignature, payload, this.secret);
  }

  /**
   * Synchronises a set of functions. It is meant to be used to handle webhooks if
   * the infrastructure could face race conditions
   * @param {(...args: any[]) => void} callback - Function to be executed, usually the webhook handler
   * @param {any[]} args - Extra arguments passed to the handler, usually the request contents
   */
  executeSynchronously(callback: (...args: any[]) => void, ...args: any[]) {
    this.mutex.acquire().then(async (release) => {
      try {
        await callback(...args);
        release();
      } catch (e) {
        release();
      }
    });
  }
}
