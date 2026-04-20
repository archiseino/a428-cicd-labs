node {
    docker.image('node:lts-alpine').inside {
        stage('Build') {
            echo 'Installing dependencies'
            sh 'npm install'
        }

        stage('Test') {
            echo 'Running tests'
            sh './jenkins/scripts/test.sh'
        }
    }
}