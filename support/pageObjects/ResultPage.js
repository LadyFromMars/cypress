class ResultPage {

    // -- Search box --

    // search input
    getSearchInput() {
        return cy.get("input[name='field-keywords']")
    }

    // 'Go' button for search
    getGoButton(){
        return cy.get("input[value='Go']")
    }


// -- Result page items --

//Result item title
getItemTitle(){
   return cy.get(".a-size-medium")
}

getResultItems(){
    return cy.get("div[data-cy='title-recipe']")
}




}

export default ResultPage;