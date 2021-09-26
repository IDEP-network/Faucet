import React from 'react';
import './App.css';
import Recaptcha from 'react-recaptcha';
/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {
        
        super(props);

        this.state = {
            // items: [],
            msg: {},
            res:'',
            isVerified: false
        }

        this.test=this.test.bind(this);
        this.mySubmitHandler=this.mySubmitHandler.bind(this);
        this.myChangeHandler=this.myChangeHandler.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    }
    recaptchaLoaded() {
      console.log('capcha successfully loaded');
    }
    
    mySubmitHandler = (event) => {
      event.preventDefault();
      if (this.state.isVerified) {
        this.setState({
          message: 'Loading....'
        });
       
        const res= this.test(this.state.username);
      } else {
        alert('Please verify that you are a human!');
      }
     
      // console.log(res);
      
    }
    verifyCallback(response) {
      if (response) {
        this.setState({
          isVerified: true
        })
      }
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }

  async test(n) {
      
       const data= {"accAddress": n };
       const rawResponse = await fetch('api1', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
      const te= await rawResponse.json();
      if(te){
        // console.log(te.res.txhash);
          this.setState({
        msg: te.msg,
        res: te.res.txhash,
        isLoaded: true
      });
      
      }
      
      // this.setState({
      //   msg: result,
      //   isLoaded: true
      // });
     
   };
  
    render() {

        const { isLoaded } = this.state;

        if (!isLoaded){
          return (
            <div className="container  mt-4">
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-md-1">
            <div className="jumbotron">
              <h1> Faucet</h1>
              <h3>What is a Faucet?</h3>
              <p className="text-justify cc">This faucet is a web-based service that provides test IDEP tokens to users of
                  the testnet Denali. While these tokens have no 'real world' value, they enable users to experiment with IDEP Network testnet features!</p>
            <h3>To request tokens using the faucet:</h3>
           
            <p className="text-justify cc"> 1) Enter the address of the wallet where you want to top up funds.</p>
            <p className="text-justify cc"> 3) Click <strong>SUBMIT</strong>.</p>
            <p className="text-justify cc"> 4) Funds will be in the testnet wallet you specified within a few seconds!</p>
            {/* <h5> Enter Account Address: {this.state.username}</h5> */}
            
                <form onSubmit={this.mySubmitHandler}>
                <div class="form-group">
                <label forHtml="address mb-3" className="cc">Enter wallet address to get juicy juicy IDEP tokens.</label>
                <input
                  type='text'
                  placeholder="Enter Account Address"
                  className="form-control col-md-4"
                  onChange={this.myChangeHandler}
                  required
                />
                <input
                  type='submit'
                  className="btn btn-info mt-3"
                />
                   <Recaptcha
            sitekey="6Le_SZAcAAAAANMWdmDJKQgoaF1QwXWZR6I9Ulxi"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
          </div>
          </form>
          <h2 className="mt-3"> {this.state.message}</h2>
          <p className="text-justify cc">When you have finished using your test tokens, please return them to the faucet so that other members of the community can use them. Please return your test tokens to this address:</p>
           <p className="text-dark cc1"><strong>idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2</strong></p>
            </div>
            </div>
            </div>
            </div>
        );
        }
        else{
          return (
            // 
            <div className="container mt-4">
            <div className="row">
            <div className="offset-md-2 col-md-8 offset-md-2">
            <div className="App">
        
              <div class="card mt-3">
            <div class="card-header">
              Information
            </div>
            <div class="card-body">
            <h5 class="card-title">Response: {this.state.msg}</h5>
            <h5 class="card-title">Txhash {this.state.res}</h5>
            <button className="btn btn-warning" onClick={() => window.location.reload(false)}>Click to reload!</button>
              
            </div>
          </div>
          
            </div>
             </div>
             </div>
             </div>
        );
        }

      

    }

}

export default App;