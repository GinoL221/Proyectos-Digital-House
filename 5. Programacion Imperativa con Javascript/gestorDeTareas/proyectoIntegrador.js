const prompt = require("prompt-sync")({ sigint: true });

//array para almacenar las tareas
let tareas = [];
let categoriasNombre = ["Trabajo", "Personal", "Estudio", "Ocio"];

//funciopn que muestra todas las categorias
function mostrarTodasLasCategorias() {
  console.log("Categorias disponibles: ");
  categoriasNombre.forEach((categoria, index) => {
    console.log(`${index + 1}. ${categoria}`);
  });
}

//funcion que sirve para cargar nuevas categorias por el usuario
function agregarNuevaCategoria(categoria) {
  categoriasNombre.push(categoria);
  console.log("Categoria " + categoria + " agregada correctamente!!");
}

//funcion para agregar una tarea
function agregarTarea(nombre, fechaLimite = "null") {
  mostrarTodasLasCategorias();
  let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria: "));
  if (numeroCategoria >= 1 && numeroCategoria < categoriasNombre.length + 1) {
    tareas.push({
      nombre: nombre,
      completada: false,
      fechaLimite: fechaLimite,
      categoria: numeroCategoria,
    });
    console.log("Tarea agregada correctamente!!");
  } else {
    console.log("Categoria invalida!!");
  }
}

