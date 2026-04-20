pipeline {
    agent {
        docker {
            image 'node:lts-alpine' 
            // args '-p 3000:3000' Commented out as we are not running the application in this pipeline, just building it. 
        }
    }
    environment {
        CI = 'true'
        npm_config_cache = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm ci --no-audit --no-fund --prefer-offline'
            }
        }
        stage("Test") {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}