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

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
