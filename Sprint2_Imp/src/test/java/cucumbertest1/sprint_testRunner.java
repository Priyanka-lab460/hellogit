package cucumbertest1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//for Cucumber running using junit
/*import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(*/
//for Cucumber running using TestNG
@CucumberOptions(
features= "features/sample2.feature"     //Name of feature file
,glue= {"stepDefinations"}                //Name of package
,tags= {"@tag2"}
)
public class sprint_testRunner  extends cucumber.api.testng.AbstractTestNGCucumberTests {

}
