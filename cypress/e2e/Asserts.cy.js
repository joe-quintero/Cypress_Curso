
describe("Practicas de Asserts ", ()=>{

    it("Asert find_eq ", ()=>{
        cy.visit("http://vol.auditoria.venezolano.com/");

        cy.get("#datoLogin").type("jdquintero");
        cy.get("#clave").type("abc123");
        cy.get('#aceptar').click();

        cy.get(':nth-child(1) > .btn > .row > .col-9').then((e) => {
            let nombre=e.text();
            cy.log(nombre);
            if (nombre=="hola juan") {
                cy.get(':nth-child(1) > .btn').click();
            }else{
                cy.get('#qrCliente > .fa-solid').click();
            }
        })

    })

    it.only('Assert Length', () => {
        cy.visit('https://www.codehim.com/demo/simple-table-pagination-javascript/');
        cy.wait(1000);
        cy.get("#myTable > tbody > tr > td").should("have.length", 10) 


    });

})