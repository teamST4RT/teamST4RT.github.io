var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
		repo: 'https://github.com/teamST4RT/teamST4RT.github.io.git',
        user: {
            name: 'snwox', // update to use your name
            email: 'seonu64@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
