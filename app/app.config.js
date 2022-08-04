"use strict";

// import Gleap from "gleap";

var app = angular.module("phonecatApp");

app.config([
  "$routeProvider",
  "$httpProvider",
  function config($routeProvider, $httpProvider) {
    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>",
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>",
      })
      .otherwise("/phones");

    $httpProvider.interceptors.push([
      "$q",
      ($q) => ({
        request(config) {
          config.headers["Abp.Localization.CultureName"] = "HELLO";
          return config;
        },
      }),
    ]);
  },
]);

app.run([
  "$http",
  function ($http) {
    console.log("What`s your name?~~~~~");

    // Gleap.initialize("NhD0g284UtrvsVQtIPNczBQXZbovR9FH");

    setTimeout(function () {
      console.log("HTTP REQUEST");
      $http({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
      }).then(function (response) {
        console.log(response);
      });
    }, 5000);

    setTimeout(function () {
      console.log("AJAX REQUEST");

      $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
        success: function (result) {
          console.log(result);
        },
      });
    }, 5000);
  },
]);
