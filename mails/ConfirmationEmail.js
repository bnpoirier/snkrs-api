const moment = require('moment');
const config = require('../config');

const Email = require('./Email');

/**
 * ConfirmationEmail class
 * @class ConfirmationEmail
 */
class ConfirmationEmail extends Email{

    /**
     * ConfirmationEmail constructor
     * @param {Object} data 
     */
    constructor(data){
        super(data);

        this.subject = `Confirmation de ta demande d'authentification`;
        this.template = `confirmation`;
    }

    /**
     * Before sending email
     * Parse date and get day, day number, month and year as attribute data
     */
    beforeMailSend(){
        const collectOnDate = moment(this.data.collectOn, 'YY-MM-DD hh:mm');

        collectOnDate.locale('fr');

        this.data['dayName'] = collectOnDate.format('dddd');
        this.data['dayNumber'] = collectOnDate.date();
        this.data['monthName'] = collectOnDate.format('MMMM');
        this.data['year'] = collectOnDate.year();

        this.data['hh'] = collectOnDate.format('HH');
        this.data['mm'] = collectOnDate.format('mm');
    }
}

module.exports = ConfirmationEmail;