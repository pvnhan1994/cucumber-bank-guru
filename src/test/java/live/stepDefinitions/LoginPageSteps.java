package live.stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginPageSteps {
    WebDriver driver;

    @Before("@live")
    public void init(){
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://live.demoguru99.com/");
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    @After("@live")
    public void closeBrowser(){
        driver.quit();
    }
    @Given("^I click to My Account$")
    public void i_click_to_my_account(){
        driver.findElement(By.xpath("//div[@class='footer']//a[text()='My Account']")).click();
    }

    @When("^I input to Username \"([^\"]*)\"$")
    public void iInputToUsername(String email){
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
    }

    @When("^I input to Password \"([^\"]*)\"$")
    public void iInputToPassword(String arg1){
        driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(arg1);
    }

    @When("^I click to Login button$")
    public void iClickToLoginButton(){
        driver.findElement(By.xpath("//button[@id='send2']")).click();
    }

}
