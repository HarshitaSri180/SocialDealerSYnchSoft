import { FetchInstance } from 'ohmyfetch';

class AuthModule {
  private fetch: FetchInstance;
  private accessToken: string | null = null;

  constructor(fetch: FetchInstance) {
    this.fetch = fetch;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  async login(emailOrusername: string, password: string) {
    return this.fetch("/login", {
      method: "POST",
      body: { emailOrusername, password },
    });
  }

  async signup(userData: {
    firstName: string;
    lastName: string;
    universityEmail: string;
    phoneNumber: string;
    birthdate: string;
    found_out_about_us: string;
  }) {
    return this.fetch("/signup", {
      method: "POST",
      body: userData,
    });
  }
  async setPassword(
    user_id: BigInteger,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    return this.fetch("/set-username-password", {
      method: "POST",
      body: { user_id, username, password, confirmPassword },
    });
  }

  async otpVarification(user_id: BigInteger, otp: BigInteger) {
    return this.fetch("/otp-varification", {
      method: "POST",
      body: { user_id, otp },
    });
  }

  async addEvent(eventData: {
    user_id: BigInteger;
    event_name: string;
    image_url: string;
    event_type: string;
    pdf_url: string;
    prize: number;
    age: number;
    currency: string;
    venue: string;
    location_id: number;
    start_date_time: string;
    end_date_time: string;
  }) {
    return this.fetch("/add-ticket", {
      method: "POST",
      body: eventData,
    });
  }
}

export default AuthModule;
