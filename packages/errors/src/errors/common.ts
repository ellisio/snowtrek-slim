import { ErrorLike, isError } from "./assertion";
import { CustomErrorBase } from "./custom-error-base";

/*
 * A set of common business logic errors.
 *
 * A backend error handler middleware would understand these and translate them
 * to well formed HTTP responses.
 *
 * While these are intentionally analogous to HTTP errors, they are not
 * intended to be thrown by the request handling layer. In those places, please
 * use e.g. the http-errors library.
 */

/**
 * The given inputs are malformed and cannot be processed.
 *
 * @public
 */
export class InputError extends CustomErrorBase {}

/**
 * The request requires authentication, which was not properly supplied.
 *
 * @public
 */
export class AuthenticationError extends CustomErrorBase {}

/**
 * The authenticated caller is not allowed to perform this request.
 *
 * @public
 */
export class NotAllowedError extends CustomErrorBase {}

/**
 * The requested resource could not be found.
 *
 * Note that this error usually is used to indicate that an entity with a given
 * ID does not exist, rather than signalling that an entire route is missing.
 *
 * @public
 */
export class NotFoundError extends CustomErrorBase {}

/**
 * The request could not complete due to a conflict in the current state of the
 * resource.
 *
 * @public
 */
export class ConflictError extends CustomErrorBase {}

/**
 * The requested resource has not changed since last request.
 *
 * @public
 */
export class NotModifiedError extends CustomErrorBase {}

/**
 * The server does not support the functionality required to fulfill the request.
 *
 * @public
 */
export class NotImplementedError extends CustomErrorBase {}

/**
 * An error that forwards an underlying cause with additional context in the message.
 *
 * The `name` property of the error will be inherited from the `cause` if
 * possible, and will otherwise be set to `'Error'`.
 *
 * @public
 */
export class ForwardedError extends CustomErrorBase {
  constructor(message: string, cause: ErrorLike) {
    super(message, cause);

    this.name = isError(cause) ? cause.name : "Error";
  }
}
