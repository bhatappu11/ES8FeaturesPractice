function prom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('2 secs have passed')
        },2000)
    })
}

async function func(){
    console.log('inside async func')
    const res = await prom();
    console.log(res)
}

func()
console.log('done')