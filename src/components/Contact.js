import React from 'react'


const Contact = () => {
  return (
    <div>
      <h1 style={{color:'darkcyan', textAlign:'center'}}> Social Media</h1>
      <br/>
<div style={{display:'flex', flexDirection:'row',justifyContent:'space-around', }} >
    <div >
    <a href='https://www.linkedin.com/in/kunuku-laxmi-venkata-siva-chaitanya/'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf1g5dcjnSsUe8kA4_gHN2VTxipE9JSIhZg&s' alt='none' height={60} style={{borderRadius:'50px'}} /></a>
    </div>
    <div>
    <a href='https://www.naukri.com/mnjuser/profile?id=&altresid'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtgL9kOrUOgq61MsPWIyf96OOwWeAgBUyYA&s' alt='Naukri'  height={60} style={{borderRadius:'50px'}} /></a>
    </div>
    <div >
    <a href='https://www.instagram.com/klvs_chaitanya_/profilecard/?igsh=bmJqYm9nYWQxZ3d1'><img src='https://www.designstub.com/png-resources/wp-content/uploads/2023/01/Instagram-Logo-picsart-1.png' alt='none' height={60} style={{borderRadius:'50px'}} /></a>
    </div>
</div>
<br/>

<div style={{textAlign:'center'}}>
<h1 style={{color:'darksalmon'}}>Contact</h1>
<div style={{color:'white',margin:'10px'}}>
    <span style={{margin:'10px'}} >Email:<a style={{textDecoration:'none'}} href='mailto:klvschaitanya86@gmail.com'>klvschaitanya86@gmail.com</a></span>
    <span>Mobile:<a style={{textDecoration:'none'}} href="tel:+918686621882">+91 8686621882</a></span>
</div>
</div>
<br/>
    </div>
  )
}

export default Contact
