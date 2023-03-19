const h6=document.querySelector('h6')

const p=document.querySelector('.aside')
const img=document.querySelector('.image')

const one=document.querySelector('.one')
const upperh6=()=>
{
    h6.style.color="red"

}
const upperp=()=>
{
    p.style.fontSize="20px"
    p.style.backgroundColor="red"
}

const biggest=()=>
{
    p.aside.style.fontSize="20px"
    p.body.style.fontSize="25px"
}
const image1=()=>
{
    
    img.style.width="350px"
    img.style.height="400px"
    
}
const imag2=()=>
{
    img.style.width="150px"
    img.style.height="200px"
}

const oneColor=()=>
{
    one.style.borderColor="yellow"
    one.style.borderWidth="5px"
}
h6.addEventListener('click',upperh6)

img.addEventListener('mousemove',image1)
p.addEventListener('mouseover',upperp)
img.addEventListener('mouseout',imag2)
one.addEventListener('mousemove',oneColor)
p.addEventListener('mouseleave',biggest)
