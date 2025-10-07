function onclik()
{
  const inputText=document.querySelector('input').value;
  if(inputText.length==0)
  {
    return;
  }
  const listElement = document.createElement("div");
  const size=document.createElement("h4");
  size.innerHTML=inputText;
  const button = document.createElement("button");
  button.innerHTML="delete";
  listElement.appendChild(size);
  listElement.appendChild(button);
  const outerList=document.getElementsByClassName("outerdiv");
  outerList[0].appendChild(listElement);
  button.addEventListener("click",function(){
    listElement.remove();
  })
  document.querySelector("input").value="";
}