import React from 'react';
import { connect } from 'react-redux';
import { AuthorizedRoute } from '@/components/Authorized';
import { ConnectedRouter } from 'connected-react-router';
import BlankLayout from '@/layouts/BlankLayout';
import Exception404 from '@/pages/Exception/404';
import { authorizedRoutes, normalRoutes } from './routerConfig';


const Router = ({history}) => (
  <ConnectedRouter history={history}>
    <AuthorizedRoute
      permissions={window.localStorage.getItem('permissions') || []}
      authorizedRoutes={authorizedRoutes}
      authorizedLayout={BlankLayout}
      normalRoutes={normalRoutes}
      normalLayout={BlankLayout}
      notFound={Exception404}
    />
  </ConnectedRouter>
)

export default connect()(Router);

