export const comentario = (autor, fecha, comentarioo) => {
    const template= // html
    `
    <div class="card p-3">
        <h5 class="text-end">Autor: <span>${autor}</span><span class="ms-4">${fecha}</span></h5>
        <p>${comentarioo}</p>
    </div>
    `
    return template
}