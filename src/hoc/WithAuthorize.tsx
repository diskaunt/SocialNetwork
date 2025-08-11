import { ReactElement } from 'react';

type WithAuthorizeProps = {
  isAuthorize: boolean;
  components: { [key: string]: ReactElement };
};

const WithAuthorize = ({
  isAuthorize,
  components: { Authorized, Unauthorized },
}: WithAuthorizeProps) => {
  return isAuthorize ? Authorized : Unauthorized;
};

export default WithAuthorize;
