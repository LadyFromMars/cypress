/// <reference types='Cypress' />
import ResultPage from '../../support/pageObjects/ResultPage'
import ItemPage from '../../support/pageObjects/ItemPage'

describe('Test Amazon product page: search for a product', function(){

    before(function(){
        cy.fixture('locators').then(function(data){
            this.data=data
        })
    })



    it('Search for a product and verify its attributes', function(){

        // Create page objects
        const resultPage = new ResultPage()
        const itemPage = new ItemPage()
        const addContext = require('mochawesome/addContext')

        // Visit amazon website
        cy.visit(this.data.url);

        // Search for Sharon Jones
        cy.searchArtist(this.data.artist)

        // outside: check number of results displayed
        resultPage.getResultItems().should('have.lengthOf.above', 15)
        cy.wait(3000)

        // Scroll to “I Learned The Hard Way” and open the page
        resultPage.getItemTitle().contains(this.data.album).scrollIntoView()
        resultPage.getItemTitle().contains(this.data.album).click()

        // Print the price for the “Audio CD” format        
        itemPage.getPriceCD().then(function(price)
        {
            //Print in the browser console example
            console.log(price.text())
            //Print in logs
            cy.log("price for Audio CD is: " + price.text())
            //Add to report
            addContext("price for Audio CD is: " + price.text());
        })

        // Print how many stars it is rated. Is it 4.5?
        //Verify 4.5 star rating is displayed (displayed twice on a page)
        itemPage.getRating4andHalf().should('have.length', 2)

        // Print the title of the first product that appears in the “Customers
        // Also Bought These Albums” section
        itemPage.getFBT().eq(2).then(function(fbt)
            {
            console.log(fbt.text())
            addContext("[first suggested item] Customers Also Bought These Albums: "+fbt.text());
            })

        // Write an assertion that fails the test; perhaps something from i to iii above.
        itemPage.getFBT().eq(2).scrollIntoView()
        itemPage.getFBT().eq(2).should('have.text', 'Grinch')
        

        // Generate test report with results
        // ** report will appear in /report folder - report will open automatically after test run


    })
})