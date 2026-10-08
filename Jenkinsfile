pipeline {
    agent any

    tools {
        nodejs 'NodeJS-26'
    }

    stages {

        stage('Environment') {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Tests') {
            steps {
                sh 'npm run test:ci'
            }

            post {
                always {
                    junit testResults: 'reports/junit/junit.xml',
                          allowEmptyResults: true
                }
            }
        }
    }
}
