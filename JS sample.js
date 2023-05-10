//check user mobile or not
function cart_mobile_or_pc(){
  if (window.innerWidth<1025) {
  //move fly cart to mobile header
		let fly_cart= document.getElementById("woofc-count");
		fly_cart.remove();
		document.getElementById("top_menu_minicart_mobile").append(fly_cart);
		//console.log(window.innerWidth); //debug
	}else{
		//move fly cart to desktop header
		let fly_cart= document.getElementById("woofc-count");
		fly_cart.remove();
		document.getElementById("top_menu_minicart").append(fly_cart);
		//console.log(window.innerWidth); //debug
	}
}
		
cart_mobile_or_pc();
		
	//on window resize, check if we're on mobile mode or pc
	var check_resize_timer;
	window.addEventListener("resize",  (event) => {
		clearTimeout(check_resize_timer); 
		check_resize_timer = setTimeout(cart_mobile_or_pc, 300); 
	} );

//scrolling text for homepage blog ad
let blog_ad_words=document.getElementsByClassName("cool_text_blog_ad")[0];
let topoffset=0;
let increment=50;
//check if the scrolling text exists (if we're in the right page)
if(blog_ad_words != undefined){
	let scrolingtext=setInterval( ()=>{
		blog_ad_words.style.top=topoffset+"px";
		topoffset-=increment;
		//console.log("child  "+(topoffset+blog_ad_words.offsetHeight)); //debug
		if((topoffset+blog_ad_words.offsetHeight)<=600){	
			topoffset=0;
			//fade out for resetting
			blog_ad_words.style.opacity=0;
			//fade back in after 1 second
			setTimeout(() => {
				blog_ad_words.style.opacity=1;
			}, "1000");
		}
	} ,500);
}
