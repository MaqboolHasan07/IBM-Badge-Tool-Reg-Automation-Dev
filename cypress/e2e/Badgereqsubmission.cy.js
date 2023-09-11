describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://badge-access-ibm-isa-automation.dal2a.ciocloud.nonprod.intranet.ibm.com/#/')
    cy.contains('I Consent').click()
    cy.get('.bx--side-nav__submenu')
    cy.contains('Create Requests').click()
    cy.wait(5000)
    cy.get('.sidenav-link')
    cy.contains('Permanent Badge',  { force: true }).click()
    cy.wait(5000)
    cy.get('.bx--list-box__label').contains('City').click()
    cy.get('.bx--list-box__menu-item__option').contains('Bangalore, India').click()
    cy.wait(2000)
    cy.get('.bx--list-box__label').contains('Building').click()
    cy.get('.bx--list-box__menu-item__option').contains('BCIT Block 3, Bharatiya City').click()
    cy.wait(2000)
    cy.get('.bx--file').contains('Add Image').dblclick({ force: true })
    // cy.get('.bx--col-lg-4 bx--col-md-4').contains('Submit').click({ force: true })
    // cy.get('#file-uploader-0').click({ force: true })
    // cy.get("#file-uploader-0")
    // cy.get('.bx--file-input').selectFile("cypress/fixtures/images/17364376.png", {action: "drag-drop"});
    // cy.get("#file-submit").click();
    // cy.get("#uploaded-files").contains("17364376.png");
    // cy.get("h3", { timeout: 30000 }).should("have.text","File Uploaded!");
    // cy.get('.class="b"').help
    // cy.get('#dropdown-2').click()
    // cy.wait(9000)
    // { force: true } 
    // cy.contains('Bangalore, India').click({ force: true })
  })
})