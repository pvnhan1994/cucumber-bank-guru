package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.AbstractPage;
import pageUIs.EditAccountPageUI;

public class EditAccountPageObject extends AbstractPage {
	WebDriver driver;

	public EditAccountPageObject(WebDriver mappingDriver) {
		driver = mappingDriver;
	}

	public void inputAccountID(String value){
		waitForElementVisible(driver, EditAccountPageUI.TEXTBOX_ACCOUNT_ID);
		sendkeyElement(driver, EditAccountPageUI.TEXTBOX_ACCOUNT_ID,value);
	}
}
