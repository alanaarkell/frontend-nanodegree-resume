var bio = {
	'name' : 'Alana Arkell',
	'role' : 'Web developer',
	'contacts' : {
		'mobile' : '890-493-5932',
		'email' : 'arkellalana@gmail.com',
		'github' : 'alanaarkell',
		'twitter' : '@alanarkell',
		'location' : 'Oakville,ON',
		'welcomeMessage' : 'Hi everyone'
	    },
	    'skills': [
	    'Social Media Management',
	    'HTML/CSS',
	    'Video editing',
	    'Photoshop',
	    'Javascript'
	    ],
	    'biopic': 'images/alana.png'
	};

bio.display= function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);

	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	var contactItems = [
	formattedMobile,
	formattedEmail,
	formattedGithub,
	formattedTwitter,
	formattedLocation
	];

	$("#header").
	prepend(formattedName + formattedRole).
	append(formattedBioPic + formattedWelcomeMessage).
	append(HTMLskillsStart);

if(bio.skills.length > 0){
	for(skill in bio.skills) {
		 formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
};

		$('#topContacts').prepend(contactItems);
		$('#footerContacts').prepend(contactItems);

	};

var work = {
	 'jobs' : [
		{
		'employer' : 'Siscoe Gym',
		'title' : 'Cook',
	    'location' : 'Montreal,QC',
	    'dates' : '2015',
	    'description' : 'Cooked meals for clients based on their goals for fitness.'
		},
		{
		'employer' : '360 Energy',
		'title' : 'Media Analyst',
	    'location' : 'Burlington,ON',
	    'dates' : '2012 - 2013',
	    'description' : 'Created graphic design and compiled videos for the company.'
		},
		{
		'employer' : 'Mosaic',
		'title' : 'Experiental Marketer',
	    'location': 'Missauga,ON',
	    'dates' : '2009 - 2013',
	    'description' : 'Dealt with customer interactions and experiences.'
		},
		],
	};

work.display = function	() {
	work.jobs.forEach(function(workEntry) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', workEntry.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", workEntry.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace('%data%',workEntry.location);
		var formattedDates = HTMLworkDates.replace("%data%", workEntry.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", workEntry.description);

		$('.work-entry:last').append (
			formattedEmployerTitle +
			formattedLocation +
			formattedDates +
			formattedDescription
			);
	}
	)};

var projects = {
	'projects': [
	{
		'title' : 'Portfolio',
		'dates' : 'August 2015',
		'description' : 'Replicated a responsive design website with HTML and CSS. Incorporated responsive images and links.',
		'image' : 'images/cake.png'
	},
	{
		'title' : 'Online Resume',
		'dates' : 'September 2015',
		'description' : 'Built an online portfolio with learnt knowledge of objects, variables and functions with Javascript and JSON',
		'image' : 'images/tips.png'
	},
   ],
  };

 project.display = function() {
  	projects.projects.forEach(function(project) {
  	$('#project').append(HTMLprojectStart);

  	var	formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
  	var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
  	var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
  	var formattedImage = HTMLprojectImage.replace('%data%', project.image)

  	$('.project-entry:last').append(
			formattedTitle +
			formattedDates +
			formattedDescription +
			formattedImage
		);
	});
};


var education = {
	'schools': [
	{
		'name' : "Carleton University",
		'location' : "Ottawa,ON, CA",
		'degree' : "Bachelors of Arts",
		'major' : "Film and Communications"
	 	}
	 ],
	 'onlineCourses': [
	 {
	 	'title' : 'Intro into computer Sciences',
	 	'school' : 'Udacity',
	 	'date' : 'August 2015',
	 	'url' : 'https://www.udacity.com/course/intro-to-computer-science--cs101'
	 },
	 {
		'title' : 'Intro into HTML and CSS',
	 	'school' : 'Udacity',
	 	'date' : 'August 2015',
	 	'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
	 },
	 {
	 	'title' : 'Javascript Basics',
	 	'school' : 'Udacity',
	 	'date' : 'September 2015',
	 	'url' : 'https://www.udacity.com/course/javascript-basics--ud804'
	 },
	 ],
	};

education.showSchools = function() {
	education.schools.forEach(function(school) {
		$('#education').append(HTMLschoolStart);
		var formattedName = (HTMLschoolName).replace('%data%', school.name);
		var formattedLocation = (HTMLschoolLocation).replace('%data%', school.location);
		var formattedDegree = (HTMLschoolDegree).replace('%data%', school.degree);
		var formattedMajor = (HTMLschoolMajor).replace('%data%', school.major);

		$('.education-entry:last').append(
			formattedName +
			formattedLocation +
			formattedDegree +
			formattedMajor
		);
	});
}

education.showOnlineCourses = function() {
	$('#education').append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		var formattedTitle = (HTMLonlineTitle).replace('%data%', course.title);
		var formattedSchool = (HTMLonlineSchool).replace('%data%', course.school);
		var formattedDate = (HTMLonlineDates).replace('%data%', course.date);
		var formattedUrl = (HTMLonlineURL).replace('%data%', course.url);

	$('.education-entry:last').append(
		formattedTitle +
		formattedSchool +
		formattedDate
		);
	});
};




//calls bio //
bio.display();
//calls work //
work.display();
//calls education//
education.showSchools();
education.showOnlineCourses();
//calls projects //
project.display();

$('#main').append(internationalizeButton);

// call to map//
$('#mapDiv').append(googleMap);
