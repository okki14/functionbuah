var ubah
var abBesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var ubahbesar=abBesar.split('')
var abKecil='abcdefghijklmnopqrstuvwxyz'
var ubahkecil=abKecil.split('')
function hurufbesar(ubah){
    var ubaharr =ubah.split('')
for(var i=0;i<ubaharr.length;i++){
    for(var j=0;j<ubahkecil.length;j++){
        if(ubaharr[i]==ubahkecil[j]){
            ubaharr.splice(i,1,ubahbesar[j])
            break
        }else{
            continue
        }
    }
}console.log(ubaharr.join(''))
}hurufbesar('okki')
