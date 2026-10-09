pipeline {
    agent any

    tools {
        nodejs 'NodeJS-26'
    }

    stages {
        stage('Environment') {
            steps {
                sh 'node --version'
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
                    junit(
                        testResults: 'reports/junit/junit.xml',
                        allowEmptyResults: true
                    )
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Package Artifact') {
            steps {
                sh '''
                    rm -rf artifacts
                    mkdir -p artifacts

                    SHORT_SHA=$(git rev-parse --short HEAD)

                    tar -czf "artifacts/node-demo-${BUILD_NUMBER}-${SHORT_SHA}.tar.gz" \
                        dist package.json package-lock.json
                '''

                archiveArtifacts(
                    artifacts: 'artifacts/*.tar.gz',
                    fingerprint: true
                )
            }
        }
    }

    post {
        success {
            echo 'PIPELINE SUCCESSFUL!'
        }

        failure {
            echo 'PIPELINE FAILED. Check the Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}

         
