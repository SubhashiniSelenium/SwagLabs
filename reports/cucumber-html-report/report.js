$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/swag.feature");
formatter.feature({
  "line": 1,
  "name": "Swag labs",
  "description": "",
  "id": "swag-labs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login to Swag labs with valid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Assert if the product_label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5437654635,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_opens_Swaglabs_homepage()"
});
formatter.result({
  "duration": 3158642462,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 346469467,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_the_login_button()"
});
formatter.result({
  "duration": 3601080587,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_product_label_is_displayed()"
});
formatter.result({
  "duration": 159241379,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to Swag labs with invalid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters invalid  username and password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user clicks the login button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Assert if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 3374078228,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_opens_swaglabs_homepage()"
});
formatter.result({
  "duration": 2388285007,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_enters_invalid_username_and_password()"
});
formatter.result({
  "duration": 252439441,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_clicks_the_login_button()"
});
formatter.result({
  "duration": 99082787,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_error_message_is_displayed()"
});
formatter.result({
  "duration": 285785614,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Sorting in the order of A-Z",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-a-z",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on Name A to Z",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "compare the first two item names",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "assert if the two names are in alpahbetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser1()"
});
formatter.result({
  "duration": 3232466876,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application1()"
});
formatter.result({
  "duration": 6660242996,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_A_to_Z()"
});
formatter.result({
  "duration": 242160038,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_names()"
});
formatter.result({
  "duration": 86252552,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_names_are_in_alpahbetical_order()"
});
formatter.result({
  "duration": 119446581,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Sorting in the order of Z-A",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-z-a",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TS_04"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "click on Name Z to A",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "compare the first two item names",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Assert if the two names are in alpahbetical order of Z-A",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser2()"
});
formatter.result({
  "duration": 3356902824,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application2()"
});
formatter.result({
  "duration": 11311377256,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_Z_to_A()"
});
formatter.result({
  "duration": 3212062026,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_names()"
});
formatter.result({
  "duration": 105094903,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_names_are_in_alpahbetical_order_of_Z_A()"
});
formatter.result({
  "duration": 491750396,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Sorting in the order of low to high price",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-low-to-high-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TS_05"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "LAunching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "LAunching the application",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on Name price low to high",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "compare the first two item prices",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Assert if the two item prices are in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser3()"
});
formatter.result({
  "duration": 3534315188,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application3()"
});
formatter.result({
  "duration": 8447821136,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_price_low_to_high()"
});
formatter.result({
  "duration": 3410278919,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_prices()"
});
formatter.result({
  "duration": 95100469,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_item_prices_are_in_ascending_order()"
});
formatter.result({
  "duration": 61721091,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Sorting in the order of high to low price",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-high-to-low-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TS_06"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "LAUnching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "LAUnching the application",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "click on Name price high to low",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "compare the first two item prices",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Assert if the two item prices are in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser4()"
});
formatter.result({
  "duration": 3477681272,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application4()"
});
formatter.result({
  "duration": 9236576584,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_price_high_to_low()"
});
formatter.result({
  "duration": 3248024237,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_prices()"
});
formatter.result({
  "duration": 101658977,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_item_prices_are_in_descending_order()"
});
formatter.result({
  "duration": 2136263360,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Adding to cart",
  "description": "",
  "id": "swag-labs;adding-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@TS_07"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "LAUNching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "LAUNching the application",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "cLick on ADD TO CART of selected item",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Assert if the item is added in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser5()"
});
formatter.result({
  "duration": 3702406899,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application5()"
});
formatter.result({
  "duration": 10905233402,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_ADD_TO_CART_of_selected_item()"
});
formatter.result({
  "duration": 92269498,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_item_is_added_in_the_cart()"
});
formatter.result({
  "duration": 3127392500,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Remove from cart",
  "description": "",
  "id": "swag-labs;remove-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TS_08"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "LAUNChing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "LAUNChing the application",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "cLick REMOVE of selected item which is carted",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Assert if the item is removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser6()"
});
formatter.result({
  "duration": 3191085429,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application6()"
});
formatter.result({
  "duration": 13236652656,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_REMOVE_of_selected_item_which_is_carted()"
});
formatter.result({
  "duration": 158544052,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_item_is_removed_from_the_cart()"
});
formatter.result({
  "duration": 3138575108,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Logout of Application",
  "description": "",
  "id": "swag-labs;logout-of-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@TS_09"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "LAUNCHing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "LAUNCHing the application",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Click on Menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Click on Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Assert if the application is showing the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser7()"
});
formatter.result({
  "duration": 3324103647,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application7()"
});
formatter.result({
  "duration": 7285684184,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Menu_bar()"
});
formatter.result({
  "duration": 98185618,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Logout_button()"
});
formatter.result({
  "duration": 1264993160,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_application_is_showing_the_login_page()"
});
formatter.result({
  "duration": 307978159,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Navigating to Saucelabs",
  "description": "",
  "id": "swag-labs;navigating-to-saucelabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@TS_10"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "LAUNCHIng the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "LAUNCHIng the application",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "CLick on menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Click on About",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Assert if the page is navigating to saucelabs",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser8()"
});
formatter.result({
  "duration": 3797939048,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application8()"
});
formatter.result({
  "duration": 10290982671,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_menu_bar()"
});
formatter.result({
  "duration": 96254835,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_About()"
});
formatter.result({
  "duration": 28516817382,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_page_is_navigating_to_saucelabs()"
});
formatter.result({
  "duration": 809502621,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Searching Invalid information",
  "description": "",
  "id": "swag-labs;searching-invalid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@TS_11"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "LAUNCHINg the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "LAUNCHINg the application",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "CLIck on search Symbol",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "Enter the invalid info and click Enter from keyboard",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Assert True if it is Displaying No Results found",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser9()"
});
formatter.result({
  "duration": 57488822,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\SeleniumJars\\Google Chrome Driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.stepdefinition.Stepdefinition.launching_the_browser9(Stepdefinition.java:357)\r\n\tat ✽.Given LAUNCHINg the browser(src/main/resources/features/swag.feature:83)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application9()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.click_on_search_Symbol1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.enter_the_invalid_info_and_click_Enter_from_keyboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.assert_True_if_it_is_Displaying_No_Results_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 90,
  "name": "Searching valid information",
  "description": "",
  "id": "swag-labs;searching-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@TS_12"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "LAUNCHING the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "LAUNCHING the application",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "click on search Symbol",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Enter the valid info and click Enter from keyboard",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "Assert True if it is not  Displaying No Results found",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser10()"
});
formatter.result({
  "duration": 4133858,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\SeleniumJars\\Google Chrome Driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.stepdefinition.Stepdefinition.launching_the_browser9(Stepdefinition.java:357)\r\n\tat com.stepdefinition.Stepdefinition.launching_the_browser10(Stepdefinition.java:392)\r\n\tat ✽.Given LAUNCHING the browser(src/main/resources/features/swag.feature:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application10()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.click_on_search_Symbol()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.enter_the_valid_info_and_click_Enter_from_keyboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.assert_True_if_it_is_not_Displaying_No_Results_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 98,
  "name": "Accepting valid mail ID format  to join",
  "description": "",
  "id": "swag-labs;accepting-valid-mail-id-format--to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@TS_13"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "LAUNCHING The browser",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "LAUNCHING The application",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "enter the valid email format  and click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "Assert if it is displaying Thank you message",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_The_browser()"
});
formatter.result({
  "duration": 3466572925,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_The_application()"
});
formatter.result({
  "duration": 14172924105,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_valid_email_format_and_click_on_submit_button()"
});
formatter.result({
  "duration": 218750339,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_Thank_you_message()"
});
formatter.result({
  "duration": 2180939455,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Accepting Invalid mail format ID to join",
  "description": "",
  "id": "swag-labs;accepting-invalid-mail-format-id-to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "LAUNCHING THe browser",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "LAUNCHING THe application",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "enter the Invalid email format  and click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Assert if it is displaying an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THe_browser()"
});
formatter.result({
  "duration": 3469969607,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THe_application()"
});
formatter.result({
  "duration": 18000321193,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_Invalid_email_format_and_click_on_submit_button()"
});
formatter.result({
  "duration": 224386924,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_an_error_message()"
});
formatter.result({
  "duration": 2209375955,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Switching to new window",
  "description": "",
  "id": "swag-labs;switching-to-new-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@TS_15"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "LAUNCHING THE browser",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "LAUNCHING THE Application",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "click on resources",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "click on selenium",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Assert if it is Switching to the new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THE_browser()"
});
formatter.result({
  "duration": 3235727111,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THE_Application()"
});
formatter.result({
  "duration": 18774431542,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_resources()"
});
formatter.result({
  "duration": 42866,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_selenium()"
});
formatter.result({
  "duration": 733141261,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_Switching_to_the_new_tab()"
});
formatter.result({
  "duration": 65950945,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Displaying the copyright",
  "description": "",
  "id": "swag-labs;displaying-the-copyright",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 119,
      "name": "@TS_16"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "LAUNCHING THE Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "LAUNCHING THE APPlication",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "Assert if it is displaying the copyright in the footer section",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THE_Browser()"
});
formatter.result({
  "duration": 3313224120,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THE_APPlication()"
});
formatter.result({
  "duration": 13331774861,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_the_copyright_in_the_footer_section()"
});
formatter.result({
  "duration": 248464973,
  "status": "passed"
});
});