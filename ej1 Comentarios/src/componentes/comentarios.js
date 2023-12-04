import { comentariosBD } from './bd.js'
import { comentario } from './comentario.js'

export const comentarios = {
    template: // html
    `
    <div class="mt-4" id="divComentario"></div>
    `,
    script: () => {
        console.log('Hola desde el componente comentarios')
        let html = ''
        // Recorremos el array con los datos de los comentarios
        comentariosBD.forEach(element => {
            html += comentario(element.Autor, element.Fecha, element.Coment)
        });
        document.querySelector('#divComentario').innerHTML = html
    }
}