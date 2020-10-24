class CrptoCurrency{
    constructor(){
        this.url="https://v6.exchangerate-api.com/v6/35bb2e0fa6a0307c153e4029/latest/";
    }



    async cryptoApi(currency){

        
        let response = await fetch( this.url +  currency )
        let data= await response.json()


        return data;

    }

}



