document.querySelector('button').addEventListener('click', makeReq)

async function makeReq(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://real-rose-monkey-hem.cyclic.app/api/${rapperName}`)
        const data = await response.json()


        console.log(data)
        document.querySelector('h2'.innerText = data.birthName)
    }catch(error){
        console.log(error)
    }
    // const name = document.querySelector('input').value
    // const res = await fetch(`/api?:name =${name}`)
    // const data = await res.json()

    // document.querySelector('h2').textContent = data.birthName
}