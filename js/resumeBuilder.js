var bio = {
    "name" : "Scott Rodgers",
    "role" : "Web Systems Engineer",
    "contacts" : {
        "mobile" : "(717) 979-1205",
        "email" : "rhuaidhri@gmail.com",
        "github" : "rhuaidhri",
        "twitter" : "@rhuaidhri",
        "location" : "Palmyra, PA"
    },
    "welcomeMessage" : "Greythings and salivations from down the rabbit hole",
    "skills" : [
        "Progress 4GL", "Unix/HP Unix", "HTML/CSS", "JavaScript", "Base Jumping"
    ],
    "bioPic" : "images/fry.jpg",
    "display" : function() {
        if (bio.name.length > 0) {
            var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
            $("#header").prepend(formattedBioRole);

            var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formattedBioName);

            var formattedBioContactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#topContacts").append(formattedBioContactsMobile);
            $("#footerContacts").append(formattedBioContactsMobile);

            var formattedBioContactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
            $("#topContacts").append(formattedBioContactsEmail);
            $("#footerContacts").append(formattedBioContactsEmail);

            var formattedBioContactsGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#topContacts").append(formattedBioContactsGitHub);
            $("#footerContacts").append(formattedBioContactsGitHub);

            var formattedBioContactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            $("#topContacts").append(formattedBioContactsTwitter);
            $("#footerContacts").append(formattedBioContactsTwitter);

            var formattedBioContactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts").append(formattedBioContactsLocation);
            $("#footerContacts").append(formattedBioContactsLocation);

            var formattedBioBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
            $("#header").append(formattedBioBioPic);

            var formattedBioWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(formattedBioWelcomeMessage);
        }

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skillsH3").append(formattedSkill);
            }
        }
    }
}

var work = {
    "jobs" : [
    {
        "employer" : "eDirect Publishing",
        "title" : "Web System Engineer",
        "description" : "Reverse Engineering",
        "dates" : "2010 - 2015",
        "location" : "San Deigo, CA"
    },
    {
        "employer" : "Self Employed",
        "title" : "Computer Consultant",
        "description" : "Private Computer Consultant",
        "dates" : "2008 - 2010",
        "location" : "Palmyra, PA"
    },
    {
        "employer" : "EarthLink",
        "title" : "System Analsyt",
        "description" : "Online Store Developer",
        "dates" : "1999 - 2008",
        "location" : "Atlanta, GA"
    }
    ],
    "display" : function() {
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            for (job in work.jobs) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = (formattedEmployer + formattedTitle);
                $(".work-entry").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry").append(formattedDates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry").append(formattedLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry").append(formattedDescription);
            }
        }
    }
}

var projects = {
    "tasks" : [
    {
        "title" : "Poster Migration",
        "description" : "Move distribution systems from a Perl/LWP based platform to a JAVA based system.",
        "dates" : "2011 - 2012",
        "images" : ""
    },
    {
        "title" : "Online Store Development",
        "description" : "Create a WebSpeed generated online store to interact with provisioning systems. Displaying only the services that we could actually provide to customers.",
        "dates" : "2004 - 2008",
        "images" : "images/earthlink_logo.png"
    }
    ],
    "display" : function() {
        for (task in projects.tasks) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.tasks[task].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.tasks[task].dates);
            $(".project-entry:last").append(formattedProjectDate);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.tasks[task].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.tasks[task].images.length > 0) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.tasks[task].images);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

var education = {
    "schools" : [
    {
        "name" : "Thompson Institute",
        "location" : "Harrisburg, PA",
        "degree" : "Vocational Certificate",
        "majors" : "Computer Science",
        "dates" : 1999,
        "url" : ""
    },
    {
        "name" : "Penn State University",
        "location" : "State College, PA",
        "degree" : "BS",
        "majors" : "Physics",
        "dates" : 1992,
        "url" : "http://www.psu.edu/"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Responsive Web Design Fundamentals",
        "school" : "Udacity",
        "date" : "Jan 2015",
        "url" : "https://www.udacity.com/course/nd001"
    },
    {
        "title" : "JavaScript Basics",
        "school" : "Udacity",
        "date" : "Feb 2015",
        "url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
    }
    ],
    "display" : function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedNameAndDegree = (formattedName + formattedDegree);
            $(".education-entry:last").append(formattedNameAndDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }

        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
        }

        for (course in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineTitleAndSchool = (formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineTitleAndSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}


bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
       var newLocation = work_obj.jobs[job].location;
       locationArray.push(newLocation);
    }
    return(locationArray);
}

function inName(name) {
    name = bio.name;
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    console.log("Name1 : " + name[1]);

    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);