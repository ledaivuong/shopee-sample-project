import homePage from '../pageObjects/homePage'
import { Given, When, Then } from 'cucumber'

When(/^I input \"(.*)\" as username$/, (username) => {
    homePage.inputUserName(username)
})

When(/^I input \"(.*)\" as password$/, (password) => {
    homePage.inputPassword(password)
})

When(/^I click login$/, () => {
    homePage.clickLogin()
})

