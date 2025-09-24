export class FetchError extends Error {
  response: Response;
  request: Request;
  body: unknown;

  constructor(
    message: string,
    options: {
      response: Response;
      request: Request;
      body: unknown;
    }
  ) {
    super(message);
    this.name = 'FetchError';
    this.response = options.response;
    this.request = options.request;
    this.body = options.body;
  }
}
