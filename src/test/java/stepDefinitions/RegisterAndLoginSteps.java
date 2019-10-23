package stepDefinitions;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class RegisterAndLoginSteps {
	WebDriver driver;
	String loginPageUrl, userID, password;
	
	@Given("^I open application$")
	public void iOpenApplication() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/v4/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^I get Login page Url$")
	public void iGetLoginPageUrl() {
		loginPageUrl = driver.getCurrentUrl();
	}

	@When("^I click to here link$")
	public void iClickToHereLink() {
		driver.findElement(By.xpath("//a[text()='here']")).click();
	}

	@When("^I input to email textbox with data \"([^\"]*)\"$")
	public void iInputToEmailTextboxWithData(String emailAddress) {
		driver.findElement(By.xpath("//input[@name='emailid']")).sendKeys(emailAddress+ randomData() + "@gmail.com");
	}

	@When("^I click to Submit button at Register page$")
	public void iClickToSubmitButtonAtRegisterPage() {
		driver.findElement(By.xpath("//input[@name='btnLogin']")).click();
	}

	@Then("^I get UserID infor$")
	public void iGetUserIDInfor() {
		userID = driver.findElement(By.xpath("//td[text()='User ID :']/following-sibling::td")).getText();
	}

	@Then("^I get Password infor$")
	public void iGetPasswordInfor() {
		password = driver.findElement(By.xpath("//td[text()='Password :']/following-sibling::td")).getText();
	}
	

	@When("^I open Login page again$")
	public void iOpenLoginPageAgain() {
		driver.get(loginPageUrl);
	}

	@When("^I input to Username textbox$")
	public void iInputToUsernameTextbox() {
		driver.findElement(By.xpath("//input[@name='uid']")).sendKeys(userID);
		
	}
	

	@When("^I input to Password textbox$")
	public void iInputToPasswordTextbox() {
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
		
	}
	

	@When("^I click to Login button at Login page$")
	public void iClickToLoginButtonAtLoginPage() {
		driver.findElement(By.xpath("//input[@name='btnLogin']")).click();
	}

	@Then("^Verify Home page displayed with message \"([^\"]*)\"$")
	public void verifyHomePageDisplayedWithMessage(String welcomeMsg) {
		Assert.assertTrue(driver.findElement(By.xpath("//marquee[text()=\""+welcomeMsg+"\"]")).isDisplayed());
	}
	public int randomData() {
		Random random = new Random();
		return random.nextInt(999);
	}

}
