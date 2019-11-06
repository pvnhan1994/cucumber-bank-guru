package bank.stepDefinitions;

import commons.PageGeneratorManager;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;


import cucumberOptions.Hooks;
import pageObjects.LoginPageObject;

public class LoginPageSteps {
    WebDriver driver;
    LoginPageObject loginPage;
    static String loginPageUrl;

    public LoginPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        loginPage = PageGeneratorManager.getLoginPage(driver);
    }

    @When("^I get Login page Url$")
    public void iGetLoginPageUrl() {
        loginPageUrl = driver.getCurrentUrl();
    }

    @When("^I click to here link$")
    public void iClickToHereLink() {
        loginPage.clickToHereLink();
    }

    @When("^I input to Username textbox$")
    public void iInputToUsernameTextbox() {
        loginPage.inputToUsernameTextbox(RegisterPageSteps.userID);
    }

    @When("^I input to Password textbox$")
    public void iInputToPasswordTextbox() {
        loginPage.inputToPasswordTextbox(RegisterPageSteps.password);
    }

    @When("^I click to Login button at Login page$")
    public void iClickToLoginButtonAtLoginPage() {
        loginPage.clickToLoginButton();
    }

}
