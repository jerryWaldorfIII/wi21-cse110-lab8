describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').should('have.value', 75);
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').should('have.value', 33);
  });

  it('Volume audio element changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').should((els)=>{ els.each((i, el) => { expect(el.volume).to.eq(.33)}) } );
  });

  it('Sound image changes when radio button selected changes', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').should((els)=>{ els.each((i, el) => { expect(el.src).to.eq('http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg')}) } );
  });

  it('Sound source changes when radio button selected changes', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound').should((els)=>{ els.each((i, el) => { expect(el.src).to.eq('http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3')}) } );
  });

  it('Volume image changes when volume at level 1', () => {
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image').should((els)=>{ els.each((i, el) => { expect(el.src).to.eq('http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg')}) } );
  });

  it('Volume image changes when volume at level 2', () => {
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').should((els)=>{ els.each((i, el) => { expect(el.src).to.eq('http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg')}) } );
  });

  it('Volume image changes when volume at level 3', () => {
    cy.get('#volume-number').clear().type('99');
    cy.get('#volume-image').should((els)=>{ els.each((i, el) => { expect(el.src).to.eq('http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg')}) } );
  });

  it('honk button is disabled when text input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('have.value', '');
    });

  it('honk button is disabled when text input is non-number', () => {
    cy.get('#volume-number').clear().type('Jerry');
    cy.get('#honk-btn').should('have.value', '');
  });

  it('error is shown if number outside range of volume text input box', () => {
    cy.get('#volume-number').clear().type('200');
    cy.get('#volume-number').invoke('prop', 'validationMessage').should('equal', 'Value must be less than or equal to 100.');
  });

});
