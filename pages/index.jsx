import React from 'react';
import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(
  () => import('swagger-ui-react'),
  { ssr: false }
);

import spec from '../swagger.yml';

const SwaggerComponent = () =>
  <SwaggerUI spec={spec} docExpansion="list" />

export default SwaggerComponent;

