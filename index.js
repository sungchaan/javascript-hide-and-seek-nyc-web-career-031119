function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const lists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i <lists.length; i++){
    let children = lists[i].children;
    for (let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild(){
  let parent = document.querySelector('div#grand-node')
  let nextGen = parent.children[0]
  while (nextGen){
    parent = nextGen;
    nextGen = parent.children[0]
  }
  return parent
}
