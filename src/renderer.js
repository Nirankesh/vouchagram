import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "./routes";
import webConfig from "./../webConfig";
import { Helmet } from "react-helmet";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${helmet.title.toString()}
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/open-iconic-bootstrap.min.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/animate.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/owl.carousel.min.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/owl.theme.default.min.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/magnific-popup.css">
        <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/aos.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/ionicons.min.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/flaticon.css">
        <link rel="stylesheet" href="${
          webConfig.siteURL
        }/assets/css/icomoon.css">
        <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/menu.css">
        <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/style.css">
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="${webConfig.siteURL}/client_bundle.js"></script>
        <script src="${webConfig.siteURL}/assets/js/jquery.min.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="${webConfig.siteURL}/assets/js/popper.min.js"></script>
        <script src="${webConfig.siteURL}/assets/js/bootstrap.min.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery.easing.1.3.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery.waypoints.min.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery.stellar.min.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/owl.carousel.min.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="${webConfig.siteURL}/assets/js/aos.js"></script>
        <script src="${
          webConfig.siteURL
        }/assets/js/jquery.animateNumber.min.js"></script>
        <script src="${webConfig.siteURL}/assets/js/scrollax.min.js"></script>
        <script src="${webConfig.siteURL}/assets/js/main.js"></script>
        
    </body>
</html>`;
};
