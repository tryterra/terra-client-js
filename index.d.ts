import { TerraAthleteResponse } from "./API/Athlete";
import { TerraDataResponse } from "./API/Data";
import { TerraWidgetResponse } from "./API/GenerateWidgetSessions";
import { TerraProvidersResponse } from "./API/Providers";
import { TerraSubscriptionsResponse } from "./API/Subscribers";
import { TerraUserResponse } from "./API/UserInfo";
import { Activity } from "./models/Activity";
import { Body } from "./models/Body";
import { Daily } from "./models/Daily";
import { Menstruation } from "./models/Menstruation";
import { Sleep } from "./models/Sleep";

declare module "terra" {
  export interface Terra {
    setCurrentUser(userID: string): void;

    getCurrentUser(): string;

    generateWidgetSession(
      referenceID: string,
      providers: string[],
      language: string,
      auth_success_redirect_url?: string,
      auth_failure_redirect_url?: string
    ): Promise<TerraWidgetResponse>;

    getProviders(): Promise<TerraProvidersResponse>;

    getUsers(): Promise<TerraSubscriptionsResponse>;

    getUser(userID: string): Promise<TerraUserResponse>;

    getAthlete(toWebhook?: boolean): Promise<TerraAthleteResponse>;

    getActivity: (
      startDate: Date,
      endDate?: Date,
      toWebhook?: boolean
    ) => Promise<TerraDataResponse<Activity>>;
    getBody: (
      startDate: Date,
      endDate?: Date,
      toWebhook?: boolean
    ) => Promise<TerraDataResponse<Body>>;
    getDaily: (
      startDate: Date,
      endDate?: Date,
      toWebhook?: boolean
    ) => Promise<TerraDataResponse<Daily>>;
    getSleep: (
      startDate: Date,
      endDate?: Date,
      toWebhook?: boolean
    ) => Promise<TerraDataResponse<Sleep>>;
    getMenstruation: (
      startDate: Date,
      endDate?: Date,
      toWebhook?: boolean
    ) => Promise<TerraDataResponse<Menstruation>>;
  }

  export default Terra;
}
