var e=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/"},{title:"RAZOM",url:"https://www.razomforukraine.org/"},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en"},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine"},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine"},{title:"UNITED24",url:"https://u24.gov.ua/uk"}];!function(){const t=document.createElement("ol");e.forEach(((e,o)=>{const n=document.createElement("li");n.textContent=`${o+1}. ${e.title}`,t.appendChild(n)})),document.getElementById("support__list").appendChild(t)}(),(()=>{const e={openModalBtn:document.querySelector("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu");o.disabled=!0,t.addEventListener("click",(()=>{setTimeout((()=>{t.disabled=!0,o.disabled=!1}),800)})),o.addEventListener("click",(()=>{setTimeout((()=>{o.disabled=!0,t.disabled=!1}),800)}));
//# sourceMappingURL=index.f5e73905.js.map
