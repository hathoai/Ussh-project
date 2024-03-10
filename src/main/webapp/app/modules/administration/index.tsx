import React from 'react';

import {Route} from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import UserManagement from './user-management';

// import {ContentManagementRoutes as ContentManagement} from "app/modules/administration/content-management";
import PrivateRoute from 'app/shared/auth/private-route';
import {AdminLayout} from "app/shared/layout/adminLayout";
import {AUTHORITIES} from "app/config/constants";

const AdministrationRoutes = () => (
  <AdminLayout>
    <ErrorBoundaryRoutes>
      {/* <Route path={ADMIN_DASHBOARD_MANAGEMENT_PATH} element={<DashboardRoutes />} /> */}
      <Route
        path={"/admin/users"}
        element={
          <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
            <UserManagement />
          </PrivateRoute>
        }
      />

      {/*
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="*" element={<Navigate to="../" />} />*/}
    </ErrorBoundaryRoutes>
  </AdminLayout>
);

export default AdministrationRoutes;
