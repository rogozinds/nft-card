(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <div class="card">
      <div class="image_container">
          <img src="image-equilibrium.jpg" class="main_image" alt="NTF Logo" />
          <div class="overlay_image">
              <img src="icon-view.svg" class="overlay_image" />
          </div>
      </div>
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
`;
