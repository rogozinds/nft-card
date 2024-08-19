import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
      <img src="image-equilibrium.jpg" class="main_image" alt="NTF Logo" />
      <div class="header">
          <a href="#">Equilibrium #3429</a>
      </div>
     <div class="desc">
      Our Equilibrium collection promotes balance and calm.
    </div>
    <div class="content">
      <div class="price">
          <img src="./icon-ethereum.svg" class="icon" alt="$" />
          <div>0.041 ETH</div>
      </div>
      <div class="time">
          <img src="./icon-clock.svg" class="icon" alt="clock" />
          <div>3 days left</div>
      </div>
     </div> 
     <div class="separator"></div>
     <div class="contributor">
          <img src="./image-avatar.png" alt="avatar" />
          <div>
              Creation of <a href="#">Jules Wyvern</a>
          </div>
      </div>
 </div>
`
