package bank.stepDefinitions;

import commons.PageGeneratorManager;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjects.NewAccountPageObject;

public class NewAccountPageSteps {
    WebDriver driver;
    NewAccountPageObject newAccountPage;
    static String firstAccountID, secondAccountID;
    public NewAccountPageSteps() {
        driver = cucumberOptions.Hooks.openAndQuitBrowser();
        newAccountPage = PageGeneratorManager.getNewAccountPage(driver);
    }

    @When("^I input CustomerID$")
    public void i_input_customerid(){
        newAccountPage.inputCustomerID(NewCustomerPageSteps.customerID);
    }
    @When("^I get FirstAccountID$")
    public void i_get_firstaccountid(){
        firstAccountID = newAccountPage.getAccountID();
    }

    @When("^I get SecondAccountID$")
    public void i_get_secondaccountid(){
        secondAccountID = newAccountPage.getAccountID();
    }

}
