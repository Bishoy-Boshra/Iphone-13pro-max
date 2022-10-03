// select the viewer iphone 
let bigIphone = document.querySelector( ".my-image" )
let myIphone = Array.from( ( document.querySelector( ".icons" ) ).children )
let body = document.querySelector( "body" )
let color = [ "#222", "#708fb0", "#7d7a75", "#c0b29e", "#c82525" ]

if ( window.localStorage.getItem( "iphone" ) && window.localStorage.getItem( "color" ) )
{
  bigIphone.setAttribute( "src", localStorage.getItem( "iphone" ) )
  body.style.background = `linear-gradient(0deg,#222 , ${ localStorage.getItem( "color" ) })`
}

document.addEventListener( "click", ( e ) =>
{
  myIphone.forEach( ( iphone, index ) =>
  {
    if ( iphone.getAttribute( "src" ) === e.target.getAttribute( "src" ) )
    {
      bigIphone.setAttribute( "src", iphone.getAttribute( "src" ) )
      window.localStorage.setItem( "iphone", iphone.getAttribute( "src" ) )
      window.localStorage.setItem( "color", color[ index ] )
      body.style.background = `linear-gradient(0deg,#222 , ${ color[ index ] })`
    }
  } )
} )
