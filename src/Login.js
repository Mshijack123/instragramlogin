import react from 'react';

function Login()
{
      function checkuser(){
          alert('user is right');
      }
    return(
     
         <div className="col s12 m6">
            <div className="form"  style={{
                backgroundColor : 'white',
                marginTop : '10%' ,
                padding : '16px',
                border : '0.2px solid',
                borderColor : 'lightgrey'
            }}>
                <h1 style={{
                    textAlign : 'center',
                    padding : '',
                    fontSize : '44px'
                }}>Instragram</h1>
                <input type="text" name="" placeholder= "phone number , username, or email" 
                 style = {{
                     backgroundColor : ' #FAFAFA',
                     textIndent : '12px',
                     border : '0.2px solid',
                     borderColor : '#F6F6F6'
                 }}
                onChange = {checkuser} />
                <input type="password" name="" placeholder= "Enter the password" 
                  style = {{
                    backgroundColor : ' #FAFAFA',
                    textIndent : '12px',
                    border : '0.2px solid',
                    borderColor : '#F6F6F6'
                }}
                
                
                />
                <a className="waves-effect waves-light btn" 
                 style ={{
                     width : '100%'
                 }}
                > Login Now</a><br/><br />
                <div className="row" >
                    <div className="col s5 m5">

                    <hr style={{
                      width: '100%'
                  }} />

                    </div>
                    <div className="col s2 m2">
                   <center> <i >OR</i> </center>
                    </div>
                    <div className="col s5 m5">
                    <hr style={{
                      width :'100%'
                  }}/>
                    </div>
            
                </div>
                 <span>
                     <center><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg=="
                      style = {{
                          width : '13px',
                           marginRight : '12px'
                      }}
                      
                     /><a href="#" style={{
                         color : 'darkblue'
                         
                     }}>Log in with Facebook</a> </center>
                 </span><br/>
                 <span>
                     <center><a style={{
                         fontSize : '11px'
                     }}>Forget Password?</a></center>
                 </span>
               </div><br></br>
               <div style = {{
                   padding : '15px',
                   backgroundColor : 'white',
                   border : '0.2px solid',
                borderColor : 'lightgrey'
               }}>
              <center>     <h6>Don't have an account? <a >Signup Now</a></h6> </center>
               </div><br/>
             <center>  Get the app</center>
             <br></br>
             <center>
                 <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" width = "120px" style={{marginRight : '6px'}}/>
                 <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" width = "120px"/>
             </center>
         </div>
         
     );
}

export default Login;