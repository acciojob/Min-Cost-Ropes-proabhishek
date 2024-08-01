
function mincost(arr) {
    // Create a min-heap to efficiently get the two smallest elements
    let heap = [...arr];
    // heap.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Continue until there's only one rope left
    while (heap.length > 1) {
        // Take the two shortest ropes
        let first = heap.shift();
        let second = heap.shift();
        
        // Combine them and add to the total cost
        let combined = first + second;
        totalCost += combined;
        
        // Add the new rope back to the heap
        heap.push(combined);
        
        // Re-sort the heap
        // heap.sort((a, b) => a - b);
   }
	return totalCost;
}
  


module.exports=mincost;
