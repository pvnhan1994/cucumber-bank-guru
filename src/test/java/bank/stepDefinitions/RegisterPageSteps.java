package bank.stepDefinitions;

import java.util.Random;
import commons.PageGeneratorManager;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import pageObjects.RegisterPageObject;

public class RegisterPageSteps {
	WebDriver driver;
	static String userID, password;
	RegisterPageObject registerPage;

	public RegisterPageSteps(){
		driver= Hooks.openAndQuitBrowser();
		registerPage = PageGeneratorManager.getRegisterPage(driver);
	}

	@When("^I input to email textbox with data \"([^\"]*)\"$")
	public void iInputToEmailTextboxWithData(String emailAddress) {
		registerPage.inputToEmailTetxt(emailAddress+randomData()+"@gmail.com");
	}

	@When("^I click to Submit button at Register page$")
	public void iClickToSubmitButtonAtRegisterPage() {
		registerPage.clickToSubmitButton();
	}

	@When("^I open Login page again$")
	public void iOpenLoginPageAgain() {
		registerPage.openLoginPageUrl(LoginPageSteps.loginPageUrl);
	}

	@Then("^I get UserID infor$")
	public void iGetUserIDInfor() {
		userID = registerPage.getUsernameInformation();
	}

	@Then("^I get Password infor$")
	public void iGetPasswordInfor() {
		password = registerPage.getPasswordInformation();
	}



	



	public int randomData() {
		Random random = new Random();
		return random.nextInt(999);
	}

}
