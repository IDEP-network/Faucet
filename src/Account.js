import Recaptcha from 'react-recaptcha';
import React from 'react';




class Account extends React.Component {
  render() {
     return (
        <div>
               <Recaptcha
                  sitekey="6LeLa4ocAAAAALHMRehSUtwG9Y1WN9eJaPd9SnpZ"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
        </div>
     )
  }
}
export default Account;
