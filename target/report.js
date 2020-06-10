$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/fblogin.feature");
formatter.feature({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has to be there in the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBLoginPageStpes.user_has_to_be_there_in_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the user can able login with incorrect credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has to fill the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname"
      ]
    },
    {
      "cells": [
        "Rajesh",
        "1321313",
        "Syed"
      ]
    },
    {
      "cells": [
        "Suresh",
        "qwrqeqr",
        "Farith"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FBLoginPageStpes.user_has_to_fill_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FBLoginPageStpes.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user is naviagting the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginPageStpes.verify_user_is_naviagting_the_login_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...://www.facebook.com/[login/device-based/regular/login/?login_attempt\u003d1\u0026lwv\u003d110]\u003e but was:\u003c...://www.facebook.com/[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat org.stepdefinition.FBLoginPageStpes.verify_user_is_naviagting_the_login_page(FBLoginPageStpes.java:49)\r\n\tat ✽.Verify user is naviagting the login page(file:src/test/resources/fblogin.feature:14)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has to be there in the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBLoginPageStpes.user_has_to_be_there_in_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the user can create an account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has to fill firstname.lastname,mobileno,dob and clicks the signup button",
  "keyword": "When "
});
formatter.match({
  "location": "FBLoginPageStpes.user_has_to_fill_firstname_lastname_mobileno_dob_and_clicks_the_signup_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QUNU5J4I\u0027, ip: \u0027192.168.43.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\HAIGUY~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65423}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: caa7a3681846b3bd066fc37ad5299677\n*** Element info: {Using\u003did, value\u003du_0_13}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.FBLoginPageStpes.user_has_to_fill_firstname_lastname_mobileno_dob_and_clicks_the_signup_button(FBLoginPageStpes.java:57)\r\n\tat ✽.User has to fill firstname.lastname,mobileno,dob and clicks the signup button(file:src/test/resources/fblogin.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user can able to create an account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginPageStpes.user_can_able_to_create_an_account_successfully()"
});
formatter.result({
  "status": "skipped"
});
});