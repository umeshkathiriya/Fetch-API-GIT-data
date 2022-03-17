import FetchWrapper from "./fetchWrapper.js";
import {renderRepo, renderUserData, renderSelectYear, yearSelect} from "./renderUI.js";
import {renderChart, repoYearList} from './chartRender.js';

const fetchAPI = new FetchWrapper("https://api.github.com");

export const getButton = document.querySelector("#getApiBtn");
export let gitDataList = [];

export const fetchData=(username)=>{
	fetchAPI.get(`/users/${username}/repos`)
	.then(data=>{
		if(data.length === 0){
			throw 'User yet not created any repository.'
		}else if(data.message === 'Not Found'){
			throw 'User Not Found';
		}else{
			gitDataList = data;
            renderRepo(data);
			renderChart(data);
            renderSelectYear(repoYearList);
		}
	}).catch(err=>{
		if(err === 'User Not Found'){
			userList.innerHTML = `<div class="alert alert-danger">${err}. Please enter valid User Name.</div>`;
			userInput.focus();
		}else{
			userList.innerHTML = `<div class="alert alert-warning">${err}</div>`;
		}
	}).finally(()=>{
		getButton.innerHTML = "Get Repo Data";
		getButton.removeAttribute("disabled");
		yearSelect.removeAttribute("disabled");
	});

	// fetch user details.
	fetchAPI.get(`/users/${username}`)
	.then(userData=>{
		if(userData.message === 'Not Found'){
			userInfo.innerHTML = "";
			throw 'User Not Found';
		}else{
			renderUserData(userData);
		}
	})
}