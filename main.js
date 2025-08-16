{
    let IconPhoto = document.getElementsByClassName("IconPhotoPanner")[0];
    let container = document.getElementsByClassName("container")[0];
    
    function ChangePhoto(NewSourcePhoto) 
    {
        IconPhoto.src = NewSourcePhoto;
    }
    function ChangeColor(NewColor)
    {
        container.style.background = NewColor;
    }
}