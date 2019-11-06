package bank.stepDefinitions;

import commons.PageGeneratorManager;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.EditAccountPageObject;

public class EditAccountPageSteps {
    WebDriver driver;
    EditAccountPageObject editAccountPage;

    public EditAccountPageSteps() {
        driver = cucumberOptions.Hooks.openAndQuitBrowser();
        editAccountPage = PageGeneratorManager.getEditAccountPage(driver);
    }
    @When("^I input firstAccountID$")
    public void i_input_firstaccountid() {
        editAccountPage.inputAccountID(NewAccountPageSteps.firstAccountID);
    }

}