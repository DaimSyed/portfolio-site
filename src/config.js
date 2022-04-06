// config.js
module.exports = {
	github: {
		username: 'DaimSyed', // Your GitHub org/user name. (Required)
		sortBy: 'updated', // stars | updated
		limit: 60, // How many projects to display.
		exclude: {
			forks: false, // Forked projects will not be displayed if set to true.
			projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
		},
	},
	social: {
		linkedin: 'husnain-syed',
		// twitter: "arif_swozon",
		facebook: 'husnain.syed.58726',
		// dribbble: "",
		// behance: "",
		// medium: "",
		// devto: "",
		// website: "https://arifszn.github.io",
		email: 'daimshah784@gmail.com',
	},
	skills: [
		'HTML',
		'CSS',
		'SASS',
		'JavaScript',
		'TypeScript',
		'CoffeeScript',
		'React.js',
		'React Native',
		'Node.js',
		'Express.js',
		'PostgreSql',
		'Redux (toolkit)',
		'React router dom',
		'React final form',
		'Bootstrap',
		'Material Ui',
		'GreenSock',
		'Barba.js',
		'Framer Motion',
		'Git',
		'Firebase',
		'Webpack',
		'Parcel',
		'EsBuiled',
	],
	experiences: [
		{
			company: 'Freelancing',
			position: 'Full Stack Engineer',
			from: 'March 2022',
			to: 'Present',
		},
		{
			company: 'Envoy Innovation ',
			position: 'Full Stack Engineer',
			from: 'Sep 2021',
			to: 'March 2022',
		},
		{
			company: 'Webpub.pk',
			position: 'Frontend Developer',
			from: 'May 2021',
			to: 'September 2021',
		},
	],
	education: [
		{
			institution: 'Univeristy of Michigan',
			degree: 'Web development Course',
			from: '2021',
			to: '2021',
		},
		{
			institution: 'Forman Christian College',
			degree: 'Faculty of Science',
			from: '2018',
			to: '2020',
		},
		{
			institution: 'Cadet College Sargodha',
			degree: 'Matriculation',
			from: '2016',
			to: '2018',
		},
		{
			institution: 'Oxford National School',
			degree: 'Secondary Education',
			from: '2010',
			to: '2016',
		},
	],
	blog: {
		// Display blog posts from your medium or dev.to account. (Optional)
		// source: "dev.to", // medium | dev.to
		// username: "arifszn",
		// limit: 3, // How many posts to display. Max is 10.
	},
	googleAnalytics: {
		// GA3 tracking id/GA4 tag id
		id: '', // UA-XXXXXXXXX-X | G-XXXXXXXXXX
	},
	themeConfig: {
		default: 'light',

		// Hides the switch in the navbar
		// Useful if you want to support a single color mode
		disableSwitch: false,

		// Should we use the prefers-color-scheme media-query,
		// using user system preferences, instead of the hardcoded default
		respectPrefersColorScheme: true,

		// Available themes. To remove any theme, exclude from here.
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
		],
	},
};
