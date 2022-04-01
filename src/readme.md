# PETSHARE
# # Realizado por: Laura Castellanos, Catalina Quintero y Susana Martínez

# # Descripción:

Petshare es una red social dirigida hacia los amantes de los animales, tanto mascotas
como animales exóticos, donde los usuarios pueden compartir publicaciones, dar like,
tener un perfil único y guardar sus datos en la red.
En Petshare cada usuario podrá ingresar mediante un correo electrónico válido y con su 
respectiva contraseña. 

Al iniciar esta página web, realizamos con equipo de trabajo el diseño de prototipos de baja 
y alta fidelidad, para así generar una idea de lo que queríamos que fuera la página web.
Posteriormente se construyeron las historias de usuario, donde cada una contenía unos criterios
de aceptación y definiciones de hecho, para así organizar el desarrollo del proyecto.

## Prototipo de baja fidelidad:
<!-- Agregar link -->

## Prototipo de alta fidelidad:
<!-- Agregar link -->

## Historias de usuario:

Como primera historia de usuario planteamos: Yo como nuevo usuario quiero registrarme con correo
y contraseña para ingresar a la red social (Petshare). Los criterios de aceptación para esta 
historia, fueron los siguientes:

-El usuario puede ver un mensaje de error si el formato de correo que es ingresa no es valido.
-Hay reglas para la contraseña (cantidad y/o tipo de caracteres). Si no cumple, se muestra un
mensaje descriptivo
-El usuario al ingresar contraseña se enmascaran los caracteres
-Si hay errores o campos vacios, se deben mostrar mensajes descriptivos para ayudar al usuario 
a corregirlos
-Al enviarse el formulario de registro, debe validarse que quede guardado en la firestore

En la segunda historia de usuario se planteó: Yo como nueva usuaria quiero registrarme a la red 
socialcon mi cuenta de google PARA ahorrar tiempo y unificar ambas cuentas. Los criterios de 
aceptación para esta historia, fueron los siguientes:

-Que el usuario pueda visualizar un botón de iniciar con Google
-Que cuando el usuario de click se abra la pestaña de iniciar con google
-Que el usuario pueda ingresar su cuenta de google

La historia de usuario número tres se construyó de la siguiente manera: Yo como usuario de 
Petshare  quiero poder acceder a mi perfil y hacer publicaciones para compartir mi contenido. 
Los criterios de aceptación para esta historia, fueron los siguientes:

-Acceder al perfil del usuario
-Input para la publicación (generar colección de datos en Firstore)
-Botón para publicar el post
-Llamar los datos de Firestore para mostralos en el muro
-Botón de cerrar sesión

La cuarta historia de usuario quedó de la siguiente manera: Yo como usuario de Petshare quiero
poder editar y eliminar mis publicaciones en el muro para modificarlas cuando quiera. Los 
criterios de aceptación fueron los siguientes:

-Poder eliminar un post específico
-Pedir confirmación antes de eliminar un post
-Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto 
y luego guardar los cambios
-Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada
-Al recargar la página debo de poder ver los textos editados

La historia de usuario número cino se construyó de la siguiente manera: YO como usuario de 
Pertshare quiero poder dar y quitar like a las publicaciones y visualizar un contador para 
conocer esa información.
Los criterios de aceptación para esta historia, fueron los siguientes:

-Poder dar y quitar like a una publicación. Máximo uno por usuario
-Llevar un conteo de los likes

Además de las historias de usuario, el proyecto cuenta con unas definiciones de terminado.

## Definición de terminado:
-Es SPA (Signle Page Application)
-Es Responsive
-Se hicieron tests unitarios
-Se testeó manualmente para buscar errores e imperfecciones
-Se hicieron pruebas de usabilidad y feedbak

## Pruebas de usabilidad:

## Tecnologías usadas:

Para crear y desarrollar esta página, usamos las siguientes tecnologías y herramientas: