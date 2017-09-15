define([],
function() {
	var app = new Backbone.Marionette.Application();

	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};

	/*	Models and collections*/
	var SocialModel = Backbone.Model.extend();
	var SocialCollection = Backbone.Collection.extend({ model: SocialModel });

	var socialCollection = new SocialCollection([
					new SocialModel({ site: 'Twitter' , icon: 'fa-twitter' , link: 'https://twitter.com/Peter_J_W'}),
					new SocialModel({ site: 'Facebook', icon: 'fa-facebook' , link: 'https://www.facebook.com/pete.watters.77'}),
					new SocialModel({ site: 'LinkedIn', icon: 'fa-linkedin' , link: 'http://ie.linkedin.com/pub/peter-watters/31/8a/7a3/'}),
					new SocialModel({ site: 'Github' , icon: 'fa-github' , link: 'https://github.com/peter-watters'}),
					new SocialModel({ site: 'Stack Overflow' , icon: 'fa-stack-overflow' , link: 'http://stackoverflow.com/users/1365580/peadar'})
					]);

	var AboutModel = new Backbone.Model({
											name: 'Peter Watters',
											description: '<p>ull stack developer, UX specialist and JavaScript enthusiast. A fully qualified engineer and hobbyist coder turned craftsman with a focus on clean scalable code and elegant but intuitive UX.</p>',
											contact : 'My preferred method of contact is email and you can reach me at: <a href="mailto:peter@peterjwatters.com" target="_top">peter@peterjwatters.com</a>',
											resume_link : 'file.pdf'
										});

	EducationModel = Backbone.Model.extend({});
	EducationCollection = Backbone.Collection.extend({ model: EducationModel});

	var education = new EducationCollection([
			new EducationModel( {institution:"Dublin City University", qualification:"M.Eng in Telecommunications Engineering", date:"2007 - 2010", description:"Masters degree, Telecommunications Engineering majoring in Network Communication, 2.1 "}),
			new EducationModel( {institution:"Dublin City University", qualification:"B.Eng in Digital Media Engineering", date:"April 2007", description:"The course covered a wide range of computer science topics including software programming, information retrieval, web design & development, telecommunications, signal processing, computer graphics, system administration and network security."})
	]);

	var WorkModel = Backbone.Model.extend({});
	var WorkCollection = Backbone.Collection.extend({ model: WorkModel});

	var work = new WorkCollection([
		new WorkModel( {company:"Bank of America Merrill Lynch", role:"Senior Software Engineer", date:"May 2017 ­ present", description:"I am currently working at BAML as an Ember.js SME and consultant. In my time there I have added value by being a champion of TDD, improving the performance times of the application and introducing qUnit acceptance tests to the workflow. I have steered the team towards best practices for Ember, helping other developers to up skill and pushing towards a component driven architecture. I have gained experience working with Python, Django and the investment banking sector."}),
		new WorkModel( {company:"Rocksteady", role:"Lead JavaScript Developer", date:"April 2016 ­ March 2017", description:"Rocksteady are a software and manufacturing start-up with a large existing market presence build a web based graphic design tool for motorsports decals. I took over as lead of a team of one junior developer and had no handover but assisted in delivering their first production release in 7 months. My main focus was to stabilise the development processes and build a team around me. I removed a lot of inefficiencies, reducing the time taken running integration tests by 70% to just over an hour. I implemented a modern workflow, setup a CI system with automatic testing and deployment and increased accuracy of acceptance testing adding Selenium to the workflow. I acted as an Ember.js expert and hired a team of developers around me, producing high quality clean code while meeting delivery deadlines and implementing new features." }),
		new WorkModel( {company:"Thinkful", role:"Front End Development Mentor", date:"Thinkful, April 2016 ­ March 2017",description:"I worked part time from home as a remote student mentor for Thinkful on a Front End Web Development course. It was an enjoyable role as it was a great way to talk about all things I love while helping others learn. Acting as a mentor for involved a lot of pair programming which helped me improve my skills as a mentor to junior developers and really tested my own knowledge." }),
		new WorkModel( {company:"Kontainers", role:"Full Stack Developer,", date:"June 2015 - April 2016", description:"Kontainers are an exciting start-up revolutionising ocean freight and I got the opportunity to work there having worked with their CTO in Fidelity Investments. I was a full stack developer and the main technologies I used were JavaScript, Ember JS and Ruby. It was a small team of developers with a large workload and a strong focus on TDD and clean code which helped me become more fully rounded in my skill set and professional in my programming. I learnt a lot about creating scalable software using modern CI and deployment tools such as Travis, Dockerand Mixpanel. I was the main front end specialist but worked on on all aspects of the product over the full software stack, even developing a modern yeoman based custom WordPress plugin for the company website." }),
		new WorkModel( {company:"Fidelity Investments", role:"UX Developer", date:"June 2014 - June 2015", description:"I was part of the UX team at Fidelity and acted as a front end development specialist and consultant responsible for turning visual designs into fully functional prototype applications. I acted as a senior technical lead for a team of offshore developers and travelled to India in January 2015 to give training and work. I gained experience working in the financial sector with strict accessibility guidelines and using modern front end technologies such as Ember.js, Backbone-Marionette, Angular, SASS, Grunt, Foundation, Bower, Node and Yeoman. I was a technical consultant during interviews for many parts of the organization and was front end SME during an Enterprise Ireland R&D accreditation process for one of my projects there." }),
		new WorkModel( {company:"Yahoo", role:"Ad Technology Producer", date:"April 2013 - June 2014", description:"At Yahoo I acted as a web development and operations consultant, working on several high impact projects including acceptance of new ad technologies and assessing the impact of AdBlocking software on Yahoo revenue. I was the main point of contact for the premium ad serving platform in the EMEA ensuring critical issues were resolved quickly and with minimal impact to revenue. I was the agile scrum master of Tech Ops R&D projects and a senior team member tasked with mentoring my colleagues and helping their career development. I gave a lot of presentations and training to large groups of Ad Operations executives and coded internal tools in Bash / JS & HTML Java." }),
		new WorkModel( {company:"eSpatial", role:"UX Developer", date:"eSpatial, March 2012 – March 2013", description:"I worked as a UX developer for eSpatial, responsible for designing and developing their flagship GIS product via JavaScript, HTML5, CSS3, jQuery and OpenLayers. I joined during a complete overhaul of the application and gained valuable UX experience producing detailed wireframes and mock-ups then seeing them through to front end code. I was innovative during my time there, designing and implementing their first mobile application using jQuery Mobile. I also often lent my expertise as a web development consultant to the marketing team." }),
		new WorkModel( {company:"The Now Factory", role:"Operations Engineer", date:"February 2010 – March 2012", description:"I joined TNF as a junior engineer when it was a busy start-up and grew up with the company, leaving a couple of years before it was acquired by IBM. My official role was as a technical support engineer but my work was split between support, deployments and working on internal development projects. I gained a lot of experience with system administration of high-end Unix servers and programmatic automation of tasks. I travelled to data centers around the world to install hardware, software and meet with clients to provide training. I am particularly proud of a was a J2EE server performance monitoring application I designed and architected which later became a product in it’s own right." }),
		new WorkModel( {company:"Ocuco", role:"Technical Support Engineer/ Web developer", date:"May 2008 – February 2010", description:"I was a technical support engineer at Ocuco and became the lead engineer and SME for their pharmaceutical software application(Integra) which gave me a deep insight into the pharmaceutical industry. My core duties were handling support calls and dealing with hardware, software and training issues gaining a lot of experience with SQL and Oracle databases. I travelled to customer sites to perform installations and deliver training. My hunger to gain more development experience led me to also take on the role of Webmaster for the company, helping the marketing team to help improve the brand online. I improved their intranet and designed and developed two of their product websites, one of which I did in a 24-hour period working closely with the product owner who later bought the product rights." }),
		new WorkModel( {company:"Jeebers", role:"Web developer", date:"January 2008 – March 2008", description:"I started my first official development role at Jeebers, a web development company specialising in e-commerce websites based on the jShop engine. I gained valuable commercial web development experience working on high profile websites for Cleary’s, Carphone Warehouse and DID Electrical. I worked across the full front end stack using PHP, JavaScript, HTML and CSS and gained valuable experience in a busy start-up." }),
		new WorkModel( {company:"IBM", role:"Test Technician", date:"July 2007 - January 2008", description:"I was a server test technician in IBM, Damastown testing Z-Series high end IBM servers. The job involved debugging complex hardware and software problems, replacing hardware where required and writing bash scripts to automate tests where possible. I gained a high level of exposure to UNIX system administration and a lot of experience with hardware installation and testing." }),
		new WorkModel( {company:"HP", role:"Product Testing Engineer", date:"May 2008 – February 2010", description:"I was an intern in Hewlett Packard as part of my degree and I worked as a project testing engineer. The role involved research and analysis of current cartridge test procedures, design, test and documentation of new test procedures, training testers and using their feedback productively to improve the process." })
	]);

	SkillsModel = Backbone.Model.extend({});
	SkillsCollection = Backbone.Collection.extend({ model: SkillsModel});


	var skills = new SkillsCollection([
			new SkillsModel({ content:"My main passion is as a UX web application developer however I have had quite a broad career. My main technical skills are outlined below." })
	]);

	var PortfolioModel = Backbone.Model.extend({});
	var PortfolioCollection = Backbone.Collection.extend({ model: PortfolioModel });

	var portfolioCollection = new PortfolioCollection([
			new PortfolioModel({ title : 'Bitch Please' , description_short : 'bitchplease.ie', image : 'app/img/portfolio/bitchplease.jpg', modal_id : 'modal-01' , modal_href_title :'Bitch Please' , description_long : 'I designed and created this page for Bitch Please promotions who run club nights. The technologies I used were Ember.js, SASS and Handlebars.', tags : 'Branding, Webdesign' , demo_link : 'http://www.bitchplease.ie'}),
			new PortfolioModel({ title : 'Booterstown United' , description_short : 'booterstownunited.ie', image : 'app/img/portfolio/booterstownunited.jpg', modal_id : 'modal-02' , modal_href_title :'Booterstown United' , description_long : 'I created this website for a football team I used to play for. It is based on a wordpress template and provides information on their team and acts as a point of contact for the club.', tags : 'Branding, Webdesign', demo_link : 'http://www.booterstownunited.ie'}),
			new PortfolioModel({ title : 'Casino Freebies' , description_short : 'casinofreebies.com', image : 'app/img/portfolio/casinofreebies.jpg', modal_id : 'modal-03' , modal_href_title :'Casino Freebies' , description_long : 'CasinoFreebies is a page I created as part of my affiliate marketing work. It gathers the best online casino deals in one place to make it easy for people to find the best offers. ', tags : 'Branding, Webdesign', demo_link : 'http://www.casinofreebies.com'}),
			new PortfolioModel({ title : 'Comhairle Teicneolaiochta' , description_short : 'comhairleteicneolaiochta.ie', image : 'app/img/portfolio/comhairleteic.jpg', modal_id : 'modal-04' , modal_href_title :'Comhairle Teicneolaiochta' , description_long : 'I created this website for my UX consultancy company Comhairle Teicneolaiochta', tags : 'Branding, Webdesign', demo_link : 'http://www.comhairleteicneolaiochta.ie/'}),
			new PortfolioModel({ title : 'Coming soon page' , description_short : 'Coming soon', image : 'app/img/portfolio/comingsoon.jpg', modal_id : 'modal-05' , modal_href_title :'Coming soon' , description_long : 'A fancy placeholder page for under construction sites', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Easy Docs' , description_short : 'EasyDocs', image : 'app/img/portfolio/easydocs.jpg', modal_id : 'modal-06' , modal_href_title :'Easy docs' , description_long : 'I worked with <a href="http://www.easydocs.com" target="_blank">EasyDocs</a> in the early stages of their product to help them to migrate from a java based application to a javascript one. I helped them migrate to a much faster system using Backbone and Bootstrap in the front end. ', tags : 'Backbone, JS, Bootstrap, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/easyDocs/'}),
			new PortfolioModel({ title : 'Integra' , description_short : 'integra.ie', image : 'app/img/portfolio/integra.jpg', modal_id : 'modal-07' , modal_href_title :'Integra' , description_long : 'I designed and created this site in 12 hour session back when I was working with Ocuco in 2009. It was intended to provide information and help to sell the main pharmacy POS product.', tags : 'PHP, HTML, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/integra/'}),
			new PortfolioModel({ title : 'Ocuco' , description_short : 'ocuco.com', image : 'app/img/portfolio/ocuco.jpg', modal_id : 'modal-09' , modal_href_title :'Ocuco' , description_long : 'I was working as a support engineer in Ocuco in the early days of my career and helped them to improve their site significantly. They outsourced the website to an offsore team who delivered a crisp design but unmaintainable site. I converted several hundred static HTML files into a more easy to update PHP based system adding in several other features along the way. ', tags : 'PHP, HTML, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/ocuco/'}),
			// new PortfolioModel({ title : 'Official Football Accumulators' , description_short : 'Illustration', image : 'app/img/portfolio/officialfootballaccumulators.jpg', modal_id : 'modal-10' , modal_href_title :'Official Football Accumulators' , description_long : 'I created this site when working with a business partner of mine to act as a home page for his business. It helps users stay up to date with the latest football news, calculate betting odds, play games and avail of the best online betting offers.', tags : 'Branding, Webdesign', demo_link : 'http://officialfootballaccumulators.com/#/home'}),
			new PortfolioModel({ title : 'Irene Henriksen Photography' , description_short : 'Irene Henriksen Photography', image : 'app/img/portfolio/irenehenriksenphotography.jpg', modal_id : 'modal-08' , modal_href_title :'Irene Henriksen Photography' , description_long : 'I created this site for an ex-colleague of mine who is a photographer in her spare time. The site uses Backbone-Marrionnette for its structure and loads in a JSON feed from Flickr with her photography', tags : 'Photography, Backbone, Branding, Webdesign', demo_link : 'http://www.irenehenriksenphotography.com'}),
			new PortfolioModel({ title : 'My site 2014' , description_short : 'Portfolio Site', image : 'app/img/portfolio/peter_j_w_2014.jpg', modal_id : 'modal-11' , modal_href_title :'My personal site' , description_long : 'This is a previous version of my website from 2014', tags : 'Branding, Webdesign', demo_link : '#'}),
			new PortfolioModel({ title : 'Peters Photos' , description_short : 'Peters Photos', image : 'app/img/portfolio/petersphotos.jpg', modal_id : 'modal-12' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : '#'}),
			new PortfolioModel({ title : 'TNF Support Dashboard' , description_short : 'TNF Support Dashboard', image : 'app/img/portfolio/TNF_supportdashboard.jpg', modal_id : 'modal-15' , modal_href_title :'TNF Support Dashboard' , description_long : 'An interactive dashboard for monitoring server perfomrance in real time', tags : 'Branding, Webdesign, UNIX, Nagios,', demo_link : '#'})
		]);

	/*	View init */

	HeaderView = Backbone.Marionette.ItemView.extend({
				el : 'header',
				template: "app/templates/page-layout/header.hbs"
	});

	FooterView = Backbone.Marionette.ItemView.extend({
				el : 'footer',
				template: "app/templates/page-layout/footer.hbs"
	});
	SocialView = Backbone.Marionette.ItemView.extend({
				el : '.social',
				template: "app/templates/common-layout/social.hbs",
				model: socialCollection
			});
	AboutView = Backbone.Marionette.ItemView.extend({
				el : '#about',
				template: "app/templates/page-content/about.hbs",
				model : AboutModel
			});
	EducationView = Backbone.Marionette.ItemView.extend({
				el : '.education',
				template: "app/templates/page-content/education.hbs",
				model: education
			});
	WorkView = Backbone.Marionette.ItemView.extend({
				el : '.work',
				template: "app/templates/page-content/work.hbs",
				model: work
			});
	SkillsView = Backbone.Marionette.ItemView.extend({
				el : '.skill',
				template: "app/templates/page-content/skills.hbs",
				model: skills
			});
	PortfolioView = Backbone.Marionette.ItemView.extend({
				el : '#portfolio',
				template: "app/templates/page-content/portfolio.hbs",
				model: portfolioCollection
			});

	ContactView = Backbone.Marionette.ItemView.extend({
				el : '#contact',
				template: "app/templates/page-content/contact.hbs"
			});

	/*	View render */
	headerView = new HeaderView();
	headerView.render();

	footerView = new FooterView();
	footerView.render();

	socialView = new SocialView();
	socialView.render();

	aboutView = new AboutView();
	aboutView.render();

	educationView = new EducationView();
	educationView.render();

	workView = new WorkView();
	workView.render();

	skillsView = new SkillsView();
	skillsView.render();

	portfolioView = new PortfolioView();
	portfolioView.render();

	contactView = new ContactView();
	contactView.render();

	/* Document ready stuff taken from init */

	setTimeout(function() {
		$('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);
	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
		$('.item-wrap a').magnificPopup({
			type:'inline',
			fixedContentPos: false,
			removalDelay: 200,
			showCloseBtn: false,
			mainClass: 'mfp-fade'
		});

		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});

		/* smoothly scroll to links */
		$('.smoothscroll').on('click',function (e) {
			e.preventDefault();
			var target = this.hash,

			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
				}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
	------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

		  var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: '35%'
	});


	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
	/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() });
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/
   $(window).on('scroll', function() {
		var h = $('header').height();
		var y = $(window).scrollTop();
		var nav = $('#nav-wrap');

	if ( (y > h*0.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
			nav.fadeOut('fast');
		}
      else {
		if (y < h*0.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }
	});
	return app;
});
