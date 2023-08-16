const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000/',
       options : {
	    'sonar.projectDescription': 'node-jenkins-main-project',
	    'sonar.projectName': 'node-jenkins-main',
	    'sonar.projectKey':'node-jenkins-main',
	    'sonar.login': 'squ_0d7d0736811f63df16408283e8cfd3695fdffb69',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
