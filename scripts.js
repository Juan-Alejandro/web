function pintarcanvarojo(){
                canva=document.getElementById('canva');
                contexto=canva.getContext("2d");
                const Nrandom =parseInt(Math.random() * 6);
                let color;
                switch(Nrandom){
                    case 0:
                            color="red";
                        break;
                    case 1:
                            color="blue";
                        break;
                    case 2:
                            color="yellow";
                        break;
                    case 3:
                            color="brown";
                        break;
                    case 4:
                            color="gray";
                        break;
                    case 5:
                            color="black";
                        break;    
                }
                contexto.fillStyle = color;
                contexto.fillRect(0,0,500,500);    
                
                localStorage.setItem("Colorcito", color);
            }
            function cargarcolor(){
                const carga = localStorage.getItem("Colorcito");
                if(carga){
                    const canva = document.getElementById('canva');
                    const contexto = canva.getContext("2d");
                    contexto.fillStyle = carga;
                    contexto.fillRect(0, 0, 500, 500);
                    
                }else{
                    alert("Error en el guardado");
                }
            
            }