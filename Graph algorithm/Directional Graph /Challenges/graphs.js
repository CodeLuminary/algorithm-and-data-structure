//this is use to check if a path is available
const hasPath = (graph, src, des) =>{
    if(src===des) return true

    for(let neighbor of graph[src]){
        if(hasPath(graph,neighbor,des)===true){
            return true;
        }
    }
    return false;
}