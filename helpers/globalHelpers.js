const calcularEdad = (_fecha) => {
    const fecha = new Date(_fecha);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    return edad;
    
}

module.exports = {
    calcularEdad
};