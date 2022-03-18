import { fetchData, getButton, gitDataList, userInput } from "./fetchDetails.js";
import {renderRepo, yearSelect} from "./renderUI.js";

const userInfo = document.querySelector("#userInfo");
const userList = document.querySelector("#userList");
const btnLoader = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`;
const pageLoader = `<div class="text-center p-5"><div class="spinner-border" role="status"></div><div class="pt-3"><strong>Loading...</strong></div></div>`;

// Button listner invoke api call for username provided.
getButton.addEventListener("click",()=>{
	getButton.innerHTML = btnLoader;
	userList.innerHTML = pageLoader;
	userInfo.innerHTML = pageLoader;
	getButton.setAttribute("disabled","disabled");
	yearSelect.setAttribute("disabled","disabled");
	fetchData(userInput.value);
});

// filter the list of repo with years created.
yearSelect.addEventListener("change",()=>{
	if (yearSelect.value === "Show All"){
		renderRepo(gitDataList);
	}else{
		const yearFilterData = gitDataList.filter(item =>{
			return item.created_at.startsWith(yearSelect.value);
		});
		if(yearFilterData < 1){
			userList.innerHTML = '<div class="alert alert-warning">No repo created! Please select different year.</div>';
		}else{
			renderRepo(yearFilterData);
		}
	}
});


