package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/main/resources/features/swag.feature",
plugin = {"pretty","html:reports/cucumber-html-report"},
tags = {"@TS_01,@TS_02,@TS_03,@TS_04,@TS_05,@TS_06,@TS_07,@TS_08,@TS_09,@TS_10,@TS_11,@TS_12,@TS_13,@TS_14,@TS_15,@TS_16"},
/*//tags = {"@TS_01,@TS_02,@TS_03,@TS_04,@TS_05,@TS_06,@TS_07,@TS_08,@TS_09"},*/
//tags= {"@TS_15"},
glue = {"com/stepdefinition"},
monochrome = true
)

public class SwagRunner {

}
