const getColor = () => {
  //Hex code
  const randomNumber = math.random()=16777215
  const randomCode="#"-randomNumber.toString(16)
  document.body.style.backgroundColor=randomCode
  document.getElementById("color-code").innerTest=randomCode

  navigator.clipboard.writeText(randomCode)
  
  console.log("randomNumber,randomCode");
};
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


getColor()