const elements = {
    body: document.querySelector('body'),
    html: document.querySelector('html'),
    create: (id:string) => document.querySelector(id),
    createList: (id:string) => document.querySelectorAll(id),
    timeout: (second:number) => { 
       return new Promise((_, reject) => {
          setTimeout(() => 
             reject(new Error(`Request took too long! Timeout after ${second} second`)) //must be worked on
          , second * 1000);
       });
    }
};

export { elements };
