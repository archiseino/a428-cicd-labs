pipeline {
    agent {
        docker {
            image 'node:lts-alpine' 
            // args '-p 3000:3000' 3000 it seems it this port being used by docker and wsl?
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