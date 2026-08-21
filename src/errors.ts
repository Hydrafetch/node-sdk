export interface HydrafetchErrorBody {
  code?: string;
  message?: string;
  details?: unknown;
}

export class HydrafetchError extends Error {
  readonly code: string;
  readonly status: number;
  readonly requestId?: string;
  readonly details?: unknown;

  constructor(args: {
    code: string;
    message: string;
    status: number;
    requestId?: string;
    details?: unknown;
  }) {
    super(args.message);
    this.name = 'HydrafetchError';
    this.code = args.code;
    this.status = args.status;
    this.requestId = args.requestId;
    this.details = args.details;
  }

  get isAuth(): boolean {
    return this.status === 401 || this.status === 403;
  }

  get isOutOfCredits(): boolean {
    return this.status === 402;
  }

  get isInvalidRequest(): boolean {
    return this.status === 400 || this.status === 422;
  }

  get isRetryable(): boolean {
    return this.status === 429 || this.status >= 500;
  }
}

export class HydrafetchTimeoutError extends HydrafetchError {
  constructor(message: string) {
    super({ code: 'TIMEOUT', message, status: 408 });
    this.name = 'HydrafetchTimeoutError';
  }
}
