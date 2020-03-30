const assert = require('chai').assert;
const invoicePrinter = require('../mainApplication/printer');
var plays = require('../mainApplication/plays.json');
var invoices = require('../mainApplication/invoices.json');

describe('Printer application tests:', () => {
    it('Should return the calculation for BigCo Customer', () =>{
        var expected = 'Statement for BigCo\n Hamlet: $650.00 (55 seats) \n As you like it: $580.00 (35 seats) \n Othello: $500.00 (40 seats) \nAmount owed is $1,730.00\nYou earned 47 credits\n';
        
        var actual = invoicePrinter(invoices[0], plays);
        
        assert.equal(actual, expected);
    });

    it('Should return the calculation for MarCo Customer', () =>{
        var expected = 'Statement for MarCo\n Hamlet: $650.00 (55 seats) \nAmount owed is $650.00\nYou earned 25 credits\n'
        
        var actual = invoicePrinter(invoices[1], plays);
        
        assert.equal(actual, expected);
    });

    it('Should return the calculation for JennerCo Customer', () =>{
        var expected = 'Statement for JennerCo\n Hamlet: $650.00 (55 seats) \n As you like it: $580.00 (35 seats) \nAmount owed is $1,230.00\nYou earned 37 credits\n';
        
        var actual = invoicePrinter(invoices[2], plays);
        
        assert.equal(actual, expected);
    });

    it('Should return the calculation for DavidCo Customer', () =>{
        var expected = 'Statement for DavidCo\n Hamlet: $650.00 (55 seats) \n As you like it: $580.00 (35 seats) \n Othello: $500.00 (40 seats) \n Hamlet: $400.00 (3 seats) \nAmount owed is $2,130.00\nYou earned 47 credits\n'
        
        var actual = invoicePrinter(invoices[3], plays);
        
        assert.equal(actual, expected);
    });
});