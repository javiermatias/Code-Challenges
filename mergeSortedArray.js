var merge = function(nums1, m, nums2, n) {
 
    let largo=m+n;   
    for(let i=0; i<largo; i++){
      if(m > 0){
        if(nums1[i] >= nums2[0]){
            let element=nums2.shift();
            nums1.pop();
            nums1.splice(i,0,element);
            //i++;                   
        }
        m--;
      }else{
        let element=nums2.shift();
        nums1[i]=element;
        
      }
     

  }



    /*     let count=0;
    if(!n) return nums1;
    if(!m){
        nums1.push(...nums2);
    }
    //let total=m+n;
    let largeM=m;
    let largeN=n
    

    
    while(m && n){
        
        if(nums1[largeM-m] >= nums2[largeN-n]){
            let element=nums2.shift();
            nums1.splice(largeM-m,0,element);
            n--;
            m--; 
        }else{
            m--;
        }
        
    }
    if(n){
        nums1.push(...nums2);
    }
    return nums1; */
};



let arr=[4,5,6,0,0,0];
let m=3
let arr2=[1,2,3];
n=3;

merge(arr,m,arr2,n);[4,5,6,0,0,0]
