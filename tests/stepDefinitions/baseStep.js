import flightPage from '../pageObjects/flightPage'
import { Given, When, Then } from 'cucumber'

Given(/^I go to page \"(.*)\"$/, (pageName) => {
  switch (pageName) {
    case 'homePage':
      flightPage.iGoToPage('/')
    case 'flightPage':
      flightPage.iGoToPage(flightPage.pageUrl)
      break
    default:
      throw new Error('Invalid parameter. Please check tests\stepDefinitions\baseStep.js')
  }
})

Then(/^I should be on page \"(.*)\"$/, { timeout: 50000 }, (pageName) => {
  switch (pageName) {
    case 'flightPage':
      flightPage.iAmOnPage(flightPage.pageUrl)
      break
    default:
      throw new Error('Invalid parameter. Please check tests\stepDefinitions\baseStep.js')
  }
})