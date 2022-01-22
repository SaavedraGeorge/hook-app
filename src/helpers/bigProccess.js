export const bigProccess = ( iteraction ) => {
    for( let i = 0; i < iteraction; i++ ){
        console.log('proceso en curso...');
    }
    return (`${ iteraction} iteracciones realizadas`)
};
