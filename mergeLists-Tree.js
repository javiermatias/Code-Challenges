/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let list1 = new ListNode(2); //234
let list2 = new ListNode(1); //1356  //
add(list1, 3);
add(list1, 4);
add(list2, 3);
add(list2, 5);
add(list2, 6);
//console.log(list1);
//console.log(list2);

//let aux1=

var mergeTwoLists2 = function (list1, list2) {

    //let listaDefinitiva; //lo q voy a retornar
    if (!list1) return lista2;
    if (!list2) return lista1;
    //let currentNode;
    let current1 = list1;
    let current2 = list2;
    let raiz;
    debugger;
    while (current1) {
        while (current2) {
            if (list1.val > list2.val) { //234 = //1356
                //let current=list1.next;
                //let aux=list2;

                current2 = list2.next
                
                list2.next = list1;
                if(!raiz){
                    raiz=list2;
                }
                list2=current2;
               

                //list2=aux;


            } else {
                current1 = list1.next;
                list1.next = list2;
                if(!raiz){
                    raiz=list1;
                }
                list1=current1;
               
                break;
            }
        }

    }
    return list1;


    /*     while (list1 || list2) {
    
            let nodo;
    
    
            if (list1 && list2) {
    
                if (list1.val > list2.val) {
                    nodo = new ListNode(list2.val);
                    list2 = list2.next;
                } else {
                    nodo = new ListNode(list1.val);
                    list1 = list1.next;
                }
    
    
            } else if (list1) {
    
                nodo = new ListNode(list1.val);
                list1 = list1.next;
            } else {
    
                nodo = new ListNode(list2.val);
                list2 = list2.next;
            }
    
            if (listaDefinitiva) {
                currentNode.next = nodo;
                currentNode = currentNode.next;
            } else {
                listaDefinitiva = nodo;
                currentNode = listaDefinitiva;
            }
        }
    
        return listaDefinitiva; */


};

var mergeTwoLists3 = function(list1, list2) {

    //let listaDefinitiva; //lo q voy a retornar
      if (!list1) return list2;
      if (!list2) return list1;
     
      let values = [];
  
      debugger;
      
      while (list1 || list2) {
          if (!list1 && list2) {
            values.push(list2);
            list2 = list2.next;
            continue;
          }
  
          if (list1 && !list2) {
            values.push(list1);
            list1 = list1.next;
            continue;
          }
  
          if (list1.val >= list2.val) { //234 = //1356
            values.push(list2);
            list2 = list2.next;
          } else {
            values.push(list1);
            list1 = list1.next;
          }
      }
  
  
      for (let i = 0; i < values.length; i++) 
      {
        values[i].next = values[i+1];
      }
    
      const r = values[0];
      values = null;
  
      return new ListNode(r.val,r.next);
  
  };


var mergeTwoLists = function (list1, list2) {

    let listaDefinitiva; //lo q voy a retornar
    if (!list1) return lista2;
    if (!list2) return lista1;
    let currentNode;

    while (list1 || list2) {

        let nodo;


        if (list1 && list2) {

            if (list1.val > list2.val) {
                nodo = new ListNode(list2.val);
                list2 = list2.next;
            } else {
                nodo = new ListNode(list1.val);
                list1 = list1.next;
            }


        } else if (list1) {

            nodo = new ListNode(list1.val);
            list1 = list1.next;
        } else {

            nodo = new ListNode(list2.val);
            list2 = list2.next;
        }

        if (listaDefinitiva) {
            currentNode.next = nodo;
            currentNode = currentNode.next;
        } else {
            listaDefinitiva = nodo;
            currentNode = listaDefinitiva;
        }
    }

    return listaDefinitiva;


};

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists3(list1, list2));
//add(objRaiz,valor);
function add(obj, valor) {

    let node = new ListNode(valor);
    let currentNode = obj;

    //ScurrentNode=objRaiz;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

}

//console.log(objRaiz);