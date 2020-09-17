class RegistrationPage{
    selectGender(gender){
        if ( gender == "Male"){
            cy.get('#id_gender1').click();
        } else{
            cy.get('#id_gender2').click();
        }
    }

    inputFirstname(firstname){
        cy.get('#customer_firstname').type(firstname);
    }
    
    inputLastname(lastname){
        cy.get('#customer_lastname').type(lastname);
    }

    inputPassword(password){
        cy.get('#passwd').type(password);
    }

    selectDayOfBIrth(day){
        cy.get('#days').select(day);
    }

    selectMonthOfBIrth(month){
        cy.get('#months').select(month);
    }

    selectYearOfBIrth(year){
        cy.get('#years').select(year);
    }

    inputAddressOne(address1){
        cy.get('#address1').type(address1);
    }
    
    inputCity(city){
        cy.get('#city').type(city);
    }

    inputPostcode(postcode){
        cy.get('#postcode').type(postcode);
    }

    selectCountry(country){
        cy.get('#id_country').select(country);
    }

    selectState(state){
        cy.get('#id_state').select(state);
    }

    inputMobilePhone(mobilePhone){
        cy.get('#phone_mobile').type(mobilePhone);
    }

    submitRegistation(){
        cy.get('#submitAccount').click();
    }
}

export default RegistrationPage