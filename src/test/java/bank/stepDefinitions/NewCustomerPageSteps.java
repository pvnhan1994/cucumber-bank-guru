package bank.stepDefinitions;

import commons.PageGeneratorManager;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import cucumberOptions.Hooks;
import pageObjects.NewCustomerPageObject;

public class NewCustomerPageSteps {
    WebDriver driver;
    NewCustomerPageObject newCustomerPage;
    static  String customerID;

    public NewCustomerPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        newCustomerPage = PageGeneratorManager.getNewCustomerPage(driver);
    }

    @Then("^I get CustomerID$")
    public void iGetCustomerID() {
        customerID = newCustomerPage.getTextCustomerID();
    }
}
