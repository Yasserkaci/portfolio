import React from 'react'
import './cards.css'

function Card() {
  return (
    <div className='flex'>
         <div class="nft">
             <div class='main'>
                <img class='tokenImage' src="./yasser.jpg" alt="yasser" />
                 <h2>Yasser Kaci</h2>
                 <p class='description'>A professional web developer.</p>
                 <div class='tokenInfo'>
                     
                     
                 </div>
             <hr />
             <div class='creator'>
                 <div class='wrapper'>
                      <img src="./me.jpg" alt="Creator" />
                </div>
                 <p><ins>Creation of</ins> Unixes</p>
            </div>
             </div>
        </div>
        <div class="nft">
             <div class='main'>
                <img class='tokenImage' src="./rayan.jpg" alt="NFT" />
                 <h2>Rayan Aouali</h2>
                 <p class='description'>A professional video editor.</p>
             <hr />
             <div class='creator'>
                 <div class='wrapper'>
                      <img src="me.jpg" alt="Creator" />
                </div>
                 <p><ins>Creation of</ins> Unixes</p>
            </div>
             </div>
        </div>
    </div>
  )
}

export default Card