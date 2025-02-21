    // Countdown Timer
    const eventDate = new Date("february 25, 2025 10:00:00").getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let distance = eventDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60* 24 ));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // Voting System
    const deadline = new Date("March 11, 2025 23:59:59").getTime();
    function vote(category) {
        let now = new Date().getTime();
        if (now > deadline) {
            alert("Voting has ended!");
            return;
        }
        let votes = localStorage.getItem(category) || 0;
        votes = parseInt(votes) + 1;
        localStorage.setItem(category, votes);
        document.getElementById(category + "Votes").innerText = votes;
    }
    function loadVotes() {
        document.getElementById("dancerVotes").innerText = localStorage.getItem("dancer") || 0;;
        if (new Date().getTime() > deadline) {
            document.getElementById("voteMessage").innerText = "⚠️ Voting has ended!";
            document.querySelectorAll("button").forEach(btn => btn.disabled = true);
        }
    }
    loadVotes();

    // Best Students Data
    const bestStudents = [{ name: "Rahul Sharma", year:"2nd",gpa: "9.5" }, { name: "Aditi Verma (cse)", year:"2nd", gpa: "9.4" }];
    function loadBestStudents() {
        bestStudents.forEach(s => document.getElementById("studentList").innerHTML += `<tr><td>${s.name}</td><td>${s.year}</td><td>${s.gpa}</td></tr>`);
    }
    loadBestStudents();
    function toggleMode() {
        document.body.classList.toggle("dark-mode");
    
        // Save user preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
    
    // Load the saved theme on page load
    window.onload = function () {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    };
    