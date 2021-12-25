//Solves the connected components counts
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

const largestComponent = (graph)=>{
    const visited = new Set();
    let longest = 0;
    for(let node in graph){
        const size = exploreSize(graph,node,visited);
        if(size > longest) longest = size;
    }
    return longest;
}

const exploreSize = (graph, node, visited)=>{
    if(visited.has(node)) return 0;

    visited.add(node);

    let size = 1;

    for(let neighbor of graph[node]){
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
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

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'y'],
    ['w', 'v']
];

const shortestPossiblePath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    console.log(graph);

    const visited = new Set([ nodeA ]);
    const queue = [ [nodeA, 0]];

    while(queue.length > 0){
        const [node, distance] = queue.shift();

        if(node === nodeB) return distance;

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([ neighbor, distance + 1]);
            }
        }
    }

    return -1;
}

const buildGraph = (edges) =>{
    const graph = {};

    for(let edge in edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = []
        if(!(a in graph)) graph[b] = []

        graph[a].push(b);
        graph[b].push(a);
    }
}

shortestPossiblePath(edges,'w','z');

const islandCount = (grid) =>{
    const visited = new Set();
    let count = 0; 

    for(let r = 0; r < grid.length; r+=1){
        for(let c = 0; c < grid[0].length; c +=1){
            if(exploreIslandCount(grid,r,c,visited)===true){
                count += 1;
            }
        }
    }

    return count;
}

const exploreIslandCount = (grid, r, c, visited)=>{
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'w') return false;

    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    exploreIslandCount(grid, r-1, c, visited);
    exploreIslandCount(grid, r+1, c, visited);
    exploreIslandCount(grid, r, c-1, visited);
    exploreIslandCount(grid, r, c+1, visited);

    return true;
}