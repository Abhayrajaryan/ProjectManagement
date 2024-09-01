import api from "@/config/api";

// export const createPayment =async({planType, jwt})=>{

//     try{
//         const {data} = await api.post(`/api/payment/${planType}`)
//         if(data.payment_link_url){
//             window.location.href=data.payment_link_url;
//         }
//     }catch(error){
//         console.log("error",error)
//     }

// }

export const createPayment = ({ planType, jwt }) => {
    return async (dispatch) => {
      try {
        const { data } = await api.post(`/api/payments/${planType}`);
        if (data.payment_link_url) {
          window.location.href = data.payment_link_url;
        }
      } catch (error) {
        console.error("Error during payment creation", error);
      }
    };
  };