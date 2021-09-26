
 export const Cosmos = (n)=>{
   
    const data= {"accAddress": n };

   
   const test= (async () => {
      const rawResponse = await fetch('api1', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const content = await rawResponse.json();
      this.setState({
        msg: content
      });
      console.log(content);
    })();
  //   setTimeout(function(){
  //     return test;
  //  }, 5000);
      //  return axios.post('/api1', data      
      //   )
      //   .then(function (response) {
      
      //     // console.log(response);
      //   })  .catch(function (error) {
      //     console.log(error);
      //   });
      
        
}