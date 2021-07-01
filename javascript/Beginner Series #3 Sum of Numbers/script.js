function getSum(a, b)
{
   let count = 0;
   return (a == b) ? a : a;

   if(a < b){
      for (; a <= b; a++){
        count += a;
      }
    } else if (a > b){
        for(; b <= a; b++){
          count += b;
        }
    }
    
    return count;
}