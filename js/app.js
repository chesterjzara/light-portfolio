
const switchDisplayArticle = (event) => {
    let pageID
    if(!$(event.target).hasClass('nav-button')) {
        pageID = $(event.target).parent().attr('id')
    } else {
        pageID = event.target.id
    }
    
    $('article').hide()
    $(`.${pageID}-container`).slideDown()
    $('.nav-button').removeClass('page-active')
    $(`#${pageID}`).toggleClass('page-active')
}

const filterProjects = (event) => {
    console.log(event.target.id)
    $('.project').hide()    
    $(`.${event.target.id}`).slideDown()

    $('.filter-container > div').removeClass('filter-active')
    $(`#${event.target.id}`).toggleClass('filter-active')
}

$( () => {

    $('nav > div').on('click', switchDisplayArticle)
    $('.filter-container > div').on('click', filterProjects)
})