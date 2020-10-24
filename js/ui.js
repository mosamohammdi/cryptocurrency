class Ui{
    constructor() {
        this.result=document.querySelector('#result')
        this.spinner=document.querySelector(".spinner img")
    }




    showUi(data,currensy,cryptocurrency){
        console.log(data)
        this.spinner.style.display="inline"
        this.result.style.display="none"
        let html=`
        
        
        
        <div class="card ">
        <h2 class="header">Exchange Rate Calculator</h2>
          <div class="card-image">
           
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> 1 ${ data.base_code } = ${ data.conversion_rates[cryptocurrency] }  ${ cryptocurrency } </p>
            </div>
            
          </div>
        </div>
     
        
        
        `
        


        setTimeout(() => {
            this.spinner.style.display="none"
            this.result.style.display="inline"
            this.result.innerHTML=html
        }, 2000);



    }

}