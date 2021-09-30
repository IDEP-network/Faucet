import Recaptcha from 'react-recaptcha';
import React from 'react';




class Account extends React.Component {
  render() {
     return (
        <div>
               <Recaptcha
                  sitekey="6Le_SZAcAAAAANMWdmDJKQgoaF1QwXWZR6I9Ulxi"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
        </div>
     )
  }
}
export default Account;