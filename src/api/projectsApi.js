class ProjectsApi {
	getProjects() {
		const projects = [
			{
				id: '1A23bc45DE690',
				name: 'NBA Stats',
				image: '/static/nba_stats_app.png',
				description:
					'As a huge NBA & analytics fan, this website is a clone of the NBA stats website where you can view live scores and stats of your favorite teams and players.',
				tech: ['react', 'balldontlie.io API', 'material-ui', 'strapi'],
				demo: 'https://www.youtube.com/watch?v=WXA3CnwTGfc',
				github: 'https://github.com/MaryAnnN28/NBA-Stats-API',
			},
			{
				id: '1A23bc45DE691',
				name: 'NavCRM',
				image: '/static/navcrm.jpeg',
				description:
					'Data visualization dashboard that helps users organize their customers and tasks in a centralized hub. Add, edit, delete, & sort, while getting an insightful look at your customer data.',
				tech: ['react', 'ruby-on-rails', 'oauth2', 'chart.js', 'chakra-ui'],
				demo: 'https://www.youtube.com/watch?v=WXA3CnwTGfc',
				github: 'https://github.com/MaryAnnN28/NavCRM-Frontend',
			},
			{
				id: '1A23bc45DE692',
				name: 'Planet Warrior',
				image: '/static/planetwarrior.png',
				description:
					'Planet Warrior, helps inspire individuals in making the planet a cleaner and better place to live, by using a Google map feature to find environmentally-friendly tasks within the community. As you complete a task, you earn points and badges.',
				tech: ['react', 'ruby-on-rails', 'jwt-auth', 'google map api'],
				demo: 'https://www.youtube.com/watch?v=MzysofEpV-k',
				github: 'https://github.com/winstonchen-code/Planet-Warriors',
			},
			{
				id: '1A23bc45DE693',
				name: 'BiteBoard',
				image: '/static/biteboard.jpeg',
				description:
					'BiteBoard allows users to store recipes all in one place. Ability to sort or filter by category, difficulty, rating, & ingredients. Add, view and edit, as well as rate recipes.',
				tech: ['javascript', 'ruby-on-rails', 'html', 'css', 'chakra-ui'],
				demo: 'https://www.youtube.com/watch?v=kjVjFT0aZMI&feature=youtu.be',
				github: 'https://github.com/MaryAnnN28/BiteBoard-Frontend',
			},
			{
				id: '1A23bc45DE694',
				name: 'Golf Live',
				image: '/static/golflive.jpeg',
				description:
					'BiteBoard allows users to store recipes all in one place. Ability to sort or filter by category, difficulty, rating, & ingredients. Add, view and edit, as well as rate recipes.',
				tech: ['ruby', 'ruby-on-rails', 'jwt-auth', 'bootstrap'],
				demo: 'https://www.youtube.com/watch?v=SQm-LHsoaX8',
				github: 'https://github.com/rhago001/Top-Golf',
			},
		]
		return Promise.resolve(projects)
	}
}

export const projectsApi = new ProjectsApi()
