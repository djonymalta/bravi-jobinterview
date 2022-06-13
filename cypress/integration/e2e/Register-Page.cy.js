/// <reference types="cypress" />

describe('Deve realizar visibilidade e funcionalidade dos componentes Register-Page', () => {

    before(() => {
cy.visit('/Register.html')
       
    });

    it('Validar se todos os campos estão visíveis', () => {
        
        // Campos do formulário de registro
        cy.get('h2').should('be.visible')
        cy.get(':nth-child(1) > .col-md-3').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').invoke('attr', 'placeholder').should('contain', 'First Name')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').invoke('attr', 'placeholder').should('contain', 'Last Name')
        cy.get('.col-md-8 > .form-control').should('be.visible')
        cy.get('.col-md-8 > .form-control').should('be.visible')
        cy.get(':nth-child(3) > .col-md-3').should('be.visible')
        cy.get('#eid > .form-control').should('exist')
        cy.get(':nth-child(4) > .col-md-3').should('be.visible')
        cy.get(':nth-child(4) > .col-md-4 > .form-control').should('be.visible')
        cy.get(':nth-child(5) > .col-md-3').should('be.visible')
        cy.get(':nth-child(5) > .col-md-3').should('be.visible')
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2)').should('be.visible')
        cy.get(':nth-child(6) > .col-md-3').should('be.visible')
        cy.get('#checkbox1').should('be.visible')
        cy.get(':nth-child(1) > .checks').should('be.visible')
        cy.get('#checkbox2').should('be.visible')
        cy.get(':nth-child(2) > .checks').should('be.visible')
        cy.get('#checkbox3').should('be.visible')
        cy.get(':nth-child(3) > .checks').should('be.visible')
        cy.get(':nth-child(7) > .col-md-3').should('be.visible')
        cy.get('#msdd').should('be.visible')
        cy.get(':nth-child(8) > .col-md-3').should('be.visible')
        cy.get('#Skills').should('be.visible')
        cy.get(':nth-child(9) > .col-md-3').should('be.visible')
        cy.get(':nth-child(10) > .col-md-3').should('be.visible')
        cy.get('.select2-selection').should('be.visible')
        cy.get(':nth-child(11) > .control-label').should('be.visible')
        cy.get('#yearbox').should('be.visible')
        cy.get('#yearbox').should('be.visible')
        cy.get('#yearbox').should('be.visible')
        cy.get(':nth-child(12) > .col-md-3').should('be.visible')
        cy.get('#firstpassword').should('be.visible')
        cy.get(':nth-child(13) > .col-md-3').should('be.visible')
        cy.get('#secondpassword').should('be.visible')
        cy.get('#submitbtn').should('be.visible')
        cy.get('#Button1').should('be.visible')

        // Validar Banner Lateral
        cy.get('#aswift_0').should('be.visible')

        // Validar Titulo / Foto
        cy.get('label.col-xs-6').should('be.visible')
        cy.get('#imagetrgt').should('be.visible')
        cy.get('#imagesrc').should('be.visible')

        // Barra inferior (footer)
        cy.get('#footer > .container > .row > :nth-child(1)').should('be.visible')
        cy.get('.facebook').should('be.visible')
        cy.get('.twitter').should('be.visible')
        cy.get('.linkedin').should('be.visible')
        cy.get('.google-plus').should('be.visible')
        cy.get('.youtube').should('be.visible')

    })  

    it('Validar a funcionalidade dos campos realizando o fluxo de registro', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Djony')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Xavier Malta Kalfeltz')
        cy.get('.col-md-8 > .form-control').type('Rua Julio Teodoro Martins, 3854')
        cy.get('#eid > .form-control').type('djony.malta@gmail.com')
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type('1234567890')
        cy.get(':nth-child(1) > .ng-pristine').click()
        cy.get('#checkbox1').click()
        cy.get('#checkbox3').click()
        cy.get('#msdd').click()
        cy.get('.ui-autocomplete > :nth-child(8)').click()
        cy.get('#section > .container > .row').click()
        cy.get('#Skills').select('C')
        cy.get('.select2-selection').type('United States {enter}')
        cy.get('#yearbox').select('1984')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('June')
        cy.get('#daybox').select('7')
        cy.get('#firstpassword').type('123456789')
        cy.get('#secondpassword').type('123456789')

        // Clicando no botão abaixo, realizaria o fluxo de registro com sucesso, caso todos os campos estivessem funcionando.
        //cy.get('#submitbtn').click()
        
    });
})