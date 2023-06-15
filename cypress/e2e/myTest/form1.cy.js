describe('startTest', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3001/pizza');
    });
    it('inputTest',function(){
    
        cy.get("[data-cy=input-isim]").type("mirac@gmail.com");
        cy.get("[data-cy=input-isim]").should("have.value","mirac@gmail.com");
    });

    it('checkbox',function(){
    
        cy.get("[data-cy=checkboxe1]").check({ force: true
        }).should('be.checked')
        cy.get("[data-cy=checkboxe3]").check({ force: false
        }).should('be.checked')
        cy.get("[data-cy=checkboxe5]").check({ force: true
        }).should('be.checked')
        cy.get("[data-cy=checkboxe7]").check({ force: false
        }).should('be.checked')
        cy.get("[data-cy=checkboxe9]").check({ force: true
        }).should('be.checked')
      
    });

    it('submit-test-active',function(){

        cy.get("[data-cy=input-isim]").type("musteriTest");
        cy.get("[data-cy=checkboxe1]").check({ force: true});
        cy.get("[data-cy=checkboxe3]").check({ force: true});
        cy.get("[data-cy=checkboxe5]").check({ force: true});
        cy.get("[data-cy=checkboxe7]").check({ force: true})
        cy.get("[data-cy=select]").select('orta');
        cy.get("[data-cy=btn]").click()
       
    });

})