//eliminar una tarea
function eliminarTarea(i) {
  if (i >= 0 && i < tareas.length) {
    tareas.splice(i, 1);
    console.log("Tarea eliminada correctamente!!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//funcion para marcar tarea como completada
function completarTarea(i) {
  if (i >= 0 && i < tareas.length) {
    tareas[i].completada = true;
    console.log("Tarea completada!!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//funcion para modificar un tarea especifica
function modificarTarea(
  i,
  nuevoNombre,
  nuevaFechaLimite = null,
  nuevaCategoria
) {
  if (i >= 0 && i < tareas.length) {
    tareas[i].nombre =
      nuevoNombre != undefined ? nuevoNombre : tareas[i].nombre;
    tareas[i].fechaLimite =
      nuevaFechaLimite != undefined ? nuevaFechaLimite : tareas[i].fechaLimite;
    tareas[i].categoria =
      nuevaCategoria != undefined ? nuevaCategoria : tareas[i].categoria;
    console.log("Tarea modificada correctamente!!");
  } else {
    console.log("Indice de tarea invalido");
  }
}

//funcion que filtra tareas por categoria
function filtrarTareasPorCategoria(indiceCategoria) {
  let tareasFiltradas = tareas.filter(function (tarea) {
    return tarea.categoria == indiceCategoria;
  });
  return tareasFiltradas;
}

//funcion que muestra cant de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria) {
  let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
  let tareasCompletadas = tareasCategoria.reduce((contador, tarea) => {
    return tarea.completada ? contador + 1 : contador;
  }, 0);
  let tareasEnTotal = tareasCategoria.length;
  console.log(
    "Tareas completadas de la categoria " +
      numeroCategoria +
      ": " +
      tareasCompletadas +
      " de " +
      tareasEnTotal +
      " tareas!"
  );
}

//funcion que muestra todas las tareas no completadas
function mostrarTareasNoCompletadas() {
  console.log("Tareas no completadas: ");
  tareas.forEach((tarea) => {
    if (!tarea.completada) {
      console.log(
        "- Nombre: " +
          tarea.nombre +
          ", Categoria: " +
          categoriasNombre[tarea.categoria - 1]
      );
    }
  });
}

//funcion para ordenar tareas por la propiedad 'nombre' utilizando BubbleSort
function ordenarTareasPorNombre() {
  for (let j = 0; j < total; j++) {
    for (let i = 0; i < tareas.length - 1; i++) {
      if (tareas[i].nombre > tareas[i + 1].nombre) {
        let temp = tareas[i];
        tareas[i] = tareas[i + 1];
        tareas[i + 1] = temp;
      }
    }
  }
}

//funcion para ordenar tareas por la propiedad 'fecha limite' utilizando BubbleSort
function ordenarTareasPorFecha() {
  for (let j = 0; j < total; j++) {
    for (let i = 0; i < tareas.length - 1; i++) {
      if (tareas[i].fechaLimite > tareas[i + 1].fechaLimite) {
        let temp = tareas[i];
        tareas[i] = tareas[i + 1];
        tareas[i + 1] = temp;
      }
    }
  }
}

//funcion que busca una tarea por nombre y retorna su posicion en el arreglo
function buscarTareaPorNombre(nombreTarea) {
  let min = 0;
  let max = tareas.length - 1;
  while (min <= max) {
    const MEDIO = Math.round((min + max) / 2);
    if (tareas[MEDIO].nombre === nombreTarea) {
      return MEDIO;
    } else if (tareas[MEDIO].nombre < nombreTarea) {
      min = MEDIO + 1;
    } else {
      max = MEDIO - 1;
    }
  }
  return -1;
}

//funcion

//funcion para mostrar el menu al usuario
function mostrarMenu() {
  console.log(" --- Menu --- ");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar una tarea");
  console.log("5. Mostrar todas las tareas");
  console.log("6. Mostrar todas las categorias");
  console.log("7. Agregar nueva categoria");
  console.log("8. Filtrar tareas por categoria");
  console.log("9. Vizualizar cantidad de tareasc completadas por categoria");
  console.log("10. Mostrar todas las tareas no completadas");
  console.log("11. Ordenar las tareas alfabeticamente");
  console.log("12. Ordenar las tareas por fecha limite");
  console.log("13. Buscar una tarea por su nombre");
  console.log("0. Salir");
}

//funcion para interactuar con el usuario
function interactuarUsuario() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingresar la opcion de seleccionada: "));

    switch (opcion) {
      case 0:
        console.log("Saliendo...");
        break;

      case 1:
        let nombreTarea = prompt("Ingrese el nombre de la tarea a cargar: ");
        agregarTarea(nombreTarea);
        break;

      case 2:
        let indiceAEliminar = parseInt(
          prompt("Ingrese el nombre de la tarea a eliminar: ")
        );
        eliminarTarea(indiceAEliminar);
        break;

      case 3:
        let indiceACompletar = parseInt(
          prompt("Ingrese el nombre de la tarea a completar: ")
        );
        completarTarea(indiceACompletar);
        break;

      case 4:
        let indice = parseInt(prompt("Ingrese el indice a modificar: "));
        if (i >= 1 && i < tareas.length + 1) {
          console.log(" -- Modificar tarea --");
          console.log("1. Modificar nombre");
          console.log("2. Modificar fecha limite");
          console.log("3. Modificar categoria");
          let opcionModificar = parseInt(
            prompt("Ingrese la opcion a modificar: ")
          );
          switch (opcionModificar) {
            case 1:
              let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");
              modificarTarea(indice, nuevoNombre);
              break;

            case 2:
              let nuevaFechaLimite = prompt(
                "Ingrese la nueva fecha limite de la tarea: "
              );
              modificarTarea(indice, undefined, nuevaFechaLimite);
              break;

            case 3:
              let nuevaCategoria = parseInt(
                prompt("Ingrese el nuevo numero de la categoria: ")
              );
              if (
                nuevaCategoria >= 1 &&
                nuevaCategoria < categoriasNombre.length + 1
              ) {
                modificarTarea(indice, undefined, undefined, nuevaCategoria);
              } else {
                console.log("Numero de categorio invalido!!");
              }
              break;

            default:
              console.log("Numero invalido!!");
              break;
          }
        } else {
          console.log("Indice de tarea invalido");
        }
        break;

      case 5:
        console.log(" -- Lista de tareas --");
        console.log(tareas);
        break;

      case 6:
        console.log(" -- Lista de categorias --");
        mostrarTodasLasCategorias();
        break;

      case 7:
        let nuevaCategoria = prompt(
          "Ingrese el nombre de la nueva categoria: "
        );
        agregarNuevaCategoria(nuevaCategoria);
        break;

      case 8:
        mostrarTodasLasCategorias();
        let numeroCategoria = parseInt(
          prompt("Ingrese el numero de la categoria a filtrar: ")
        );
        let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
        console.log("Tareas de la categoria seleccionada: ");
        console.log(tareasCategoria);
        break;

      case 9:
        mostrarTodasLasCategorias();
        let numCategoria = parseInt(
          prompt("Ingrese el numero de la categoria a visualizar: ")
        );
        contarTareasCompletadasPorCategoria(numCategoria);
        break;

      case 10:
        mostrarTareasNoCompletadas();
        break;

      case 11:
        ordenarTareasPorNombre();
        console.log("Tareas ordenadas por nombre: ");
        console.log(tareas);
        break;

      case 12:
        ordenarTareasPorFecha();
        console.log("Tareas ordenadas por fecha limite: ");
        console.log(tareas);
        break;

      case 13:
        ordenarTareasPorNombre();
        let nombreABuscar = prompt("Ingrese nombre de la tarea a buscar: ");
        let indiceTarea = buscarTareaPorNombre(nombreABuscar);
        if (indiceTarea !== -1) {
          console.log("Tarea encontrada en el indice: " + indiceTarea);
        } else {
          console.log("Tarea no encontrada!!");
        }
        break;

      default:
        console.log("Opcion Invalida!!!");
        break;
    }
  }
}

interactuarUsuario();
