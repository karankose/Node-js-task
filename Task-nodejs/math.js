// single exports

function Add( a , b ){
        return a + b;                
}
function Sub (a , b){
        return a - b;
}



module.exports = {
    addition : Add,
    substraction : Sub
};
// modul ko single time hi use kr sakte hai nhi toh vo value ko overwrite krdeg 