const connectedComponentCount = (graph) =>{
    const visited = new Set();
    for(let node in graph){
        explore(graph,node, visited);
    }
};

const explore = (graph, currrent, visited) =>{
    if(visited.has(current)) return false;

    visited.add(current);

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited)
    }

    return true;
}

connectedComponentCount({
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
})