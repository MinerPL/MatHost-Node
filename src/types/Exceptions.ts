export interface Exception {
  code: string;
  status: string;
  detail: string;
}

export interface APIException {
  errors: Exception[];
}