import React,{useRef,useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from "react-router-dom"
import paypal_check from  './../styles/Checkout.module.css'
function Checkout(){
     const [redirect,setRedirect]=useState(false)
     const[button,Setbutton]=useState(false)
     const navigate = useNavigate();

        const paypal=useRef()
        const user=JSON.parse(localStorage.getItem('mechtech'))
        useEffect(()=>{
        window.paypal.Buttons({
            createOrder: async(data, actions)=>{
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: 400
                        }
                    }]
                });
            },
            
            // Finalize the transaction
            onApprove:async(data, actions)=>{
                try{
                    function getCookie(name) {
                        let cookieValue = null;
                        if (document.cookie && document.cookie !== '') {
                            const cookies = document.cookie.split(';');
                            for (let i = 0; i < cookies.length; i++) {
                                const cookie = cookies[i].trim();
                                // Does this cookie string begin with the name we want?
                                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                    break;
                                }
                            }
                        }
                        return cookieValue;
                    }
                    const csrftoken = getCookie('csrftoken');
                    
                 await actions.order.capture().then(async(orderData)=>{
                    // Successful capture! For demo purposes:
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    var transaction = orderData.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
                 {/*}api request here{*/}
                })
            }catch(e){
             console.log('this was err',e)
            }
            }
     

        }).render(paypal.current);
    },[])
        return(
            <div style={{marginTop:'100px'}}>
            {redirect===true&&(
                navigate("/message")
            )}
            <>      
            {/*}order details here{*/}
           <div className={paypal_check.paypal_check}>
           <div ref={paypal}>
             </div>
           </div>
           <button className={paypal_check.button} onClick={()=>Setbutton(!button)}><h2>Cash on delevering</h2></button> 
            {button===true&&(
          <div>
          <form method='post' className={paypal_check.form}>
            <input type='text' placeholder='Address1' required/>
            <input type='text' placeholder='Address2'/>
            <input type='text' placeholder='City' required/>
            <button className={paypal_check.button2} type='submit'>submit</button>
          </form>
         </div> 
            )}
 
           </>   
            </div>
        )
}

export default connect()(Checkout)