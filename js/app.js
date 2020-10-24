//efine vars
let cryptocurrencyEl=document.querySelector('#cryptocurrency')
let currency=document.querySelector('#currency')
let form=document.querySelector('form')
let action=document.querySelector('#action')


document.addEventListener('DOMContentLoaded',allEventLiseners)


let crptoCurrency = new CrptoCurrency()
let ui = new Ui()


//eventsListeners

function allEventLiseners() {
    
    let Html=``

    crptoCurrency.cryptoApi('USD')
        .then(data => {
      

            for(cur in data.conversion_rates){
                
                Html+=`
                    <option value="${cur}">${cur}</option>
                `
            }
            


            
            
            cryptocurrencyEl.innerHTML=Html

        })
        

       action.addEventListener('click', e=>{
           e.preventDefault()
        

        if ( currency.value === "" || cryptocurrencyEl.value === "" ){
                
        }else{
            crptoCurrency.cryptoApi(currency.value)
                .then(data => {
                    ui.showUi(data,currency.value,cryptocurrencyEl.value)
                })
        }



       }) 

}


