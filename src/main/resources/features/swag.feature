Feature: Swag labs

@TS_01
Scenario:   Login to Swag labs with valid credentials
    Given the user launched the chrome browser
    When the user opens Swaglabs homepage
    When the user enters valid username and password
    When click the login button
    Then Assert if the product_label is displayed
 
@TS_02
Scenario:  Login to Swag labs with invalid credentials
  Given user launched the chrome browser
  When user opens swaglabs homepage
  When user enters invalid  username and password
  When the user clicks the login button
  Then Assert if the error message is displayed
  
@TS_03
 Scenario: Sorting in the order of A-Z
Given Launching the chrome browser
When launching the application
When click on Name A to Z
When compare the first two item names
Then assert if the two names are in alpahbetical order

 @TS_04
 Scenario: Sorting in the order of Z-A
Given launching the chrome browser
When Launching the application
When click on Name Z to A
When compare the first two item names
Then Assert if the two names are in alpahbetical order of Z-A

@TS_05 
 Scenario: Sorting in the order of low to high price
Given LAunching the chrome browser
When LAunching the application
When click on Name price low to high 
When compare the first two item prices
Then Assert if the two item prices are in ascending order

@TS_06
 Scenario: Sorting in the order of high to low price
 Given LAUnching the chrome browser
When LAUnching the application
When click on Name price high to low
When compare the first two item prices
Then Assert if the two item prices are in descending order

@TS_07
Scenario: Adding to cart
Given LAUNching the browser
When LAUNching the application
When cLick on ADD TO CART of selected item
Then Assert if the item is added in the cart

@TS_08
Scenario: Remove from cart
Given LAUNChing the browser
When LAUNChing the application
When cLick REMOVE of selected item which is carted
Then Assert if the item is removed from the cart

@TS_09 
Scenario: Logout of Application
Given LAUNCHing the browser
When LAUNCHing the application
When Click on Menu bar
When Click on Logout button
Then Assert if the application is showing the login page

@TS_10
Scenario: Navigating to Saucelabs
Given LAUNCHIng the browser
When LAUNCHIng the application
When CLick on menu bar
When Click on About 
Then Assert if the page is navigating to saucelabs

@TS_11
Scenario: Searching Invalid information
Given LAUNCHINg the browser
When LAUNCHINg the application
When CLIck on search Symbol
When Enter the invalid info and click Enter from keyboard
Then Assert True if it is Displaying No Results found

@TS_12
Scenario: Searching valid information
Given LAUNCHING the browser
When LAUNCHING the application
When click on search Symbol
When Enter the valid info and click Enter from keyboard
Then Assert True if it is not  Displaying No Results found

@TS_13
Scenario: Accepting valid mail ID format  to join 
Given LAUNCHING The browser
When LAUNCHING The application
When enter the valid email format  and click on submit button
Then Assert if it is displaying Thank you message

@TS_14
Scenario: Accepting Invalid mail format ID to join 
Given LAUNCHING THe browser
When LAUNCHING THe application
When enter the Invalid email format  and click on submit button
Then Assert if it is displaying an error message 

@TS_15
Scenario: Switching to new window
Given LAUNCHING THE browser
When LAUNCHING THE Application
When click on resources
When click on selenium
Then Assert if it is Switching to the new tab

@TS_16
Scenario: Displaying the copyright
Given LAUNCHING THE Browser
When LAUNCHING THE APPlication
Then Assert if it is displaying the copyright in the footer section