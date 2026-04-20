pipeline {
    agent {
        docker {
            image 'node:lts-alpine' 
            // args '-p 3000:3000' Commented out as we are not running the application in this pipeline, just building it. 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage("Test") {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}