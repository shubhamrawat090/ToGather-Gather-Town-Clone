import { SafeParseError } from "zod";

class ZodValidationService {
  getErrorMessageFromParsedData(
    parsedData: SafeParseError<any>,
    defaultMessage = "Verification Failed"
  ): string {
    const errorMessages = parsedData.error.errors.map((err) => err.message);
    return errorMessages.length > 0 ? errorMessages.join(", ") : defaultMessage;
  }

  getErrorCodesFromParsedData(parsedData: SafeParseError<any>): string[] {
    return parsedData.error.errors.map((err) => err.code);
  }
}

export default new ZodValidationService();
