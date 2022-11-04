class loadingEffect{
            
    constructor(){                    
        this.p = document.createElement('p');
        this.p.setAttribute('class','loadingEffect');
        this.p.innerText='Loading';                    
    }

    update(avviso){
        this.p.innerHTML = avviso;
    }

    start(div) {
        div.append(this.p);
        this.interval = setInterval(() => {
            this.p.innerHTML += '.';
        },50);
    }
    
    unset(){                    
        clearInterval(this.interval)
    }
}    

export const randomPromise = function(index,divMain){    
    let timetowait = RandomTime();
    return new Promise((resolve,reject) => {
        
        if (timetowait < 100){
            reject(`Error ${index} promises - Tempo di attesa troppo basso`);
            return;
        }
        const setLoadingEffect = new loadingEffect();
        setLoadingEffect.start(divMain);
        const t = setTimeout(() => {
            resolve(timetowait);                           
            setLoadingEffect.update(`Resolved ${index} promises after <strong>${timetowait / 1000}s</strong>`);
            clearTimeout(t);
            setLoadingEffect.unset();
        },timetowait);            
    });
}

export function AddDiv(MainDiv,testo){
    let div = document.createElement('div');        
    let p = document.createElement('p');
    p.innerHTML = testo;
    div.append(p);
    MainDiv.append(div);
}

function RandomTime() {
    return Math.floor(Math.random() * 10000);
}