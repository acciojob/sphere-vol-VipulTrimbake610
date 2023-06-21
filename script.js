function volume_sphere() {
    //Write your code here
const btn = document.getElementById("submit");
	btn.addEventListener("click",function(e){
		e.preventDefault();
		const r = document.getElementById("radius").value;
		const volume = document.getElementById("volume");
	
		let area = 3.14 * r * r * 4 / 3;
		volume.value=area;
	});
	

	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
