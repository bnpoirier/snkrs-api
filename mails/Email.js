const fs = require('fs');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');

const config = require('../config');

/**
 * Email base class
 * @class Email
 */
class Email{

    /**
     * 
     * @param {Object} data 
     */
    constructor(){
        this.from = '"L\'équipe Snkr Trust" <hello@snkrstrust.fr>';
        this.subject = "Snkr Trust";
        
        this.defaultData = {
            domain: config.DOMAIN
        };
    }

    /**
     * Callbacks to fill
     */

    beforeMailSend() { };
    afterMailSend() { };

    /**
     * Render template from handlebars file
     * @param {string} path 
     * @param {Object} contextData
     */
    async renderTemplate(template, contextData){
        // Merge default data with 
        const data = { ...this.defaultData, ...contextData};

        return new Promise((resolve, reject) => {
            fs.readFile(`${__dirname}/../views/emails/${template}.hbs`, 'utf-8', (error, html) => {
                if(error) reject(error);
                
                try{
                    resolve(handlebars.compile(html)(data));
                }
                catch(error){
                    reject(error)
                }
            });
        });
    }

    /**
     * Send email to someone
     * @param {*} to 
     */
    async send(to){
        // Before sending, calling callback
        this.beforeMailSend();  
        
        // Create nodemailer connection instance
        let transporter = nodemailer.createTransport({
            host: config.MAILER_HOST,
            port: config.MAILER_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: config.MAILER_USER,
                pass: config.MAILER_PASSWORD,
            },
        });

        // Send mail
        let info = await transporter.sendMail({
            from: this.from,
            to: to, // list of receivers
            subject: this.subject, // Subject line
            html: await this.renderTemplate(this.template, this.data)
        });

        console.log("Message sent: %s", info.messageId);
        
        this.afterMailSend();
    }
}

module.exports = Email;