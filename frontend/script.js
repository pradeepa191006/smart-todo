function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Buttons container
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    // ✅ FINISH BUTTON
    let finishBtn = document.createElement("button");
    finishBtn.textContent = "✔";
    finishBtn.title = "Finish Task";
    finishBtn.onclick = function () {
        span.style.textDecoration = "line-through";
        span.style.opacity = "0.6";
    };

    // ✏ EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.title = "Edit Task";
    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

    // 🗑 DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.title = "Delete Task";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append buttons
    buttonDiv.appendChild(finishBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    // Append elements
    li.appendChild(span);
    li.appendChild(buttonDiv);

    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}

/* 🎤 VOICE INPUT FEATURE */
function startVoice() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Voice recognition not supported in this browser");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
        document.getElementById("taskInput").value =
            event.results[0][0].transcript;
    };

    recognition.onerror = function () {
        alert("Voice recognition error");
    };
}