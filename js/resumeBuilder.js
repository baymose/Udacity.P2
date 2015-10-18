var bio = {
    "name": "Bailey Griswold",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(603)998-1664",
        "email": "Baymose@gmail.com",
        "github": "Baymose",
        "twitter": "Baymose",
        "location": "Charlotte, NC"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["PHP", "Javascript", "HTML", "CSS"],
    "biopic": "https://avatars2.githubusercontent.com/u/6540978?v=3&s=460",
    "display": function() {
        //Build Header Name
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);

        //Build Header Role
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);


        //Build mobile
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#header").append(formattedMobile);

        //Build email
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#header").append(formattedEmail);

        //Build github
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#header").append(formattedGithub);
        //Build Skills
        $("#header").append(HTMLskillsStart);
        for( var i=0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
        //Build Bio Pic
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
    }
}
bio.display();

var education = {
    "schools": [
    {
        "name": "Griswold Academy",
        "location": "Charlotte, NC",
        "degree": "PHD",
        "majors": "Awesomness",
        "date": "2014",
        "url": "bayg.me"
    }
    ],
    "onlineCourses": [
    {
        "title": "HTML, CSS Crash Course",
        "school": "Griswold University",
        "date": "2014",
        "url": "bayg.me"
    }
    ],
    "display": function(){
        for(school in education.schools){
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedName);

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }

    }
}

var work = {
    "jobs": [
    {
        "employer": "Blend Marketing",
        "title": "Developer Intern",
        "location": "Madison, WI",
        "dates": "5/2015 - 8/2015",
        "description": "I interned at Blend Marketing as a Developer for the summer"
    }
    ],
    "display": function() {
        for( job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDesc);


        }
    }
}

var projects = {
    "projects": [
    {
        "title": "portfolio site",
        "date": "2015",
        "description": "my portfolio based of the Udacity project",
        "images": ["http://thecatapi.com/api/images/get?format=src", "http://thecatapi.com/api/images/get?format=src"]
    }
    ],
    "display": function() {
        for(project in projects.projects){
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
            $(".project-entry:last").append(formattedDates);

            var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDesc);

            for(image in projects.projects[project].images){
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}





$(document).click(function(loc) {
    var y = event.clientY
        var x = event.clientX
        logClicks(x,y);
});

work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
