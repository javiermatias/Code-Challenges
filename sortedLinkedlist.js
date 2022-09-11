// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

  //Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
   
    let node = new ListNode(head.val, null);
    let aux=node;
    while(head.next){
        if(head.val === head.next.val){
            if(head.next.next){
                head.next = head.next.next;
            }else{
                return node;
            }
            
        }
        aux.next=new ListNode(head.next.val,null);
        head=head.next;        
        aux=aux.next;
    }
    return node;
};

function addNodes(){
//debugger;
let arr=[1,1,3,3,4,5,5];

let head= new ListNode(arr[0],null);
let aux=head;
for (let i=1; i<arr.length; i++) {
    let node= new ListNode(arr[i],null);
    aux.next=node;
    aux=aux.next;
    
}
return head;
}

deleteDuplicates(addNodes());