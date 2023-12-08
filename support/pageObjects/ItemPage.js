class ItemPage{

    // --- Item attributes ---

    // Price for audioCD
    getPriceCD(){
        return cy.get('#a-autoid-3-announce > :nth-child(3) > .a-size-base')
    }

    // get class for 4.5+ rating
    getRating4andHalf(){
        return cy.get('.cm-cr-review-stars-spacing-big.a-star-4-5')
    }

    // get 'Bought together' item (returns 3 items)
    getFBT(){
        return cy.get('._p13n-desktop-sims-fbt_fbt-mobile_title-component-overflow3__3p-Qn > span.a-size-base')
    }

}

export default ItemPage;