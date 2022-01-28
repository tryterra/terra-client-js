import { Activity } from "../models/Activity";
import { GetData, TerraDataResponse } from "./Data";
import { TerraAthleteResponse, GetAthlete } from "./Athlete";
import {
  GenerateWidgetSession,
  TerraWidgetResponse,
} from "./GenerateWidgetSessions";
import { GetProviders, TerraProvidersResponse } from "./Providers";
import { GetSubscribers, TerraSubscriptionsResponse } from "./Subscribers";
import { GetUser, TerraUserResponse } from "./UserInfo";
import { Body } from "../models/Body";
import { Sleep } from "../models/Sleep";
import { Daily } from "../models/Daily";
import { Menstruation } from "../models/Menstruation";

export class Terra {
  private devID: string = "";
  private apiKey: string = "";
  private userID: string = "";

  constructor(devID: string, apiKey: string, userID?: string) {
    this.devID = devID;
    this.apiKey = apiKey;
    if (userID !== undefined) {
      this.userID = userID;
    }
  }

  setCurrentUser(userID: string): void {
    this.userID = userID;
  }

  getCurrentUser(): string {
    return this.userID;
  }

  generateWidgetSession(
    referenceID: string,
    providers: string[],
    language: string,
    auth_success_redirect_url?: string,
    auth_failure_redirect_url?: string
  ): Promise<TerraWidgetResponse> {
    return GenerateWidgetSession(
      this.devID,
      this.apiKey,
      referenceID,
      providers,
      language,
      auth_success_redirect_url,
      auth_failure_redirect_url
    );
  }

  getProviders(): Promise<TerraProvidersResponse> {
    return GetProviders();
  }

  getUsers(): Promise<TerraSubscriptionsResponse> {
    return GetSubscribers(this.devID, this.apiKey);
  }

  getUser(userID: string): Promise<TerraUserResponse> {
    return GetUser(this.devID, this.apiKey, userID);
  }

  // Data getters
  private getDataWrapper<T>(type: string) {
    return (startDate: Date, endDate?: Date, toWebhook?: boolean) => {
      return GetData<T>(
        type,
        this.devID,
        this.apiKey,
        this.userID,
        startDate,
        endDate,
        toWebhook
      );
    };
  }

  getAthlete(toWebhook?: boolean): Promise<TerraAthleteResponse> {
    return GetAthlete(this.devID, this.apiKey, this.userID, toWebhook);
  }

  getActivity = this.getDataWrapper<Activity>("activity");
  getBody = this.getDataWrapper<Body>("body");
  getDaily = this.getDataWrapper<Daily>("daily");
  getSleep = this.getDataWrapper<Sleep>("sleep");
  getMenstruation = this.getDataWrapper<Menstruation>("menstruation");
}
