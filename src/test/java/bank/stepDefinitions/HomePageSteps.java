package bank.stepDefinitions;

import commons.PageGeneratorManager;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.HomePageObject;
import cucumberOptions.Hooks;

public class HomePageSteps {
    WebDriver driver;
    HomePageObject homePage;

    public HomePageSteps(){
        driver = Hooks.openAndQuitBrowser();
        homePage = PageGeneratorManager.getHomePage(driver);

    }

    @Then("^Verify Home page displayed with message \"([^\"]*)\"$")
    public void verifyHomePageDisplayedWithMessage(String welcomeMsg) {
        Assert.assertTrue(homePage.isWelcomeMessageDisplayed(welcomeMsg));
    }
}
