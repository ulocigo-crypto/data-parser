// types.ts
export interface ParsedData {
  id: number;
  name: string;
  values: number[];
}

export interface ParseOptions {
  delimiter: string;
  skipHeader: boolean;
}

export interface ParseResult {
  data: ParsedData[];
  errors: string[];
}

export enum ParseErrorType {
  INVALID_FILE,
  INVALID_FORMAT,
  UNKNOWN_ERROR,
}

export class ParseError extends Error {
  type: ParseErrorType;
  constructor(type: ParseErrorType, message: string) {
    super(message);
    this.type = type;
  }
}