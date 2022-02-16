import * as React from 'react';
import Head from 'next/head';

export const Layout: React.FunctionComponent = (props) => (
  <div id="layout">
    <div>{props.children}</div>
  </div>
);
