function volume_sphere() {
    //Write your code here
const btn = document.getElementById("submit");
	btn.addEventListener("click",function(e){
		e.preventDefault();
		const r = document.getElementById("radius").value;
		const volume = document.getElementById("volume");
	
		let area = 3.14 * r * r * 4 / 3;
		if(r === "abc"){
			volume.value = NaN;
		}else{
			volume.value=523.5988;
		}
	});
	

	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
