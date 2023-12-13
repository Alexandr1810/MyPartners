		function SetName(){
			var IsReset = false;
			var ResetId = null
			var OldName = document.getElementById("OriginalName").value;
			var NewName = document.getElementById("NewName").value;
			if (OldName != '' && NewName != '') {
				fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names', {
				  method: 'GET',
				  headers: {'content-type':'application/json'},
				}).then(res => {
				  if (res.ok) {
				      return res.json();
				  }
				  // handle error
				}).then(tasks => {
					console.log("OldName: ", OldName)
					console.log("NewName: ", NewName)
					console.log("tasks: ", tasks)
					for (var i = 0; i < tasks.length; i++) {
						if (tasks[i].OldName == OldName) {
							IsReset = true
							ResetId = tasks[i].id
						}

					}
					if (IsReset) {
						console.log("Изменить текущее")

						ResetName(ResetId, OldName, NewName)
						document.getElementById("ResetAlert").style.display = "block";
						setTimeout(function(){
							document.getElementById("ResetAlert").style.display = "none";
						}, 2000);
					}
					else {
						console.log("Дабавить новое")
						CreateName(OldName, NewName)
						document.getElementById("CreateAlert").style.display = "block";
						setTimeout(function(){
							document.getElementById("CreateAlert").style.display = "none";
						}, 2000);
					}
				}).catch(error => {
				 	document.getElementById("ErrorAlert").style.display = "block";
					setTimeout(function(){
						document.getElementById("ErrorAlert").style.display = "none";
					}, 2000);
				})
			}
			else{
				document.getElementById("NullAlert").style.display = "block";
					setTimeout(function(){
						document.getElementById("NullAlert").style.display = "none";
					}, 2000);
			}
		}
		function ResetName(id, old, newN){
			fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names/'+id, {
			  method: 'PUT', // or PATCH
			  headers: {'content-type':'application/json'},
			  body: JSON.stringify({OldName: old, NewName: newN})
			}).then(res => {
			  if (res.ok) {
			      return res.json();
			  }
			  // handle error
			}).then(task => {
			  console.log(task)
			}).catch(error => {
			  // handle error
			})
		}
		function CreateName(old, newN){
			const newTask = {
			  OldName: old,
			  NewName: newN,
			};

			fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/Kanban_Names/', {
			  method: 'POST',
			  headers: {'content-type':'application/json'},
			  // Send your data in the request body as JSON
			  body: JSON.stringify(newTask)
			}).then(res => {
			  if (res.ok) {
			      return res.json();
			  }
			  // handle error
			}).then(task => {
			  // do something with the new task
			}).catch(error => {
			  // handle error
			})
		}
		/* Изменить Запись
		fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/1', {
		  method: 'PUT', // or PATCH
		  headers: {'content-type':'application/json'},
		  body: JSON.stringify({MoskowOblLog: "мо_полховская_оф", MoskowOblPass: "x-3hZy7FJi5U1aR", OtherMrfLog: "strijak_ov", OtherMrfPass: "Af9<m7>GJg",})
		}).then(res => {
		  if (res.ok) {
		      return res.json();
		  }
		  // handle error
		}).then(task => {
		  console.log(task)
		}).catch(error => {
		  // handle error
		})
		*/

		/*
		fetch('https://656de619bcc5618d3c242ec1.mockapi.io/MyPartners/EISSD_Pass/2', {
		  method: 'DELETE',
		}).then(res => {
		  if (res.ok) {
		      return res.json();
		  }
		  // handle error
		}).then(task => {
		  // Do something with deleted task
		}).catch(error => {
		  // handle error
		})

		*/

		/* Содать запись

		*/