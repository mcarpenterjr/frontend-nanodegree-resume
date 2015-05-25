var bio = {
    "name" : "Mark N Carpenter Jr",
    "role" : "Front-End Web Developer",
    "contacts" : {
        "mobile": "(203)816-5206",
        "email": "marksthings24@gmail.com",
        "github": "xXSirenSxOpusXx",
        "linkedin": "Mark N Carpenter Jr",
        "twitter": "xXSirenSxOpusXx", //*Drop the @ to build the link Automagically adds on display
        "location": "Newtown, CT"
    },  
    "bioPic" : "images/mncheadshot.jpg",
    "welcomeMessage" : "What I lack in Formal Education I make up for with Experience.",
    "skills" : ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap", "CMS", "Netbeans",
        "Git", "GitHub", "MySql", "iOS", "Windows", "CLI", "PhotoShop", "Fireworks",
        "Premier Pro", "Illistrator", "DreamWeaver", "Joomla", "WordPress", "MVC",
        "CodeIgniter"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedwelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skillsItem").append(formattedSkill);    
    }
};

var formattedMobile = HTMLmobile.replace(/%data%/gi, bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace(/%data%/gi, bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace(/%data%/gi, bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedEmail = HTMLemail.replace(/%data%/gi, bio.contacts.email);

//*<-- Contact Header Start --*//

$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedin);

//*<-- Contact Footer Start -->*//

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedin);
$("#footerContacts li a").removeClass("contact-ttp");
//*<-- Work Information Start -->*//

var work = {
    "jobs": [
        {
            "employer": "G. P. Tool Co.",
            "title": "CNC Machinist",
            "dates": "2014 - Current",
            "location": "Danbury, CT",
            "description": "Producing machined parts for the Aerospace, Medical,\n\
            and Energy Generation industries. Works from supplied blueprints and\n\
            drawings to create excellent qaulity parts per customer specifications.\n\
            Keeps a clean and safe work area along with routine equipment maintinence\n\
            and quality checks. Works closely with Quality Control to meet Zero-Loss\n\
            Certified Material requirements.",
            "duties": ["Studies Blueprints", "Verifies Program Through Measurements\n\
            and Feedback From Quality Control", "Maintains Production Consistency Through\n\
            Attention to Part Details", "Maintains a Safe Work Enviroment", "Maintians Quality \n\
            and Production Logs", "Explores Oppurtunities to Add Value to Jobs"]
        },
        {
            "employer": "M.T.J. Manufacturing",
            "title": "Manager",
            "dates": "2002 - 2014",
            "location": "Bridgeport, CT",
            "description": 'AHHHHH WHAT DO I WRITE!!!',
            "duties": []
        },
        {
            "employer": "Mount Snow",
            "title": "Ski Ambassador",
            "dates": "2009-2014",
            "location": "West Dover, VT",
            "description": 'As a Mountain Ambassador, I was required to deliver excellent\n\
            customer service, educate Skiers and Riders of the "Responsibilty Code"\n\
            assist with security and crowd control at major events, and Greet as well\n\
            as Send Off guests with a smile at the begining and end of the day. \n\
            Daily duties included, morning breifings, skiing the mountain with 2 or more people\n\
            assisting skiers and riders in need, and aiding in various mountain operation\n\
            tasks. Things I most enjoyed were, working with a diverse group, and being\n\
            an integral part of an etremely large team of talent that kept things running\n\
            at a major winter destination for Southern New Englanders and the Tri-State area.',
            "duties": []
        },
        {
            "employer": "Naiad Dynamics US, INC.",
            "title": "CNC Machinist, Service Technician",
            "dates": "2005 - 2011",
            "location": "Shelton, CT",
            "description": 'Originally started employment as a second shift CNC machinist\n\
            my employment was expanded to aid in facility and equiment maintinece. \n\
            During my first 2 years I grew to be an integral part of second shift, advancing\n\
            production to meet constantly changing needs while working closely with the\n\
            facility and production management to maintain and improve organization, equipment\n\
            maintinence in a prioritized manner, and assist in expiditing and delivering\n\
            new products to the marine industry. Going into the latter years of employment\n\
            I was asked to join the service and installation portion of Naiad, due to my versatility\n\
            and skill. During that time I worked independantly, was responsible for keeping\n\
            descript service records, maintaing "spares" stock in my company srvice vehicle, and\n\
            maintaining an extemely high customer satisfaction level. Service and New installations\n\
            required constant travel to the surrounding Tri State area, as well as the Pacific Northwest\n\
            , North Mid and Southern Atlantic regions, The Netherlands Antilles and the Canary Islands.',
            "duties" : ["Planned, Programmed, Setup, Operated, and Verified CNC Production Operations",
            "Maintained a Safe Work Enviroment", "Performed Req'd PM on CNC Equipment", 
            "Documented Communications, Irregularities and Needs to maintain Continuity",
            "Maintined Workflow With Schedule", "Diagnosed Technical Issues and Provided Solutions",
            "Produced Detailed Service Reports", "Followed Strict Service Protocols", "Collaborated Latterally\n\
            Within Naiad to Reach Realistic Solutions to Unique Product Issues"]
        }
    ]
};

function displayWork(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace
        ("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace
        ("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        
        if(work.jobs[job].duties.length > 0) {
            $(".work-entry:last").append(HTMLworkdutiesStart);
            for(duty in work.jobs[job].duties){
            var formattedDuties = HTMLworkDuties.replace("%data%", work.jobs[job].duties[duty]);
            $(".work-entry:last").append(formattedDuties);
            }
        };

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}
displayWork();

//* <-- Education Section --> *//

var education = {
    "schools": [
    {
    "name": "Trumbull High School",
    "location": "Trumbull, CT",
    "degree": "High School Diploma",
    "major": ["Mechanical CADD", "Mechanical Engineering"],
    "dates": "1999-2003",
    "url": "http://www.trumbullps.org/ths/"
    },
    {
    "name" : "Housatonic Community College",
    "location" : "Bridgeport, CT",
    "degree" : "Real Estate Liscense",
    "major" : ["Real Estate Law and Sales"],
    "dates" : "2005",
    "url" : "http://www.housatonic.edu"
    }],
    "onlineCourses" : [
        {
            "title" : "JavaScript Syntax",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "http://www.udacity.com/course/ud804"
        },
        {
            "title" : "JavaScript Syntax",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "http://www.udacity.com/course/ud804"
        },
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};
function displayEducation(){
for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    
    var formattedSchool = HTMLschoolName.replace
    ("%data%", education.schools[school].name);
    
    var formattedDegree = HTMLschoolDegree.replace
    ("%data%", education.schools[school].degree);
    
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    
    $(".education-entry:last").append(formattedSchoolDegree);
    
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
}
}

displayEducation();


var projects = {
    "projects" : [
        {
            "title" : "Build a Personal Portfilio",
            "dates" : "2015",
            "description" : "During my Nanodegree one of the very first projects I\n\
            completed was a hand coded Personal Portfolio. It showcases not only \n\
            Projects I have completed and will complete during my Nanodegree, but\n\
            also my Semantic, Clean and Responsive, HTML and CSS coding ability. \n\
            Something I am particularly proud of seeing it was my first Responsve\n\
            Design acheived with out the help of a responsive frame work.",
            "images" : ["images/portfolio.PNG"],
            "url" : "http://portfolio.mncarpenter.ninja"
        },
        {
            "title" : "@dotMobi AngularJs Contact Form",
            "dates" : "2015",
            "description" : "An AngularJs responsive contact form designed to be \n\
            used on a .mobi domain. Used to collect a desired dcontacts \n\
            information use phpmailer to send it to your specified email and \n\
            then dispaly or ideally through an auto responder email your direct \n\
            contact information along with a vcard file.",
            "images" : ["images/mobicontact.PNG"],
            "url" : "http://www.mncarpenter.mobi"
        },
        {
            "title" : "@dotMobi AngularJs Contact Form",
            "dates" : "2015",
            "description" : "An AngularJs responsive contact form designed to be \n\
            used on a .mobi domain. Used to collect a desired dcontacts \n\
            information use phpmailer to send it to your specified email and \n\
            then dispaly or ideally through an auto responder email your direct \n\
            contact information along with a vcard file.",
            "images" : [],
            "url" : "http://www.mncarpenter.mobi"
        },
        {
            "title" : "CakeWalk V",
            "dates" : "2010",
            "description" : "While Employed at Naiad Dynamics, Inc. Naiad was\n\
        contracted to install over two and a half miles of stainless tubing for \n\
        onboard hydraulic equipment onto the Yacht CakeWalk. I was responsible\n\
        to the lead project manager, Head Ship's Engineer and various system designers.\n\
        While over seeing the work of one to two other emplyees over the 8 month\n\
        install period. CakeWalk at the time was the largest private ship in the previous\n\
        75 years ever constructed in North America, the project was one I will never\n\
        forget.",
            "images" : ["images/cakewalk2.jpg"],
            "url" : "http://www.derecktor.com/new-construction/yachts/cakewalk/"
        }
    ]
};

function displayProjects() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace
        ("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace
        ("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace
        ("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage =HTMLprojectImage.replace
                ("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
        var formattedUrl = HTMLprojectUrl.replace
        ("%data%", projects.projects[project].url);
        $(".project-entry:last").append(formattedUrl);
    }
}
displayProjects();

//* <-- Loads Google Map Plots My Locations --> *//
$("#mapDiv").append(googleMap);