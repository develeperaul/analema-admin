import ky from "ky";
import * as Tokens from "./tokens";
class Server {
  constructor(domain, opts) {
    this.domain = domain;
    this.opts = opts;
    this.handleRejectionToken = undefined;
    this.mainKy = this.createMain();
    this.swot = this.createSWOT();
  }

  createMain() {
    return ky.create({
      prefixUrl: `${this.domain}/${this.opts.apiPath}`,
      timeout: this.opts.timeout,
    });
  }

  createSWOT() {
    return this.mainKy.extend({
      // hooks: {
      //   beforeRequest: [
      //     (request) => {
      //       const accessToken = Tokens.getAccessToken();
      //       if (accessToken !== null) {
      //         // this.setTokenToReq(request, accessToken);
      //       }
      //     },
      //   ],
      //   afterResponse: [
      //     async (request, options, response) => {
      //       if (response.status === 401) return this.handleRejectionToken();
      //     },
      //   ],
      // },
    });
  }

  setTokenToReq(request, accessToken) {
    request.headers.set("Authorization", accessToken);
  }

  registrHandleRejectionToken(handler) {
    this.handleRejectionToken = handler;
  }
}
const options = {
  apiPath: "api/admin/",
  timeout: 10000,
};

export const api = new Server("https://analemmatrade.ru", options);
