package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.AbstractPage;
import pageUIs.NewAccountPageUI;

public class NewAccountPageObject extends AbstractPage {
    WebDriver driver;


    public NewAccountPageObject(WebDriver mappingDriver) {
        driver = mappingDriver;
    }

    public void inputCustomerID(String value) {
        waitForElementVisible(driver, NewAccountPageUI.CUSTOMER_ID);
		sendkeyElement(driver,NewAccountPageUI.CUSTOMER_ID,value);
    }

    public String getAccountID() {
        waitForElementVisible(driver, NewAccountPageUI.ACCOUNT_ID);
        return getTextElement(driver,NewAccountPageUI.ACCOUNT_ID);
    }
}
