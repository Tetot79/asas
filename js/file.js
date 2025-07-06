let loginEmail = document.querySelector(".login-email");
  let loginPassword = document.querySelector(".login-password");
  let registerEmail = document.querySelector(".register-email");
  let registerPassword = document.querySelector(".register-password");
  let addToCart = document.querySelectorAll(".card-body a");
  let addToFavourite = document.querySelectorAll(".card-body i");
  let loginSubmit = document.querySelector(".login-submit");
  let registerSubmit = document.querySelector(".register-submit");
  let registerEmailValue = [];
  let registerPasswordValue = [];
  let firstName1 = document.querySelector(".firstname");
  let search = document.querySelector("#Search");
  let productName = document.querySelectorAll(".card-body .card-title");
  let productCategory = document.querySelectorAll(".card-body .category");
  let dropDownMenu = document.querySelector("#dropdownMenu2");
  let dropDownMenuButton = document.querySelectorAll(".dropdown-item");

  let bigCard = document.querySelector(".login-register-container");

  if (dropDownMenuButton) {
    dropDownMenuButton.forEach((item) => {
      item.addEventListener("click", () => {
        dropDownMenu.textContent = item.textContent;
      });
    });
  }
  if (search) {
    search.addEventListener("input", (e) => {
      if (dropDownMenu.textContent === "Select by category") {
        const searchValue = e.target.value.toLowerCase();
        let n = 0;
        productCategory.forEach((item) => {
          const itemText = item.textContent
            .replace("category : ", " ")
            .toLowerCase();

          const matches = itemText.includes(searchValue);
          if (matches) {
            n--;
            item.parentElement.parentElement.parentElement.style.display = "block";
          } else {
            n++;
            item.parentElement.parentElement.parentElement.style.display = "none";
          }
        });
        if (n === productCategory.length) {
          productCategory.forEach((item) => {
            item.parentElement.parentElement.parentElement.style.display = "block";
          });
        }
      } else {
        let n = 0;
        const searchValue = e.target.value.toLowerCase();

        productName.forEach((item) => {
          const itemText = item.textContent.toLowerCase();
          const matches = itemText.includes(searchValue);
          if (matches) {
            n--;
            item.parentElement.parentElement.parentElement.style.display = "block";
          } else {
            n++;
            item.parentElement.parentElement.parentElement.style.display = "none";
          }
        });
        if (n === productName.length) {
          productName.forEach((item) => {
            item.parentElement.parentElement.parentElement.style.display = "block";
          });
        }
      }
    });
  }
  if (window.localStorage.getItem("registerEmail") !== null) {
    registerEmailValue = window.localStorage.getItem("registerEmail").split(" ");
  }
  if (window.localStorage.getItem("registerPassword") !== null) {
    registerPasswordValue = window.localStorage.getItem("registerPassword").split(" ");
  }
  let loginEmailValue = window.localStorage.getItem("loginEmail");
  let loginPasswordValue = window.localStorage.getItem("loginPassword");
  if(window.localStorage.getItem("loginCheck") === null){
    window.localStorage.setItem("loginCheck" , false)
  }
  if (loginSubmit) {
    loginSubmit.addEventListener("click", () => {
      if (loginEmail && loginPassword) {
        if (loginEmail.value !== "" && loginPassword.value !== "") {
          for (let i = 0; i < registerEmailValue.length; i++) {
            if (
              registerEmailValue[i] === loginEmail.value &&
              registerPasswordValue[i] === loginPassword.value
            ) {
              window.localStorage.setItem("loginEmail", loginEmail.value);
              window.localStorage.setItem("loginPassword", loginPassword.value);
              window.localStorage.setItem("loginCheck" , true)

              window.location.href = "file:///D:/Web%20course/Projects/Project_D_Responsive_JS/index.html";
              return;
            }
          }
          alert("Email or Parsswornd incorrect");
        }
      }
    });
  }
  let cartItem = document.querySelector(".cart-item");
  let cartContainer = document.querySelector(".cart-container1")
  let favouriteContainer = document.querySelector(".cart-container2")
  let currentCart = []
  let currentFavourite = []
  if(window.localStorage.getItem("cart") === null){
    window.localStorage.setItem("cart" , [])
  }
  else{
    if(window.localStorage.getItem("cart")){
    currentCart = JSON.parse(window.localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
  }
  if(window.localStorage.getItem("favourite") === null){
    window.localStorage.setItem("favourite" , [])
  }
  else{
    if(window.localStorage.getItem("favourite")){
    currentFavourite = JSON.parse(window.localStorage.getItem("favourite"))
    localStorage.setItem("favourite", JSON.stringify(currentFavourite));
  }
  }
  if(window.localStorage.getItem("totalPrice") === null){
    window.localStorage.setItem("totalPrice" , 0)
  }
  else{
    window.localStorage.setItem("totalPrice" , window.localStorage.getItem("totalPrice"))
  }
  let totalPrice = 0
  let totalPriceElement = document.querySelector(".total-price")
  let cartItemList = document.querySelector(".cart-item-list")
  if(cartItemList){

      for (let i = 0; i < currentCart.length; i++) {
        const item = currentCart[i];
        const newItemHTML = `
        <li>
            <div class="cart-buy-item cart-container" style="width: 100%; height: 100%; margin-top : 200px">
              <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px;"/>
              <div class="details">
                <div>
                  <h2>${item.name}</h2>
                    <p class="detailsP d-flex justify-content-between">
                    <span class="price-span">${item.price}</span>
                  </p>
                </div>
                <div class="details-button d-flex justify-content-between">
                  <div>
                    <span class="details-span id-number d-none">${item.id}</span> 
                    <span class="details-span minus-number">-</span> 
                    <span class="number-span">${item.number}</span>
                    <span class="details-span plus-number">+</span>
                  </div>
                </div>
              </div>
            </div>
        </li>
        `;
        cartItemList.insertAdjacentHTML("afterbegin", newItemHTML);
      }
  }
  if(cartContainer){

      for (let i = 0; i < currentCart.length; i++) {
        const item = currentCart[i];
        const newItemHTML = `
            <div class="col-12 col-lg-5 cart-buy-item cart-container">
              <img src="${item.image}" alt="${item.name}" />
              <div class="details">
                <div>
                  <h2>${item.name}</h2>
                  <p class="detailsP">Product Description</p>
                  <p class="detailsP d-flex justify-content-between">
                    <span class="price-span">${item.price}</span>
                  </p>
                </div>
                <div class="details-button d-flex justify-content-between">
                  <div>
                    <span class="details-span id-number d-none">${item.id}</span> 
                    <span class="details-span minus-number">-</span> 
                    <span class="number-span">${item.number}</span>
                    <span class="details-span plus-number">+</span>
                  </div>
                  <button  class="remove-button">Remove</button>
                </div>
              </div>
            </div>

        `;
    
        cartContainer.insertAdjacentHTML("beforeend", newItemHTML);
        window.localStorage.setItem("totalPrice",window.localStorage.getItem("totalPrice"))
        totalPrice = Number(window.localStorage.getItem("totalPrice"))
        totalPriceElement.textContent = `Total Price : ${window.localStorage.getItem("totalPrice")}$`
      }
  }
  if(favouriteContainer){

    for (let i = 0; i < currentFavourite.length; i++) {
      const item = currentFavourite[i];
      const newItemHTML = `
         <div class="big-card col-lg-4 mt-4">
          <div class="card bg-transparent d-flex justify-content-center align-items-center">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">price : ${item.price}</p>
              
              <i class="remove-favourite fa-solid fa-heart" style="color: var(--secondary-color); cursor: pointer;"></i>
            </div>
          </div>
        </div>

      `;
  
      favouriteContainer.insertAdjacentHTML("beforeend", newItemHTML);

    }
}
  let lastValue = Number(window.localStorage.getItem("totalPrice"))
  let minusNumber = document.querySelectorAll(".minus-number")
  let plusNumber = document.querySelectorAll(".plus-number")
  let numberSpan = document.querySelectorAll(".number-span")
//  window.localStorage.removeItem("totalPrice")
  if(minusNumber){
    minusNumber.forEach((item) => {
      item.addEventListener("click", () => {
        let number = +(item.nextElementSibling.textContent)
        number--
        if(!number){
          number = 1
        }
        else{
        let number1 = JSON.parse(window.localStorage.getItem("cart"))

        number1.forEach((item1) => {
          if(item1.id === Number(item.closest(".details-button").querySelector(".id-number").textContent)){
            item1.number = number
            
          }
        })
        window.localStorage.setItem("cart", JSON.stringify(number1));
        totalPrice = totalPrice -  +((item.closest(".cart-buy-item").querySelector(".price-span").textContent.replace("$", "")).replace("price : ", ""))
        window.localStorage.setItem("totalPrice" , totalPrice)
        totalPriceElement.textContent = `Total Price : ${window.localStorage.getItem("totalPrice")}$`
        if(totalPrice <= lastValue){
          totalPrice = lastValue
          window.localStorage.setItem("totalPrice" , lastValue)

          totalPriceElement.textContent = `Total Price : ${window.localStorage.getItem("totalPrice")}$`
        }
        if(number < 1){
          number = 1
        }
        item.nextElementSibling.textContent = number.toString()
        totalPrice = Number(window.localStorage.getItem("totalPrice"))

    }})
    })
  }
  if(plusNumber){
    plusNumber.forEach((item) => {
      item.addEventListener("click", () => {
        let number = +(item.previousElementSibling.textContent)
        number++
        let number1 = JSON.parse(window.localStorage.getItem("cart"))
        number1.forEach((item1) => {
          if(item1.id === Number(item.closest(".details-button").querySelector(".id-number").textContent)){
            item1.number = number
          }
        })

        window.localStorage.setItem("cart", JSON.stringify(number1));
        totalPrice = totalPrice + +((item.closest(".cart-buy-item").querySelector(".price-span").textContent.replace("$", "")).replace("price : ", ""))
        window.localStorage.setItem("totalPrice" , totalPrice)
        totalPriceElement.textContent = `Total Price : ${window.localStorage.getItem("totalPrice")}$`
        if(number > 9){
          number = 10
        }
        item.previousElementSibling.textContent = number
        totalPrice = Number(window.localStorage.getItem("totalPrice"))

      })
    })
  }
  let removeButton = document.querySelectorAll(".remove-button")
  let removeFavourite = document.querySelectorAll(".remove-favourite")
  if(removeFavourite){
    removeFavourite.forEach((item) => {
      item.addEventListener("click", () => {
        favouriteContainer.removeChild(item.closest(".big-card"))
        for(let i = 0; i < currentFavourite.length; i++){
          if(currentFavourite[i].image === item.closest(".big-card").querySelector("img").src){
            currentFavourite.splice(i, 1)
            localStorage.setItem("favourite", JSON.stringify(currentFavourite));
           
          }
        }
        localStorage.setItem("favourite", JSON.stringify(currentFavourite));
      })
    })
  }
  // window.localStorage.removeItem("total")
  if(removeButton){
    removeButton.forEach((item) => {
      item.addEventListener("click", () => {
        totalPrice = Number(window.localStorage.getItem("totalPrice"))
        totalPrice = totalPrice - item.parentElement.parentElement.parentElement.querySelector(".number-span").textContent * +((item.closest(".cart-buy-item").querySelector(".price-span").textContent.replace("$", "")).replace("price : ", ""))
        
        item.closest(".cart-buy-item").remove()
        for(let i = 0; i < currentCart.length; i++){
          
          if(currentCart[i].image === item.closest(".cart-buy-item").querySelector("img").src){
            currentCart.splice(i, 1)
            localStorage.setItem("cart", JSON.stringify(currentCart));
          
            
            break;
          }
        }
        localStorage.setItem("cart", JSON.stringify(currentCart));  
        window.localStorage.setItem("totalPrice",totalPrice)
        totalPriceElement.textContent = `Total Price : ${window.localStorage.getItem("totalPrice")}$`
      })
    })
  }

  
  
  
  // window.localStorage.clear()
  //  window.localStorage.removeItem("totalPrice")
  if (window.localStorage.getItem("loginCheck") === "true") {
    let str = 0
    let mp = new Map();
    let mp1 = new Map();
    let obj = {}
    addToCart.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (mp.get(index) === undefined) mp.set(index, false);

        if (mp.get(index) === false) {

          mp.set(index, true);
          item.style.backgroundColor = "var(--secondary-color)";
          item.textContent = "Added to cart";

          obj = {
            id: index,
            name: item.closest(".card").querySelector(".card-title").textContent,
            price: item.closest(".card").querySelector(".card-text").textContent,
            image: item.closest(".card").querySelector(".card-img-top").src,
            number: 1
          };
          str += +((obj.price.replace("$", "")).replace("price : ", ""))
          window.localStorage.setItem("totalPrice",Number(str))
          // ✅ Safe parse of existing cart data
            currentCart = [];
          const cartData = localStorage.getItem("cart");
          if (cartData) {
            try {
              currentCart = JSON.parse(cartData);
            } catch (err) {
              currentCart = [];
            }
          }

          currentCart.push(obj);

          localStorage.setItem("cart", JSON.stringify(currentCart));
        } else {
          mp.set(index, false);
          item.style.backgroundColor = "var(--third-color)";
          item.textContent = "Add to cart";
          if(currentCart){
          for(let i = 0; i < currentCart.length; i++){
            if(currentCart[i].id === obj.id){
              currentCart.splice(i, 1)
            }
          }
          }
          localStorage.setItem("cart", JSON.stringify(currentCart));
          str += -((obj.price.replace("$", "")).replace("price : ", ""))
          window.localStorage.setItem("totalPrice",Number(str))
        }
      });
    });

    addToFavourite.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        if (mp1.get(index) === undefined) mp1.set(index, false);

        if (mp1.get(index) === false) {
          mp1.set(index, true);
          item.style.color = "var(--third-color)";

          const obj = {
            id: index,
            name: item.closest(".card").querySelector(".card-title").textContent,
            price: item.closest(".card").querySelector(".card-text").textContent,
            image: item.closest(".card").querySelector(".card-img-top").src,
          };

          currentFavourite = [];
          const favouriteData = localStorage.getItem("favourite");
          if (favouriteData) {
            try {
              currentFavourite = JSON.parse(favouriteData);
            } catch (err) {
              console.error("Cart JSON parse error:", err);
              currentFavourite = [];
            }
          }

          currentFavourite.push(obj);
          localStorage.setItem("favourite", JSON.stringify(currentFavourite));

        } else {
          mp1.set(index, false);
          item.style.color = "var(--secondary-color)";
          if(currentFavourite){
          currentFavourite.splice(index, 1)
          }
          localStorage.setItem("favourite", JSON.stringify(currentFavourite));
        }
      });
    });

    if (cartItem) {
      cartItem.addEventListener("click", () => {
        window.location.href = "Cart.html";
      });
    }
  }


  if(window.localStorage.getItem("loginCheck") === "false"){
    let addlfag = false
    let addlfag1 = false
  }


  if (registerSubmit) {
    registerSubmit.addEventListener("click", (e) => {
      if (registerEmail && registerPassword) {
        if (registerEmail.value !== "" && registerPassword.value !== "") {
          window.localStorage.setItem("firstName", firstName1.value);
          if (window.localStorage.getItem("registerEmail") === null) {
            window.localStorage.setItem("registerEmail", registerEmail.value);
            window.localStorage.setItem(
              "registerPassword",
              registerPassword.value
            );
            registerEmailValue = window.localStorage
              .getItem("registerEmail")
              .split(" ");
            registerPasswordValue = window.localStorage
              .getItem("registerPassword")
              .split(" ");

          } else {
            window.localStorage.setItem(
              "registerEmail",
              window.localStorage.getItem("registerEmail") +
                " " +
                registerEmail.value
            );
            window.localStorage.setItem(
              "registerPassword",
              window.localStorage.getItem("registerPassword") +
                " " +
                registerPassword.value
            );
            registerEmailValue = window.localStorage
              .getItem("registerEmail")
              .split(" ");
            registerPasswordValue = window.localStorage
              .getItem("registerPassword")
              .split(" ");
          }
          bigCard.style.transform = "rotateY(0deg)";
          window.location.hash = "#login";
          alert("Register Successfully");
        }
      }
    });
  }
  
  if (addToCart.length > 0) {
    addToCart.forEach((item) => {
      item.addEventListener("click", () => {
        if (
          !window.localStorage.getItem("loginEmail") ||
          !window.localStorage.getItem("loginPassword")
        ) {
          window.open("Login.html", "_blank");

        }
      });
    });
  }
  if (addToFavourite.length > 0) {
    addToFavourite.forEach((item) => {
      item.addEventListener("click", () => {
        if (
          !window.localStorage.getItem("loginEmail") ||
          !window.localStorage.getItem("loginPassword")
        ) {
          window.open("Login.html", "_blank");

        }
      });
    });
  }
