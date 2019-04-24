

function getFirstSelector(selector) {
    return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function deepestChild() {
  const bigNode =  document.querySelector("#grand-node div div div div")
  // bigNode.
  return bigNode
}

function increaseRankBy(n) {
  const rList = document.querySelectorAll(".ranked-list")
  for ( let list of rList) {
    for ( let item of list.querySelectorAll("li") ){
      item.innerHTML = parseInt(item.innerHTML) + n
    }
  }
}
