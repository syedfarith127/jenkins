package org.runner;

import org.junit.runner.RunWith;

//import cucumber.api.CucumberOptions;4.2.0
//import cucumber.api.junit.Cucumber;4.2.0
import io.cucumber.junit.Cucumber; //4.8.0
import io.cucumber.junit.CucumberOptions;//4.8.0


@RunWith(Cucumber.class) //Runwith(Suite.class)
@CucumberOptions(features="src/test/resources",glue="org.stepdefinition",dryRun=false,plugin= { //Suite.SuiteClasses(A.class)
"html:target","json:target\\output.json"})
public class TestRunnerClass {
	
	//features denotes feature file path
	//glue denotes the step definition class path

}
