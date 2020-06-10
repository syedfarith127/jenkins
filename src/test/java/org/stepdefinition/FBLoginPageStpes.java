package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class FBLoginPageStpes {
	static WebDriver driver;

	@Given("User has to be there in the FB login page")
	public void user_has_to_be_there_in_the_FB_login_page() {

//		System.setProperty("webdriver.chrome.driver",
		WebDriverManager.chromedriver().setup();
//				"C:\\Users\\Hai Guys\\eclipse-workspace\\CucumberProject\\src\\chromedriver.exe");
		
		
		
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	}
	@When("User has to fill the username and password")    //packagename.        classname  refname
	public void user_has_to_fill_the_username_and_password(io.cucumber.datatable.DataTable d) throws InterruptedException {

		List<Map<String, String>> mp = d.asMaps();
	driver.findElement(By.id("email")).sendKeys(mp.get(1).get("username"));
	driver.findElement(By.id("pass")).sendKeys(mp.get(0).get("firstname"));

	}
	@When("User clicks the login button")//User clicks the login button
	public void user_clicks_the_login_button() {
		WebElement button = driver.findElement(By.id("loginbutton"));
		button.click();
	}

	@Then("Verify user is naviagting the login page")
	public void verify_user_is_naviagting_the_login_page() {
		Assert.assertEquals("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110",
				driver.getCurrentUrl());
		System.out.println("User unable to login");

	}

	@When("User has to fill firstname.lastname,mobileno,dob and clicks the signup button")
	public void user_has_to_fill_firstname_lastname_mobileno_dob_and_clicks_the_signup_button() {
	 driver.findElement(By.id("u_0_13")).click();
	}

	@Then("user can able to create an account successfully")
	public void user_can_able_to_create_an_account_successfully() {
	  System.out.println("User can able to create a account");
	}

	
}
