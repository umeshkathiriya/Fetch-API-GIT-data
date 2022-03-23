export const yearSelect = document.querySelector("#dateFilter");

// Render repo list UI.
export const renderRepo=(data)=>{
	userList.innerHTML = "";
	data.forEach(item=>{
		userList.insertAdjacentHTML("beforeend",`
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="me-auto">
				<div class="fw-bold"><a href="${item.html_url}" target="_blank">${item.full_name}</a></div>
				${item.description}
			</div>
			<span class="badge bg-primary rounded-pill">${item.created_at.substring(0,4)}</span>
		</li>	
		`);
	});
}

// Render user details UI.
export const renderUserData = (userData)=>{
	const {avatar_url,name,bio,location,followers,following} = userData;
	userInfo.innerHTML = "";
	userInfo.insertAdjacentHTML("beforeend",`
		<div class="card mb-3">
			<div class="row g-0">
				<div class="col-md-2">
					<img src="${avatar_url}" class="img-fluid rounded-start">
				</div>
				<div class="col-md-6">
					<div class="card-body">
						<h5 class="card-title">${name ?? 'No name available.'}</h5>
						<p class="card-text">${bio ?? 'No bio added.'}</p>
						<p class="card-text"><small class="text-muted"><b>Location:</b> ${location ?? 'Not enter.'}</small></p>
						<p class="card-text"><small class="text-muted"><b>Followers:</b> ${followers ?? 'No followers.'}</small></p>
						<p class="card-text"><small class="text-muted"><b>Following:</b> ${following ?? 'No followers.'}</small></p>
					</div>
				</div>
				<div class="col-md-4">
					<canvas id="myChart"></canvas>
				</div>
			</div>
		</div>
	`);
}

export const renderSelectYear = (years)=>{
	resetYear();
	const minYear = Math.min(...years);
	const currentYear = new Date().getFullYear();
	for(let y=currentYear; y>=minYear; y--){
		yearSelect.insertAdjacentHTML("beforeend",`<option value="${y}">${y}</option>`);
	}
}

export const resetYear = ()=>{
	yearSelect.innerHTML = "<option value='Show All'>Show All</option>";
}