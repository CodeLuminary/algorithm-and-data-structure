function simple_sort(values){

    for(let i = 0; i < values.length; i++){
        for(let j = i+1; j < values.length; j++){
            if(values[j] < values[i]){
                let temp = values[i];
                values[i] = values[j];
                values[j] = temp
            }
        }
    }

    return values;
}