// localStorage.clear()
  let navButton = document.querySelector(".navlink1");
  let navButton1 = document.querySelector(".Reg");
  let logout = document.querySelector(".logout");
  if (window.localStorage.getItem("loginEmail") != null) {
  if(navButton){
    navButton.textContent = `Hello ${window.localStorage.getItem("firstName")}`;

    navButton.style.cssText = " color :white;width : 200px;background :#ff9b45";
    navButton.parentElement.style.cssText =
      " color :white;width : 200px;background :#ff9b45; border : none";
    navButton.href = "#";
  }
  if(navButton1){
    navButton1.style.display = "none";
  }
  if(cartItem)
    cartItem.style.display = "flex";
  if(logout){
    logout.style.display = "flex";
    logout.style.textAlign = "center";
    logout.style.justifyContent = "center";
    logout.style.alignItems = "center";
    logout.style.width = "100%";
    logout.style.height = "100%";
    logout.style.backgroundColor = "var(--third-color)";
    logout.style.color = "white";
  }
    if(logout){
      logout.addEventListener("click", () => {
        window.localStorage.setItem("loginCheck" , false)
        window.localStorage.removeItem("loginEmail");
        window.localStorage.removeItem("loginPassword");
        window.location.href = "file:///D:/Web%20course/Projects/Project_D_Responsive_JS/index.html";
        window.localStorage.removeItem("cart")
        window.localStorage.removeItem("favourite")
      });
    }
  }