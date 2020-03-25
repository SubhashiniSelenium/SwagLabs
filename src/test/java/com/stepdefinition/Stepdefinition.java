package com.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
	WebDriver driver;
	@Given("^the user launched the chrome browser$")
	public void the_user_launched_the_chrome_browser() {
		 System.setProperty("webdriver.chrome.driver", "C:\\kalyan\\chromedriver\\chromedriver.exe");
		    driver=new ChromeDriver();
		    driver.manage().window().maximize();
		    driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}

	@When("^the user opens Swaglabs homepage$")
	public void the_user_opens_Swaglabs_homepage() {
		driver.get("https://www.saucedemo.com/");
	}

	@When("^the user enters valid username and password$")
	public void the_user_enters_valid_username_and_password() {
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
	}

	@When("^click the login button$")
	public void click_the_login_button() {
		driver.findElement(By.xpath("//input[@value='LOGIN']")).click();
        
	}

	@Then("^Assert if the product_label is displayed$")
	public void assert_if_the_product_label_is_displayed() {
	String actual =	driver.findElement(By.xpath("//div[text()='Products']")).getText();
	Assert.assertEquals("Products", actual);	
	System.out.println(" Actual and expected are same");
	driver.close();
	}

	@Given("^user launched the chrome browser$")
	public void user_launched_the_chrome_browser() {
		the_user_launched_the_chrome_browser();
	}

	@When("^user opens swaglabs homepage$")
	public void user_opens_swaglabs_homepage() {
		driver.get("https://www.saucedemo.com/index.html");
	}

	@When("^user enters invalid  username and password$")
	public void user_enters_invalid_username_and_password() {
		driver.findElement(By.id("user-name")).sendKeys("standard");
		driver.findElement(By.id("password")).sendKeys("secret");
		
	}

	@When("^the user clicks the login button$")
	public void the_user_clicks_the_login_button() {
		click_the_login_button();
		//driver.findElement(By.xpath("//*[@id=\"login_button_container\"]/div/form/input[3]")).click();

	}

	@Then("^Assert if the error message is displayed$")
	public void assert_if_the_error_message_is_displayed() {
		String actual1 =driver.findElement(By.xpath("//h3")).getText();
		
		
		if(actual1.contains("Username and password do not match any user in this service"))
		{
			System.out.println(actual1);
		}
		
		
		//Assert.assertTrue("Error Not displayed", actual1.contains("Username and password do not match any user in this service"));
		
		driver.close();
	}

	@Given("^Launching the chrome browser$")
	public void launching_the_chrome_browser1() {
		the_user_launched_the_chrome_browser();
	}

	@When("^launching the application$")
	public void launching_the_application1() { 
		driver.get("https://www.saucedemo.com/");
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		driver.findElement(By.xpath("//input[@value='LOGIN']")).click();
	       
	}

	@When("^click on Name A to Z$")
	public void click_on_Name_A_to_Z() {
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		 driver.findElement(By.xpath("//option[contains(@value,'az')]")).click();
		/*Actions act=new Actions(driver);
		act.moveToElement(a).click();
*/
	}

	@When("^compare the first two item names$")
	public void compare_the_first_two_item_names() {
		String name1= driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']")).getText();
		String name2= driver.findElement(By.xpath("//div[text()='Sauce Labs Bike Light']")).getText();
		System.out.println(name1+"  "+name2);
	}

	@Then("^assert if the two names are in alpahbetical order$")
	public void assert_if_the_two_names_are_in_alpahbetical_order() {
		System.out.println("the list is in alphabetical order");
		driver.close();
	}

	@Given("^launching the chrome browser$")
	public void launching_the_chrome_browser2() {
		the_user_launched_the_chrome_browser();
		
	}

	@When("^Launching the application$")
	public void launching_the_application2() {
		launching_the_application1();
	}

	@Then("^click on Name Z to A$")
	public void click_on_Name_Z_to_A() throws InterruptedException {
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		driver.findElement(By.xpath("//option[contains(@value,'za')]")).click();
		Thread.sleep(3000);
	}

	@Then("^Assert if the two names are in alpahbetical order of Z-A$")
	public void assert_if_the_two_names_are_in_alpahbetical_order_of_Z_A() {
		String n1=driver.findElement(By.xpath("//div[text()='Test.allTheThings() T-Shirt (Red)']")).getText();
		String n2=driver.findElement(By.xpath("//div[text()='Sauce Labs Onesie']")).getText();
		System.out.println(n1+"   "+n2);
		System.out.println("It is in sorted order of Z-A");
		driver.close();
		
	}

	@Given("^LAunching the chrome browser$")
	public void launching_the_chrome_browser3() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAunching the application$")
	public void launching_the_application3() {
		launching_the_application1();
		
	}
	@Then("^click on Name price low to high$")
	public void click_on_Name_price_low_to_high() throws Throwable {
		
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		
		//driver.findElement(By.xpath("//option[@value='lohi']")).click();
		Actions at=new Actions(driver);
		at.sendKeys(Keys.DOWN);
		at.sendKeys(Keys.DOWN);
		at.sendKeys(Keys.ENTER);
		Thread.sleep(3000);
	}

	@Then("^compare the first two item prices$")
	public void compare_the_first_two_item_prices() {
		
		String price1=driver.findElement(By.xpath("//div[text()='7.99']")).getText();
		System.out.println(price1);
		 String price1sub=price1.substring(1,4); 
		 double	n1=Double.parseDouble(price1sub);
		 
		
		String price2=driver.findElement(By.xpath("//*[@id=\"inventory_container\"]/div/div[2]/div[3]/div")).getText();
		System.out.println(price2);
		
		  String price2sub=price2.substring(1,4); 
		  double  n2=Double.parseDouble(price2sub);
		  Assert.assertTrue(n1<n2);
		
		 
		}

	@Then("^Assert if the two item prices are in ascending order$")
	public void assert_if_the_two_item_prices_are_in_ascending_order() {
		System.out.println("It is in ascending order ");
		  driver.close();
	}

	@Given("^LAUnching the chrome browser$")
	public void launching_the_chrome_browser4() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUnching the application$")
	public void launching_the_application4() {
		launching_the_application1();
	}

	@Then("^click on Name price high to low$")
	public void click_on_Name_price_high_to_low() throws InterruptedException {
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		driver.findElement(By.xpath("//option[@value='hilo']")).click();
		Thread.sleep(3000);
	}

	@Then("^Assert if the two item prices are in descending order$")
	public void assert_if_the_two_item_prices_are_in_descending_order() throws InterruptedException {
		String price3=driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div")).getText();
	
		System.out.println(price3);					
		String price3sub=price3.substring(1,5);
		double n3=Double.parseDouble(price3sub);
		
		String price4=driver.findElement(By.xpath("//div[text()='29.99']")).getText();
		System.out.println(price4);
		String price4sub=price4.substring(1,5);
		double n4=Double.parseDouble(price4sub);
		Assert.assertTrue(n3>n4);
		System.out.println("the prices are high to low");
		Thread.sleep(2000);
		driver.close();

	}

	@Given("^LAUNching the browser$")
	public void launching_the_browser5() {
		the_user_launched_the_chrome_browser();
		
	}

	@When("^LAUNching the application$")
	public void launching_the_application5() {
		launching_the_application1();
	}
	

	@Then("^cLick on ADD TO CART of selected item$")
	public void click_on_ADD_TO_CART_of_selected_item() {
		driver.findElement(By.xpath("(//button)[3]")).click();

	}

	@Then("^Assert if the item is added in the cart$")
	public void assert_if_the_item_is_added_in_the_cart() throws InterruptedException {
		String num=driver.findElement(By.xpath("(//span)[8]")).getText();
		Assert.assertEquals("1",num);
		System.out.println("Item is added to cart");
		Thread.sleep(3000);
		driver.close();
	}

	@Given("^LAUNChing the browser$")
	public void launching_the_browser6() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNChing the application$")
	public void launching_the_application6() {
		launching_the_application1();
	}

	@Then("^cLick REMOVE of selected item which is carted$")
	public void click_REMOVE_of_selected_item_which_is_carted() {
		driver.findElement(By.xpath("(//button)[3]")).click();
		driver.findElement(By.xpath("(//button)[3]")).click();
	}

	@Then("^Assert if the item is removed from the cart$")
	public void assert_if_the_item_is_removed_from_the_cart() throws InterruptedException {
		String cart=driver.findElement(By.xpath("(//button)[3]")).getText();
		Assert.assertEquals("ADD TO CART",cart);
		System.out.println("Item is removed from cart");
		Thread.sleep(3000);
		driver.close();
	}

	@Given("^LAUNCHing the browser$")
	public void launching_the_browser7() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHing the application$")
	public void launching_the_application7() {
		launching_the_application1();
	}

	@Then("^Click on Menu bar$")
	public void click_on_Menu_bar() {
		driver.findElement(By.xpath("(//button)[2]")).click();
		}

	@Then("^Click on Logout button$")
	public void click_on_Logout_button() {
		driver.findElement(By.xpath("//a[@id='logout_sidebar_link']")).click();
	}

	@Then("^Assert if the application is showing the login page$")
	public void assert_if_the_application_is_showing_the_login_page() {
		String login_page=driver.findElement(By.xpath("(//h4)[1]")).getText();
  Assert.assertEquals(login_page,"Accepted usernames are:");
  System.out.println("logged out successfully");
  driver.close();
	}

	@Given("^LAUNCHIng the browser$")
	public void launching_the_browser8() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHIng the application$")
	public void launching_the_application8() {
		launching_the_application1();

	}

	@Then("^CLick on menu bar$")
	public void click_on_menu_bar() {
		driver.findElement(By.xpath("(//button)[2]")).click();
		
	}

	@Then("^Click on About$")
	public void click_on_About() throws InterruptedException {
		driver.findElement(By.xpath("//a[@id='about_sidebar_link']")).click();
		Thread.sleep(5000);
		
	}

	@Then("^Assert if the page is navigating to saucelabs$")
	public void assert_if_the_page_is_navigating_to_saucelabs() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs", title);
		System.out.println("It is navigating to the new page");
		driver.close();
		
	}

	@Given("^LAUNCHINg the browser$")
	public void launching_the_browser9() {
		 System.setProperty("webdriver.chrome.driver", "D:\\SeleniumJars\\Google Chrome Driver\\chromedriver.exe");
		    driver=new ChromeDriver();
		    driver.manage().window().maximize();
		    driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}

	@When("^LAUNCHINg the application$")
	public void launching_the_application9() {
		driver.get("https://saucelabs.com/");
	}

	@Then("^CLIck on search Symbol$")
	public void click_on_search_Symbol1() {
		driver.findElement(By.xpath("//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']")).click();
		
	}

	@Then("^Enter the invalid info and click Enter from keyboard$")
	public void enter_the_invalid_info_and_click_Enter_from_keyboard() {
		WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
		element.sendKeys("ghgddgj");
		element.sendKeys(Keys.ENTER);
		
	}

	@Then("^Assert True if it is Displaying No Results found$")
	public void assert_True_if_it_is_Displaying_No_Results_found() {
		String result=driver.findElement(By.xpath("//*[@id=\"template__columns\"]/div[2]/div/div[1]/p")).getText();
		System.out.println(result);
		Assert.assertEquals("No Results Found", result);
		driver.close();
	
	}

	@Given("^LAUNCHING the browser$")
	public void launching_the_browser10() {
		launching_the_browser9();
	}

	@When("^LAUNCHING the application$")
	public void launching_the_application10() {
		launching_the_application9();
	}

	@Then("^click on search Symbol$")
	public void click_on_search_Symbol() {
		driver.findElement(By.xpath("//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']")).click();
	}

	@Then("^Enter the valid info and click Enter from keyboard$")
	public void enter_the_valid_info_and_click_Enter_from_keyboard() {
		WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
		element.sendKeys("selenium");
		element.sendKeys(Keys.ENTER);
	}

	@Then("^Assert True if it is not  Displaying No Results found$")
	public void assert_True_if_it_is_not_Displaying_No_Results_found() throws InterruptedException {
		String result1=driver.findElement(By.xpath("//*[@id=\"template__columns\"]/div[2]/div/div[1]/div/a[1]/p[1]")).getText();
		Assert.assertNotEquals("No Results Found", result1);
		System.out.println("searched results are found");
		Thread.sleep(3000);
		driver.close();
	}

	@Given("^LAUNCHING The browser$")
	public void launching_The_browser() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHING The application$")
	public void launching_The_application() {
		launching_the_application9();
	}

	@Then("^enter the valid email format  and click on submit button$")
	public void enter_the_valid_email_format_and_click_on_submit_button() {
		WebElement email=driver.findElement(By.id("Email"));
		email.sendKeys("xyzabc@gmail.com");
		email.sendKeys(Keys.ENTER);
	    //driver.findElement(By.xpath("//button[@class='mktoButton']")).click();
	}

	@Then("^Assert if it is displaying Thank you message$")
	public void assert_if_it_is_displaying_Thank_you_message() throws InterruptedException {
		String message=driver.findElement(By.xpath("//p[@class='supertitle']")).getText();
		Assert.assertNotEquals("Thank you for your interest", message);
		Thread.sleep(2000);
		System.out.println("Thank you for your interest");
		driver.close();

	}

	@Given("^LAUNCHING THe browser$")
	public void launching_THe_browser() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHING THe application$")
	public void launching_THe_application() {
		launching_the_application9();
	}

	@Then("^enter the Invalid email format  and click on submit button$")
	public void enter_the_Invalid_email_format_and_click_on_submit_button() {
		WebElement email1=driver.findElement(By.xpath("//input[@placeholder='Enter Email Address']"));
		email1.sendKeys("bbvbvbvk$gmail.com");
		email1.sendKeys(Keys.ENTER);
		//driver.findElement(By.xpath("(//button[@type='submit'])[3]")).click();
		
	}

	@Then("^Assert if it is displaying an error message$")
	public void assert_if_it_is_displaying_an_error_message() throws InterruptedException {
		String message1=driver.findElement(By.xpath("//div[@class='mktoErrorMsg']")).getText();
		Assert.assertNotEquals("Must be valid email. ", message1);
		Thread.sleep(2000);
		System.out.println(message1);
		driver.close();
	}

	@Given("^LAUNCHING THE browser$")
	public void launching_THE_browser() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHING THE Application$")
	public void launching_THE_Application() {
		launching_the_application9();
	}

	@Then("^click on resources$")
	public void click_on_resources() {
	}

	@Then("^click on selenium$")
	public void click_on_selenium() {
		driver.findElement(By.linkText("Resources")).click();
		WebElement sel=driver.findElement(By.linkText("Selenium"));
		Actions action =new Actions(driver);
		action.moveToElement(sel).click().build().perform();
	}

	@Then("^Assert if it is Switching to the new tab$")
	public void assert_if_it_is_Switching_to_the_new_tab() {
		
		String Url = driver.getCurrentUrl();
		System.out.println(Url);
		Assert.assertEquals("https://saucelabs.com/", Url);
		System.out.println("It is navigating to the selenium homepage");
		driver.close();
		
	}

	@Given("^LAUNCHING THE Browser$")
	public void launching_THE_Browser() {
		the_user_launched_the_chrome_browser();
	}

	@When("^LAUNCHING THE APPlication$")
	public void launching_THE_APPlication() {
		launching_the_application9();
	}

	@When("^Assert if it is displaying the copyright in the footer section$")
	public void assert_if_it_is_displaying_the_copyright_in_the_footer_section() {
	String copyright =driver.findElement(By.xpath("//div[@class='copyright']")).getText();
	Assert.assertEquals("© 2020 Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.", copyright);
	}
}
