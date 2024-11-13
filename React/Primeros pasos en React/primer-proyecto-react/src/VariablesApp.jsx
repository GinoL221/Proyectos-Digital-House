const string = 'Curso de React' // Se ve tal cual el string sin comillas
const string2 = "Digital House" // Se ve tal cual el string sin comillas
const string3 = `Este es un ${string} que estás cursando en ${string2}` // Se ve una cadena de texto
const num = 1.5 // Se ve como un número común y corriente
const array = ['HTML', 'CSS', 'JavaScript', 'React' ] // Se ve como texto todo junto, pero está separado en el HTML
const boolean = true // No se ve para nada ni aparece en el HTML
const foo = () => 'Devuelve un string' // Si no la ejecuto rompe la app, debo ejecutarla
const object = { name: 'Sergie', job: 'Programador' } // Esto no funciona y rompe la app ¿Como veo un objeto?
const set = new Set([1,2,3,4]) // Es una excepción ya que aunque sea un objeto, lo mismo muestra el derivado ya sea string o array
const date = new Date() // Esto no funciona y rompe la app ¿Como veo un fecha?

export const VariablesApp = () => {
    return (
    <div>
        {JSON. stringify(array)}
    </div>
    )
}