package cumcumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features", //tro den file feature
		glue = "bank/stepDefinitions",
		monochrome = true,
		plugin= {"pretty", "html:target/site/cucumber-report-default", "json:target/site/cucumber.json"},
		snippets = SnippetType.CAMELCASE,
		tags = {"@login"})

public class BankTestRunner {

}
