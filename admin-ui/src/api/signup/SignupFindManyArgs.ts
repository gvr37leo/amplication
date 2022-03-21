import { SignupWhereInput } from "./SignupWhereInput";
import { SignupOrderByInput } from "./SignupOrderByInput";

export type SignupFindManyArgs = {
  where?: SignupWhereInput;
  orderBy?: Array<SignupOrderByInput>;
  skip?: number;
  take?: number;
};
