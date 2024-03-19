// import React from 'react';
//
// import {Route} from 'react-router-dom';
// import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
//
// // import {ContentManagementRoutes as ContentManagement} from "app/modules/administration/content-management";
// import PrivateRoute from 'app/shared/auth/private-route';
// import {AdminLayout} from "app/shared/layout/adminLayout";
// import {AUTHORITIES} from "app/config/constants";
// import {DashboardManager} from "app/modules/dash-board/Dasboard-manager";
//
// const DashAdministrationRoutes = () => (
//   <AdminLayout>
//     <ErrorBoundaryRoutes>
//       {/* <Route path={"/dashboard"} element={<DashboardManager/>} /> */}
//       <Route
//         path={"/dashboard"}
//         element={
//           <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
//             <DashboardManager />
//           </PrivateRoute>
//         }
//       />
//
//       {/*
//       <Route path="*" element={<Navigate to="/" />} />
//       {/* <Route path="*" element={<Navigate to="../" />} />*/}
//     </ErrorBoundaryRoutes>
//   </AdminLayout>
// );
//
// export default DashAdministrationRoutes;
