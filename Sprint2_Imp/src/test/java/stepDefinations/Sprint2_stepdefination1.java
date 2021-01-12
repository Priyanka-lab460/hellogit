package stepDefinations;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.Home_Page;
import Pages.Sign_In_Page;
import Pages.Success_Page;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sprint2_stepdefination1 {
	WebDriver driver;
	Home_Page hp;
	Sign_In_Page sip;
	Success_Page sp;
	@Before
	    public void setup() throws Throwable {
			 System.setProperty("webdriver.chrome.driver","./drivers/chromedriver.exe");
				driver=new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
				driver.get("https://www.opentable.com/"); 
				hp=new Home_Page(driver);
				sip=new Sign_In_Page(driver);
				sp=new Success_Page(driver); 
	    }
	@After
	public void teardown() {
		driver.close();
	}
	 @Given("^User click on Sign In button$")
	    public void user_click_on_sign_in_button() throws Throwable {
		 hp.clickSignIn();
	    }

	    @When("^User click on Email field$")
	    public void user_click_on_email_field() throws Throwable {
	    	sip.clickEmail();
	    }

	    @When("^User click on Forgot password$")
	    public void user_click_on_forgot_password() throws Throwable {
	    	sip.clickforpass();
	    }

	    @When("^User click on Continue with booking$")
	    public void user_click_on_continue_with_booking() throws Throwable {
	    	sip.clickbook();  
	    }

	    @When("^User click on Continue with facebook$")
	    public void user_click_on_continue_with_facebook() throws Throwable {
	    	sip.clickfb();
	    }

	    @When("^User click on Continue with Google$")
	    public void user_click_on_continue_with_google() throws Throwable {
	    	sip.clickgoogle();
	    }

	    @When("^User click on Create New Account$")
	    public void user_click_on_create_new_account() throws Throwable {
	    	sip.clickcrn();
	    }

	    @When("^User click on Terms of Service$")
	    public void user_click_on_terms_of_service() throws Throwable {
	    	sip.clicktas();
	    }

	   /*@When("^User click on Privacy Policy$")
	    public void user_click_on_privacy_policy() throws Throwable {
	    	WebElement iframeElement = driver.findElement(By.xpath("//iframe[@title='Sign in']"));
	    	 driver.switchTo().frame(iframeElement);
	    	 Thread.sleep(3000);
	    	driver.findElement(By.xpath("//a[text()='Privacy Policy']")).click();
	    	Thread.sleep(3000);
	    	System.out.println("11");
	    	
	    }*/

	    @Then("^User verify the error message 1$")
	    public void user_verify_the_error_message_1() throws Throwable {
	    	String exp="Please enter your Email";
	    	String act=sip.verifye1();
	    	org.junit.Assert.assertEquals(exp,act);
	    	System.out.println(act);
	    	
	    }

	    @Then("^User verify the error message 2$")
	    public void user_verify_the_error_message_2() throws Throwable {
	    	String exp="Your email and password don't match. Please try again.";
	    	String act=sip.verifye2();
	    	org.junit.Assert.assertEquals(exp,act);
	    	System.out.println(act);
	    }

	    @Then("^User verify the error message 3$")
	    public void user_verify_the_error_message_3() throws Throwable {
	    	String exp="Please enter your password.";
	    	String act=sip.verifye3();
	    	org.junit.Assert.assertEquals(exp,act);
	    	System.out.println(act);
	    }
	    /*@Then("^User verify the error message 4$")
	    public void user_verify_the_error_message_4() throws Throwable {
	    	String exp="Your email and password don't match. Please try again.";
	    	String act=sip.verifye4();
	    	org.junit.Assert.assertEquals(exp,act);
	    	System.out.println("Your email and password don't match. Please try again.");
	    	driver.switchTo().defaultContent();
	    }*/

	    @Then("^User navigates to Account page$")
	    public void user_navigates_to_account_page() throws Throwable {
	    	sp.navigateaccountpg();
	    }

	    @Then("^User navigates to retrieve password page$")
	    public void user_navigates_to_retrieve_password_page() throws Throwable {
	    	String s=sp.navigateretpass();
			System.out.println(s);
			String exp="Retrieve Password";
	    	org.junit.Assert.assertEquals(exp,s);
			
	    }

	    @Then("^User navigates to booking webpage$")
	    public void user_navigates_to_booking_webpage() throws Throwable {    
			String s=sp.navigatestobook();
			System.out.println(s);
			String exp="Booking.com";
	    	org.junit.Assert.assertEquals(exp,s);
			Thread.sleep(3000); 
	    }

	    @Then("^User navigates to facebook webpage$")
	    public void user_navigates_to_facebook_webpage() throws Throwable {
				String s=sp.navigatestoface();
				System.out.println(s);
				String exp="Log in to Facebook | Facebook";
		    	org.junit.Assert.assertEquals(exp,s);
			Thread.sleep(3000); 
	    }

	    @Then("^User navigates to Google webpage$")
	    public void user_navigates_to_google_webpage() throws Throwable {
			String s=sp.navigatestogoogle();
			System.out.println(s);
			String exp="Sign in – Google accounts";
	    	org.junit.Assert.assertEquals(exp,s);
			Thread.sleep(3000); 
	    }

	    @Then("^User navigates to Sign Up page$")
	    public void user_navigates_to_sign_up_page() throws Throwable {
	    	Thread.sleep(1000);
	    	String s=sp.navigatesignUp();
	    	String exp="Welcome to OpenTable!";
	    	org.junit.Assert.assertEquals(exp,s);
	    	System.out.println(s);
	    }

	    @Then("^User navigates to Terms of Service webpage$")
	    public void user_navigates_to_terms_of_service_webpage() throws Throwable {
	    	String s=sp.navigatetas();
	    	String exp="Terms of Service";
	    	org.junit.Assert.assertEquals(exp,s);
	    	Thread.sleep(1000);
	    	System.out.println(s);
	    }

	  /* @Then("^User navigates to Privacy Policy webpage$")
	    public void user_navigates_to_privacy_policy_webpage() throws Throwable {
	    	Thread.sleep(3000);
	    	String s=driver.findElement(By.xpath("(//span[text()='Terms of Service'])[1]")).getText();
	    	System.out.println(s);
	    	String exp="Privacy Check-Up";
	    	org.junit.Assert.assertEquals(exp,s);
	    	Thread.sleep(3000);
	    }*/

	    @And("^User Click on Password field$")
	    public void user_click_on_password_field() throws Throwable {
	    	sip.clickpass();
	    }

	    @And("^User enter valid (.+)$")
	    public void user_enter_valid(String password) throws Throwable {
	    	sip.entervalidpass(password);
	    }

	    @And("^User click on Sign In1$")
	    public void user_click_on_sign_in1() throws Throwable {
	    	sip.clicksignin1();
	    }

	    @And("^User Enter invalid Email$")
	    public void user_enter_invalid_email() throws Throwable {
	    	sip.enterinvalidemail();
	    }

	    @And("^User Enter valid but not registered Email$")
	    public void user_enter_valid_but_not_registered_email() throws Throwable {
	    	sip.entervalidnotregisteredemail();
	    }

	    @And("^User Enter valid and registered (.+)$")
	    public void user_enter_valid_and_registered(String Email) throws Throwable {
	    	sip.entervalidemail(Email);
	    }

	    @And("^User enters password greater than 40 characters$")
	    public void user_enters_password_greater_than_40_characters() throws Throwable {
	    	sip.enterpassgreater40();
	    	
	    }

	    @And("^User enters invalid password$")
	    public void user_enters_invalid_password() throws Throwable {
	    	sip.enterinvalidpass();
	    }
}
