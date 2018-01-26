function Post(
    title,
    description,
    content,
    category,
    publish,
    button
){
    this.title = document.querySelector(title);
    this.description = document.querySelector(description);
    this.content = document.querySelector(content);
    this.category = document.querySelector(category);
    this.publish = document.querySelector(publish);
    this.button = document.querySelector(button);

    // Este es un truco para que cuando se use this a dentro de un boton no de problemas
    var self = this;

    // Eventos
    this.button.addEventListener('click', function(){
        var titlePreview = document.querySelector(self.title.dataset.target),
            slugPreview = document.querySelector(self.title.dataset.targetSlug),
            descriptionPreview = document.querySelector(self.description.dataset.target),
            contentPreview = document.querySelector(self.content.dataset.target),
            categoryPreview = document.querySelector(self.category.dataset.target),
            publishPreview = document.querySelector(self.publish.dataset.target);

        titlePreview.innerHTML = self.title.value;
        slugPreview.innerHTML = 'http://anexsoft.com/' + self.title.value.trim().toLowerCase().split(' ').join('-');
        descriptionPreview.innerHTML = self.description.value;
        contentPreview.innerHTML = self.content.value;
        categoryPreview.innerHTML = post.category.options[post.category.selectedIndex].text;
        publishPreview.innerHTML = self.publish.checked ? 'SI' : 'NO';


    });

}