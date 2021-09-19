 
    function audio_fun() {
        let rs=document.getElementById("audio")
           let div=document.getElementById("audio_div")
           div.innerHTML=null
           let img=document.createElement("img")
           img.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkzLjAzOCA5My4wMzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTQ2LjU0Nyw3NS41MjFjMCwxLjYzOS0wLjk0NywzLjEyOC0yLjQyOSwzLjgyM2MtMC41NzMsMC4yNzEtMS4xODcsMC40MDItMS43OTcsMC40MDJjLTAuOTY2LDAtMS45MjMtMC4zMzItMi42OTYtMC45NzMgICBsLTIzLjA5OC0xOS4xNEg0LjIyNUMxLjg5Miw1OS42MzUsMCw1Ny43NDIsMCw1NS40MDlWMzguNTc2YzAtMi4zMzQsMS44OTItNC4yMjYsNC4yMjUtNC4yMjZoMTIuMzAzbDIzLjA5OC0xOS4xNCAgIGMxLjI2Mi0xLjA0NiwzLjAxMi0xLjI2OSw0LjQ5My0wLjU2OWMxLjQ4MSwwLjY5NSwyLjQyOSwyLjE4NSwyLjQyOSwzLjgyM0w0Ni41NDcsNzUuNTIxTDQ2LjU0Nyw3NS41MjF6IE02Mi43ODQsNjguOTE5ICAgYy0wLjEwMywwLjAwNy0wLjIwMiwwLjAxMS0wLjMwNCwwLjAxMWMtMS4xMTYsMC0yLjE5Mi0wLjQ0MS0yLjk4Ny0xLjIzN2wtMC41NjUtMC41NjdjLTEuNDgyLTEuNDc5LTEuNjU2LTMuODIyLTAuNDA4LTUuNTA0ICAgYzMuMTY0LTQuMjY2LDQuODM0LTkuMzIzLDQuODM0LTE0LjYyOGMwLTUuNzA2LTEuODk2LTExLjA1OC01LjQ4NC0xNS40NzhjLTEuMzY2LTEuNjgtMS4yNC00LjEyLDAuMjkxLTUuNjVsMC41NjQtMC41NjUgICBjMC44NDQtMC44NDQsMS45NzUtMS4zMDQsMy4xOTktMS4yMzFjMS4xOTIsMC4wNiwyLjMwNSwwLjYyMSwzLjA2MSwxLjU0NWM0Ljk3Nyw2LjA5LDcuNjA2LDEzLjQ4NCw3LjYwNiwyMS4zOCAgIGMwLDcuMzU0LTIuMzI1LDE0LjM1NC02LjcyNSwyMC4yNEM2NS4xMzEsNjguMjE2LDY0LjAwNyw2OC44MzIsNjIuNzg0LDY4LjkxOXogTTgwLjI1Miw4MS45NzYgICBjLTAuNzY0LDAuOTAzLTEuODY5LDEuNDQ1LTMuMDUyLDEuNDk1Yy0wLjA1OCwwLjAwMi0wLjExNywwLjAwNC0wLjE3NywwLjAwNGMtMS4xMTksMC0yLjE5My0wLjQ0Mi0yLjk4OC0xLjIzN2wtMC41NTUtMC41NTUgICBjLTEuNTUxLTEuNTUtMS42NTYtNC4wMjktMC4yNDYtNS43MDdjNi44MTQtOC4xMDQsMTAuNTY4LTE4LjM5NiwxMC41NjgtMjguOTgyYzAtMTEuMDExLTQuMDE5LTIxLjYxMS0xMS4zMTQtMjkuODQ3ICAgYy0xLjQ3OS0xLjY3Mi0xLjQwNC00LjIwMywwLjE3LTUuNzgzbDAuNTU0LTAuNTU1YzAuODIyLTAuODI2LDEuODktMS4yODEsMy4xMTUtMS4yNDJjMS4xNjMsMC4wMzMsMi4yNjMsMC41NDcsMy4wMzYsMS40MTcgICBjOC44MTgsOS45MjgsMTMuNjc1LDIyLjcxOCwxMy42NzUsMzYuMDFDOTMuMDQsNTkuNzgzLDg4LjQ5OSw3Mi4yMDcsODAuMjUyLDgxLjk3NnoiIGZpbGw9IiNmZmViMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
           img.setAttribute("class","img_audio_calss")
           img.onclick=()=>{
               pause()
           }
           div.append(img)
        rs.play() 
       }
   function pause(){
       let rs=document.getElementById("audio")
           let div=document.getElementById("audio_div")
           div.innerHTML=null
           let img=document.createElement("img")
           img.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OC4wNzUgNDQ4LjA3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTM1Mi4wMjEsMTYuMDc1YzAtNi4wOC0zLjUyLTExLjg0LTguOTYtMTQuNGMtNS43Ni0yLjg4LTEyLjE2LTEuOTItMTYuOTYsMS45MmwtMTQxLjc2LDExMi45NmwxNjcuNjgsMTY3LjY4VjE2LjA3NXoiIGZpbGw9IiNmZmViMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNNDQzLjM0OSw0MjAuNzQ3bC00MTYtNDE2Yy02LjI0LTYuMjQtMTYuMzg0LTYuMjQtMjIuNjI0LDBzLTYuMjQsMTYuMzg0LDAsMjIuNjI0bDEwMC42NzIsMTAwLjcwNGgtOS4zNzYgIGMtOS45MiwwLTE4LjU2LDQuNDgtMjQuMzIsMTEuNTJjLTQuOCw1LjQ0LTcuNjgsMTIuOC03LjY4LDIwLjQ4djEyOGMwLDE3LjYsMTQuNCwzMiwzMiwzMmg3NC4yNGwxNTUuODQsMTI0LjQ4ICBjMi44OCwyLjI0LDYuNCwzLjUyLDkuOTIsMy41MmMyLjI0LDAsNC44LTAuNjQsNy4wNC0xLjZjNS40NC0yLjU2LDguOTYtOC4zMiw4Ljk2LTE0LjR2LTU3LjM3Nmw2OC42NzIsNjguNjcyICBjMy4xMzYsMy4xMzYsNy4yMzIsNC43MDQsMTEuMzI4LDQuNzA0czguMTkyLTEuNTY4LDExLjMyOC00LjY3MkM0NDkuNTg5LDQzNy4xMzEsNDQ5LjU4OSw0MjcuMDE5LDQ0My4zNDksNDIwLjc0N3oiIGZpbGw9IiNmZmViMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
           img.setAttribute("class","img_audio_calss")
           img.onclick=()=>{
               audio_fun()
           }
           div.append(img)
        rs.pause() 
   }
      
   async function main() {
       let name=document.getElementById("query").value
       if(name.length<3){
           return false;
       }
      
      
      let movies=await serachmovie(name)
      if(movies===undefined){
          return false
      }
      console.log('movies:', movies)
      moiv_div.style.display="block"
      non.style.display="block"
      append_movie(movies)
   
   }
   //serach  omovie
   let non=document.getElementById("non")
   
   async function serachmovie(name) {
      let res=await fetch(`https://www.superheroapi.com/api.php/3045277052375665/search/${name}`)
       let data=await res.json()
       console.log('data:', data)
       return data.results
   }
   let moiv_div=document.getElementById("movies")
   moiv_div.style.display="none"
   non.style.display="none"
   
   
   function append_movie(m) {
   moiv_div.innerHTML=null
   m.forEach(({name,appearance,biography,image,powerstats,connections}) => {
    
    let{gender}=appearance
   
   
    let f_name=biography["full-name"]
    console.log('f_name:', f_name)
    
   
     console.log('gender:', gender)
   let div=document.createElement("div")
   div.setAttribute("class","div_info")
     let p_avt=document.createElement('p')
     let p_gen=document.createElement('p')
     let p=document.createElement('p')
     let avt_div=document.createElement("div")
     avt_div.append(p_avt,p)
     avt_div.setAttribute("class","info_div")
       p.innerText=f_name
       p.setAttribute("class","p_name")
     p_gen.innerText=gender
     p_gen.setAttribute("class","p_gender")
    p_avt.innerText=name
    p_avt.setAttribute("class","p_avt")
    let {url}=image
    let img_for_icon=document.createElement("div")
    img_for_icon.setAttribute("class","img_div_icon")
    let img_icon=document.createElement("img")
    img_icon.setAttribute("id","img_icon_id")
    img_icon.src=url
    img_for_icon.append(img_icon)
    div.onclick=()=>{
       info_fun(name,appearance,biography,image,powerstats,connections)
    }
    
    
   
    div.append(img_for_icon,avt_div,p_gen)
    moiv_div.append(div)
   });
       
   }
   
   let cont_div=document.createElement("div")
   function info_fun(name,appearance,biography,image,powerstats,connections) {
       document.getElementById("audio_div").setAttribute("class","audio_after_clicl")
       let{alignment,publisher}=biography
      let dob= biography["place-of-birth"]
       let f_a=biography["first-appearance"]
     
       let{gender}=appearance
       let f_name=biography["full-name"]
       let main_div=document.getElementById("cont")
       main_div.style.display="none"
       
      
      let img_div=document.createElement("div")
      let img_avt=document.createElement("img")
      let {url}=image
      img_avt.src=url
      img_avt.setAttribute("class","avt_cont_img")
       img_div.append(img_avt)
       img_div.setAttribute("class","class1")
      let info_div=document.createElement("div")
       let p_name=document.createElement("p")
       
       p_name.innerText="Char name: "+name
       let p_fname=document.createElement("p")
       p_fname.innerText="Name: "+f_name
       let p_gen=document.createElement("p")
       p_gen.innerText="Gender: "+gender
       let p_dob=document.createElement("p")
       p_dob.innerText="Place of Birth: "+dob
       let p_a=document.createElement("p")
       p_a.innerText="First-appearance: "+f_a
       let p_ali=document.createElement("p")
       p_ali.innerText="Alignment: "+alignment
       let p_pub=document.createElement("p")
       p_pub.innerText="Publisher: "+publisher
       let head_1=document.createElement("h6")
       head_1.innerText="BIOGRAPHY"
       info_div.append(head_1,p_name,p_gen,p_dob,p_gen,p_a,p_ali,p_pub,p_fname)
       info_div.setAttribute("class","class2")
       let{combat,durability,intelligence,power,speed,strength}=powerstats
       let power_div=document.createElement("div")
       let p1=document.createElement("p")
       p1.innerText="Combat "+combat
       let p2=document.createElement("p")
       p2.innerText="Durability "+durability
       let p3=document.createElement("p")
       p3.innerText="Intelligence "+intelligence
       let p4=document.createElement("p")
       p4.innerText="Power "+power
       let p5=document.createElement("p")
       p5.innerText="Speed "+speed
       let p6=document.createElement("p")
       p6.innerText="Strength "+strength
       let head_2=document.createElement("h6")
       head_2.innerText="POWERSTATS"
       power_div.append(head_2,p1,p2,p3,p4,p5,p6)
       
       power_div.setAttribute("class","class3")
       let{relatives}=connections
       let g_a=connections["group-affiliation"]
      
   
       let co_div=document.createElement("div")
       let p_g_a=document.createElement("p")
       p_g_a.innerText="Relatives: "+g_a
       let p_rela=document.createElement("p")
       
       console.log('relatives.length:', relatives.length)
       p_rela.innerText="Group-affiliation: "+relatives
       
       let head_3=document.createElement("h6")
       head_3.innerText="CONNECTIONS"
       co_div.append(head_3,p_g_a,p_rela)
       co_div.setAttribute("class","class4")
      
       let tempdiv_1=document.createElement("div")
       let tempdiv_2=document.createElement("div")
       tempdiv_2.append(info_div,power_div)
       tempdiv_2.setAttribute("class","fow_coloum")
       tempdiv_1.append(img_div,tempdiv_2)
       tempdiv_1.setAttribute("class","fow_row")
       let btn=document.createElement("button")
       btn.innerText="Back"
       
       cont_div.append(tempdiv_1,co_div,btn)
       cont_div.setAttribute("class","cont_div_avt")
      
       btn.onclick=()=>{
               main_div.style.display="block"
               cont_div.innerHTML=""
               document.getElementById("query").value=""
               moiv_div.style.display="none"
           non.style.display="none"
           document.getElementById("audio_div").setAttribute("class","audio_div")
   
       }
           document.body.append(cont_div)
   }
   let timerId
   function debounce(func,delay) {
       
       let name=document.getElementById("query").value
       if(name.length==0){
           moiv_div.style.display="none"
           non.style.display="none"
       }
       if(name.length<3){
           return false;
       }
       if(timerId){
           clearTimeout(timerId)
       }
      timerId=setTimeout(()=>{
           func()
       },delay)
   }
   
   
   
   (function ($, window) {
       var $window = $(window);
       /**
        * Makes a nice constellation on canvas
        * @constructor Constellation
        */
       function Constellation (canvas, options) {
           var $canvas = $(canvas),
               context = canvas.getContext('2d'),
               defaults = {
                   star: {
                       color: 'rgba(255, 255, 255, .5)',
                       width: 1,
                       randomWidth: true
                   },
                   line: {
                       color: 'rgba(255, 255, 255, .5)',
                       width: 0.2
                   },
                   position: {
                       x: 0,
                       y: 0
                   },
                   width: window.innerWidth,
                   height: window.innerHeight,
                   velocity: 0.1,
                   length: 100,
                   distance: 120,
                   radius: 150,
                   stars: []
               },
               config = $.extend(true, {}, defaults, options);
   
           function Star () {
               this.x = Math.random() * canvas.width;
               this.y = Math.random() * canvas.height;
   
               this.vx = (config.velocity - (Math.random() * 0.5));
               this.vy = (config.velocity - (Math.random() * 0.5));
   
               this.radius = config.star.randomWidth ? (Math.random() * config.star.width) : config.star.width;
           }
   
           Star.prototype = {
               create: function(){
                   context.beginPath();
                   context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                   context.fill();
               },
   
               animate: function(){
                   var i;
                   for (i = 0; i < config.length; i++) {
   
                       var star = config.stars[i];
   
                       if (star.y < 0 || star.y > canvas.height) {
                           star.vx = star.vx;
                           star.vy = - star.vy;
                       } else if (star.x < 0 || star.x > canvas.width) {
                           star.vx = - star.vx;
                           star.vy = star.vy;
                       }
   
                       star.x += star.vx;
                       star.y += star.vy;
                   }
               },
   
               line: function(){
                   var length = config.length,
                       iStar,
                       jStar,
                       i,
                       j;
   
                   for (i = 0; i < length; i++) {
                       for (j = 0; j < length; j++) {
                           iStar = config.stars[i];
                           jStar = config.stars[j];
   
                           if (
                               (iStar.x - jStar.x) < config.distance &&
                               (iStar.y - jStar.y) < config.distance &&
                               (iStar.x - jStar.x) > - config.distance &&
                               (iStar.y - jStar.y) > - config.distance
                           ) {
                               if (
                                   (iStar.x - config.position.x) < config.radius &&
                                   (iStar.y - config.position.y) < config.radius &&
                                   (iStar.x - config.position.x) > - config.radius &&
                                   (iStar.y - config.position.y) > - config.radius
                               ) {
                                   context.beginPath();
                                   context.moveTo(iStar.x, iStar.y);
                                   context.lineTo(jStar.x, jStar.y);
                                   context.stroke();
                                   context.closePath();
                               }
                           }
                       }
                   }
               }
           };
   
           this.createStars = function () {
               var length = config.length,
                   star,
                   i;
   
               context.clearRect(0, 0, canvas.width, canvas.height);
   
               for (i = 0; i < length; i++) {
                   config.stars.push(new Star());
                   star = config.stars[i];
   
                   star.create();
               }
   
               star.line();
               star.animate();
           };
   
           this.setCanvas = function () {
               canvas.width = config.width;
               canvas.height = config.height;
           };
   
           this.setContext = function () {
               context.fillStyle = config.star.color;
               context.strokeStyle = config.line.color;
               context.lineWidth = config.line.width;
           };
   
           this.setInitialPosition = function () {
               if (!options || !options.hasOwnProperty('position')) {
                   config.position = {
                       x: canvas.width * 0.5,
                       y: canvas.height * 0.5
                   };
               }
           };
   
           this.loop = function (callback) {
               callback();
   
               this.rAF = window.requestAnimationFrame(function () {
                   
                   this.loop(callback);
                   
               }.bind(this));
           };
   
           this.handlers = {
               window: {
                   mousemove: function(e){
                       config.position.x = e.pageX - $canvas.offset().left;
                       config.position.y = e.pageY - $canvas.offset().top;
                   },
                   resize: function () {
                       window.cancelAnimationFrame(this.rAF);
                   }
               }
           };
   
           this.bind = function () {
               $window
                   .on('mousemove', this.handlers.window.mousemove)
                   .on('resize', this.handlers.window.resize.bind(this));
           };
   
           this.unbind = function () {
               $window
                   .off('mousemove', this.handlers.window.mousemove)
                   .off('resize', this.handlers.window.resize);
           }
   
           this.init = function () {
               this.setCanvas();
               this.setContext();
               this.setInitialPosition();
               this.loop(this.createStars);
               this.bind();
           };
       }
   
       function instantiate(element, options) {
           var c = new Constellation(element, options);
           c.init();
       }
   
       $.fn.constellation = function (options) {
           return this.each(function () {
               $window.on('resize', () => {
                   instantiate(this, options);
               });
   
               instantiate(this, options);
           });
       };
   })($, window);
   
   // Init plugin
   $('canvas').constellation({
       star: {
           width: 3
       },
       line: {
           color: 'rgba(255, 255, 255, .5)'
       },
       length: (window.innerWidth / 6),
       radius: (window.innerWidth / 5)
   });